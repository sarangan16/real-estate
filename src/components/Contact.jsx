import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "74be6621-bf98-4fb5-a3f2-70fe2e0373ca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Your Message has been sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);

      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 overflow-hidden"
      id="Contact"
    >
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-center tracking-tight">
        Kontaktieren Sie{" "}
        <span className="text-gray-400 font-semibold decoration-2">uns</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Wir freuen uns darauf, von Ihnen zu hören! Ob Fragen, Beratung oder
        Projektanfragen – unser Team ist jederzeit für Sie da.
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
