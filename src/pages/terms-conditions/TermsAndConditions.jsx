import React, { useEffect } from 'react';

export default function TermsAndConditions() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#FAFAFA] font-sans text-gray-900 flex flex-col">
      
      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 md:py-24">
        
        {/* Title Section */}
        <div className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-4">
            Legal
          </span>
          <h1 className="text-5xl md:text-6xl font-serif italic text-gray-900 mb-4">
            Terms & conditions
          </h1>
          <p className="text-sm text-gray-400">
            Last updated: 19 Oct 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12 text-[15px] leading-relaxed text-gray-700">
          
          {/* Intro */}
          <p>
            These terms govern your use of ScrollSell, operated by [ScrollSell Technologies Pvt. Ltd.], [registered address]. By creating an account you agree to them.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. What ScrollSell is</h2>
            <p>
              ScrollSell is a platform that lets people list items using short videos and chat with buyers. We are an intermediary under the IT Act, 2000. We are not a party to any sale, do not own or inspect listed items, and do not guarantee their quality, safety or legality.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Eligibility and accounts</h2>
            <p>
              You must be 18 or older and verify an Indian mobile number. One person, one account. You are responsible for all activity on your account.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Listings</h2>
            <p>
              Your video must show the actual item you are selling. Prices are in ₹ and must be accurate. You may not list items in our prohibited items list. We may remove listings that break these terms without notice.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Fees</h2>
            <p>
              Listing and messaging are free. If we introduce optional paid features, we will show the price before you pay.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Deals between users</h2>
            <p>
              Payment, delivery and returns are agreed directly between buyer and seller. Meet in public places, inspect items before paying, and never pay in advance to someone you have not met.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Your content</h2>
            <p>
              You own the videos you upload. You give ScrollSell a non-exclusive, royalty-free licence to host, display and promote them within the app and in ScrollSell marketing, until you delete them.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Prohibited conduct</h2>
            <p>
              No fraud, impersonation, harassment, spam, scraping, or attempts to move users off-platform to scam them. No content that is obscene, hateful, defamatory or unlawful.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Suspension and termination</h2>
            <p>
              We may suspend or terminate accounts that break these terms. You can stop using ScrollSell and delete your account at any time.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Liability</h2>
            <p>
              ScrollSell is provided "as is". To the extent permitted by law, we are not liable for losses arising from deals between users or from listings posted by others.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Governing law</h2>
            <p>
              These terms are governed by the laws of India. Courts in [City] have exclusive jurisdiction.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">11. Grievances</h2>
            <p>
              Complaints about content or accounts can be sent to our Grievance Officer.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}