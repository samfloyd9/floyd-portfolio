import Sidebar from "./components/shared/Sidebar";
import Route from "./components/shared/Route";
import Modal from "./components/shared/Modal";
import Button from "./components/shared/Button";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import MediaPage from "./pages/MediaPage";
import BasketballPage from "./pages/BasketballPage";
import FootballPage from "./pages/FootballPage";
// import { showAllBadgeInfo } from "./data/basketballData";
import BankingPage from "./pages/BankingPage";
import ParcheesiPage from "./pages/ParcheesiPage";
import BadgeInfoPanel from "./components/basketball/BadgeInfoPanel";

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
      <BadgeInfoPanel />
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
          <MediaPage />
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

        <Route path="/parcheesi">
          <div className="h-screen">
            <Sidebar />
            <ParcheesiPage />
          </div>
        </Route>
      </>
    </div>
  );
}

export default App;
