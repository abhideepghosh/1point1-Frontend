import React from "react";
import styles from "./bubble.module.css";
const BubbleText = ({ text }) => {
  return (
    <h2 className=" lg:w-1/2 md:w-2/3 sm:w-7/8 absolute bottom-2.5 left-1/2 -translate-x-1/2 text-center lg:text-5xl font-thin text-indigo-300 md:text-5xl sm:text-5xl">
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
