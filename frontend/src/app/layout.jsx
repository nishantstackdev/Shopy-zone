import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvidor from "@/redux/ReduxProvidor";
import 'aos/dist/aos.css';
import AOSInit from "@/components/website/AOSinit";
import NextTopLoader from "nextjs-toploader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Fullstack App",
};

export default async function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f3f4f6]`}>
        <ReduxProvidor>
          <AOSInit />
          <NextTopLoader
            color="#000"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
          />
          {children}
        </ReduxProvidor>
      </body>
    </html>
  );
}