

// import React, { useEffect } from 'react';

// export default function DeleteAccount() {
//   // Scroll to top on mount
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const steps = [
//     "Open ScrollSell and tap your profile photo.",
//     "Go to the Settings → Account tab.",
//     "Tap Delete account.",
//     "A new Delete Account screen will appear with a warning. Read it carefully and tap the Delete My Account button.",
//     "A confirmation popup will appear. Tap Delete to permanently delete your account, or Cancel if you want to keep it.",
//   ];

//   return (
//     <div className="w-full max-w-3xl mx-auto px-6 py-16 md:py-24 font-sans text-gray-900">
      
//       {/* Header Section */}
//       <div className="mb-10">
//         <span className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-4">
//           Account
//         </span>
//         <h1 className="text-5xl font-serif italic text-gray-900 mb-4">
//           Delete your account
//         </h1>
//         <p className="text-[15px] text-gray-600">
//           You can delete your ScrollSell account directly from the app.
//         </p>
//       </div>

//       {/* In the app Card */}
//       <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm mb-6">
//         <h2 className="text-lg font-bold text-gray-900 mb-6">In the app</h2>
//         <ol className="space-y-4">
//           {steps.map((step, index) => (
//             <li key={index} className="flex items-start gap-4">
//               <span className="shrink-0 w-6 h-6 rounded-full bg-[#E8F5ED] text-[#0FA958] text-xs font-bold flex items-center justify-center mt-0.5">
//                 {String(index + 1).padStart(2, '0')}
//               </span>
//               <span className="text-[14px] text-gray-700 leading-relaxed">
//                 {step}
//               </span>
//             </li>
//           ))}
//         </ol>
//       </div>

//       {/* Deleted Card */}
//       <div className="bg-[#E8F5ED] rounded-2xl p-6">
//         <span className="text-[10px] font-bold tracking-widest text-[#0FA958] uppercase block mb-3">
//           Deleted
//         </span>
//         <ul className="text-[13px] text-gray-700 space-y-1.5">
//           <li>Profile, name and photo</li>
//           <li>All listings and videos</li>
//           <li>Chats and saved items</li>
//           <li>Location history</li>
//         </ul>
//       </div>

//     </div>
//   );
// }

import React, { useEffect } from 'react';

export default function DeleteAccount() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    "Open ScrollSell and tap your profile photo.",
    "Go to the Settings → Account tab.",
    "Tap Delete account.",
    "A new Delete Account screen will appear with a warning. Read it carefully and tap the Delete My Account button.",
    "A confirmation popup will appear. Tap Delete to permanently delete your account, or Cancel if you want to keep it.",
  ];

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
          You can delete your ScrollSell account directly from the app.
        </p>
      </div>

      {/* In the app Card */}
      <div className="border border-[#E5E5E5] rounded-2xl p-8 bg-[#FBF9F6] shadow-sm mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">In the app</h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-4">
              {/* Changed from green to soft purple background & purple text */}
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#EBE9FF] text-[#9B51E0] text-xs font-bold flex items-center justify-center mt-0.5">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[14px] text-gray-700 leading-relaxed">
                {step}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Deleted Card */}
      {/* Changed from green tint to a soft lavender that matches your logo */}
      <div className="bg-[#F4F0FF] rounded-2xl p-6">
        <span className="text-[10px] font-bold tracking-widest text-[#9B51E0] uppercase block mb-3">
          Deleted
        </span>
        <ul className="text-[13px] text-gray-700 space-y-1.5">
          <li>Profile, name and photo</li>
          <li>All listings and videos</li>
          <li>Chats and saved items</li>
          <li>Location history</li>
        </ul>
      </div>

    </div>
  );
}