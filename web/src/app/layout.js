import { Inter_Tight } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Scroll from "@/components/Scroll";
import Footer from "@/components/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default:
      "Helí Suárez – Freelance Colorist for Film, Commercials & Music Videos",
    template: "%s | Helí Suárez",
  },
  description:
    "Freelance colorist specializing in film, commercials and music videos. High-end color grading for international productions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>

      <body className={interTight.className}>
        <Navbar />
        <Scroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
