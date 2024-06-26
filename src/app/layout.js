import { Inter } from "next/font/google";
import "./globals.css";
import NavBar1 from "@/components/NavBar1";
import Prvider from "@/Redux/Prvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Prvider>
          <NavBar1 />
          {children}
        </Prvider>
      </body>
    </html>
  );
}
