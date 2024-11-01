const Pagination = ({ totalPages, currentPage, paginate }) => (
  <div className="flex justify-center mt-4">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => paginate(index + 1)}
        className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
