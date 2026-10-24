import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 flex flex-col">
  

      {/* Main Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-20">
        
        {/* Title Section */}
        <div className="mb-16">
          <span className="text-[11px] font-bold tracking-[0.15em] text-gray-500 uppercase block mb-4">
            Legal
          </span>
          <h1 className="text-5xl md:text-6xl font-serif italic text-gray-900 mb-4">
            Privacy policy
          </h1>
          <p className="text-sm text-gray-400">
            Last updated: 19 Oct 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12 text-[15px] leading-relaxed text-gray-700">
          
          {/* Intro */}
          <p>
            This policy explains how [ScrollSell Technologies Pvt. Ltd.] ("ScrollSell", "we") collects, uses and protects your personal data when you use the ScrollSell app and website. We process personal data in line with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Data we collect</h2>
            <ul className="space-y-3">
              <li><strong className="text-gray-900">Account data:</strong> mobile number, name, profile photo and city.</li>
              <li><strong className="text-gray-900">Listing content:</strong> videos, titles, prices and descriptions you post.</li>
              <li><strong className="text-gray-900">Location:</strong> approximate location to show items near you. Precise location only if you allow it.</li>
              <li><strong className="text-gray-900">Messages:</strong> chats between buyers and sellers, stored so both sides can see their conversation.</li>
              <li><strong className="text-gray-900">Device and usage data:</strong> device model, OS version, app version, crash logs and in-app activity.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. How we use it</h2>
            <p>
              To create and secure your account, show your listings to nearby buyers, deliver chats, personalise your feed, prevent fraud and spam, respond to support requests and meet legal obligations. We do not sell your personal data.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Who we share it with</h2>
            <p>
              Your public profile and listings are visible to other users. We share data with service providers who host, store, analyse or deliver messages for us, under contracts that limit their use of it. We may disclose data to law enforcement when required by Indian law.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Permissions</h2>
            <p>
              Camera and microphone are used only when you record a listing. Location is used for the nearby feed. Notifications are used for chats and listing updates. You can turn any of these off in your phone settings.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Retention</h2>
            <p>
              We keep your data while your account is active. When you delete your account, we remove your profile, listings and chats within 30 days, except records we must keep by law (for example, for fraud investigation or tax purposes), which are kept for the period the law requires. See how to delete your account.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Your rights</h2>
            <p>
              You can access, correct or erase your personal data, withdraw consent, nominate another person to exercise your rights, and raise a grievance with us. If you are not satisfied with our response, you may approach the Data Protection Board of India.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Security</h2>
            <p>
              Data is encrypted in transit and access is limited to staff who need it. No system is fully secure, so please keep your OTP private and never share it with buyers or sellers.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">8. Children</h2>
            <p>
              ScrollSell is for users aged 18 and above. We do not knowingly collect data from children.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">9. Changes</h2>
            <p>
              We will notify you in the app before material changes take effect.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">10. Contact</h2>
            <p>
              Email privacy@scrollsell.app or write to our Grievance Officer.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}