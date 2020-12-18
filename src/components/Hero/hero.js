import React from "react";
import CanvasMesh from "../3D/CanvasMesh";
import { useSpring, animated } from "react-spring";
import styles from "./hero.module.css";

export default ({ children, mesh }) => {
  const lineHeight = useSpring({
    lineHeight: 1.65,
    from: { lineHeight: 0.5 },
  });
  return (
    <div className={styles.hero}>
      <animated.h1 style={lineHeight} className={styles.title}>
        {children}
      </animated.h1>
      {mesh && <CanvasMesh />}
    </div>
  );
};
