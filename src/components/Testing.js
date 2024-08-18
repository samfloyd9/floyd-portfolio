import Button from '../components/Button';
import { useState } from 'react';
import Panel from '../components/Panel';
import SearchBar from './SearchBar';

function Testing() {
  const [ showContent, setShowContent ] = useState(false);
  const [ count, setCount ] = useState(0);
  const [ searchList, setSearchList ] = useState([]);

  const handleClick = () => {
    setShowContent(!showContent);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  const handleSubmit = (newTerm) => {
    const updatedList = [
      ...searchList,
      newTerm
    ]
    
    setSearchList(updatedList)
  }

  // let content = <div>This is default content</div>;
  let content = '';
  if (showContent) {
    content = <div>{searchList}</div>;
  }

  return (
    <div>
      <div>
        <Button onClick={handleClick} primary rounded>Click Me!</Button>
        {content}
      </div>
      <div className="flex flex-row">
        <Panel>{count}</Panel>
        <Button onClick={handleIncrement} secondary rounded>Increment</Button>
        <Button onClick={handleDecrement} secondary rounded>Decrement</Button>
        <Button onClick={handleReset} danger rounded>Reset</Button>
      </div>
      <div>
        <SearchBar onSubmit={handleSubmit}/>
      </div>
      <div>
        <link href='https://samfloyd9.github.io/'>My Old Website</link>
      </div>
    </div>
  );
}

export default Testing;

