import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { LogoIcon } from "@/Assets/Icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-commerce",
  description: "assesment of Appscript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="./favicon.ico"
          type="image/png"
          sizes="32x32"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
