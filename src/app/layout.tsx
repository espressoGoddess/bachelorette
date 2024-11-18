import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Bach',
  description: "Amber's Bachelorette party",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center sm:items-start font-apple">
        <div className="w-full">
          <header className="sticky top-0 bg-white">
            <div className="flex items-center text-6xl my-4 pt-6 pl-36">
              <div>🥝</div>
              <h1>Timeless in Tulum</h1>
            </div>
            <ul className="flex flew-row justify-around mx-auto max-w-3xl text-xl pb-4">
              <li>
                <Link className="py-6" href="">
                  home
                </Link>
              </li>
              <li>
                <Link className="py-6" href="">
                  the vibe
                </Link>
              </li>
              <li>
                <Link className="py-6" href="">
                  getting there
                </Link>
              </li>
              <li>
                <Link className="py-6" href="">
                  itinerary
                </Link>
              </li>
              <li>
                <Link className="py-6" href="">
                  packing list
                </Link>
              </li>
              <li>
                <Link className="py-6" href="">
                  RSVP
                </Link>
              </li>
            </ul>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
