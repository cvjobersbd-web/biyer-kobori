// pages/MyRequests.jsx
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const MyRequests = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const requests = [
    { id: 1, name: 'Rahim Uddin', date: '2024-12-15', status: 'completed', package: 'Detailed', price: '499' },
    { id: 2, name: 'Farhana Akter', date: '2024-12-12', status: 'processing', package: 'Premium', price: '999' },
    { id: 3, name: 'Hasan Mahmud', date: '2024-12-10', status: 'payment_pending', package: 'Basic', price: '199' },
    { id: 4, name: 'Nadia Sultana', date: '2024-12-08', status: 'pending', package: 'Detailed', price: '499' },
    { id: 5, name: 'Kamal Hossain', date: '2024-12-05', status: 'completed', package: 'Basic', price: '199' },
  ];

  const getStatusBadge = (status) => {
    const statusMap = {
      completed: { label: t.completed, className: 'bg-green-100 text-green-700' },
      processing: { label: t.processing, className: 'bg-blue-100 text-blue-700' },
      pending: { label: t.pending, className: 'bg-amber-100 text-amber-700' },
      payment_pending: { label: t.paymentPending, className: 'bg-red-100 text-red-700' },
      cancelled: { label: t.cancelled, className: 'bg-gray-100 text-gray-700' },
    };
    return statusMap[status] || statusMap.pending;
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 font-sans bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{t.myRequests}</h1>
          <Link
            to="/submit-request"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors shadow-md shadow-amber-500/25"
          >
            {t.newRequest}
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase">{t.personsName}</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase hidden sm:table-cell">{t.date}</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase hidden md:table-cell">{t.package}</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase hidden lg:table-cell">{t.price}</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase">{t.status}</th>
                  <th className="px-4 py-3 text-right text-gray-500 font-medium text-xs uppercase">{t.action}</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => {
                  const status = getStatusBadge(req.status);
                  return (
                    <tr key={req.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">{req.name}</td>
                      <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{req.date}</td>
                      <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{req.package}</td>
                      <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">৳ {req.price}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.className}`}>
                          {status.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        {req.status === 'completed' ? (
                          <Link to={`/report/${req.id}`} className="text-amber-500 hover:text-amber-600 font-medium text-xs">
                            {t.viewReport}
                          </Link>
                        ) : req.status === 'payment_pending' ? (
                          <Link to={`/payment/${req.id}`} className="text-amber-500 hover:text-amber-600 font-medium text-xs">
                            {t.payNow}
                          </Link>
                        ) : req.status === 'pending' ? (
                          <span className="text-gray-400 text-xs">{t.waitingForApproval}</span>
                        ) : (
                          <span className="text-gray-400 text-xs">{t.inProgress}</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyRequests;