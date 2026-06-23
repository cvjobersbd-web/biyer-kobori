import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full font-sans">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-10 py-2 bg-gradient-to-r from-[#5a4a1f] via-[#7a5e1f] to-[#4a3a17] text-white text-sm">
        <div className="flex items-center gap-6">
          <button aria-label="Search" className="hover:text-amber-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
            </svg>
          </button>
          <a href="#about" className="font-semibold tracking-wide hover:text-amber-300 transition-colors">ABOUT</a>
          <a href="#faq" className="font-semibold tracking-wide hover:text-amber-300 transition-colors">FAQ</a>
          <a href="#contact" className="font-semibold tracking-wide hover:text-amber-300 transition-colors">CONTACT</a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +01 5312 5312
          </span>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            HELP@COMPANY.COM
          </span>
          <div className="flex items-center gap-3">
            <a href="#facebook" aria-label="Facebook" className="hover:text-amber-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.91h-2.4v7.04A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="#twitter" aria-label="Twitter" className="hover:text-amber-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 4.98c-.83.37-1.72.62-2.65.73a4.6 4.6 0 002.02-2.54 9.2 9.2 0 01-2.92 1.12 4.6 4.6 0 00-7.96 3.14c0 .36.04.7.11 1.04A13.07 13.07 0 011.64 3.16a4.6 4.6 0 001.43 6.14 4.58 4.58 0 01-2.08-.58 4.6 4.6 0 003.69 4.57 4.6 4.6 0 01-2.07.08 4.6 4.6 0 004.3 3.2A9.24 9.24 0 010 18.58a13.04 13.04 0 007.06 2.07c8.47 0 13.1-7.02 13.1-13.1 0-.2 0-.4-.02-.6A9.32 9.32 0 0023 4.98z" />
              </svg>
            </a>
            <a href="#whatsapp" aria-label="WhatsApp" className="hover:text-amber-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.15-.15.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.05-.51-.1-.15-.91-2.18-1.05-2.51-.14-.33-.29-.29-.4-.29-.1 0-.27 0-.43 0-.16 0-.41.06-.62.29-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.6 4.1 3.54 2.41.94 2.41.63 2.85.6.43-.05 1.38-.56 1.58-1.1.19-.55.19-1.02.13-1.12-.05-.1-.17-.15-.36-.24zM12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 md:px-10 py-3 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <button aria-label="Menu" className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img
            src="https://img.icons8.com/color/48/000000/wedding-rings.png"
            alt="Wedding Matrimony logo"
            className="h-9 w-9 hidden sm:block"
          />
          <a href="#home" className="text-xl font-semibold tracking-wide text-gray-800">
            WEDDING <span className="text-amber-600 font-bold">MATRIMONY</span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[#5a4a1f] font-semibold tracking-wide">
          <a href="#explore" className="flex items-center gap-1 hover:text-amber-600 transition-colors">
            EXPLORE
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#all-pages" className="flex items-center gap-1 hover:text-amber-600 transition-colors">
            ALL PAGES
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#top-pages" className="flex items-center gap-1 hover:text-amber-600 transition-colors">
            TOP PAGES
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a href="#plans" className="hover:text-amber-600 transition-colors">PLANS</a>
          <a href="#register" className="hover:text-amber-600 transition-colors">REGISTER</a>
          <a href="#dashboard" className="flex items-center gap-1 hover:text-amber-600 transition-colors">
            DASHBOARD
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="Advisor avatar"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-pink-200"
          />
          <div className="hidden sm:block leading-tight">
            <p className="text-xs text-gray-400 tracking-wide">ADVISOR</p>
            <p className="text-[#5a4a1f] font-semibold">Ashley emyy</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;