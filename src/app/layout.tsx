import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-blue-50 antialiased flex justify-center items-baseline md:items-center h-screen min-h-[540px] relative">
      {children}
      <Toaster position="top-center" closeButton />
    </div>
  );
}
