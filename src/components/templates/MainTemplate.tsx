import type React from 'react';
import Footer from '../organisms/Footer';
import Header from '../organisms/Header';

const MainTemplate = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-hidden">
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/background.png')",
      }}>
      <div className="container mx-auto pb-4 px-0 pt-0 xl:max-w-[1200px]">
        <Header />
        <main>{children}</main>
      </div>
    </div>
    <Footer />
  </div>
);

export default MainTemplate;
