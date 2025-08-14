import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";
const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden mb-15"
      id="Testimonial"
    >
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-center tracking-tight">
        Das sagen unsere{" "}
        <span className=" text-gray-400 font-semibold decoration-2">
          glücklichen Bauherren
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto"></p>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[300px] shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
