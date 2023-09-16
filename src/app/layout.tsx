import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "&AND",
  description: "&AND SNS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
