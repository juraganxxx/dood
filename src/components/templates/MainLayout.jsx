import Header from '../organisms/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="layout p-2">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
