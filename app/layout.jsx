import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import SesionWrapper from "@/components/SesionWrapper";

export const metadata = {
  title: "PropertyPulse",
  description:
    "PropertyPulse is a real estate platform that helps you find the perfect home.",
};

const MainLayout = ({ children }) => {
  return (
    <SesionWrapper>
      <AuthProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
      </AuthProvider>
    </SesionWrapper>
  );
};

export default MainLayout;
