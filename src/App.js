import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import Modal from "./components/Modal";
import Button from "./components/Button";
import { useState } from 'react';
import HomePage from "./pages/HomePage";
import TestingPage from "./pages/TestingPage";
import TablePage from './pages/TablePage';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = <div>
    <Button primary onClick={handleClose}>Close</Button>
  </div>;

  const modalData = [
    {
      value: "Pts",
      info: "Points Per 75 Possessions"
    },
    {
      value: "rTS%",
      info: "Relative True Shooting Percentage"
    },
    {
      value: "Reb",
      info: "Rebounds Per 75 Possessions"
    },
    {
      value: "Ast",
      info: "Assists Per 75 Possessions"
    },
    {
      value: "Stk",
      info: "Steals and Blocks Per 75 Possessions"
    },
    {
      value: "Tov",
      info: "Turnovers Per 75 Possessions"
    },
    {
      value: "BPM",
      info: "Box Plus Minus"
    },
  ]

  const showModalList = modalData.map((option) => {
    return (
      <div key={option.value} className="flex flex-row">
        <div className="font-bold underline mr-2">{option.value}:</div><div>{option.info}</div>
      </div>
    )
  })

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    {showModalList}
  </Modal>;

  return (
    <div className="container mx-auto flex flex-col">
      { showModal && modal }
      <Sidebar />
      <div>
      <Route path="/">
        <HomePage />
      </Route>
      
      <Route path="/testing">
        <TestingPage />
      </Route>

      <Route path="/basketball">
        <TablePage setShowModal={setShowModal} />
      </Route>
      </div>
    </div>
  );
}

export default App;