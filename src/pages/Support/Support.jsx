// import React, { useState, useEffect } from 'react';

// export default function Support() {
//   // Scroll to top on mount
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // State for the first FAQ to be open by default (matching your screenshot)
//   const [openFaq, setOpenFaq] = useState(0);

//   const faqs = [
//     {
//       question: "Is ScrollSell free?",
//       answer: "Yes. Downloading, listing and chatting are free. There are no listing or transaction fees."
//     },
//     {
//       question: "How long can my listing video be?",
//       answer: "Currently, listing videos can be up to 30 seconds long. This keeps the browsing experience fast and engaging for buyers."
//     },
//     {
//       question: "How do I get the verified tick?",
//       answer: "Verified ticks are currently reserved for trusted sellers with a history of successful, authentic transactions on ScrollSell. We are rolling this out gradually."
//     },
//     {
//       question: "Does ScrollSell handle payments or delivery?",
//       answer: "No. ScrollSell is a platform to connect buyers and sellers. All payments, delivery, and returns are agreed upon directly between the two parties."
//     },
//     {
//       question: "How do I report a scam or bad listing?",
//       answer: "You can report a listing directly from the item page by tapping the menu icon and selecting 'Report'. Alternatively, you can use the in-app chat to contact our support team."
//     },
//     {
//       question: "How do I delete my account?",
//       answer: "You can delete your account directly from the app by going to Profile -> Settings -> Delete Account. If you need assistance, please email support@scrollsell.in."
//     }
//   ];

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? -1 : index);
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 font-sans text-gray-900">
      
//       {/* Page Header */}
//       <div className="mb-12">
//         <span className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-4">
//           Support
//         </span>
//         <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
//           How can we <span className="font-serif italic text-[#0FA958] font-normal">help?</span>
//         </h1>
//       </div>

//       {/* Contact Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
//         {/* Email Card */}
//         <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
//           <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-3">
//             Email
//           </span>
//           <p className="text-gray-900 font-medium mb-1">support@scrollsell.in</p>
//           <p className="text-sm text-gray-500">Replies within 24 hours</p>
//         </div>

//         {/* In App Card */}
//         <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
//           <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-3">
//             In the app
//           </span>
//           <p className="text-gray-900 font-medium mb-1">Profile → Help → Chat with us</p>
//           <p className="text-sm text-gray-500">Mon–Sat, 9am–9pm IST</p>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="mb-24">
//         <h2 className="text-4xl font-serif italic text-gray-900 mb-8">
//           Common questions
//         </h2>
        
//         <div className="border-t border-gray-200">
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b border-gray-200">
//               <button 
//                 onClick={() => toggleFaq(index)}
//                 className="w-full py-5 flex justify-between cursor-pointer items-center text-left hover:text-[#0FA958] transition-colors focus:outline-none group"
//               >
//                 <span className="text-[15px] font-semibold text-gray-900 group-hover:text-[#0FA958] transition-colors">
//                   {faq.question}
//                 </span>
//                 <span className="text-gray-400 group-hover:text-[#0FA958] transition-colors">
//                   {openFaq === index ? (
//                     // Minus Icon
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
//                   ) : (
//                     // Plus Icon
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
//                   )}
//                 </span>
//               </button>
              
//               {/* Smooth Accordion Animation */}
//               <div 
//                 className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                   openFaq === index ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
//                 }`}
//               >
//                 <p className="text-[14px] text-gray-600 leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Grievance Officer Box */}
//       <div className="bg-[#E8F5ED] rounded-3xl p-8 md:p-10">
//         <span className="text-[10px] font-bold tracking-[0.15em] text-[#0FA958] uppercase block mb-4">
//           Grievance Officer
//         </span>
//         <p className="text-[14px] text-gray-700 leading-relaxed mb-8 max-w-3xl">
//           Under the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the DPDP Act, 2023, you can raise complaints about content, accounts or your personal data with our Grievance Officer. We acknowledge complaints within <strong className="text-gray-900 font-semibold">24 hours</strong> and resolve them within <strong className="text-gray-900 font-semibold">15 days</strong>.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
//           <div>
//             <span className="text-[11px] text-gray-500 font-medium block mb-1">Name</span>
//             <span className="text-gray-900 font-medium">[Officer name]</span>
//           </div>
//           <div>
//             <span className="text-[11px] text-gray-500 font-medium block mb-1">Email</span>
//             <a href="mailto:grievance@scrollsell.app" className="text-gray-900 font-medium hover:underline">
//               grievance@scrollsell.app
//             </a>
//           </div>
//           <div>
//             <span className="text-[11px] text-gray-500 font-medium block mb-1">Address</span>
//             <span className="text-gray-900 font-medium">[Registered office address]</span>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

