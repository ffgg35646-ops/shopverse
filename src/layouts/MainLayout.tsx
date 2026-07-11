import { Outlet } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopBanner from "@/components/layout/TopBanner";
import ScrollToTop from "@/components/layout/ScrollToTop";


const MainLayout = () => {

  return (
    <div className="min-h-screen flex flex-col">

      <ScrollToTop />

      <TopBanner />

      <Navbar />


      <main className="flex-1">
        <Outlet />
      </main>


      <Footer />

    </div>
  );

};


export default MainLayout;
