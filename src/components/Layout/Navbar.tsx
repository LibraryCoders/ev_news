import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ZapIcon, LayersIcon, CrownIcon, UserIcon, MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-[#0c1018]/80 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <ZapIcon className="h-7 w-7 text-blue-400" />
                <div className="absolute inset-0 blur-md bg-blue-400/50 rounded-full"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Electric News
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<LayersIcon className="h-4 w-4" />} text="Home" />
            <NavLink to="/categories" icon={<LayersIcon className="h-4 w-4" />} text="Categories" />
            <NavLink to="/subscription" icon={<CrownIcon className="h-4 w-4" />} text="Subscription" />
            <Link to="/login" className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 text-white font-medium">
              <UserIcon className="h-4 w-4 mr-2" />
              Sign In
            </Link>
          </nav>
          <div className="flex items-center md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md text-gray-400 hover:text-white">
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-[#0c1018] border-b border-blue-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" text="Home" />
            <MobileNavLink to="/categories" text="Categories" />
            <MobileNavLink to="/subscription" text="Subscription" />
            <MobileNavLink to="/login" text="Sign In" />
          </div>
        </div>}
    </header>;
};
const NavLink = ({
  to,
  icon,
  text
}) => <Link to={to} className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors duration-200">
    {icon}
    <span>{text}</span>
  </Link>;
const MobileNavLink = ({
  to,
  text
}) => <Link to={to} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-blue-900/20">
    {text}
  </Link>;
export default Navbar;