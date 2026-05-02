import { Fjalla_One, Manrope, Noto_Sans } from "next/font/google";
import "./globals.css";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fjalla",
});

const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto",
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Fujifilm X-Half White",
  description:
    "Elegance meets performance. The highly anticipated X-Half White has arrived.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fjalla.variable} ${notoSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
