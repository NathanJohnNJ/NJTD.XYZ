import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";

const Parallax =()=> {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const y = useParallax(scrollYProgress, 300);
  const { scrollProgress } = useScroll();
  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
    });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <section>
          <div ref={ref}>
            <h1>This is section {image}</h1>
          </div>
          <motion.h2 style={{ y }}>{image}</motion.h2>
        </section>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

export default Parallax;
