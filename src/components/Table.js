import { Fragment } from 'react';

function Table({ data, config, keyFn }) {
  
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return (
      <th className="mx-2 rounded" key={column.label}>{column.label}</th>
    );
  })

  const renderedRows = data.map((rowData) => {
    
    const renderedCells = config.map((column) => {
      return (
        <td className="pr-2 text-center" key={column.label}>{column.render(rowData)}</td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  })
  
  return (
    <table className="table-auto">
      <thead className="bg-gray-200">
        <tr className="border-b-2  border-black">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  );
}

export default Table;