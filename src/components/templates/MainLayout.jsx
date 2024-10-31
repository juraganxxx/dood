import Header from '../organisms/Header';

const MainLayout = ({ children, searchTerm, setSearchTerm }) => {
  return (
    <div className="layout p-2">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
