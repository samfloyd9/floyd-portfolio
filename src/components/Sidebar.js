import Link from "./Link";
import useNavigation from "../hooks/use-navigation";

function Sidebar() {
  const { currentPath } = useNavigation();

  const links = [
    { label: "Home", path: "/" },
    { label: "Banking", path: "/jsm_banking" },
    { label: "Basketball", path: "/basketball" },
    { label: "Football", path: "/football" },
    { label: "Movies/TV", path: "/media" },
  ];

  const sideBarColorLogic = (currentPath) => {
    if (currentPath === '/') {
      return 'bg-black text-white border-white';
    } else {
      return 'bg-white';
    }
  }

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className={`mb-2 ${sideBarColorLogic(currentPath)} orbitron-regular`}
        activeClassName={`font-bold border-l-4 border-blue-500 pl-2 ${sideBarColorLogic(currentPath)}`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className={`sticky top-0 flex flex-row justify-around items-center ${sideBarColorLogic(currentPath)} py-2 gap-2 z-20 mt-0 lg:gap-24 lg:justify-center`}>
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
