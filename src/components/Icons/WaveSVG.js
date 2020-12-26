import React from "react";
import styles from "./icon.module.css";

const WaveSVG = ({ hovered }) => {
  const motion = hovered ? styles.waveHovered : styles.waveUnhovered;
  const color = hovered ? "#FFFFFF" : "#FFFFFFAA";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
      className={styles.waveContainer}
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g stroke={color} strokeWidth="0.75">
        <use xlinkHref="#gentle-wave" x="48" y="0" className={motion}></use>
      </g>
    </svg>
  );
};

export default WaveSVG;
