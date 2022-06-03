import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

export default class _Document extends Document {
  static async getInitialProps(docContext) {
    const initialProps = await Document.getInitialProps(docContext);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
