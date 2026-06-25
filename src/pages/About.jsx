// pages/About.jsx
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">{t.aboutTitle}</h1>
        <p className="text-center text-gray-500 text-sm sm:text-base mb-10">{t.aboutSubtitle}</p>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <p>{t.aboutP3}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{t.ourMission}</h3>
              <p className="text-gray-600 text-sm">{t.ourMissionDesc}</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{t.ourVision}</h3>
              <p className="text-gray-600 text-sm">{t.ourVisionDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;