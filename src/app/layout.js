import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ContactSection from "./contact/page";
import Home from "./page";
import { Krona_One, Syne } from 'next/font/google';


const kronaOne = Krona_One({ subsets: ['latin'], weight: '400' });
const syne = Syne({ subsets: ['latin'], weight: ['400', '700'] });
const roboto = Roboto({subsets:['latin'],weight:['400','700']});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devou - Design.Develop.Deploy",
  description:
    "Devou offers expert web development, UI/UX design, and digital solutions across India—empowering businesses with responsive websites and modern online experiences.",
  keywords: [
    "Devou",
    "web development",
    "development website",
    "website development",
    "hosting services",
    "web host",
    "web hosting",
    "website hosting",
    "website server",
    "web",
    "dev",
    "web dev",
    "web developer",
    "website developers",
    "google dev",
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
    // Newly added keywords with search volume relevance
    "web design kerala",
    "website design kerala",
    "kerala web design company",
    "web development company in kerala",
    "web development company kerala",
    "website development company in kerala",
    "best web design company in kerala",
    "best web design company kerala",
    "best web designing company kerala",
    "best web development company in kerala",
    "top web designing companies in kerala",
    "web design in ernakulam",
    "website design in ernakulam",
    "website designers in kochi",
    "web design in kerala",
    "web designing in kerala",
    "website designers kochi",
    "website designers in kerala",
    "low cost website design kerala",
    "website making companies in india",
    "web design and development company in india",
    "web development agencies in india",
    "web development agency in india",
    "web development agency india",
    "web development companies in india",
    "web development companies india",
    "web development company in india",
    "web development company india",
    "website design and development company in india",
    "website development agency india",
    "web designing company in ernakulam",
    "website designing company ernakulam",
    "website design company cochin",
    "ernakulam web design companies",
    "web design company ernakulam",
    "web designing company ernakulam",
    "web design company in kerala",
    "web design company kerala",
    "web designing company in kerala",
    "website design company in kerala",
    "website design company kerala"
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
        className={`${syne.className} overflow-x-hidden`}>
       {children}
      </body>
    </html>
  );
}
