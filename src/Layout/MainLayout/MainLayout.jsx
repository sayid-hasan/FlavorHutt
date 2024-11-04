import { Outlet } from "react-router-dom";
import Nav from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Nav></Nav>
      <div className="min-h-screen max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
