import React, { useEffect, useRef, useState } from 'react';

/**
 * Componente Reutilizável de Scroll Reveal com GPU Acceleration (transform e opacity)
 * Suporta direcões ('up', 'down', 'left', 'right', 'zoom'), atraso em cascata (delay)
 * e atende a preferências de acessibilidade (prefers-reduced-motion).
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Acessibilidade: se o usuário prefere movimento reduzido, exibe imediatamente sem animação
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // Se IntersectionObserver não estiver disponível por algum motivo, exibe diretamente
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Transforma o estado inicial conforme a direção configurada
  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'down':
        return 'translate3d(0, -28px, 0) scale(1)';
      case 'left':
        return 'translate3d(-28px, 0, 0) scale(1)';
      case 'right':
        return 'translate3d(28px, 0, 0) scale(1)';
      case 'zoom':
        return 'translate3d(0, 0, 0) scale(0.96)';
      case 'up':
      default:
        return 'translate3d(0, 28px, 0) scale(1)';
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform'
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
