import {
  Genos,
  Plus_Jakarta_Sans,
  DM_Sans,
  Inter,
  Inter_Tight,
} from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Scroll from "@/components/Scroll";
import Footer from "@/components/Footer";

const genos = Genos({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={genos.className}> */}
      {/* <body className={plusJakarta.className}> */}
      {/* <body className={dmSans.className}> */}
      {/* <body className={inter.className}> */}
      <body className={interTight.className}>
        <Navbar />
        <Scroll />
        {children}
        <Footer />
      </body>
    </html >
  );
}
