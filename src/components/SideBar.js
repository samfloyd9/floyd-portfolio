import Link from "./Link";

function Sidebar({  }) {
  
  const links = [
    { label: 'Home', path: '/' },
    { label: 'Table', path: '/table' },
    { label: 'Testing', path: '/testing' },
  ]
  
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
  })

  return (
    <div className="sticky top-0 overflow-x-scroll flex flex-row items-start space-x-6">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;