import { Inter, Raleway } from "next/font/google";
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/app.css";
import "~/assets/css/main.css";
import "~/assets/css/react-adjustment.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "3GIS",
  description:
    "With years of experience in business and finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with technology that enable growth and development for the organization.",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/favicon.ico"],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    title: "3GIS",
    description:
      "With years of experience in business and finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with technology that enable growth and development for the organization.",
    images: "/images/logo/logo.png",
    url: "3gisltd.com",
    site_name: "3GISLTD",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon[0]} />
        <link rel="apple-touch-icon" href={metadata.icons.apple[0]} />
        <link rel="shortcut icon" href={metadata.icons.shortcut[0]} />
      </head>
      <body className={`${inter.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}
