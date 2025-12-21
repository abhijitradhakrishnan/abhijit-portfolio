import "./globals.css"; // tailwind
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/Theme/ThemeContext";

export const metadata = {
  title: "Portfolio - Abhijit Perindadan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider>
          <Navbar/>
            {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
