import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/Provider";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/components/AuthProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <AuthProvider>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ReduxProvider>
            <main>
              <Header />
              {children}
              <Footer />
              <Toaster />
            </main>
          </ReduxProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
