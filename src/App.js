import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import Modal from "./components/Modal";
import Button from "./components/Button";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import TestingPage from "./pages/TestingPage";
import BasketballPage from "./pages/BasketballPage";
import FootballPage from "./pages/FootballPage";
import { showAllBadgeInfo } from "./basketballData";
import BankingPage from "./pages/BankingPage";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        Close
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      {showAllBadgeInfo}
    </Modal>
  );

  // container on first div
  return (
    <div className="mx-auto flex flex-col overflow-hidden">
      {showModal && modal}
      <>
        <Route path="/">
          <div className="h-screen">
            <Sidebar />
            <HomePage />
          </div>
        </Route>

        <Route path="/media">
          <Sidebar />
          <TestingPage />
        </Route>

        <Route path="/basketball">
          <Sidebar />
          <BasketballPage setShowModal={setShowModal} />
        </Route>

        <Route path="/football">
        <div className="h-screen">
            <Sidebar />
            <FootballPage />
          </div>
        </Route>

        <Route path="/jsm_banking">
          <div className="h-screen">
            <Sidebar />
            <BankingPage />
          </div>
        </Route>
      </>
    </div>
  );
}

export default App;
