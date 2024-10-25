import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
