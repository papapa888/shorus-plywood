import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Whatsup from "@/components/Whatsup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shorus Plywood",
  description: "plywood and timber product manufacturer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Whatsup  />
        <Footer />
      </body>
    </html>
  );
}
