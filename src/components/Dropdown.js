import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current) {
        return;
      }
      
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.addEventListener('click', handler);
    };

  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };
  
  const renderedOptions = options.map((option) => {
    return (
      <div 
        className="hover:bg-sky-100 rounded cursor-pointer p-1" 
        onClick={() => handleOptionClick(option)} 
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divElement} className="w-52 relative z-10">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || options[0].label }
        <GoChevronDown className="text-lg"/>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full max-h-60 overflow-scroll">
          {renderedOptions}
        </Panel>
      )}
    </div>
    
  );
}

export default Dropdown;