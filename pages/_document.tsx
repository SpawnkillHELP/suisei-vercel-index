import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../config/site.json'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
        <meta property="og:url" content="https://archive.suisei.cc/" />
          <meta property="og:title" content="Suisei Archive | Treasure every moment" />
          <meta property="og:image" content="https://img.suisei.cc/icon/star.png" />
          <meta name="description" content="he archiving site of Hoshimachi Suisei's YouTube stream and videos. This is a personal project, DO NOT DISTRIBUTE." />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="The archiving site of Hoshimachi Suisei's YouTube stream and videos. This is a personal project, DO NOT DISTRIBUTE." />
          <meta name="twitter:title" content="Suisei Archive | Treasure every moment" />
          <meta name="twitter:image" content="https://img.suisei.cc/icon/star.png" />
          <meta name="theme-color" content="#d072a5" />
          <link rel="apple-touch-icon" href="https://img.suisei.cc/icon/star.png" sizes="192x192" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="/favicon.ico" />
          <script async defer data-website-id="b7497845-cde5-47aa-a5f2-aec2ea8b74f3" src="https://analytics.suisei.cc/umami.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
