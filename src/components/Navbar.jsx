import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="w-full font-sans relative">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 md:px-10 py-2 bg-gradient-to-r from-[#5a4a1f] via-[#7a5e1f] to-[#4a3a17] text-white text-sm">
        <div className="flex items-center gap-3 md:gap-6">
          <button aria-label="Search" className="hover:text-amber-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
            </svg>
          </button>
          <a href="#about" className="font-semibold tracking-wide hover:text-amber-300 transition-colors hidden sm:inline">{t.about}</a>
          <a href="#faq" className="font-semibold tracking-wide hover:text-amber-300 transition-colors hidden sm:inline">{t.faq}</a>
          <a href="#contact" className="font-semibold tracking-wide hover:text-amber-300 transition-colors hidden sm:inline">{t.contact}</a>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <span className="hidden md:flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +01 5312 5312
          </span>
          <span className="hidden md:flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.help}
          </span>
          <div className="hidden md:flex items-center gap-3">
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.149-.173.183-.347.206-.644.057-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.148-.148.33-.396.495-.594.165-.198.22-.347.33-.578.11-.231.055-.416-.025-.572-.08-.156-.667-1.612-.91-2.206-.24-.579-.487-.501-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.472 7.618h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="px-2 md:px-3 py-1 bg-white/20 hover:bg-white/30 rounded-md text-white font-semibold text-xs transition-colors"
          >
            {language === 'en' ? 'বাংলা' : 'English'}
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-4 md:px-10 py-3 bg-white shadow-sm">
        <div className="flex items-center gap-2 md:gap-3">
          {/* Hamburger Menu Button - Mobile Only */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            className="lg:hidden flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img
            src="https://img.icons8.com/color/48/000000/wedding-rings.png"
            alt="Biyer Kbori logo"
            className="h-7 w-7 md:h-9 md:w-9"
          />
          <a href="#home" className="text-lg md:text-xl font-semibold tracking-wide text-gray-800">
            {t.biyerKbori} <span className="text-amber-600 font-bold">{t.kbori}</span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[#5a4a1f] font-semibold tracking-wide">
          <a href="#home" className="hover:text-amber-600 transition-colors">{t.home}</a>
          <a href="#how-it-works" className="hover:text-amber-600 transition-colors">{t.howItWorks}</a>
          <a href="#features" className="hover:text-amber-600 transition-colors">{t.features}</a>
          <a href="#about-us" className="hover:text-amber-600 transition-colors">{t.aboutUs}</a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="text-[#5a4a1f] font-semibold hover:text-amber-600 transition-colors text-sm md:text-base"
          >
            {t.login}
          </button>
          <button
            onClick={() => setIsSignupOpen(true)}
            className="text-[#5a4a1f] font-semibold hover:text-amber-600 transition-colors text-sm md:text-base"
          >
            {t.signUp}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - 50% width from left */}
      <div 
        className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4 border-b">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-6">
            <a 
              href="#home" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.home}
            </a>
            <a 
              href="#how-it-works" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.howItWorks}
            </a>
            <a 
              href="#features" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.features}
            </a>
            <a 
              href="#about-us" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.aboutUs}
            </a>
            <a 
              href="#about" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.about}
            </a>
            <a 
              href="#faq" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.faq}
            </a>
            <a 
              href="#contact" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.contact}
            </a>

            {/* Mobile Social Icons */}
            <div className="pt-4 space-y-4">
              <p className="text-sm text-gray-500 font-semibold">Follow Us</p>
              <div className="flex gap-4">
                <a href="#facebook" aria-label="Facebook" className="text-[#5a4a1f] hover:text-amber-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.91h-2.4v7.04A10 10 0 0022 12z" />
                  </svg>
                </a>
                <a href="#twitter" aria-label="Twitter" className="text-[#5a4a1f] hover:text-amber-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 4.98c-.83.37-1.72.62-2.65.73a4.6 4.6 0 002.02-2.54 9.2 9.2 0 01-2.92 1.12 4.6 4.6 0 00-7.96 3.14c0 .36.04.7.11 1.04A13.07 13.07 0 011.64 3.16a4.6 4.6 0 001.43 6.14 4.58 4.58 0 01-2.08-.58 4.6 4.6 0 003.69 4.57 4.6 4.6 0 01-2.07.08 4.6 4.6 0 004.3 3.2A9.24 9.24 0 010 18.58a13.04 13.04 0 007.06 2.07c8.47 0 13.1-7.02 13.1-13.1 0-.2 0-.4-.02-.6A9.32 9.32 0 0023 4.98z" />
                  </svg>
                </a>
                <a href="#whatsapp" aria-label="WhatsApp" className="text-[#5a4a1f] hover:text-amber-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.149-.173.183-.347.206-.644.057-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.148-.148.33-.396.495-.594.165-.198.22-.347.33-.578.11-.231.055-.416-.025-.572-.08-.156-.667-1.612-.91-2.206-.24-.579-.487-.501-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.472 7.618h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="pt-4 space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +01 5312 5312
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t.help}
              </p>
            </div>
          </nav>
        </div>
      </div>

      {/* Login Modal - All text now BLACK */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 relative animate-fadeIn">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black">{t.welcomeBack}</h2>
              <p className="text-black mt-2">{t.loginToAccount}</p>
            </div>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.emailAddress}</label>
                <input
                  type="email"
                  placeholder={t.enterEmail}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.password}</label>
                <input
                  type="password"
                  placeholder={t.enterPassword}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-black">
                  <input type="checkbox" className="rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
                  {t.rememberMe}
                </label>
                <a href="#forgot" className="text-black hover:text-amber-700 font-semibold">{t.forgotPassword}</a>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#5a4a1f] to-[#7a5e1f] text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.login}
              </button>
            </form>
            <p className="text-center text-black mt-6">
              {t.dontHaveAccount}{' '}
              <button
                onClick={() => {
                  setIsLoginOpen(false);
                  setIsSignupOpen(true);
                }}
                className="text-black font-semibold hover:text-amber-700 transition-colors"
              >
                {t.signUp}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Signup Modal - All text now BLACK */}
      {isSignupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsSignupOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black">{t.createAccount}</h2>
              <p className="text-black mt-2">{t.joinToday}</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.fullName}</label>
                <input
                  type="text"
                  placeholder={t.enterFullName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.emailAddress}</label>
                <input
                  type="email"
                  placeholder={t.enterEmail}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.password}</label>
                <input
                  type="password"
                  placeholder={t.createPassword}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.confirmPassword}</label>
                <input
                  type="password"
                  placeholder={t.confirmYourPassword}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#5a4a1f] to-[#7a5e1f] text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.createAccount}
              </button>
            </form>
            <p className="text-center text-black mt-6">
              {t.alreadyHaveAccount}{' '}
              <button
                onClick={() => {
                  setIsSignupOpen(false);
                  setIsLoginOpen(true);
                }}
                className="text-black font-semibold hover:text-amber-700 transition-colors"
              >
                {t.login}
              </button>
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;