import React from 'react';

const Home = () => {
  return (
    <section
      className="relative min-h-screen flex items-end font-sans"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full px-6 md:px-10 pb-12 pt-32">
        {/* Headline */}
        <div className="text-center text-white max-w-3xl mx-auto">
          <p className="font-serif text-lg tracking-[0.2em] mb-2">
            <span className="text-3xl font-bold align-middle">#1</span>{' '}
            <span className="uppercase">Matrimony</span>
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Find your
          </h1>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-1">
            <span className="text-red-600">Right Match</span> here
          </h2>
          <p className="mt-6 text-lg sm:text-xl">
            Most trusted Matrimony Brand in the World.
          </p>
        </div>

        {/* Search bar */}
        <div className="mt-10 max-w-5xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <select
              className="rounded-md px-4 py-3 text-[#5a4a1f] font-semibold bg-white/95 hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              defaultValue=""
            >
              <option value="" disabled className="text-gray-400">
                I'm looking for
              </option>
              <option value="bride">Bride</option>
              <option value="groom">Groom</option>
            </select>

            <select
              className="rounded-md px-4 py-3 text-[#5a4a1f] font-semibold bg-white/95 hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              defaultValue=""
            >
              <option value="" disabled className="text-gray-400">
                Age
              </option>
              <option value="18-25">18 - 25</option>
              <option value="26-35">26 - 35</option>
              <option value="36-45">36 - 45</option>
            </select>

            <select
              className="rounded-md px-4 py-3 text-[#5a4a1f] font-semibold bg-white/95 hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              defaultValue=""
            >
              <option value="" disabled className="text-gray-400">
                Religion
              </option>
              <option value="christian">Christian</option>
              <option value="muslim">Muslim</option>
              <option value="hindu">Hindu</option>
              <option value="other">Other</option>
            </select>

            <select
              className="rounded-md px-4 py-3 text-[#5a4a1f] font-semibold bg-white/95 hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              defaultValue=""
            >
              <option value="" disabled className="text-gray-400">
                Location
              </option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="khulna">Khulna</option>
            </select>

            <button className="rounded-md bg-gradient-to-r from-[#7a9bb0] to-[#5a7d92] hover:from-[#688aa0] hover:to-[#4a6d82] text-white font-bold text-lg py-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;