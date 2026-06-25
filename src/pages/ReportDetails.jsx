// pages/ReportDetails.jsx
import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const ReportDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];

  const report = {
    name: 'Rahim Uddin',
    gender: 'পাত্র',
    date: '2024-12-15',
    package: 'Detailed',
    riskLevel: 'Low',
    sections: [
      { title: t.basicInfo, content: 'নাম: Rahim Uddin\nবয়স: ২৮ বছর\nবর্তমান এলাকা: ঢাকা' },
      { title: t.education, content: 'শিক্ষা: B.Sc. in Computer Science\nপ্রতিষ্ঠান: ঢাকা বিশ্ববিদ্যালয়' },
      { title: t.familyBackground, content: 'পিতা: Md. Abdul Karim (ব্যবসায়ী)\nমাতা: Mrs. Fatima Begum (গৃহিণী)\nভাই-বোন: ২ ভাই, ১ বোন' },
      { title: t.profession, content: 'পেশা: সফটওয়্যার ইঞ্জিনিয়ার\nকোম্পানি: XYZ Tech Ltd.' },
      { title: t.locationInfo, content: 'বর্তমান: ধানমন্ডি, ঢাকা\nস্থায়ী: ফরিদপুর' },
      { title: t.socialReputation, content: 'সামাজিক মর্যাদা: ভালো\nকমিউনিটি ফিডব্যাক: ইতিবাচক' },
    ],
    adminNote: 'সমস্ত তথ্য যাচাই করা হয়েছে এবং সঠিক পাওয়া গেছে।',
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 font-sans bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
          
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{t.verificationReport}</h1>
                <p className="text-gray-500 text-sm">{t.reportFor} {report.name}</p>
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.downloadPDF}
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-gray-100 rounded-lg px-3 py-1.5 text-xs">
                <span className="text-gray-500">{t.gender}:</span> {report.gender}
              </div>
              <div className="bg-gray-100 rounded-lg px-3 py-1.5 text-xs">
                <span className="text-gray-500">{t.package}:</span> {report.package}
              </div>
              <div className="bg-gray-100 rounded-lg px-3 py-1.5 text-xs">
                <span className="text-gray-500">{t.verificationDate}:</span> {report.date}
              </div>
              <div className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                report.riskLevel === 'Low' ? 'bg-green-100 text-green-700' :
                report.riskLevel === 'Medium' ? 'bg-amber-100 text-amber-700' :
                'bg-red-100 text-red-700'
              }`}>
                {t.riskLevel}: {report.riskLevel}
              </div>
            </div>

            <div className="space-y-4">
              {report.sections.map((section, index) => (
                <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800 text-sm">{section.title}</h3>
                  </div>
                  <div className="px-4 py-3 text-sm text-gray-600 whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="text-sm text-amber-700">
                <span className="font-semibold">{t.adminNote}:</span> {report.adminNote}
              </p>
            </div>

            <div className="mt-6 text-center text-xs text-gray-400 border-t border-gray-100 pt-4">
              <p>{t.reportDisclaimer}</p>
              <p className="mt-1">{t.reportConfidential}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportDetails;