import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//React icons
import { FaBarsStaggered, FaBlog } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrolly > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //Navbar items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={'py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}'}>
        <div>
          {/* {logo} */}
          <Link
            to="/"
            className="text-2xl font-bold text-cyan-500 flex items-center "
          >
            <FaBlog className="inline-block bg-#39dbd8 c-#e93516" />
            Books
          </Link>
          {/* //Double check color play later */}

          {/* nav items for large devices*/}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({link, path}) => 
              <link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </link>
            )}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStraggered className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/* menu button for mibile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* navItems for small devices */}
        <div className={'space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}'}>
        {
          navItems.map(({link, path}) => 
              <link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">{link}</link>)
          }
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
