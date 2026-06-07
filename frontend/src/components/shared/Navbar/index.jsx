import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Gandharva School
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/">Home</Link>

          <Link to="/courses">
            Courses
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/events">
            Events
          </Link>

          <Link to="/enquiry">
            Enquiry
          </Link>
        </div>
      </div>
    </nav>
  );
}