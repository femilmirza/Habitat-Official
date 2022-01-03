import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="./logo.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron&family=Poppins&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="description"
            content="A vannila typescript app that helps newbies learn typescript faster"
          />
          <link rel="apple-touch-icon" href="./logo.png" />
          <link rel="manifest" href="./manifest.json" />
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
