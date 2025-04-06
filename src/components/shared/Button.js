import className from "classnames"; // For conditional class generation
import { GoSync } from "react-icons/go"; // Spinner icon for loading state
import { twMerge } from "tailwind-merge"; // Resolves conflicting Tailwind classes

// A flexible Button component that supports multiple styling "variations"
// (ex. primary, danger, outline) and a loading spinner state
function Button({
  children, // Button content (text or elements)
  primary, // blue style
  secondary, // dark gray style
  success, // green style
  warning, // yellow style
  danger, // red style
  outline, // true = transparent background, colored border/text
  rounded, // true = fully rounded button (pill)
  loading, // true = disables button & shows spinner
  ...rest // Any additional props (e.g. onClick, type)
}) {
  // Dynamically build className string based on props
  let classes = className(
    rest.className, // support additional classes passed to Button
    "flex items-center px-3 py-1.5 border h-8", // base styles
    {
      "opacity-80": loading, // dim button when loading

      // Button styles by variation
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,

      "rounded-full": rounded, // apply full rounding

      // Outline styles (white bg + colored text/border)
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  // Merge Tailwind classes and resolve potential conflicts
  classes = twMerge(classes);

  return (
    <button {...rest} disabled={loading} className={classes}>
      {/* Show spinner icon if loading, else show content */}
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}

// Custom prop type validator to ensure only ONE variation is active at a time
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
