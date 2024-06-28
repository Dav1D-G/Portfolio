import { Inter } from "next/font/google";
import "@/assets/styles/index.scss"
const inter = Inter({ subsets: ["latin"] });
import { Background } from "@/components/particles";

export const metadata = {
  title: "Portfolio",
  description: "Generated by Dawid Głowacz",
};

export default function RootLayout({children}) {


  return (
    <html lang="en">
      <body className={inter.className}>
          <Background />
          {children}
        </body>
    </html>
  );
}