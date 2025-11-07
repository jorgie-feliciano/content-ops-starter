import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />

          {/* HelloSkip bot */}
          <script
            src="https://helloskip.com/agent.js"
            data-agent-id="vMiHe28wUPfhOgXDi3Me"
            async
          ></script>
        </body>
      </Html>
    );
  }
}
