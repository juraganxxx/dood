import { useEffect, useState } from "react";
import Link from "../atoms/Link";
import SidebarItem from "../atoms/SidebarItem";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Home');
  const location = useLocation();

  const items = [
    { name: 'quick start', path: '/quick-start' },
    { name: 'creating and nesting components', path: '/creating-and-nesting-components' },
    { name: 'writing markup with JSX', path: '/writing-markup-with-JSX' },
    { name: 'displaying data', path: '/displaying-data' },
    { name: 'render condotions and list', path: '/render-condotion-and-list' },
    { name: 'respond to events and update the screen', path: '/respond-to-events-and-update-the-screen' },
    
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const active = items.find(item => item.path === currentPath)?.name;
    if (active) {
      setActiveItem(active);
    } else {
      setActiveItem('Home');
    }
  }, [location.pathname]);

  return (
    <div className="w-[250px] px-4 bg-gray-200 h-screen fixed">
      <h2 className="my-5 text-2xl text-end font-semibold">React Dev</h2>
      <ul className="rounded py-2 bg-gray-400">
        {items.map(item => (
          <Link to={item.path} key={item.name} aria-current={activeItem === item.name ? "page" : undefined}>
            <SidebarItem isActive={activeItem === item.name}>
              {item.name}
            </SidebarItem>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
