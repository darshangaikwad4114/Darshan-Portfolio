import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
// ...existing code...

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ...existing code... */}
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
