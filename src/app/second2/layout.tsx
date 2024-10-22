import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "../bootstrapclinet";
import "../globals.css";
import { Inter } from "next/font/google";
import styles from "./second2.module.scss";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Second Assignment part2",
  description: "Second Assignment part2 next app",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
