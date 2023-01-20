/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // host: `host@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
    messaging: `messaging@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    store: `store@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    // config.experiments = {
    //   topLevelAwait: true,
    // };

    config.module.rules.push({
      test: /\.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        presets: ["@babel/preset-react"],
      },
    });

    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Header": "./components/Header.tsx",
          "./myFn": "./myFunction.js",
        },
        remotes: remotes(options.isServer),
        shared: {
          "styled-components": {
            singleton: true,
          },
          redux: {
            singleton: true,
            requiredVersion: "4.2.0",
          },
          "next-redux-wrapper": {
            singleton: true,
            requiredVersion: "8.1.0",
          },
          "react-redux": {
            singleton: true,
            requiredVersion: "8.0.5",
          },
          // "shared-library": {
          //   import: "shared-library",
          //   requiredVersion: require("../shared-library/package.json").version,
          // },
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
