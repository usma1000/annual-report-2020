import React, { useState } from "react";
import { Link } from "gatsby";
import Icon from "../Icons/Icon";
import styles from "./post-section.module.css";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import WaveSVG from "../Icons/WaveSVG";

const PostSection = ({ headline, children, icon, url, linkText }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 10,
    (x - window.innerWidth / 6) / 10,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const fade = useSpring({ opacity: inView ? 1 : 0 });
  // const titleTop = () => (window.innerWidth <= 768 ? "0" : "-2.5em");
  const upFade = useSpring({
    top: inView ? "-2.5em" : "-1.5em",
    opacity: inView ? 1 : 0,
  });

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <div ref={ref} className={styles.flex}>
      <animated.div style={fade} className={styles.icon}>
        <WaveSVG hovered={hovered} key={hovered} />
        <animated.div
          onMouseEnter={toggleHover}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => {
            set({ xys: [0, 0, 1] });
            toggleHover();
          }}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <Link to={url}>
            <Icon icon={icon} alt={headline} />
          </Link>
        </animated.div>
      </animated.div>
      <div className={styles.textBox}>
        <animated.h2 style={upFade} className={styles.headline}>
          {headline}
        </animated.h2>
        <div>{children}</div>
        <Link
          to={url}
          className={styles.button}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default PostSection;
