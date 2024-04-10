import { Inter } from "next/font/google";
import Script from "next/script";
import Document from "./pages/_document";
import Footer from "./shared/Footer";

import "bootstrap/dist/css/bootstrap.css";
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real State",
  description: "Real State Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Real Estate</title>
        {/* <!-- fontawesome --> */}
        <Script
          src="https://kit.fontawesome.com/dac5c0dc0b.js"
        ></Script>
        {/* <!-- lato font --> */}
        <Document />
        {/* <!-- jquery popper bootstrap js --> */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></Script>
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script>
      </head>
      <body className={inter.className}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
