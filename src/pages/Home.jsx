// pages/Home.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const steps = [
  {
    number: '01',
    titleKey: 'submitRequestStep',
    descriptionKey: 'submitRequestDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3v4a1 1 0 001 1h4" />
      </svg>
    ),
  },
  {
    number: '02',
    titleKey: 'weVerify',
    descriptionKey: 'weVerifyDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '03',
    titleKey: 'getVerifiedReport',
    descriptionKey: 'getVerifiedReportDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const infoCategories = [
  {
    titleKey: 'education',
    descriptionKey: 'educationDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    titleKey: 'familyBackground',
    descriptionKey: 'familyBackgroundDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titleKey: 'profession',
    descriptionKey: 'professionDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    titleKey: 'locationInfo',
    descriptionKey: 'locationInfoDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titleKey: 'socialReputation',
    descriptionKey: 'socialReputationDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    titleKey: 'riskLevel',
    descriptionKey: 'riskLevelDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '10,000+', labelKey: 'requestsCompleted' },
  { value: '5,000+', labelKey: 'happyUsers' },
  { value: '98%', labelKey: 'successRate' },
  { value: '24/7', labelKey: 'support' },
];

const whyChooseItems = [
  {
    titleKey: 'privacyFirst',
    descriptionKey: 'privacyFirstDesc',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    titleKey: 'verifiedInfo',
    descriptionKey: 'verifiedInfoDesc',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    titleKey: 'familyBackgroundCheck',
    descriptionKey: 'familyBackgroundCheckDesc',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titleKey: 'noPublicProfile',
    descriptionKey: 'noPublicProfileDesc',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
  },
];

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const formSectionRef = useRef(null);

  const scrollToForm = (e) => {
    e.preventDefault();
    if (formSectionRef.current) {
      const yOffset = -80;
      const y = formSectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section - White Background */}
      <section className="min-h-[90vh] flex items-center bg-white font-sans">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">

          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-block bg-amber-100/80 text-amber-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              {t.trustedMatrimony}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              {t.heroTitle}
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-1">
              <span className="text-amber-500">{t.heroHighlight}</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
              {t.heroSubtitle}
            </p>

            <div className="w-16 h-1 bg-amber-400 mt-5 sm:mt-6 rounded-full md:mx-0 mx-auto" />

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 md:justify-start justify-center">
              <Link 
                to="/submit-request"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-amber-500/30 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                {t.submitRequest}
              </Link>
              <Link 
                to="/how-it-works"
                className="border-2 border-gray-300 hover:border-amber-400 text-gray-700 hover:text-amber-600 font-semibold px-6 sm:px-8 py-3 rounded-lg text-sm transition-all duration-200"
              >
                {t.howItWorks}
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-4 justify-center md:justify-start text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.verifiedService}</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.privateConfidential}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl" />
              <img
                src="https://i.ibb.co.com/RGkt3N44/pngegg.png"
                alt="Matrimony Illustration"
                className="w-48 sm:w-64 md:w-80 lg:w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-xl relative z-10"
              />
            </div>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans overflow-hidden">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block bg-amber-100/50 text-amber-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
              {t.simpleProcess}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t.howItWorksTitle}</h2>
            <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto px-4">
              {t.howItWorksDesc}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">

            <div className="flex-1 flex flex-col gap-2 w-full px-2 sm:px-0">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex items-start gap-4 sm:gap-5 group">
                  {index < steps.length - 1 && (
                    <div className="absolute left-[22px] sm:left-[27px] top-[48px] sm:top-[56px] w-0.5 h-[calc(100%+8px)] bg-gradient-to-b from-amber-200 to-transparent" />
                  )}

                  <div className="relative z-10 flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-amber-100 text-amber-500 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                    {step.icon}
                  </div>

                  <div className="flex-1 pt-1 pb-6 sm:pb-8">
                    <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-500">
                      {t.step} {step.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-0.5 mb-0.5 sm:mb-1">{t[step.titleKey]}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{t[step.descriptionKey]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative w-full">
                <div className="absolute -top-8 -right-8 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-amber-100/30 rounded-full blur-3xl opacity-70 pointer-events-none" />
                <div className="absolute -bottom-8 -left-4 w-36 sm:w-44 md:w-48 h-36 sm:h-44 md:h-48 bg-amber-100/30 rounded-full blur-3xl opacity-70 pointer-events-none" />

                <div className="relative z-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-white p-4 sm:p-6 shadow-xl border border-gray-100">
                  <img
                    src="https://i.ibb.co.com/FqHpMNFF/pngwing-com.png"
                    alt="How It Works Illustration"
                    className="w-full object-contain max-h-48 sm:max-h-60 md:max-h-80 drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block bg-amber-100/50 text-amber-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
              {t.whyChooseUs}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t.whyChooseUsTitle}</h2>
            <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm max-w-md mx-auto px-4">
              {t.whyChooseUsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseItems.map((item) => (
              <div key={item.titleKey} className="bg-gray-50 rounded-xl border border-gray-100 p-5 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-500">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2">{t[item.titleKey]}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{t[item.descriptionKey]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Information You'll Get Section */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 font-sans">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block bg-amber-100/50 text-amber-600 text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
              {t.whatYouGet}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t.infoTitle}</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {infoCategories.map((cat) => (
              <div
                key={cat.titleKey}
                className="flex flex-col items-center text-center p-3 sm:p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200 bg-white"
              >
                <div className="text-amber-500 mb-2 sm:mb-3">{cat.icon}</div>
                <h4 className="text-[10px] sm:text-xs font-bold text-gray-800 mb-0.5 sm:mb-1">{t[cat.titleKey]}</h4>
                <p className="text-gray-400 text-[8px] sm:text-xs leading-snug">{t[cat.descriptionKey]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-50/50 py-8 sm:py-10 px-4 sm:px-6 font-sans border-y border-amber-100/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.labelKey}
              className="flex flex-col items-center justify-center bg-white rounded-xl py-4 sm:py-6 px-2 sm:px-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
            >
              <span className="text-lg sm:text-2xl md:text-3xl font-bold text-amber-500">{stat.value}</span>
              <span className="text-gray-500 text-[10px] sm:text-sm mt-1 text-center">{t[stat.labelKey]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-12 sm:py-16 px-4 sm:px-6 font-sans">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{t.ctaTitle}</h2>
          <p className="text-amber-50 text-sm sm:text-base mb-6 max-w-lg mx-auto">{t.ctaDesc}</p>
          <Link
            to="/submit-request"
            className="inline-block bg-white text-amber-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
          >
            {t.getStartedNow}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;