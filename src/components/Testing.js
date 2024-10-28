import Button from "../components/Button";
import { useState } from "react";
import Panel from "../components/Panel";
import SearchBar from "./SearchBar";

function Testing() {
  const [showContent, setShowContent] = useState(true);
  const [searchList, setSearchList] = useState(["Jake Miller", "Bobby Jones"]);

  const handleClick = () => {
    setShowContent(!showContent);
  };

  const handleResetHistory = () => {
    setSearchList([]);
  };

  const handleSubmit = (newTerm) => {
    const updatedList = [...searchList, newTerm];

    setSearchList(updatedList);
  };

  let content = "";
  if (showContent) {
    const updatedList = searchList.map((item) => {
      return <div key={item}>{item}</div>;
    });

    content = <div className="flex flex-col border p-2 m-2">{updatedList}</div>;
  }

  return (
    <div>
      <div>
        <SearchBar onSubmit={handleSubmit} />
        {content}
        <div className="flex flex-row gap-5 my-5">
        <Button onClick={handleClick} secondary rounded>
          Click to Show Search History
        </Button>
        <Button onClick={handleResetHistory} danger rounded>
          Click to Clear Search History
        </Button>
        </div>
      </div>
      <div className="flex justify-center mt-24">
        <a href="https://samfloyd9.github.io/" target="_blank" rel="noreferrer" className="hover:text-blue-500">
          My Old Website
        </a>
      </div>
    </div>
  );
}

export default Testing;

// **************************************
// handleClicks for buttons and count panel
// **************************************
// const [count, setCount] = useState(0);
// const handleIncrement = () => {
//   setCount(count + 1);
// };

// const handleDecrement = () => {
//   setCount(count - 1);
// };

// const handleReset = () => {
//   setCount(0);
// };

// **************************************
// Render of the buttons and count panel
// **************************************
{/* <div className="flex flex-col mt-24 w-fit justify-center">
<Panel className="w-content">{count}</Panel>
<div className="flex flex-row gap-5 mt-5">
  <Button onClick={handleIncrement} secondary rounded>
    Increment
  </Button>
  <Button onClick={handleDecrement} secondary rounded>
    Decrement
  </Button>
  <Button onClick={handleReset} danger rounded>
    Reset
  </Button>
</div>
</div> */}