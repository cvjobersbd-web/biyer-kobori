// pages/SubmitRequest.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const SubmitRequest = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gender: '',
    name: '',
    currentArea: '',
    permanentAddress: '',
    education: '',
    profession: '',
    fatherName: '',
    fatherProfession: '',
    motherName: '',
    motherProfession: '',
    siblings: '',
    maritalStatus: '',
    relationshipPurpose: '',
    extraNotes: '',
    urgentRequest: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to the backend
    alert(t.requestSubmitted);
    navigate('/dashboard');
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 font-sans bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
          
          <div className="p-6 sm:p-8 md:p-10">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{t.submitInfoRequest}</h1>
              <p className="text-gray-500 text-sm mt-2">{t.formDescription}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Gender Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.targetPersonGender} <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="pAtri"
                      checked={formData.gender === 'pAtri'}
                      onChange={handleChange}
                      className="w-4 h-4 text-amber-500"
                    />
                    <span className="text-sm">{t.groom}</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="patri"
                      checked={formData.gender === 'patri'}
                      onChange={handleChange}
                      className="w-4 h-4 text-amber-500"
                    />
                    <span className="text-sm">{t.bride}</span>
                  </label>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.personsName} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.enterFullName}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Current Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.currentArea} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="currentArea"
                  value={formData.currentArea}
                  onChange={handleChange}
                  placeholder={t.enterLocation}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Permanent Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.permanentAddress} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  placeholder={t.enterPermanentAddress}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Education */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.educationLabel}
                </label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  placeholder={t.educationPlaceholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>

              {/* Profession */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.professionLabel}
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder={t.professionPlaceholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>

              {/* Father's Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.fathersName}
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder={t.fathersPlaceholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>

              {/* Father's Profession */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.fathersProfession}
                </label>
                <input
                  type="text"
                  name="fatherProfession"
                  value={formData.fatherProfession}
                  onChange={handleChange}
                  placeholder={t.fathersProfessionPlaceholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>

              {/* Mother's Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.mothersName}
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  placeholder={t.mothersPlaceholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>

              {/* Mother's Profession */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.mothersProfession}
                </label>
                <input
                  type="text"
                  name="motherProfession"
                  value={formData.motherProfession}
                  onChange={handleChange}
                  placeholder={t.mothersProfessionPlaceholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                />
              </div>

              {/* Siblings Information */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.siblingsInfo}
                </label>
                <textarea
                  name="siblings"
                  value={formData.siblings}
                  onChange={handleChange}
                  placeholder={t.siblingsPlaceholder}
                  rows="2"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Marital Status */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.maritalStatus} <span className="text-red-500">*</span>
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  required
                >
                  <option value="">{t.selectMaritalStatus}</option>
                  <option value="unmarried">{t.unmarried}</option>
                  <option value="married">{t.married}</option>
                  <option value="divorced">{t.divorced}</option>
                  <option value="widowed">{t.widowed}</option>
                </select>
              </div>

              {/* Relationship Purpose */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.relationshipPurpose} <span className="text-red-500">*</span>
                </label>
                <select
                  name="relationshipPurpose"
                  value={formData.relationshipPurpose}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                  required
                >
                  <option value="">{t.selectPurpose}</option>
                  <option value="marriage">{t.marriagePurpose}</option>
                  <option value="family">{t.familyPurpose}</option>
                  <option value="other">{t.otherPurpose}</option>
                </select>
              </div>

              {/* Extra Notes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t.extraNotes}
                </label>
                <textarea
                  name="extraNotes"
                  value={formData.extraNotes}
                  onChange={handleChange}
                  placeholder={t.additionalPlaceholder}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Urgent Request */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="urgentRequest"
                  checked={formData.urgentRequest}
                  onChange={handleChange}
                  className="w-5 h-5 text-amber-500 rounded border-gray-300 focus:ring-amber-500"
                />
                <label className="text-sm text-gray-700">
                  {t.urgentRequest}
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/25"
              >
                {t.submitBtn}
              </button>
            </form>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.encrypted}</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.private}</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.trusted}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitRequest;