import React from "react";
import styles from "./Title.module.css";

interface Props {
  as?: React.ElementType;
  children: React.ReactNode;
}

export default function Title({ as = "h1", children }: Props) {
  const Component = as;
  return <Component className={styles.title}>{children}</Component>;
}
