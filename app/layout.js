import '../styles/globals.css';

export const metadata = {
  title: 'Study Haven',
  description: 'Created by Aces Codes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
