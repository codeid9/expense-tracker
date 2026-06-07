import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BarChart3, History, LogOut } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'History', path: '/history', icon: History },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* DESKTOP HEADER */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            ₹
          </div>
          <span className="font-bold text-xl text-gray-800 tracking-tight">
            <Link to={"/"}>
            FinTrack
            </Link>
            </span>
        </div>
        
        {/* Center Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Logout Button */}
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </nav>

      {/* 📱 MOBILE BOTTOM NAVIGATION */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 px-4 py-2 flex justify-between items-center z-50 pb-safe shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 py-1 px-4 rounded-xl transition-all ${
                isActive ? 'text-indigo-600 font-semibold' : 'text-gray-400'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] tracking-wide">{item.name}</span>
            </Link>
          );
        })}

        {/* Mobile Logout Icon Button */}
        <button 
          onClick={handleLogout}
          className="flex flex-col items-center gap-1 py-1 px-4 text-red-500 rounded-xl"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-[10px] tracking-wide">Logout</span>
        </button>
      </nav>
    </>
  );
}