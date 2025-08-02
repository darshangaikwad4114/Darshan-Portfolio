import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Heart, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/darshangaikwad4114",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/darshan-gaikwad/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-600",
    },
    {
      name: "X",
      href: "https://x.com/Darshan4811421",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/darshan_4114_/",
      icon: <Instagram className="w-5 h-5" />,
      color: "hover:text-pink-600",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-indigo-950/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 opacity-10" />
      <div className="absolute top-0 left-0 w-60 h-60 bg-purple-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Right side - Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm group`}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                aria-label={social.name}
              >
                <div className="group-hover:scale-105 transition-transform duration-300">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 mt-6 flex justify-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            © {currentYear} Darshan Gaikwad. Developer in India, Pune{" "}
            <Heart className="w-4 h-4 text-red-500 mx-1" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
