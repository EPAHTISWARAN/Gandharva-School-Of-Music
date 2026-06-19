import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../assets/images/home/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEnquiryClick = () => {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById("enquiry-section");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };

  const navLinkClass =
    "transition-all duration-300 hover:text-[var(--primary)] hover:scale-105";

  const dropdownItemClass =
    "block transition-all duration-300 hover:text-[var(--primary)] hover:translate-x-1";

  return (
    <nav
      className={`fixed top-0 left-0 z-[9999] w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-1">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Gandharva School Of Music"
            className="h-30 w-auto object-contain"
          />

          <span
            className={`text-2xl font-bold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Gandharva School Of Music
          </span>
        </Link>

        {/* Navigation */}
        <div
          className={`flex items-center gap-8 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Link to="/" className={navLinkClass}>
            Home
          </Link>

          {/* Courses Dropdown */}
          <div className="group relative">
            <Link to="/courses" className={navLinkClass}>
              Courses
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[760px] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/70 p-6 text-white opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-8">
                {/* Vocal */}
                <div>
                  <h3 className="mb-3 text-lg font-bold text-[var(--primary)]">
                    🎤 Vocal Music
                  </h3>

                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Hindustani Classical
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Semi-Classical
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Light Music
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Bollywood Singing
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses/vocal" className={dropdownItemClass}>
                        Bhajans & Devotional
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Instrumental */}
                <div>
                  <h3 className="mb-3 text-lg font-bold text-[var(--primary)]">
                    🎹 Instrumental Music
                  </h3>

                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Keyboard
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Guitar
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Tabla
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Harmonium
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Flute
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Violin
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/courses/instrumental"
                        className={dropdownItemClass}
                      >
                        Mrudungam
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Dance */}
                <div>
                  <h3 className="mb-3 text-lg font-bold text-[var(--primary)]">
                    💃 Dance
                  </h3>

                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/courses/dance" className={dropdownItemClass}>
                        Kathak
                      </Link>
                    </li>

                    <li>
                      <Link to="/courses/dance" className={dropdownItemClass}>
                        Bharatanatyam
                      </Link>
                    </li>

                    <li>
                      <Link to="/courses/dance" className={dropdownItemClass}>
                        Bollywood Dance
                      </Link>
                    </li>

                    <li>
                      <Link to="/courses/dance" className={dropdownItemClass}>
                        Folk Dance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link to="/about" className={navLinkClass}>
            About
          </Link>

          <Link to="/events" className={navLinkClass}>
            Events
          </Link>

          <button
            type="button"
            onClick={handleEnquiryClick}
            className={`${navLinkClass} cursor-pointer border-none bg-transparent p-0 text-inherit`}
          >
            Enquiry
          </button>
        </div>
      </div>
    </nav>
  );
}