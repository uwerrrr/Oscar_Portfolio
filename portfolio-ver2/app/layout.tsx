import type { Metadata } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./sections/Header";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const openSans = Open_Sans({ subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oscar Nguyen | Personal Portfolio",
  description:
    "Master of Data Science @ Macquarie University | ReactJS Full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-iron-300 text-txt_primary-500 relative h-[5000px]`}
      >
        <div className="bg-[#fdcfa1] absolute top-[-8rem] -z-10 right-[-5vw] h-[32rem] w-[48vw] rounded-full  sm:w-[55vw] blur-[5rem] sm:blur-[7rem] md:blur-[10rem] "></div>
        <div className="bg-[#9bc6ed] absolute top-[-3rem] -z-10 left-[-9vw] h-[32rem] w-[70vw] rounded-full  sm:w-[68.75vw] sm:left-[-16vw]  blur-[5rem] sm:blur-[7rem] md:blur-[10rem] "></div>
        <Header />

        {children}
      </body>
    </html>
  );
}
