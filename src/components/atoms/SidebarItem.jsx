export default function SidebarItem({ children, isActive, onClick }) {
  return (
    <li className={`sidebar-item text-sm px-3 py-[2px] mb-0.5 mx-2 text-end capitalize rounded ${isActive ? 'bg-[#333] text-gray-100 font-medium' : '' } hover:font-medium hover:text-gray-100`} onClick={onClick}>
      {children}
    </li>
  )
}