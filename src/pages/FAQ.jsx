// pages/FAQ.jsx
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const FAQ = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const faqs = [
    { questionKey: 'faq1', answerKey: 'faq1a' },
    { questionKey: 'faq2', answerKey: 'faq2a' },
    { questionKey: 'faq3', answerKey: 'faq3a' },
    { questionKey: 'faq4', answerKey: 'faq4a' },
    { questionKey: 'faq5', answerKey: 'faq5a' },
    { questionKey: 'faq6', answerKey: 'faq6a' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">{t.faqTitle}</h1>
        <p className="text-center text-gray-500 text-sm sm:text-base mb-10 max-w-lg mx-auto">
          {t.faqSubtitle}
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm sm:text-base">{t[faq.questionKey]}</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {t[faq.answerKey]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;