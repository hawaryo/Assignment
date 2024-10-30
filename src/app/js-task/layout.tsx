
import "../globals.css";


import { ReactNode } from "react";


export const metadata = {
  title: "Javascript Task",
  description: "Javascript Task next app",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body >
        {children}
  
      </body>
    </html>
  );
}
