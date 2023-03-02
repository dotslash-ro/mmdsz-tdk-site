import { useEffect, useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    rootRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <div ref={rootRef}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
