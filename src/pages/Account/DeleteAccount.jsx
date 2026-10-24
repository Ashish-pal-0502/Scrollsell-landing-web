import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DeleteAccount() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-16 md:py-24 font-sans text-gray-900">
      
      {/* Header Section */}
      <div className="mb-10">
        <span className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-4">
          Account
        </span>
        <h1 className="text-5xl font-serif italic text-gray-900 mb-4">
          Delete your account
        </h1>
        <p className="text-[15px] text-gray-600">
          You can delete your ScrollSell account from the app, or request deletion here if you no longer have the app.
        </p>
      </div>

      {/* In the app Card */}
      <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">In the app</h2>
        <ol className="space-y-4">
          {[
            "Open ScrollSell and tap your profile photo.",
            "Go to Settings → Account.",
            "Tap Delete account.",
            "Choose a reason (optional) and tap Continue.",
            "Enter the OTP sent to your registered number to confirm."
          ].map((step, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#E8F5ED] text-[#0FA958] text-xs font-bold flex items-center justify-center mt-0.5">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[14px] text-gray-700 leading-relaxed">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Web Form Card */}
      <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Request deletion on the web</h2>
        <p className="text-[14px] text-gray-600 mb-6">
          We'll send an OTP to confirm it's you, then delete the account linked to this number.
        </p>

        <form className="space-y-5">
          {/* Mobile Input */}
          <div>
            <label htmlFor="mobile" className="block text-[13px] font-bold text-gray-700 mb-2">
              Registered mobile number
            </label>
            <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-[#FAFAFA] focus-within:bg-white focus-within:border-[#0FA958] focus-within:ring-1 focus-within:ring-[#0FA958] transition-all">
              <span className="text-gray-500 font-medium mr-3 border-r border-gray-300 pr-3">+91</span>
              <input 
                type="tel" 
                id="mobile" 
                placeholder="98765 43210" 
                className="w-full bg-transparent outline-none text-[15px] text-gray-900 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Reason Input */}
          <div>
            <label htmlFor="reason" className="block text-[13px] font-bold text-gray-700 mb-2">
              Reason (optional)
            </label>
            <textarea 
              id="reason" 
              rows="3"
              placeholder="Tell us why you're leaving"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-[#FAFAFA] focus:bg-white focus:border-[#0FA958] focus:ring-1 focus:ring-[#0FA958] outline-none transition-all text-[15px] text-gray-900 placeholder:text-gray-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button 
              type="button" 
              className="bg-[#A1A1A1] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-500 transition cursor-not-allowed"
            >
              Send OTP & request deletion
            </button>
          </div>
        </form>

        <p className="text-[13px] text-gray-500 mt-6">
          Or email <a href="mailto:support@scrollsell.app" className="text-[#0FA958] font-bold hover:underline">support@scrollsell.app</a> from any address with your registered number.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {/* Deleted Card */}
        <div className="bg-[#E8F5ED] rounded-2xl p-6">
          <span className="text-[10px] font-bold tracking-widest text-[#0FA958] uppercase block mb-3">
            Deleted
          </span>
          <ul className="text-[13px] text-gray-700 space-y-1.5">
            <li>Profile, name and photo</li>
            <li>All listings and videos</li>
            <li>Chats and saved items</li>
            <li>Location history</li>
          </ul>
        </div>

        {/* Kept Card */}
        <div className="bg-[#FFF7EA] rounded-2xl p-6">
          <span className="text-[10px] font-bold tracking-widest text-[#D98E41] uppercase block mb-3">
            Kept, as required by law
          </span>
          <p className="text-[13px] text-gray-700 leading-relaxed">
            Records needed for fraud, safety or legal requests, for up to <strong className="font-semibold">180 days</strong>, then deleted.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline</h2>
        <p className="text-[15px] text-gray-700 leading-relaxed">
          Your account is deactivated immediately and hidden from other users. You have <strong className="font-bold text-gray-900">30 days</strong> to change your mind by logging back in. After that, deletion is permanent. Read our <Link to="/privacy" className="text-[#0FA958] underline decoration-1 underline-offset-4 hover:text-green-700 transition-colors">privacy policy</Link> for details.
        </p>
      </div>

    </div>
  );
}