const Button = ({ children }) => (
  <button
    type="submit"
    className="w-12 h-10 border border-[#00B4CC] bg-[#00B4CC] text-center text-white rounded-r-md flex items-center justify-center"
  >
    {children}
  </button>
);

export default Button;
