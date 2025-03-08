
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassMorphCardProps {
  children: ReactNode;
  className?: string;
  isDark?: boolean;
  hoverEffect?: boolean;
}

const GlassMorphCard = ({
  children,
  className,
  isDark = false,
  hoverEffect = false
}: GlassMorphCardProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        isDark ? 'glass-dark' : 'glass',
        hoverEffect && 'hover:shadow-lg hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassMorphCard;
