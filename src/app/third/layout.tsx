import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "../bootstrapclinet";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";

import "./global.scss";

export const metadata: Metadata = {
  title: "third assignment",
  description: "Live demo of third assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BootstrapClient />
      <body>{children}</body>
    </html>
  );
}
