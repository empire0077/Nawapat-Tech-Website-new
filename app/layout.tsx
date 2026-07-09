import { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nawapat Thamchob | AI Strategy | Enterprise Architecture",
  description: "Dr. Nawapat Thamchob is an Enterprise Architect specializing in AI Architecture, Enterprise Architecture, Digital Transformation, and Intelligent Enterprise Systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

