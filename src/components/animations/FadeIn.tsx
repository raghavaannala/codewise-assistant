
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
}

const FadeIn = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.4,
  className
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              
              switch (direction) {
                case 'up':
                  entry.target.classList.add('translate-y-0');
                  break;
                case 'down':
                  entry.target.classList.add('translate-y-0');
                  break;
                case 'left':
                  entry.target.classList.add('translate-x-0');
                  break;
                case 'right':
                  entry.target.classList.add('translate-x-0');
                  break;
                default:
                  break;
              }
            }, delay * 1000);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, direction]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      default: return '';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transition-all',
        getInitialTransform(),
        className
      )}
      style={{ transitionDuration: `${duration}s` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
