// pages/PrivacyPolicy.jsx
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">{t.privacyPolicyTitle}</h1>
        <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
          <p>{t.privacyP1}</p>
          <p>{t.privacyP2}</p>
          <p>{t.privacyP3}</p>
          <p>{t.privacyP4}</p>
          <p>{t.privacyP5}</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;