import { Outlet } from 'react-router-dom';
import Header from './../header/Header';
import Footer from './../footer/Footer';

export default function Layout() {
  return (
    // Removed 'overflow-hidden' so sticky works
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 relative flex flex-col">
      
      {/* Decorative Background Blobs - Changed to 'fixed' and wrapped in an overflow-hidden div */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-[#E6F4EA] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 bg-[#FDF5E6] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      {/* Constant Elements */}
      <Header />
      
      {/* Dynamic Page Content */}
      <main className="flex-1 flex flex-col relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}