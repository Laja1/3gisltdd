"use client"
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { Inter, Raleway } from 'next/font/google';
import '~/assets/css/bootstrap.min.css';
import '~/assets/css/app.css';
import '~/assets/css/main.css';
import '~/assets/css/react-adjustment.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const generateMetadata = (path) => {
  const defaultMetadata = {
    title: '3GIS',
    alternates: {
      canonical: '',
      languages: {
        'en-US': '/en-US',
      },
    },
    description:
      'With years of experience in business and finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with technology that enable growth and development for the organization.',
    icons: {
      icon: [{ url: '/favicon.ico' }],
      apple: [{ url: '/favicon.ico' }],
      shortcut: [{ url: '/favicon.ico' }],
    },
    authors: [{ name: 'Samuel Adelaja', url: 'https://newlajaportfolio.vercel.app/' }],
    openGraph: {
      type: 'website',
      title: '3G Integrated Services Limited',
      description:
        'With years of experience in business and finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with technology that enable growth and development for the organization.',
      images: [{ url: 'https://3g-mauve.vercel.app/images/logo/logo.png' }],
      url: 'https://3gisltd.com',
      siteName: '3GISLTD',
      robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    },
  };

  // Adjust metadata based on the route path
  if (path === '/about') {
    return {
      ...defaultMetadata,
      title: 'About Us - 3GIS',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'About Us - 3G Integrated Services Limited',
        url: 'https://3gisltd.com/about',
      },
    };
  } else if (path === '/partners') {
    return {
      ...defaultMetadata,
      title: 'Our Partners - 3GIS',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'Our Partners - 3G Integrated Services Limited',
        url: 'https://3gisltd.com/partners',
      },
    };
  }
  else if (path === '/projects') {
    return {
      ...defaultMetadata,
      title: 'Our Projects - 3GIS',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'Our Partners - 3G Integrated Services Limited',
        url: 'https://3gisltd.com/projects',
      },
    };
  }
  // Add more conditions as needed

  return defaultMetadata;
};

export default function RootLayout({ children }) {
  const router = useRouter();
  const metadata = generateMetadata(router.pathname);

  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {metadata.icons.icon.map((icon) => (
          <link key={icon.url} rel="icon" href={icon.url} />
        ))}
        {metadata.icons.apple.map((icon) => (
          <link key={icon.url} rel="apple-touch-icon" href={icon.url} />
        ))}
        {metadata.icons.shortcut.map((icon) => (
          <link key={icon.url} rel="shortcut icon" href={icon.url} />
        ))}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
