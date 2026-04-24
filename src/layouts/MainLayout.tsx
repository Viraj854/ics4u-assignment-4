import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/Footer'

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
