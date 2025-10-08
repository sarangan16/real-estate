import React from "react";
import { motion } from "framer-motion";
import { testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <div
      className="container mx-auto py-16 px-6 lg:px-32 w-full"
      id="Testimonial"
    >
      <h1 className="text-3xl sm:text-5xl text-gray-500 font-light mb-6 text-center tracking-tight">
        Das sagen unsere{" "}
        <span className="bg-blue-100 px-2 py-1 rounded-md text-gray-800">
          glücklichen Bauherren
        </span>
      </h1>

      <p className="text-gray-500 max-w-2xl text-center mb-12 mx-auto">
        Unsere Kunden vertrauen auf Goldstack Construction. Lesen Sie hier, wie
        wir ihre Traumprojekte umgesetzt haben.
      </p>

      <div className="flex justify-center items-start gap-12 flex-wrap lg:flex-nowrap pt-16">
        {testimonialsData.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className={`relative flex-1 min-w-[250px] max-w-[300px] p-6 rounded-3xl shadow-xl ${
              i % 2 === 0
                ? "bg-gradient-to-br from-blue-50/70 to-white/70"
                : "bg-gradient-to-tr from-blue-100/70 to-white/70 lg:mt-12"
            }`}
            style={{ marginTop: i % 2 === 0 ? "0" : "3rem" }}
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <img
                src={t.image}
                alt={t.alt || t.name}
                className="w-20 h-20 rounded-full border-2 border-blue-500 object-cover"
              />
            </div>

            <svg
              className="w-8 h-8 text-blue-200 absolute -top-2 left-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.17 6A5 5 0 0 0 2 11v7a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7a5 5 0 0 0-3.83-5zm12 0A5 5 0 0 0 14 11v7a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7a5 5 0 0 0-3.83-5z" />
            </svg>

            <p className="text-gray-700 italic text-center mt-6">{t.text}</p>

            <div className="mt-6 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{t.name}</h2>
              <p className="text-blue-600 font-medium text-sm">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
