import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const MainLayout = ({ children, searchTerm, setSearchTerm }) => {
  return (
    <div className="">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className='px-2'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
