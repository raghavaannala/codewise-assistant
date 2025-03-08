
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, Code, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Study Modules', path: '/study', icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { name: 'CodeGenie', path: '/code', icon: <Code className="w-4 h-4 mr-2" /> },
    { name: 'Search', path: '/search', icon: <Search className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 glass shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gradient">StudyBuddy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary transition-colors duration-200 flex items-center"
              >
                {link.icon && link.icon}
                {link.name}
              </Link>
            ))}
            <Button className="ml-4 btn-hover">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 glass shadow-lg md:hidden transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-3 px-4 text-sm font-medium hover:bg-secondary rounded-lg transition-colors duration-200 my-2 flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.icon && link.icon}
              {link.name}
            </Link>
          ))}
          <Button className="w-full my-2 btn-hover">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
