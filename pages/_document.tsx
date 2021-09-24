import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../config/site.json'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
        <meta property="og:url" content="https://archive.suisei.cc/" />
          <meta property="og:title" content="Suisei Archive | Treasure every moment" />
          <meta property="og:image" content="/android-chrome-192x192.png" />
          <meta name="description" content="he archiving site of Hoshimachi Suisei's YouTube stream and videos. This is a personal project, DO NOT DISTRIBUTE." />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="The archiving site of Hoshimachi Suisei's YouTube stream and videos. This is a personal project, DO NOT DISTRIBUTE." />
          <meta name="twitter:title" content="Suisei Archive | Treasure every moment" />
          <meta name="twitter:image" content="/android-chrome-192x192.png" />
          <meta name="theme-color" content="#d072a5" />
          <link rel="apple-touch-icon" href="/android-chrome-192x192.png" sizes="192x192" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="icon" href="/favicon.ico" />
          <script async defer data-website-id="d106eaa9-53d6-4ffb-a7ac-52a6d85ca7f7" src="https://insight.suisei.cc/umami.js" />
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
