import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/Homepage/HomePage';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import TermsAndConditions from './pages/terms-conditions/TermsAndConditions';
import Support from './pages/Support/Support';
import CommunityGuidelines from './pages/Community/CommunityGuidelines';
import DeleteAccount from './pages/Account/DeleteAccount';
import NotFound from './pages/Utility/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/delete-account" element={<DeleteAccount />} /> 
          <Route path="/community" element={<CommunityGuidelines />} />  
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}  