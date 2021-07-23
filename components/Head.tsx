import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    {/* Font */}
    <link
      rel="preload"
      href="/fonts/basement-grotesqueRegular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />

    {/* Title */}
    <title>Basement Supply</title>
    <meta name="og:title" content="Basement Supply" />

    {/* Description */}
    <meta
      name="description"
      content="Basement Supply is a store when you will find the best products"
    />
    <meta
      name="og:description"
      content="Basement Supply is a store when you will find the best products"
    />

    {/* Images */}
    <meta name="twitter:image" content="/static/og.jpg" />
    <meta property="og:image" content="/static/og.jpg" />

    {/* URL */}
    <meta property="og:url" content="https://basement-supply.vercel.app" />

    {/* General */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@basementstudio" />
    <meta name="apple-mobile-web-app-title" content="Basement" />
    <meta name="author" content="Basement" />
  </NextHead>
);

export default Head;
