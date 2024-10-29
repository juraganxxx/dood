const Heading = ({ level, children }) => {
  const Tag = `h${level}`;
  const className = level === 1 ? 'text-3xl font-bold mb-4' :
                level === 2 ? 'text-2xl font-bold mb-3' :
                level === 3 ? 'text-[20px] font-bold mb-2' :
                level === 4 ? 'text-base font-bold mb-1' :
                level === 5 ? 'text-sm font-bold mb-1' :
                level === 6 ? 'text-xs font-bold mb-1' : 
                'text-base font-bold mb-1';
  return <Tag className={`${className} text-gray-800 capitalize`}>{children}</Tag>;
};

export default Heading;