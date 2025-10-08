import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">© {new Date().getFullYear()} Parth Khambhadiya</h2>
          <p className="text-sm text-gray-400">
            Built with{' '}
            <span className="font-semibold text-blue-400">Next.js</span> &{' '}
            <span className="font-semibold text-indigo-400">Tailwind CSS</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/CodeBy-ParthKhambhadiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/parth-khambhadiya-214563224"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:parthkhambhadiya2310@gmail.com"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        <p>
          Designed & Developed by <span className="font-semibold text-blue-400">Parth</span> | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
