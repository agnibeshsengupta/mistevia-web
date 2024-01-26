import { Inter } from "next/font/google";
import "./globals.css";
import { UIProvider } from "../providers/UIProvider";
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mistevia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <UIProvider>
          <div id="container">
            <Header />
            {children}
            <Footer />
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
