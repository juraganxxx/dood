import SearchBar from '../molecules/SearchBar';

const Header = () => (
  <header className="flex flex-col items-center justify-center">
    <h1 className='uppercase text-3xl font-bold mb-6'>Asian Hot</h1>
    <SearchBar />
  </header>
);

export default Header;
