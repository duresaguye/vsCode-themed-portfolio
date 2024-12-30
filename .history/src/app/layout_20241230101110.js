import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'VS Code Portfolio',
  description: 'A VS Code-inspired portfolio built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-300 font-mono">
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
