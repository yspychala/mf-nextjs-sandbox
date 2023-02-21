import React from "react";
import App from "../components/App";
import styles from "./index.module.css";

function Index() {
  return (
    <App>
      <div className={styles.wrapper}>
        <h2>Welcome to the host application!</h2>
      </div>
    </App>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Index;
