import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import { PropertyProvider } from "./context/PropertyContext";
import { EnquiryProvider } from "./context/EnquiryContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddProperty from "./pages/AddProperty";
import EditProperty from "./pages/EditProperty";
import AdminEnquiries from "./pages/AdminEnquiries";
import ChatBot from "./components/ChatBot";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import SocialBar from "./components/SocialBar";
import { UserAuthProvider } from "./context/UserAuthContext";
import "./styles/index.css";
import AdminAnalytics from "./pages/AdminAnalytics";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import { useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedProperty={setSelectedProperty}
          />
        );
      case "listings":
        return (
          <Listings
            setCurrentPage={setCurrentPage}
            setSelectedProperty={setSelectedProperty}
          />
        );
      case "property-details":
        return (
          <PropertyDetails
            property={selectedProperty}
            setCurrentPage={setCurrentPage}
          />
        );
      case "admin-analytics":
        return (
          <AdminAnalytics
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        );
      case "about":
        return <About setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact setCurrentPage={setCurrentPage} />;
      case "privacy-policy":
        return <PrivacyPolicy setCurrentPage={setCurrentPage} />;
      case "terms-conditions":
        return <TermsConditions setCurrentPage={setCurrentPage} />;
      case "admin-login":
        return <AdminLogin setCurrentPage={setCurrentPage} />;
      case "admin-dashboard":
        return (
          <AdminDashboard
            setCurrentPage={setCurrentPage}
            selectedPropertyId={selectedPropertyId}
            setSelectedPropertyId={setSelectedPropertyId}
          />
        );
      case "add-property":
        return <AddProperty setCurrentPage={setCurrentPage} />;
      case "edit-property":
        return (
          <EditProperty
            setCurrentPage={setCurrentPage}
            propertyId={selectedPropertyId}
          />
        );
      case "admin-enquiries":
        return <AdminEnquiries setCurrentPage={setCurrentPage} />;
      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedProperty={setSelectedProperty}
          />
        );
    }
  };

  const showNavbar = ![
    "admin-login",
    "admin-dashboard",
    "add-property",
    "edit-property",
    "admin-enquiries",
  ].includes(currentPage);
  const showFooter = ![
    "admin-login",
    "admin-dashboard",
    "add-property",
    "edit-property",
    "admin-enquiries",
  ].includes(currentPage);

  return (
    <AuthProvider>
      <UserAuthProvider>
        <PropertyProvider>
          <EnquiryProvider>
            <div className="min-h-screen bg-gray-50">
                {showNavbar && (
                  <Navbar
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                )}
                {/* Site-wide right-side social icons */}
                <SocialBar />
                <ErrorBoundary>
                  {renderPage()}
                </ErrorBoundary>
                {showFooter && <Footer setCurrentPage={setCurrentPage} />}
              <ChatBot />
              <FloatingWhatsApp />
            </div>
          </EnquiryProvider>
        </PropertyProvider>
      </UserAuthProvider>
    </AuthProvider>
  );
}

export default App;
