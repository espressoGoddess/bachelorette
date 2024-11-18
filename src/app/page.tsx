import Link from 'next/link';
import CalendarDropdown from '@/components/CalendarDropdown';
const gCalLink = '@TODO';

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start font-apple">
      <div className="max-w-2xl mx-4 p-6 relative bg-white/60 rounded-2xl shadow-lg backdrop-blur-md">
        <h1>Welcum</h1>
        <p className="font-merri">hihi</p>
        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 items-center justify-center">
          <div className="flex items-center space-x-4">
            <CalendarDropdown />
            <p className="text-lg text-center md:text-left">
              April 10-14, 2025
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={gCalLink}
              target="_blank"
              rel="noreferrer"
              className="card-btn"
            >
              📍
            </a>
            <p className="text-lg text-center md:text-left">Tulum</p>
          </div>
        </div>
      </div>
    </main>
  );
}
