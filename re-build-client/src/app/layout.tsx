import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { Sidebar } from '@/components/ui/sidebar';

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
  return (
    <html lang="en">
      <body className={cn(fontHeading.variable, fontBody.variable)}>
          <div className='flex'>
          <Sidebar />
          <div className="flex flex-col w-full">
            <main className="flex-1 overflow-y-auto px-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
