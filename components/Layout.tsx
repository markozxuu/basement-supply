import Head from './Head';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
