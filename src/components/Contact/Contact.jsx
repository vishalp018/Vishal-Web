import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

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
        () => toast.error("Failed to send message. Please try again.", { theme: "dark" })
      );
  };

  const inputClass =
    "w-full p-3.5 rounded-xl bg-dark/80 text-slate-100 border border-slate-700/60 focus:outline-none focus:border-cyan-500/60 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all placeholder:text-slate-500";

  return (
    <section id="contact" className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <ToastContainer />

      <AnimatedSection className="w-full">
        <SectionHeading
          title="Contact"
          subtitle="Open to SDE, Full-Stack, and SDET opportunities — let's connect!"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="w-full max-w-lg">
        <motion.div className="glass-card p-8 border-cyan-500/20" whileHover={{ borderColor: "rgba(6,182,212,0.35)" }}>
          <h3 className="text-xl font-bold gradient-text text-center mb-6">Send a Message</h3>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            {[
              { name: "user_name", type: "text", placeholder: "Your Name" },
              { name: "user_email", type: "email", placeholder: "Your Email" },
              { name: "subject", type: "text", placeholder: "Subject" },
            ].map((field, i) => (
              <motion.input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                className={inputClass}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              />
            ))}
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className={`${inputClass} resize-none`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
            />
            <motion.button
              type="submit"
              className="btn-primary w-full py-3.5 rounded-xl"
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
