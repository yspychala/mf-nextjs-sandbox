import React from "react";
import Title from "./Title";
import styles from "./Header.module.css";

interface Props {
  children: React.ReactNode;
  fallbackOpts?: {
    bgColor: string;
  };
}

function Header({ children, fallbackOpts }: Props) {
  return (
    <div
      className={styles.container}
      style={fallbackOpts?.bgColor ? { background: fallbackOpts.bgColor } : {}}
    >
      <Title>header {fallbackOpts?.bgColor && "(fallback)"}</Title>
      {children}
    </div>
  );
}

export default Header;
