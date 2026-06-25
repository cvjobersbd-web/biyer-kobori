import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-white text-gray-700 font-sans">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Brand Column */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-amber-400 sm:w-10 sm:h-10"
              >
                <path
                  d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
                />
              </svg>
              <span className="text-lg sm:text-xl font-bold text-gray-900">BiyeKhoji</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xs">
              {t.providingReliable}
            </p>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500">
              <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span>{t.verifiedService}</span>
            </div>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              {t.supportTitle}
            </h6>
            <ul className="space-y-2 sm:space-y-2.5">
              <li>
                <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-amber-500 transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">biyekhoji@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-amber-500 transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>+880 1234 567890</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-amber-500 transition-colors duration-200 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>Dhaka, Bangladesh</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Only */}
          <div>
            <h6 className="text-gray-900 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              {t.connectWithUs}
            </h6>
            <div className="flex gap-2 sm:gap-3">
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-amber-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 group"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="fill-current text-gray-600 group-hover:text-white transition-colors sm:w-[18px] sm:h-[18px]">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-amber-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 group"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="fill-current text-gray-600 group-hover:text-white transition-colors sm:w-[18px] sm:h-[18px]">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-amber-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 group"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" className="fill-current text-gray-600 group-hover:text-white transition-colors sm:w-[18px] sm:h-[18px]">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          <p className="text-[10px] sm:text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} BiyeKhoji. {t.allRightsReserved}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-[10px] sm:text-xs text-gray-500">
            <a href="#" className="hover:text-amber-500 transition-colors duration-200 whitespace-nowrap">{t.privacyPolicy}</a>
            <span className="w-px h-3 sm:h-4 bg-gray-300"></span>
            <a href="#" className="hover:text-amber-500 transition-colors duration-200 whitespace-nowrap">{t.termsOfService}</a>
            <span className="w-px h-3 sm:h-4 bg-gray-300"></span>
            <a href="#" className="hover:text-amber-500 transition-colors duration-200 whitespace-nowrap">{t.cookiePolicy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;