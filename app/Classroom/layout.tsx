'use client';
import Footer from '@/components/Footer';
import SidebarBlue from '@/components/SidebarBlue';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute right-4 top-4">
        <SidebarBlue />
      </div>
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
