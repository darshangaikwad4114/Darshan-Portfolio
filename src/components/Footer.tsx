import { Github, Linkedin, ArrowUp } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/darshangaikwad4114"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-ring"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/darshan-gaikwad/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus-ring"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-center">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {currentYear} Darshan Gaikwad. All rights reserved.
          </p>
        </div>
      </div>

      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="absolute right-6 bottom-6 p-2 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 focus-ring cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </ScrollLink>
    </footer>
  );
};

export default Footer;
