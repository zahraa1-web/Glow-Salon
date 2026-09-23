import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faMoon,
  faSun,
  faGlobe,
  faUser,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Salons", path: "/services" },
    { name: "Bookings", path: "/bookings" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 md:px-6 md:pt-4">
      <nav
        className={`mx-auto w-full max-w-[1700px] overflow-hidden border-2 transition-all duration-500 ${
          darkMode
            ? "border-[#dfcba9]/40 bg-[#17120f]/95 text-[#faf6ef]"
            : "border-[#302720]/25 bg-[#faf6ef]/97 text-[#302720]"
        }`}
      >
        <div className="flex min-h-[82px] items-stretch">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 items-center border-r-2 border-current/10 px-4 sm:px-6 md:px-7"
          >
            <div>
              <div className="font-display text-4xl font-bold leading-none tracking-[-0.07em] sm:text-5xl md:text-[52px]">
                GLOW
              </div>

              <div className="mt-1 hidden text-[9px] font-extrabold uppercase tracking-[0.3em] opacity-70 sm:block">
                Beauty Gazette
              </div>
            </div>
          </Link>

          <div className="hidden flex-1 items-stretch md:flex">
            {links.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `group relative flex min-w-0 flex-1 items-center justify-center border-r border-current/10 px-2 text-[13px] font-extrabold uppercase tracking-[0.08em] transition lg:text-[14px] xl:text-[15px] ${
                    isActive
                      ? darkMode
                        ? "bg-[#dfcba9]/10 text-[#dfcba9]"
                        : "bg-[#e9dcc8]/60 text-[#8a6a43]"
                      : "opacity-85 hover:bg-[#e9dcc8]/40 hover:opacity-100"
                  }`
                }
              >
                <span className="absolute left-3 top-2 font-display text-[9px] font-bold opacity-40 lg:text-[10px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {link.name}

                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 bg-[#a78350] transition-all duration-300 group-hover:w-12 lg:group-hover:w-14" />
              </NavLink>
            ))}
          </div>

          <div className="hidden items-stretch xl:flex">
            <button
              onClick={() =>
                setLanguage((current) => (current === "EN" ? "AR" : "EN"))
              }
              className="flex w-[72px] items-center justify-center gap-2 border-r border-current/10 text-[11px] font-extrabold uppercase tracking-[0.1em] transition hover:bg-[#e9dcc8]/50"
            >
              <FontAwesomeIcon icon={faGlobe} />
              {language}
            </button>

            <button
              onClick={() => setDarkMode((current) => !current)}
              className="flex w-[54px] items-center justify-center border-r border-current/10 text-base transition hover:bg-[#e9dcc8]/50"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>

            <Link
              to="/profile"
              className="flex w-[54px] items-center justify-center border-r border-current/10 text-base transition hover:bg-[#e9dcc8]/50"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>

            <Link
              to="/login"
              className={`flex items-center gap-2 px-5 text-[10px] font-extrabold uppercase tracking-[0.1em] transition ${
                darkMode
                  ? "bg-[#dfcba9] text-[#302720] hover:bg-white"
                  : "bg-[#302720] text-[#faf6ef] hover:bg-[#8a6a43]"
              }`}
            >
              Enter GLOW
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="ml-auto flex md:hidden">
            <button
              onClick={() => setMenuOpen((current) => !current)}
              className="flex w-[62px] items-center justify-center border-l border-current/10 text-xl"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>

          <div className="ml-auto hidden items-center md:flex xl:hidden">
            <Link
              to="/profile"
              className="flex h-full w-[56px] items-center justify-center border-l border-current/10 text-base"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>

            <button
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-full w-[58px] items-center justify-center border-l border-current/10 text-lg"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>

        <div className="flex h-8 items-center justify-between border-t border-current/15 px-3 sm:px-4">
          <span className="text-[8px] font-extrabold uppercase tracking-[0.18em] sm:text-[9px]">
            The Beauty Edition
          </span>

          <span className="hidden text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 sm:block">
            Vol. 01 · Basra · Iraq · 2026
          </span>

          <span className="text-[8px] font-extrabold uppercase tracking-[0.18em] sm:text-[9px]">
            Est. 2026
          </span>
        </div>
      </nav>

      {menuOpen && (
        <div
          className={`mx-auto mt-2 w-full max-w-[1700px] border-2 ${
            darkMode
              ? "border-[#dfcba9]/40 bg-[#17120f]"
              : "border-[#302720]/25 bg-[#faf6ef]"
          }`}
        >
          <div className="p-5">
            {links.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-current/10 py-6"
              >
                <div className="flex items-center gap-5">
                  <span className="font-display text-base font-bold opacity-50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base font-extrabold uppercase tracking-[0.1em]">
                    {link.name}
                  </span>
                </div>

                <FontAwesomeIcon icon={faArrowRight} />
              </NavLink>
            ))}

            <div className="mt-5 grid grid-cols-3 border border-current/10">
              <button
                onClick={() =>
                  setLanguage((current) => (current === "EN" ? "AR" : "EN"))
                }
                className="border-r border-current/10 py-5 text-sm font-extrabold"
              >
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                {language}
              </button>

              <button
                onClick={() => setDarkMode((current) => !current)}
                className="border-r border-current/10 py-5"
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              </button>

              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-3 bg-[#302720] py-6 text-xs font-extrabold uppercase tracking-[0.18em] text-[#faf6ef]"
            >
              Enter GLOW
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;