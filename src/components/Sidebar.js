import Link from "./Link";
import useNavigation from "../hooks/use-navigation";

function Sidebar() {
  const { currentPath } = useNavigation();

  const links = [
    { label: "Home", path: "/" },
    { label: "Basketball", path: "/basketball" },
    { label: "Football", path: "/football" },
    { label: "*Testing*", path: "/testing" },
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
        className={`mb-2 ${sideBarColorLogic(currentPath)}`}
        activeClassName={`font-bold border-l-4 border-blue-500 pl-2 ${sideBarColorLogic(currentPath)}`}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className={`sticky top-0 flex flex-row justify-center items-center ${sideBarColorLogic(currentPath)} p-2 gap-10 z-20 mt-0 lg:mt-2 lg:gap-24`}>
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
