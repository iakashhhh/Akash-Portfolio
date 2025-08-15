import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const res = await fetch("https://formspree.io/f/mwpqzaao", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      form.reset();
    } else {
      setStatus("❌ Oops! Something went wrong.");
    }

    // Hide message after 4 seconds
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section id="contact" className="bg-transparent text-white py-20 px-4">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Contact Info */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-6 text-lg text-gray-300">
            Have a project in mind? Let’s work together! You can reach me via
            email or connect through my socials.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:i.akashhhh@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
             <FaEnvelope />  i.akashhhh@gmail.com  
            </a>
            <a
              href="https://www.linkedin.com/in/akash-sharma-202269246"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/iakashhhh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded bg-black/50 border border-white/20 text-green-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 caret-purple-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded bg-black/50 border border-white/20 text-green-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 caret-purple-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded bg-black/50 border border-white/20 text-green-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 caret-purple-400"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition"
          >
            Send Message
          </button>
          {status && (
            <motion.p
              className={`mt-2 text-sm ${
                status.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.5 }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
