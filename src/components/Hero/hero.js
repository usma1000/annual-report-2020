import React from "react";
import CanvasMesh from "../3D/CanvasMesh";
import { useSpring, animated } from "react-spring";
import styles from "./hero.module.css";
import img from "./cover.jpg";

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
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="students walking" />
      </div>
      {mesh && <CanvasMesh />}
    </div>
  );
};