export default function Support() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for the first FAQ to be open by default (matching your screenshot)
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Is ScrollSell free?",
      answer: "Yes. Downloading, listing and chatting are free. There are no listing or transaction fees."
    },
    {
      question: "How long can my listing video be?",
      answer: "Currently, listing videos can be up to 30 seconds long. This keeps the browsing experience fast and engaging for buyers."
    },
    {
      question: "How do I get the verified tick?",
      answer: "Verified ticks are currently reserved for trusted sellers with a history of successful, authentic transactions on ScrollSell. We are rolling this out gradually."
    },
    {
      question: "Does ScrollSell handle payments or delivery?",
      answer: "No. ScrollSell is a platform to connect buyers and sellers. All payments, delivery, and returns are agreed upon directly between the two parties."
    },
    {
      question: "How do I report a scam or bad listing?",
      answer: "You can report a listing directly from the item page by tapping the menu icon and selecting 'Report'. Alternatively, you can use the in-app chat to contact our support team."
    },
    {
      question: "How do I delete my account?",
      answer: "You can delete your account directly from the app by going to Profile -> Settings -> Delete Account. If you need assistance, please email support@scrollsell.in."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24 font-sans text-gray-900">
      
      {/* Page Header */}
      <div className="mb-12">
        <span className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-4">
          Support
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          How can we <span className="font-serif italic text-[#9B51E0] font-normal">help?</span>
        </h1>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
        {/* Email Card */}
        <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-[#FBF9F6] shadow-sm">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-3">
            Email
          </span>
          <p className="text-gray-900 font-medium mb-1">support@scrollsell.in</p>
          <p className="text-sm text-gray-500">Replies within 24 hours</p>
        </div>

        {/* In App Card */}
        <div className="border border-[#E5E5E5] rounded-2xl p-6 bg-[#FBF9F6] shadow-sm">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-3">
            In the app
          </span>
          <p className="text-gray-900 font-medium mb-1">Profile → Help → Chat with us</p>
          <p className="text-sm text-gray-500">Mon–Sat, 9am–9pm IST</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-24">
        <h2 className="text-4xl font-serif italic text-gray-900 mb-8">
          Common questions
        </h2>
        
        <div className="border-t border-[#E5E5E5]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#E5E5E5]">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full py-5 flex justify-between cursor-pointer items-center text-left hover:text-[#9B51E0] transition-colors focus:outline-none group"
              >
                <span className="text-[15px] font-semibold text-gray-900 group-hover:text-[#9B51E0] transition-colors">
                  {faq.question}
                </span>
                <span className="text-gray-400 group-hover:text-[#9B51E0] transition-colors">
                  {openFaq === index ? (
                    // Minus Icon
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  ) : (
                    // Plus Icon
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  )}
                </span>
              </button>
              
              {/* Smooth Accordion Animation */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grievance Officer Box */}
      {/* Changed from green tint to a soft lavender that matches your logo */}
      <div className="bg-[#F4F0FF] rounded-3xl p-8 md:p-10">
        <span className="text-[10px] font-bold tracking-[0.15em] text-[#9B51E0] uppercase block mb-4">
          Grievance Officer
        </span>
        <p className="text-[14px] text-gray-700 leading-relaxed mb-8 max-w-3xl">
          Under the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the DPDP Act, 2023, you can raise complaints about content, accounts or your personal data with our Grievance Officer. We acknowledge complaints within <strong className="text-gray-900 font-semibold">24 hours</strong> and resolve them within <strong className="text-gray-900 font-semibold">15 days</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <span className="text-[11px] text-gray-500 font-medium block mb-1">Name</span>
            <span className="text-gray-900 font-medium">[Officer name]</span>
          </div>
          <div>
            <span className="text-[11px] text-gray-500 font-medium block mb-1">Email</span>
            <a href="mailto:grievance@scrollsell.app" className="text-gray-900 font-medium hover:underline">
              grievance@scrollsell.app
            </a>
          </div>
          <div>
            <span className="text-[11px] text-gray-500 font-medium block mb-1">Address</span>
            <span className="text-gray-900 font-medium">[Registered office address]</span>
          </div>
        </div>
      </div>

    </div>
  );
}