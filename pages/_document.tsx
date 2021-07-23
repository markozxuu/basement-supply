import Document, { Html, Main, Head, NextScript } from 'next/document';

class MyDocuemnt extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocuemnt;
