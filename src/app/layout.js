import { Inter } from "next/font/google";
import "./globals.css";
import { UIProvider } from "../providers/UIProvider";
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mistevia",
  description: "A Culinary Symphony of Healthy and Sugar-Free Delights",
  icons: {
    icon: [
      {
        url: "/assets/images/favicon.ico",
      },
    ],
  },
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
