import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import AnimatedNumber from "../components/AnimatedNumber";
const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden mb-10"
        id="About"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-center tracking-tight">
          unsere{" "}
          <span className="text-gray-400 font-semibold decoration-2">
            {" "}
            Marke
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">
          Goldstack Construction steht für Qualität, Zuverlässigkeit und moderne
          Architektur – seit über einem Jahrzehnt in attraktiven Lagen aktiv.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 mt-10">
          <img
            src={assets.brand_img}
            alt=""
            className="w-full sm:w-1/2 max-w-lg"
            style={{
              clipPath: "polygon(100% 0%, 100% 30%, 100% 100%, 0% 80%, 0% 30%)",
            }}
          />
          <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800">
                  <AnimatedNumber value={14} />
                </p>
                <p>Jahre Erfahrung</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">
                  <AnimatedNumber value={15} />
                </p>
                <p>Abgeschlossene Projekte</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">
                  <AnimatedNumber value={26} />
                </p>
                <p>Gelieferte Mindestfläche (m²)</p>
              </div>
              <div>
                <p className="text-4xl font-medium text-gray-800">
                  <AnimatedNumber value={25} />
                </p>
                <p>Laufende Projekte</p>
              </div>
            </div>
            <p className="my-10 max-w-lg">
              Unsere Projekte zeichnen sich durch durchdachte Planung,
              nachhaltige Materialien und eine enge Zusammenarbeit mit unseren
              Kunden aus. Ob stilvolle Einfamilienhäuser oder moderne
              Wohnanlagen – wir setzen Ihre Vision professionell um. Dabei legen
              wir großen Wert auf höchste Bauqualität, Termintreue und
              transparente Kommunikation. Jedes Projekt ist für uns einzigartig
              – wir entwickeln maßgeschneiderte Lösungen, die perfekt zu den
              Bedürfnissen unserer Kunden passen. Vertrauen, Qualität und
              Innovation – dafür steht Goldstack Construction.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
