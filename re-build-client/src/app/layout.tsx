"use client"

import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { Provider } from 'react-redux';
import store from '@/store/store';

import { Sidebar } from '@/components/ui/sidebar';
import useAuthGuard from '@/hooks/authGuard.hook';

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  useAuthGuard();
  return (
    <html lang="en">
      <body className={cn(fontHeading.variable, fontBody.variable)}>
        <Provider store={store}>
          <div className='flex'>
            <Sidebar />
            <div className="flex flex-col w-full">
              <main className="flex-1 overflow-y-auto px-4">
                  {children}
              </main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
