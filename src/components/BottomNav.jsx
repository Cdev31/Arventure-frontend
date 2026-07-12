import { Home, Briefcase, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const BottomNav = () => {
  const { pathname } = useLocation();
  
  const navItems = [
    { icon: <Home size={22}/>, label: 'Inicio', path: '/' },
    { icon: <Briefcase size={22}/>, label: 'Viajes', path: '/viajes' },
    { icon: <User size={22}/>, label: 'Perfil', path: '/perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <Link key={item.label} to={item.path} className="flex flex-col items-center gap-1">
          <div className={pathname === item.path ? 'text-primary' : 'text-gray-400'}>
            {item.icon}
          </div>
          <span className={`text-[10px] ${pathname === item.path ? 'text-primary font-bold' : 'text-gray-400'}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
};