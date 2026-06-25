// pages/Pricing.jsx
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Pricing = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const plans = [
    {
      nameKey: 'basicPlan',
      price: '১৯৯',
      priceEn: '199',
      descriptionKey: 'basicPlanDesc',
      features: ['basicPlanFeature1', 'basicPlanFeature2', 'basicPlanFeature3'],
      recommended: false,
    },
    {
      nameKey: 'detailedPlan',
      price: '৪৯৯',
      priceEn: '499',
      descriptionKey: 'detailedPlanDesc',
      features: ['detailedPlanFeature1', 'detailedPlanFeature2', 'detailedPlanFeature3', 'detailedPlanFeature4'],
      recommended: true,
    },
    {
      nameKey: 'premiumPlan',
      price: '৯৯৯+',
      priceEn: '999+',
      descriptionKey: 'premiumPlanDesc',
      features: ['premiumPlanFeature1', 'premiumPlanFeature2', 'premiumPlanFeature3', 'premiumPlanFeature4', 'premiumPlanFeature5'],
      recommended: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 font-sans bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t.pricingTitle}</h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">{t.pricingSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.nameKey}
              className={`bg-white rounded-2xl p-6 sm:p-8 border ${plan.recommended ? 'border-amber-400 shadow-lg shadow-amber-100/50 relative' : 'border-gray-200'} transition-shadow hover:shadow-xl`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  {t.popular}
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-800 mb-2">{t[plan.nameKey]}</h3>
              <p className="text-gray-500 text-sm mb-4">{t[plan.descriptionKey]}</p>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">{language === 'bn' ? plan.price : plan.priceEn}</span>
                <span className="text-gray-500 text-sm"> / {t.perRequest}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t[feature]}
                  </li>
                ))}
              </ul>
              <Link
                to="/submit-request"
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.recommended 
                    ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {t.getStarted}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-8">
          {t.paymentNote}
        </p>
      </div>
    </section>
  );
};

export default Pricing;