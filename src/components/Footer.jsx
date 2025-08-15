import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-6 mt-12 w-full flex flex-col md:flex-row justify-between items-center px-6 border-t border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm">&copy; {new Date().getFullYear()} Akash Sharma. All rights reserved.</p>
      <div className="flex gap-4 mt-2 md:mt-0">
        <a
          href="https://github.com/iakashhhh"
          target="_blank"
          className="underline hover:text-gray-300"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/akash-sharma-202269246/"
          target="_blank"
          className="underline hover:text-gray-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:akash@example.com"
          className="underline hover:text-gray-300"
        >
          Email
        </a>
      </div>
    </motion.footer>
  );
}
