// pages/TermsConditions.jsx
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const TermsConditions = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">{t.termsTitle}</h1>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
          <p>{t.termsP1}</p>
          <p>{t.termsP2}</p>
          <p>{t.termsP3}</p>
          <p>{t.termsP4}</p>
          <p>{t.termsP5}</p>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;