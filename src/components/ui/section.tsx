import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, className, fullWidth = false, ...props }) => {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)} {...props}>
      <div className={cn('container mx-auto px-4 md:px-6', fullWidth ? 'max-w-none px-0' : '')}>
        {children}
      </div>
    </section>
  );
};

export default Section;
