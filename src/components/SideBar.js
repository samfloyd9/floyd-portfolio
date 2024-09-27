import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Home", path: "/" },
    { label: "Basketball", path: "/basketball" },
    { label: "Football", path: "/football" },
    { label: "*Testing*", path: "/testing" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-row justify-center items-center  p-2 gap-6 z-20 bg-white mt-0 lg:mt-2">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
