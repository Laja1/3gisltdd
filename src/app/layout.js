
import { Inter, Raleway } from "next/font/google";
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/app.css";
import "~/assets/css/main.css";
import "~/assets/css/react-adjustment.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "3GIS",
  alternates: {
		canonical: "",
		languages: {
			"en-US": "/en-US",
			
		}
	},
  description:
    "With years of experience in business and finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with technology that enable growth and development for the organization.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon.ico" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  authors: [
		{ name: "Samuel Adelaja", url: "https://newlajaportfolio.vercel.app/"
},
	
	],
  openGraph: {
    type: "website",
    title: "3G Integrated Services Limited",
    description:
      "With years of experience in business and finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with technology that enable growth and development for the organization.",
      images: [{ url: "https://3g-mauve.vercel.app/images/logo/logo.png" }],
    url: "https://3gisltd.com",
    siteName: "3GISLTD",
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}