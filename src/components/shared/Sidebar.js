import { useState } from "react";
import Link from "./Link";
import useNavigation from "../../hooks/use-navigation";
import { HiOutlineMenu } from "react-icons/hi"; // Hamburger icon from Heroicons

// Sidebar displays main site navigation, with responsive behavior for mobile and desktop
function Sidebar() {
  const { currentPath } = useNavigation();
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  // Define nav links
  const links = [
    { label: "Home", path: "/" },
    { label: "Movies/TV", path: "/media" },
    { label: "Basketball", path: "/basketball" },
    { label: "Football", path: "/football" },
    // { label: "Baseball", path: "/baseball" },
    { label: "Parcheesi", path: "/parcheesi" },
    { label: "Misc Projects", path: "/misc" },
  ];

  // Render all links
  const renderedLinks = links.map((link) => (
    <Link
      key={link.label}
      to={link.path}
      onClick={() => setIsOpen(false)} // Close menu when a link is clicked (mobile)
      className={`orbitron-regular ${
        currentPath === "/basketball" ||
        currentPath === "/" ||
        currentPath === "/football" ||
        currentPath === "/media"
          ? "lg:text-white"
          : ""
      }`}
      activeClassName={`font-bold border-l-4 border-blue-500 ${
        currentPath === "/basketball" ||
        currentPath === "/football" ||
        currentPath === "/" ||
        currentPath === "/media"
          ? "lg:text-white lg:border-white"
          : ""
      } pl-2`}
    >
      {link.label}
    </Link>
  ));

  // https://t3.ftcdn.net/jpg/00/27/12/58/360_F_27125854_8zajMPMcyyrqZ7dtgRhdzXlxUuFrKgkJ.jpg

  return (
    <div
      className={`sticky top-0 z-30 py-2 mt-0 ${
        currentPath === "/basketball"
          ? "bg-[url('https://t4.ftcdn.net/jpg/00/00/42/23/360_F_422353_a45FYznatYUREgymaj24NocvrA6uh9.jpg')] bg-center border-b border-black"
          : ""
      } ${currentPath === "/" ? "bg-black text-white" : ""} ${currentPath === "/media" ? "bg-gradient-to-br from-purple-700 to-purple-950" : ""} ${
        currentPath === "/football"
          ? "bg-[url('https://img.pixers.pics/pho_wat(s3:700/FO/27/12/58/54/700_FO27125854_928970de62904503935980f5d18b793b.jpg,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/stickers-football-texture.jpg.jpg')] border-b border-black"
          : ""
      }`}
    >
      {/* Desktop Nav - visible on lg+ screens */}
      <div className={`hidden lg:flex flex-row justify-center items-center gap-12`}>
        {renderedLinks}
      </div>

      {/* Mobile Toggle Button */}
      <div
        className={`relative flex lg:hidden justify-between items-center px-4 ${
          currentPath === "/football" || currentPath === "/basketball" || currentPath === '/'
            ? "text-white"
            : "text-black"
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <HiOutlineMenu className="text-2xl" />
        </button>
        <span className={`font-bold orbitron-regular text-lg`}>Menu</span>
      </div>

      {/* Mobile Dropdown Overlay Menu */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md z-20 lg:hidden flex flex-col px-4 pt-2 gap-2 text-black`}
        >
          {renderedLinks}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
