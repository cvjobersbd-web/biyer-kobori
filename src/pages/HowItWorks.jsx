// pages/HowItWorks.jsx
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      number: '01',
      titleKey: 'submitRequestStep',
      descriptionKey: 'submitRequestDesc',
      icon: '📝',
    },
    {
      number: '02',
      titleKey: 'weVerify',
      descriptionKey: 'weVerifyDesc',
      icon: '🔍',
    },
    {
      number: '03',
      titleKey: 'getVerifiedReport',
      descriptionKey: 'getVerifiedReportDesc',
      icon: '📄',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">{t.howItWorksTitle}</h1>
        <p className="text-center text-gray-500 text-sm sm:text-base mb-10 max-w-lg mx-auto">
          {t.howItWorksDesc}
        </p>

        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-amber-500 tracking-widest">{t.step} {step.number}</span>
                  {index < steps.length - 1 && (
                    <span className="text-gray-300">→</span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t[step.titleKey]}</h3>
                <p className="text-gray-500 text-sm mt-1">{t[step.descriptionKey]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/submit-request"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t.getStartedNow}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;