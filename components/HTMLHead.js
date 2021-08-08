/* eslint-disable max-len */
import Head from 'next/head';

const DEFAULT_DESCRIPTION = 'Reactive Labs Ltd';

export default function HTMLHead({ title, description }) {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || DEFAULT_DESCRIPTION} />
      <meta property="og:image" content="http://trydo.rainbowit.net/assets/images/about/about-1.jpg" />
      <meta property="og:url" content="https://reactivelabs.ltd/" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
