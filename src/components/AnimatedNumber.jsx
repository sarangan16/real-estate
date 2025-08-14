import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ value, duration = 1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40% 0px -40% 0px" });
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });

      return controls.stop;
    }
  }, [isInView, motionValue, value, duration]);

  return <motion.span ref={ref}>{displayValue}+</motion.span>;
};

export default AnimatedNumber;
