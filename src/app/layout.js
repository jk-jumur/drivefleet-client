import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "DriveFleet | Premium Car Rental",
    template: "%s | DriveFleet",
  },
  description: "Modern car rental platform for exploring, booking, and managing premium vehicle listings.",
  keywords: ["car rental", "premium cars", "DriveFleet", "book a car", "fleet booking"],
  openGraph: {
    title: "DriveFleet | Premium Car Rental",
    description: "Discover premium vehicles and book your ideal car with confidence.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased">
        <ThemeProvider>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
              style: {
                borderRadius: "12px",
                background: "#0f172a",
                color: "#f8fafc",
                border: "1px solid rgba(148, 163, 184, 0.2)",
              },
            }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
