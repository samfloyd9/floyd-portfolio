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
    { label: "Parcheesi", path: "/parcheesi" },
    { label: "Banking", path: "/jsm_banking" },
  ];

  // Dynamic styling logic based on current path
  const sideBarColorLogic = (currentPath) => {
    if (currentPath === "/") {
      return "bg-black text-white border-white";
    } else {
      return "bg-white text-black";
    }
  };

  // Render all links
  const renderedLinks = links.map((link) => (
    <Link
      key={link.label}
      to={link.path}
      onClick={() => setIsOpen(false)} // Close menu when a link is clicked (mobile)
      className={`mb-2 ${sideBarColorLogic(currentPath)} orbitron-regular`}
      activeClassName={`font-bold border-l-4 border-blue-500 pl-2 ${sideBarColorLogic(currentPath)}`}
    >
      {link.label}
    </Link>
  ));

  return (
    <div
      className={`sticky top-0 z-30 py-2 mt-0 ${sideBarColorLogic(currentPath)}`}
    >
      {/* Desktop Nav - visible on lg+ screens */}
      <div className="hidden lg:flex flex-row justify-center gap-12">
        {renderedLinks}
      </div>

      {/* Mobile Toggle Button */}
      <div className="relative flex lg:hidden justify-between items-center px-4">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <HiOutlineMenu className="text-2xl" />
        </button>
        <span className="font-bold orbitron-regular text-lg">Menu</span>
      </div>

      {/* Mobile Dropdown Overlay Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-20 lg:hidden flex flex-col px-4 pt-2 gap-2">
          {renderedLinks}
        </div>
      )}
    </div>
  );
}

export default Sidebar;



// import Link from "./Link";
// import useNavigation from "../../hooks/use-navigation";

// function Sidebar() {
//   const { currentPath } = useNavigation();

//   const links = [
//     { label: "Home", path: "/" },
//     { label: "Banking", path: "/jsm_banking" },
//     { label: "Basketball", path: "/basketball" },
//     { label: "Football", path: "/football" },
//     { label: "Movies/TV", path: "/media" },
//     { label: "Parcheesi", path: "/parcheesi" },
//   ];

//   const sideBarColorLogic = (currentPath) => {
//     if (currentPath === '/') {
//       return 'bg-black text-white border-white';
//     } else {
//       return 'bg-white';
//     }
//   }

//   const renderedLinks = links.map((link) => {
//     return (
//       <Link
//         key={link.label}
//         to={link.path}
//         className={`mb-2 ${sideBarColorLogic(currentPath)} orbitron-regular`}
//         activeClassName={`font-bold border-l-4 border-blue-500 pl-2 ${sideBarColorLogic(currentPath)}`}
//       >
//         {link.label}
//       </Link>
//     );
//   });

//   return (
//     <div className={`sticky top-0 flex flex-row justify-around items-center ${sideBarColorLogic(currentPath)} py-2 gap-2 z-20 mt-0 lg:gap-24 lg:justify-center`}>
//       {renderedLinks}
//     </div>
//   );
// }

// export default Sidebar;
