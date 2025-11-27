import { Genos } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Scroll from "@/components/Scroll";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

const genos = Genos({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Helí Suárez",
  description: "Mi portfolio personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={genos.className}>
        <Navbar />
        {/* <Scroll /> */}
        <WhatsAppFloat />
        {children}
        <Footer />
      </body>
    </html>
  );
}
