// src/templates/MainLayout.js
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className='px-2'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
