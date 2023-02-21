import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { FlushedChunks, flushChunks } from "@module-federation/nextjs-mf/utils";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    try {
      const chunks = await flushChunks();

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        chunks,
      };
    } catch (e) {
      console.log("error while flushing chunks", e);
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex" />
          <FlushedChunks chunks={this.props.chunks} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
