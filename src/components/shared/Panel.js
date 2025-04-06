import classNames from "classnames"; // For conditional class generation

// Panel is a wrapper component that applies consistent styling around any content passed in. 
// Can override or extend styles via the 'className' prop
function Panel({ children, className, ...rest }) {
  // Merge default styles with any custom classes passed in
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full", // base styling
    className // override or extend from parent
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
