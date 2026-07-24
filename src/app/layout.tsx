import type { Metadata, Viewport } from "next";
import "./globals.css";
import { EnterpriseProvider } from "@/providers/enterprise-provider";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { AppProvider } from "@/providers/app-provider";

export const metadata: Metadata = {
  title: "Live Story | Every Life Matters",
  description: "Digital life archive and memory reconstruction platform.",
  applicationName: "Live Story",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          <EnterpriseProvider>
            <AppProvider>
              <ThemeProvider>
                {children}
              </ThemeProvider>
            </AppProvider>
          </EnterpriseProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
