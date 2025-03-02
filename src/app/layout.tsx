import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";



export const metadata: Metadata = {
  title: "Mon église et moi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {/*<CardSlider /> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
