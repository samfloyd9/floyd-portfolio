import classNames from "classnames"; // For conditional class generation
import useNavigation from "../../hooks/use-navigation"; // Custom hook for routing logic

// Custom Link component that integrates with the navigation system
// It also supports custom styling and an active class based on currentPath
function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation(); // From your custom hook

  // Combine default styles, optional classes, and active class if current path matches
  const classes = classNames(
    "text-blue-500", // Default link color
    "cursor-pointer", // Mouse pointer
    className, // Any custom classes passed in
    currentPath === to && activeClassName // Highlight if this is the active link
  );

  // Intercepts clicks to handle navigation without full page reload
  const handleClick = (event) => {
    // Let the browser handle cmd/ctrl+click to open in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // Prevent default anchor behavior (page reload)
    event.preventDefault();

    // Navigate using your custom router logic
    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
