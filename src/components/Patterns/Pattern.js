import React from "react";

const Pattern = ({ children, pattern }) => {
  const s = {
    backgroundImage: `url(${pattern})`,
  };

  return (
    <div style={s}>
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default Pattern;
