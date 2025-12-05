import type React from 'react';
import FooterSkeleton from './FooterSkeleton';
import HeaderSkeleton from './HeaderSkeleton';

const MainTemplateSkeleton = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-hidden">
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/background.png')",
      }}>
      <div className="container mx-auto pb-0 xl:pb-4 p-4 pt-0 xl:px-0 xl:pt-0 xl:max-w-[1200px]">
        <HeaderSkeleton />
        <main>{children}</main>
      </div>
    </div>
    <FooterSkeleton />
  </div>
);

export default MainTemplateSkeleton;
