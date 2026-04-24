import { FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-sm text-gray-400">
        <p>Built with React, Vite, Tailwind and React Router</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Viraj854"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaGithub size={18} />
            Github
          </a>
        </div>
      </nav>
    </footer>
  );
};
