import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t-2 border-blue-900 flex bg-gray-900 py-4 text-center">
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-600 hover:text-gray-800" size={32} />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-600 hover:text-gray-800" size={32} />
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-600 hover:text-gray-800" size={32} />
        </a>
        <div className="mt-8">
            &copy; 2023 Your Website. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
