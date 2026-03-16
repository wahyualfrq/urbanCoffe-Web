import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'whatsapp';
  className?: string;
  onClick?: () => void;
}

export const Button = ({ href, children, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-dark-brown text-cream hover:bg-opacity-90",
    outline: "border-2 border-dark-brown text-dark-brown hover:bg-dark-brown hover:text-cream",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-lg hover:shadow-xl",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${combinedClassName} relative overflow-hidden`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {(variant === 'primary' || variant === 'whatsapp') && (
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
        )}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button className={`${combinedClassName} relative overflow-hidden`} onClick={onClick}>
      {(variant === 'primary' || variant === 'whatsapp') && (
          <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
        )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
