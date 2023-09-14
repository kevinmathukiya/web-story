import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
