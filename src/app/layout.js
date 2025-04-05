import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devou - Design Develop Deploy",
  description: "Devou specializes in transforming ideas into digital excellence. We offer cutting-edge web development, design, and digital solutions tailored to your needs.",
  keywords: [
    "Devou",
    "web development",
    "digital solutions",
    "web design",
    "software development",
    "UI/UX design",
    "custom websites",
    "digital transformation",
    "technology solutions",
    "modern web applications",
    "web solutions",
    "website company",

  ],
  author: "Devou Team",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Devou - Design Develop Deploy</title>
        
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
          <meta property="og:title" content="Devou - Design Develop Deploy" />
        <meta property="og:description" content="We offer cutting-edge web development, design, and digital solutions." />
        <meta property="og:url" content="https://www.devou.in/" />
        <meta property="og:image" content="https://www.devou.in/favicon.ico" />

        </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
