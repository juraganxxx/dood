import SearchBar from '../molecules/SearchBar';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
  <header className="py-3 m-2 flex flex-col items-center justify-center bg-gray-200">
    <h1 className='uppercase text-3xl font-bold mb-3'>Juraganxxx</h1>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  </header>
  )
}

export default Header;
