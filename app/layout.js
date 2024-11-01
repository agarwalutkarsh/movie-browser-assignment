import { Kanit } from 'next/font/google';
import "./globals.css";
import NavBar from '@/components/NavBar';
import BottomBar from '@/components/BottomBar';
import MainContextWrapper from '@/ContextAPI/MainContext';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: "Movie Browser - Utkarsh Agarwal",
  description: "Movie Library using TMDB API for searching and filtering movies. A fully responsive Mobile First UI helping you to search for any of your favourite movie, getting a list of popular and upcoming movies which you can add to the playlists.",
  keywords: "movies, TMDB API, movie search, movie filter, responsive design, mobile first UI, movie library, favourite, liked, watchlater, playlist, popular movie, upcoming movie",
  author: "Utkarsh Agarwal",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${kanit.className} antialiased bg-[#041316] `}
      >
        <div className="min-h-screen text-white">
          <MainContextWrapper>
            <NavBar />
            <main className="pt-4 pb-16 px-6 sm:pt-20 sm:pb-0">{children}</main>
            <BottomBar />
          </MainContextWrapper>
        </div>
      </body>
    </html>
  );
}
