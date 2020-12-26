import React from "react";
import styles from "./stats.module.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Stats = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const count = useSpring({
    number: inView ? Number(children) : 0,
    from: { number: 0 },
  });
  return (
    <animated.div ref={ref} className={styles.number}>
      {count.number.interpolate((number) =>
        Math.floor(number).toLocaleString()
      )}
    </animated.div>
  );
};

export default Stats;
