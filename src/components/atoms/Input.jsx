const Input = ({ placeholder, onChange}) => (
  <input
    type="text"
    className="w-full border-2 border-r-0 border-[#00B4CC] p-2 h-10 rounded-l-md outline-none text-[#9DBFAF]"
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
