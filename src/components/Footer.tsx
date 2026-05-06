import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-8 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 md:flex-row md:justify-between">
        <span className="text-sm font-semibold text-gray-900">TMDB Explorer</span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Viraj854"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-gray-400">{`© ${new Date().getFullYear()} · Built with React & Vite`}</p>
      </div>
    </footer>
  );
};