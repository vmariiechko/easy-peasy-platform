import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout({ children }) {
  let { pathname } = useLocation();
  return (
    <div className="bg-gradient-to-r from-violet-50 via-fuchsia-100 to-indigo-200 overflow-hidden flex flex-col min-h-screen">
      {pathname !== "/dashboard" && <Navbar />}
      <main className="flex-1">
          {children}
      </main>

      {pathname !== "/dashboard" && <Footer />}
    </div>
  );
}

export default RootLayout;