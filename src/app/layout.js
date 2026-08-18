import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/providers/ThemeProvider";

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
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
