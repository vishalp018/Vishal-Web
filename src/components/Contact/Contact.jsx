import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedSection from "../AnimatedSection";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i19l0pl", "template_nac8vzp", form.current, "55uPDUN-Pkpu6ZyaG")
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully!", { theme: "dark" });
        },
        () => {
          toast.error("Failed to send message. Please try again.", { theme: "dark" });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <AnimatedSection className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Contact</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg font-medium">
          Open to SDE, Full-Stack, and SDET opportunities — let's connect!
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="w-full max-w-lg">
        <motion.div
          className="bg-gray-900/70 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-md"
          whileHover={{ borderColor: "rgba(168, 85, 247, 0.4)" }}
        >
          <h3 className="text-xl font-semibold text-white text-center mb-6">
            Send a Message
          </h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            {["user_name", "user_email", "subject"].map((field, i) => (
              <motion.input
                key={field}
                type={field === "user_email" ? "email" : "text"}
                name={field}
                placeholder={field === "user_name" ? "Your Name" : field === "user_email" ? "Your Email" : "Subject"}
                required
                className="w-full p-3.5 rounded-xl bg-[#0d081f] text-white border border-gray-700/50 focus:outline-none focus:border-purple-500 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-3.5 rounded-xl bg-[#0d081f] text-white border border-gray-700/50 focus:outline-none focus:border-purple-500 transition-colors resize-none"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            />
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3.5 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
