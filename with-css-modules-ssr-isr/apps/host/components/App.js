import React from "react";
import dynamic from "next/dynamic";

import styles from "./App.module.css";
import Boundary from "../components/Boundary";

const Header = dynamic(() => import("shell/Header"));
const Nav = dynamic(() => import("shell/Nav"));

const HeaderFallback = dynamic(() =>
  import("@with-css-modules-ssr-isr/app-shell/build/Header")
);
const NavFallback = dynamic(() =>
  import("@with-css-modules-ssr-isr/app-shell/build/Nav")
);

const HeaderWrapper = (props) => (
  <Boundary
    Component={Header}
    FallbackComponent={HeaderFallback}
    fallbackOpts={{ bgColor: "gainsboro" }}
    {...props}
  />
);

const NavWrapper = (props) => (
  <Boundary
    Component={Nav}
    FallbackComponent={NavFallback}
    fallbackOpts={{ bgColor: "lavender" }}
    {...props}
  />
);

export default function App({ children }) {
  return (
    <main className={styles.appContainer}>
      <HeaderWrapper>
        <NavWrapper />
      </HeaderWrapper>
      {children}
    </main>
  );
}
