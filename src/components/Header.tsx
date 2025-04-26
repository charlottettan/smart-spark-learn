
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-8 bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-edu-primary to-edu-accent3 rounded-md w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl text-edu-dark">SmartSpark</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-edu-dark hover:text-edu-primary font-medium transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-edu-dark hover:text-edu-primary font-medium transition-colors">
            Features
          </Link>
          <Link to="/student" className="text-edu-dark hover:text-edu-primary font-medium transition-colors">
            For Students
          </Link>
          <Link to="/teacher" className="text-edu-dark hover:text-edu-primary font-medium transition-colors">
            For Teachers
          </Link>
        </nav>

        {/* Desktop Login/Signup */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-edu-primary text-edu-primary hover:bg-edu-primary hover:text-white">
            Log in
          </Button>
          <Button className="bg-edu-primary hover:bg-edu-primary/90 text-white">
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-edu-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md z-50 py-4 px-6 flex flex-col space-y-4">
          <Link to="/" className="text-edu-dark hover:text-edu-primary font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/features" className="text-edu-dark hover:text-edu-primary font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Features
          </Link>
          <Link to="/student" className="text-edu-dark hover:text-edu-primary font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            For Students
          </Link>
          <Link to="/teacher" className="text-edu-dark hover:text-edu-primary font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
            For Teachers
          </Link>
          <div className="pt-4 flex flex-col space-y-3">
            <Button variant="outline" className="w-full border-edu-primary text-edu-primary hover:bg-edu-primary hover:text-white">
              Log in
            </Button>
            <Button className="w-full bg-edu-primary hover:bg-edu-primary/90 text-white">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
