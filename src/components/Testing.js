import Button from '../components/Button';
import { useState } from 'react';
import Panel from '../components/Panel';
import SearchBar from './SearchBar';

function Testing() {
  const [ showContent, setShowContent ] = useState(true);
  const [ count, setCount ] = useState(0);
  const [ searchList, setSearchList ] = useState(['Jake Miller', 'Bobby Jones']);

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

  let content = '';
  if (showContent) {
    const updatedList = searchList.map((item) => {
      return <div>{item}</div>;
    })

    content = <div className="flex flex-col border p-2 m-2">{updatedList}</div>;
  }

  return (
    <div>
      <div>
        <SearchBar onSubmit={handleSubmit}/>
        {content}
        <Button onClick={handleClick} primary rounded>Click to Show Search History</Button>
      </div>
      <div className="flex flex-row">
        <Panel className="w-content">{count}</Panel>
        <Button onClick={handleIncrement} secondary rounded>Increment</Button>
        <Button onClick={handleDecrement} secondary rounded>Decrement</Button>
        <Button onClick={handleReset} danger rounded>Reset</Button>
      </div>
      <div>
        <a href='https://samfloyd9.github.io/' className="hover:text-blue-500">My Old Website</a>
      </div>
    </div>
  );
}

export default Testing;

