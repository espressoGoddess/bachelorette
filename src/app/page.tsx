import CalendarDropdown from '@/components/CalendarDropdown';

const gMapsUrl =
  'https://www.google.com/maps/place/Tulum,+Quintana+Roo,+Mexico/@20.1766996,-87.5052612,13509m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8f4fd40310e42a4b:0xeedc0db93ff9ab7!8m2!3d20.2114185!4d-87.4653502!16s%2Fm%2F02q9y44';

export default function Home() {
  return (
    <div className="mt-6 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg p-4">
        <h3 className="text-2xl font-bold mb-4 text-center">
          Add your fav songs🎶
        </h3>
        <iframe
          src="https://open.spotify.com/embed/playlist/1au5ZuE4V7OrbsiR6zRBOS?utm_source=generator"
          width="100%"
          height="150"
          allow="encrypted-media"
          className="rounded-lg"
          title="Bachelorette Playlist"
        ></iframe>
      </div>

      <div className="flex items-center space-x-4">
        <CalendarDropdown />
        <p className="text-lg text-center md:text-left">
          April 10&ndash;14, 2025
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href={gMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="card-btn"
        >
          📍
        </a>
        <p className="text-lg text-center md:text-left">Tulum</p>
      </div>
    </div>
  );
}
