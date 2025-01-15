import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/header";

export const metadata = {
    title: 'Poqi Movies',
    description: 'A site for show top imdb rated movies',
    metadataBase: new URL('https://poqi-movies.vercel.app/'),
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
