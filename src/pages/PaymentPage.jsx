// pages/PaymentPage.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const PaymentPage = () => {
  const { requestId } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePayment = () => {
    // In a real app, this would process the payment
    alert(t.paymentSuccess);
    navigate('/my-requests');
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 font-sans bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
          
          <div className="p-6 sm:p-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-2">{t.completePayment}</h1>
            <p className="text-gray-500 text-sm text-center mb-6">{t.paymentForRequest} #{requestId}</p>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t.package}</span>
                <span className="font-semibold text-gray-800">Detailed</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-500">{t.amount}</span>
                <span className="font-bold text-amber-500 text-lg">৳ 499</span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700 mb-1">{t.paymentMethod}</label>
              
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-amber-300 transition-colors">
                  <input
                    type="radio"
                    name="method"
                    value="bkash"
                    checked={selectedMethod === 'bkash'}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="w-4 h-4 text-amber-500"
                  />
                  <span className="text-sm font-medium text-gray-700">bKash</span>
                </label>
                
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-amber-300 transition-colors">
                  <input
                    type="radio"
                    name="method"
                    value="nagad"
                    checked={selectedMethod === 'nagad'}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="w-4 h-4 text-amber-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Nagad</span>
                </label>
                
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-amber-300 transition-colors">
                  <input
                    type="radio"
                    name="method"
                    value="sslcommerz"
                    checked={selectedMethod === 'sslcommerz'}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="w-4 h-4 text-amber-500"
                  />
                  <span className="text-sm font-medium text-gray-700">SSLCommerz</span>
                </label>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={!selectedMethod}
              className={`w-full py-3 mt-6 font-bold rounded-xl transition-opacity ${
                selectedMethod 
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/25 hover:opacity-90' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {t.payNow}
            </button>

            <p className="text-center text-gray-400 text-xs mt-4">
              {t.paymentSecure}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;