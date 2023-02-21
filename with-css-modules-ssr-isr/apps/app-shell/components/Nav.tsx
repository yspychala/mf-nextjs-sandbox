import React from "react";
import Title from "./Title";
import styles from "./Nav.module.css";

interface Props {
  fallbackOpts?: {
    bgColor: string;
  };
}

function Nav({ fallbackOpts }: Props) {
  return (
    <div
      className={styles.container}
      style={fallbackOpts?.bgColor ? { background: fallbackOpts.bgColor } : {}}
    >
      <Title as="h2">navigation {fallbackOpts?.bgColor && "(fallback)"}</Title>
    </div>
  );
}

export default Nav;
