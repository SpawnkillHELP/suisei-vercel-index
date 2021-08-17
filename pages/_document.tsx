import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:url" content="https://archive.suisei.cc/" />
          <meta property="og:title" content="Suisei Archive" />
          <meta property="og:image" content="https://img.suisei.cc/icon.png" />
          <meta name="description" content="Suisei YouTube Archive. Hosted on Vercel." />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="Suisei YouTube Archive. Hosted on Vercel. This is a personal project, DO NOT DISTRIBUTE." />
          <meta name="twitter:title" content="Suisei Archive" />
          <meta name="twitter:image" content="https://img.suisei.cc/icon.png" />
          <link rel="apple-touch-icon" href="/android-chrome-192x192.png" sizes="192x192" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-4Y425T5MB3"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag()'{'dataLayer.push(arguments);'}'
            gtag('js', new Date());

            gtag('config', 'G-4Y425T5MB3');
          </script>
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
