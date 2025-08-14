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
            className="w-full sm:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              className="w-24 h-24 rounded-full border-4 border-blue-500 mb-6 object-cover"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {testimonial.name}
            </h2>
            <p className="text-blue-600 font-medium mb-4 text-sm">
              {testimonial.title}
            </p>
            <div className="flex justify-center gap-1 text-yellow-400 mb-6">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic">
              &quot;{testimonial.text}&quot;
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
