// pages/Dashboard.jsx
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Dashboard = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { label: t.totalRequests, value: '12', color: 'bg-blue-50 text-blue-600' },
    { label: t.pendingRequests, value: '3', color: 'bg-amber-50 text-amber-600' },
    { label: t.completedRequests, value: '8', color: 'bg-green-50 text-green-600' },
    { label: t.totalSpent, value: '৳ 1,396', color: 'bg-purple-50 text-purple-600' },
  ];

  const recentRequests = [
    { id: 1, name: 'Rahim Uddin', date: '2024-12-15', status: 'completed', package: 'Detailed' },
    { id: 2, name: 'Farhana Akter', date: '2024-12-12', status: 'processing', package: 'Premium' },
    { id: 3, name: 'Hasan Mahmud', date: '2024-12-10', status: 'payment_pending', package: 'Basic' },
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
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{t.dashboard}</h1>
            <p className="text-gray-500 text-sm">{t.welcomeBackUser}</p>
          </div>
          <Link
            to="/submit-request"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors shadow-md shadow-amber-500/25"
          >
            {t.newRequest}
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <p className="text-gray-400 text-xs">{stat.label}</p>
              <p className={`text-xl sm:text-2xl font-bold ${stat.color.split(' ')[1]}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Requests */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-semibold text-gray-800">{t.recentRequests}</h2>
            <Link to="/my-requests" className="text-amber-500 hover:text-amber-600 text-sm font-medium">
              {t.viewAll}
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase">{t.personsName}</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase hidden sm:table-cell">{t.date}</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase">{t.package}</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium text-xs uppercase">{t.status}</th>
                  <th className="px-4 py-3 text-right text-gray-500 font-medium text-xs uppercase">{t.action}</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((req) => {
                  const status = getStatusBadge(req.status);
                  return (
                    <tr key={req.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-800">{req.name}</td>
                      <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{req.date}</td>
                      <td className="px-4 py-3 text-gray-600">{req.package}</td>
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
                        ) : (
                          <span className="text-gray-400 text-xs">{t.waiting}</span>
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

export default Dashboard;