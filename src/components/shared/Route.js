import useNavigation from "../../hooks/use-navigation";

// Route renders its children only if the current path matches the given 'path' prop
// Part of custom routing system
function Route({ path, children }) {
  const { currentPath } = useNavigation(); // Get the current URL path

  // If the route matches, render the children
  if (path === currentPath) {
    return children;
  }

  // Otherwise render nothing
  return null;
}

export default Route;
