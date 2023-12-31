import "./globals.scss";
import "./global.css";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense } from "react";
import Loading from "./loading";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import "@uppy/drag-drop/dist/style.min.css";
import "@uppy/progress-bar/dist/style.min.css";
import "@uppy/status-bar/dist/style.min.css";
import "@uppy/drop-target/dist/style.min.css";
import "@uppy/informer/dist/style.min.css";
import "@uppy/image-editor/dist/style.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loading>{children}</Loading>
      </body>
    </html>
  );
}
