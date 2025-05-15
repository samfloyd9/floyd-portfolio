import { useState } from "react";

import Sidebar from "./components/shared/Sidebar";
import Route from "./components/shared/Route";
import Modal from "./components/shared/Modal";
import Button from "./components/shared/Button";
import BadgeInfoPanel from "./components/basketball/BadgeInfoPanel";

import HomePage from "./pages/HomePage";
import MediaPage from "./pages/MediaPage";
import BasketballPage from "./pages/BasketballPage";
import FootballPage from "./pages/FootballPage";
import BankingPage from "./pages/BankingPage";
import ParcheesiPage from "./pages/ParcheesiPage";
import PicturesPage from "./pages/PicturesPage";
import BaseballPage from "./pages/BaseballPage";

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
          {/* <div className="flex flex-col"> */}
          <Sidebar />
          <HomePage />
          {/* </div> */}
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

        <Route path="/misc">
          <Sidebar />
          <div className="flex flex-col gap-5 w-full">
            <BankingPage />
            <PicturesPage />
          </div>
        </Route>

        <Route path="/parcheesi">
          <div className="">
            <Sidebar />
            <ParcheesiPage />
          </div>
        </Route>

        <Route path="/baseball">
          <Sidebar />
          <BaseballPage />
        </Route>
      </>
    </div>
  );
}

export default App;

// import 'bulma/css/bulma.css';
// import './styles.css';
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux';
// import { store } from './store';

// const element = document.getElementById('root');
// const root = createRoot(element);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
