'use client';

import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
