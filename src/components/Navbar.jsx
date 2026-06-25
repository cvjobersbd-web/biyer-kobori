import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <header className="w-full font-sans relative">
      {/* Top bar - শুধু খালি ব্যাকগ্রাউন্ড */}
      <div className="flex items-center justify-end px-4 md:px-10 py-2 bg-gradient-to-r from-[#5a4a1f] via-[#7a5e1f] to-[#4a3a17] text-white text-sm">
        {/* সোশ্যাল আইকনগুলো সরানো হয়েছে */}
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-4 md:px-10 py-3 bg-white shadow-sm">
        <div className="flex items-center gap-2 md:gap-3">
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
            alt="Biyer Khobori logo"
            className="h-7 w-7 md:h-9 md:w-9"
          />
          <Link to="/" className="text-lg md:text-xl font-semibold tracking-wide text-gray-800">
            {t.biyerKhobori} <span className="text-amber-600 font-bold">{t.khobor}</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-[#5a4a1f] font-semibold tracking-wide">
          <Link to="/" className="hover:text-amber-600 transition-colors">{t.home}</Link>
          <Link to="/how-it-works" className="hover:text-amber-600 transition-colors">{t.howItWorks}</Link>
          <Link to="/pricing" className="hover:text-amber-600 transition-colors">{t.pricing}</Link>
          <Link to="/about" className="hover:text-amber-600 transition-colors">{t.aboutUs}</Link>
          <Link to="/faq" className="hover:text-amber-600 transition-colors">{t.faq}</Link>
          <Link to="/contact" className="hover:text-amber-600 transition-colors">{t.contact}</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          {/* ভাষা চেঞ্জ আইকন - লগইন বাটনের পাশে */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 md:px-3 py-1.5 bg-gradient-to-r from-[#5a4a1f] to-[#7a5e1f] text-white text-xs md:text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {language === 'en' ? 'বাংলা' : 'English'}
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-2 md:gap-4">
              <Link 
                to="/dashboard"
                className="text-[#5a4a1f] font-semibold hover:text-amber-600 transition-colors text-sm md:text-base"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 font-semibold hover:text-red-600 transition-colors text-sm md:text-base"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
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

          <nav className="flex-1 overflow-y-auto p-6 space-y-6">
            <Link 
              to="/" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.home}
            </Link>
            <Link 
              to="/how-it-works" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.howItWorks}
            </Link>
            <Link 
              to="/pricing" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.pricing}
            </Link>
            <Link 
              to="/about" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.aboutUs}
            </Link>
            <Link 
              to="/faq" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.faq}
            </Link>
            <Link 
              to="/contact" 
              className="block text-xl font-semibold text-[#5a4a1f] hover:text-amber-600 transition-colors border-b border-gray-100 pb-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.contact}
            </Link>

            <div className="pt-4 space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +880 1234 567890
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                biyekhobori@gmail.com
              </p>
            </div>
          </nav>
        </div>
      </div>

      {/* Login Modal */}
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
            <form className="space-y-5" onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem('isAuthenticated', 'true');
              setIsLoginOpen(false);
              navigate('/dashboard');
            }}>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.emailAddress}</label>
                <input
                  type="email"
                  placeholder={t.enterEmail}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.password}</label>
                <input
                  type="password"
                  placeholder={t.enterPassword}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                  required
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-black">
                  <input type="checkbox" className="rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
                  {t.rememberMe}
                </label>
                <a href="#" className="text-black hover:text-amber-700 font-semibold">{t.forgotPassword}</a>
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

      {/* Signup Modal */}
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
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              localStorage.setItem('isAuthenticated', 'true');
              setIsSignupOpen(false);
              navigate('/dashboard');
            }}>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.fullName}</label>
                <input
                  type="text"
                  placeholder={t.enterFullName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.phoneNumber}</label>
                <input
                  type="tel"
                  placeholder={t.enterPhoneNumber}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                  required
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
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-1">{t.confirmPassword}</label>
                <input
                  type="password"
                  placeholder={t.confirmYourPassword}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition text-black placeholder-gray-400"
                  required
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
    </header>
  );
};

export default Navbar;