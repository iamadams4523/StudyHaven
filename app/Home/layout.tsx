'use client';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <div className="absolute right-4 top-4">
        <Sidebar />
      </div>
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
