import "./globals.css"; // tailwind
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/Theme/ThemeContext";

export const metadata = {
  title: "Abhijit Peringadan | Entry-Level Full Stack MERN Developer Portfolio",
  description: "Portfolio of Abhijit Peringadan, an entry-level Full Stack MERN Developer skilled in React, Next.js, Node.js, Express, MongoDB, and modern web development.",
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
