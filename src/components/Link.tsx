import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type LinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

export const Link = ({ to, children, className = '' }: LinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-1 py-0.5 text-sm font-medium transition ${isActive
          ? 'text-blue-600'
          : 'text-gray-500 hover:text-gray-900'
        } ${className}`
      }
    >
      {children}
    </NavLink>
  );
};