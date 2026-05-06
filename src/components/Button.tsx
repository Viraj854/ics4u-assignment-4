import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled,
  className = '',
}: ButtonProps) => {
  const base =
    'cursor-pointer transition-all duration-200 font-medium text-sm rounded-full px-5 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    ghost: 'text-gray-600 hover:bg-gray-100',
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};