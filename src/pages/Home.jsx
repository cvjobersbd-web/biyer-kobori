import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const steps = [
  {
    number: '01',
    color: 'text-[#FFB900]',
    bgColor: 'bg-[#FFB900]/10',
    iconColor: 'text-[#FFB900]',
    titleKey: 'submitRequestStep',
    descriptionKey: 'submitRequestDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 3v4a1 1 0 001 1h4" />
      </svg>
    ),
  },
  {
    number: '02',
    color: 'text-[#FFB900]',
    bgColor: 'bg-[#FFB900]/10',
    iconColor: 'text-[#FFB900]',
    titleKey: 'weVerify',
    descriptionKey: 'weVerifyDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '03',
    color: 'text-[#FFB900]',
    bgColor: 'bg-[#FFB900]/10',
    iconColor: 'text-[#FFB900]',
    titleKey: 'getVerifiedReport',
    descriptionKey: 'getVerifiedReportDesc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const infoCategories = [
  {
    titleKey: 'education',
    descriptionKey: 'educationDesc',
    color: 'text-[#FFB900]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    titleKey: 'familyBackground',
    descriptionKey: 'familyBackgroundDesc',
    color: 'text-[#FFB900]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titleKey: 'profession',
    descriptionKey: 'professionDesc',
    color: 'text-[#FFB900]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    titleKey: 'locationInfo',
    descriptionKey: 'locationInfoDesc',
    color: 'text-[#FFB900]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    titleKey: 'socialReputation',
    descriptionKey: 'socialReputationDesc',
    color: 'text-[#FFB900]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    titleKey: 'otherInfo',
    descriptionKey: 'otherInfoDesc',
    color: 'text-[#FFB900]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

const testimonials = [
  {
    quote: '"BiyeKhoji helped me find the right information about a person. Very helpful service."',
    name: 'Rahim Uddin',
    avatar: 'https://i.pravatar.cc/48?img=11',
  },
  {
    quote: '"The report was detailed and authentic. Highly recommended!"',
    name: 'Farhana Akter',
    avatar: 'https://i.pravatar.cc/48?img=47',
  },
  {
    quote: '"Very professional and trustworthy platform. Thank you BiyeKhoji."',
    name: 'Hasan Mahmud',
    avatar: 'https://i.pravatar.cc/48?img=12',
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
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-white font-sans">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-16 flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">

          {/* Left - Text Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <p className="text-gray-500 text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4 font-light">
              <span className="text-[#FFB900] font-bold text-base sm:text-lg">#1</span> Matrimony
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              {t.findYour}
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-1">
              <span className="text-[#FFB900]">{t.rightMatch}</span>{' '}
              <span className="text-gray-800">{t.here}</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
              {t.mostTrusted}
            </p>

            <div className="w-16 h-1 bg-[#FFB900] mt-5 sm:mt-6 rounded-full md:mx-0 mx-auto" />

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 md:justify-start justify-center">
              <button 
                onClick={scrollToForm}
                className="bg-[#FFB900] hover:bg-[#E6A700] text-white font-semibold px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-[#FFB900]/30 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                {t.submitRequest}
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="https://i.ibb.co.com/RGkt3N44/pngegg.png"
              alt="Matrimony Illustration"
              className="w-48 sm:w-64 md:w-80 lg:w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans overflow-hidden">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block bg-[#FFB900]/10 text-[#FFB900] text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4">
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
                    <div className="absolute left-[22px] sm:left-[27px] top-[48px] sm:top-[56px] w-0.5 h-[calc(100%+8px)] bg-gradient-to-b from-gray-200 to-transparent" />
                  )}

                  <div className={`relative z-10 flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl ${step.bgColor} ${step.iconColor} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                    {step.icon}
                  </div>

                  <div className="flex-1 pt-1 pb-6 sm:pb-8">
                    <span className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase ${step.color}`}>
                      {t.step} {step.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mt-0.5 mb-0.5 sm:mb-1">{t[step.titleKey]}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{t[step.descriptionKey]}</p>
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2">
                <button 
                  onClick={scrollToForm}
                  className="w-full sm:w-auto bg-[#FFB900] hover:bg-[#E6A700] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-[#FFB900]/30 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  {t.getStartedNow}
                </button>
                <div className="flex items-center gap-2 text-gray-400 text-[10px] sm:text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t.safeConfidential}
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative w-full">
                <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-[#FFB900]/5 rounded-full blur-3xl opacity-70 pointer-events-none" />
                <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-6 w-36 sm:w-44 md:w-48 h-36 sm:h-44 md:h-48 bg-[#FFB900]/5 rounded-full blur-3xl opacity-70 pointer-events-none" />

                {/* Floating badges - hidden on smallest screens */}
                <div className="hidden xs:block absolute top-2 sm:top-4 -left-2 sm:-left-4 z-10 bg-white rounded-xl sm:rounded-2xl shadow-lg px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2.5 border border-gray-100">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#FFB900]/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-800">Verified</p>
                    <p className="text-[8px] sm:text-xs text-gray-400">Trusted Reports</p>
                  </div>
                </div>

                <div className="hidden xs:block absolute bottom-2 sm:bottom-4 -right-2 sm:-right-4 z-10 bg-white rounded-xl sm:rounded-2xl shadow-lg px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-1.5 sm:gap-2.5 border border-gray-100">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#FFB900]/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFB900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold text-gray-800">10,000+</p>
                    <p className="text-[8px] sm:text-xs text-gray-400">Happy Families</p>
                  </div>
                </div>

                <div className="relative z-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FFB900]/5 p-4 sm:p-6 shadow-xl border border-gray-100">
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

      {/* What Information You'll Get Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 font-sans">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t.infoTitle}</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {infoCategories.map((cat) => (
              <div
                key={cat.titleKey}
                className="flex flex-col items-center text-center p-3 sm:p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <div className={`${cat.color} mb-2 sm:mb-3`}>{cat.icon}</div>
                <h4 className="text-[10px] sm:text-xs font-bold text-gray-800 mb-0.5 sm:mb-1">{t[cat.titleKey]}</h4>
                <p className="text-gray-400 text-[8px] sm:text-xs leading-snug">{t[cat.descriptionKey]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Information Request Section - All Text Black */}
      <section 
        ref={formSectionRef}
        id="submit-request"
        className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans overflow-hidden scroll-mt-20"
      >
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-[#FFB900]/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-[#FFB900]/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-[#FFB900]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">

          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FFB900]/10 border border-[#FFB900]/20 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 mb-3 sm:mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-black text-[8px] sm:text-xs font-semibold tracking-widest uppercase">{t.formSafeConfidential}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 sm:mb-3">{t.submitInfoRequest}</h2>
            <p className="text-black text-xs sm:text-sm max-w-sm mx-auto px-4">
              {t.formDescription}
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">

            <div className="h-1.5 bg-[#FFB900]" />

            <div className="p-4 sm:p-6 md:p-8 lg:p-10">

              <div className="mb-4 sm:mb-6">
                <p className="text-[10px] sm:text-xs font-bold text-black uppercase tracking-widest mb-3 sm:mb-4">{t.basicInformation}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                  <div className="group">
                    <label className="block text-[10px] sm:text-xs font-semibold text-black mb-1 sm:mb-1.5">
                      {t.personsName} <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder={t.enterFullName}
                        className="w-full border border-gray-200 rounded-xl pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 text-xs sm:text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] sm:text-xs font-semibold text-black mb-1 sm:mb-1.5">
                      {t.areaLocation} <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder={t.enterLocation}
                        className="w-full border border-gray-200 rounded-xl pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 text-xs sm:text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] sm:text-xs font-semibold text-black mb-1 sm:mb-1.5">{t.educationLabel}</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder={t.educationPlaceholder}
                        className="w-full border border-gray-200 rounded-xl pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 text-xs sm:text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-200 my-4 sm:my-6" />

              <div className="mb-6 sm:mb-8">
                <p className="text-[10px] sm:text-xs font-bold text-black uppercase tracking-widest mb-3 sm:mb-4">{t.familyDetails}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

                  <div className="group">
                    <label className="block text-[10px] sm:text-xs font-semibold text-black mb-1 sm:mb-1.5">{t.fathersName}</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder={t.fathersPlaceholder}
                        className="w-full border border-gray-200 rounded-xl pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 text-xs sm:text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] sm:text-xs font-semibold text-black mb-1 sm:mb-1.5">{t.mothersName}</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder={t.mothersPlaceholder}
                        className="w-full border border-gray-200 rounded-xl pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 text-xs sm:text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] sm:text-xs font-semibold text-black mb-1 sm:mb-1.5">{t.additionalInfo}</label>
                    <textarea
                      placeholder={t.additionalPlaceholder}
                      rows={1}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB900] focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <button className="w-full sm:w-auto flex-1 bg-[#FFB900] hover:bg-[#E6A700] active:scale-95 text-white font-semibold py-2.5 sm:py-3.5 px-5 sm:px-8 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-[#FFB900]/30 flex items-center justify-center gap-2 hover:shadow-[#FFB900]/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {t.submitBtn}
                </button>

                <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-black">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>{t.encrypted}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>{t.private}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB900]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span>{t.trusted}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-8 sm:py-10 px-4 sm:px-6 font-sans">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.labelKey}
              className="flex flex-col items-center justify-center border border-gray-100 rounded-xl py-4 sm:py-6 px-2 sm:px-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-lg sm:text-2xl md:text-3xl font-bold text-[#FFB900]">{stat.value}</span>
              <span className="text-gray-500 text-[10px] sm:text-sm mt-1 text-center">{t[stat.labelKey]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-10 sm:py-14 px-4 sm:px-6 font-sans">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10">{t.whatUsersSay}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">— {testimonial.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFB900]" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;