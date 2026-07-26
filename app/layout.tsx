// app/layout.tsx
import './globals.css';
import React from 'react';

export const metadata = {
  title: 'MegaClick - יוצרים. משחקים. מנצחים!',
  description: 'פלטפורמת המשחקים, הטריוויה והסקרים האינטראקטיבית המתקדמת.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
