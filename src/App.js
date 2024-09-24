import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import Modal from "./components/Modal";
import Button from "./components/Button";
import { useState } from 'react';
import HomePage from "./pages/HomePage";
import TestingPage from "./pages/TestingPage";
import TablePage from './pages/TablePage';
import { ImTarget } from "react-icons/im"; // Deadeye Shooter
import { MdOutlineSportsKabaddi } from "react-icons/md"; // Tough Shot Maker
import { MdSportsHandball } from "react-icons/md"; // Lob/Putback/Dunk Master
import { FaWifi } from "react-icons/fa"; // Limitless 3-Pt Range
import { FaHatWizard } from "react-icons/fa"; // Middy Magician
import { GiWhistle } from "react-icons/gi"; // Foul Drawer
import { GiBodyBalance } from "react-icons/gi"; // Acrobatic Finisher
import { GiWreckingBall } from "react-icons/gi"; // Contact Finisher
import { FaTools } from "react-icons/fa"; // Post Move Technician

// Passing/Playmaking
import { TbEngine } from "react-icons/tb"; // Offensive Engine
import { RiHandCoinLine } from "react-icons/ri"; // Dime Dropper
import { ImEarth } from "react-icons/im"; // Offensive Gravity
import { ImDribbble } from "react-icons/im"; // Houdini Handles

// Defense
import { FaLock } from "react-icons/fa"; // Lockdown Post Defender
import { GiHandcuffs } from "react-icons/gi"; // Perimeter Handcuffs
import { ImBug } from "react-icons/im"; // Defensive Pest
import { SiAdblock } from "react-icons/si"; // Shot Block Artist
import { RiTeamFill } from "react-icons/ri"; // Switchable Specialsit
import { FaAnchor } from "react-icons/fa"; // Defensive Anchor
import { GiMonsterGrasp } from "react-icons/gi"; // Pick Pocket/Interceptor
import { GiBrain } from "react-icons/gi"; // High IQ Defender
import { GiEmbrassedEnergy } from "react-icons/gi"; // High Energy Defender

// Rebounding
import { ImMagnet } from "react-icons/im"; // Rebound Magnet

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

  const offBadgesData = [
    {
      value: <ImTarget/>,
      info: "Dead Eye Shooter"
    },
    {
      value: <MdOutlineSportsKabaddi/>,
      info: "Tough Shot Maker"
    },
    {
      value: <MdSportsHandball/>,
      info: "Lob/Putback/Dunk Master"
    },
    {
      value: <FaWifi/>,
      info: "Limitless Range"
    },
    {
      value: <FaHatWizard/>,
      info: "Middy Magician"
    },
    {
      value: <GiWhistle/>,
      info: "Foul Drawer"
    },
    {
      value: <GiBodyBalance/>,
      info: "Acrobatic Finisher"
    },
    {
      value: <GiWreckingBall/>,
      info: "Contact Finisher"
    },
    {
      value: <FaTools/>,
      info: "Post Move Technician"
    },
  ]

  const defBadgesData = [
    {
      value: <FaLock/>,
      info: "Lockdown Post Defender"
    },
    {
      value: <GiHandcuffs/>,
      info: "Perimeter Handcuffs"
    },
    {
      value: <ImBug/>,
      info: "Defensive Pest"
    },
    {
      value: <SiAdblock/>,
      info: "Shot Block Artist"
    },
    {
      value: <RiTeamFill/>,
      info: "Switchable Specialist"
    },
    {
      value: <FaAnchor/>,
      info: "Defensive Anchor"
    },
    {
      value: <GiMonsterGrasp/>,
      info: "Pick Pocket/Interceptor"
    },
    {
      value: <GiBrain/>,
      info: "High IQ Defender"
    },
    {
      value: <GiEmbrassedEnergy/>,
      info: "High Energy Defender"
    },
  ];

  const otherBadgesData = [
    {
      value: <TbEngine/>,
      info: "Offensive Engine"
    },
    {
      value: <RiHandCoinLine/>,
      info: "Dime Dropper"
    },
    {
      value: <ImEarth/>,
      info: "Offensive Gravity"
    },
    {
      value: <ImDribbble/>,
      info: "Houdini Handles"
    },
    {
      value: <ImMagnet/>,
      info: "Rebound Magent"
    },
  ];

  const showModalList = modalData.map((option) => {
    return (
      <div key={option.value} className="flex flex-row mb-5">
        <div className="font-bold underline mr-2">{option.value}:</div><div>{option.info}</div>
      </div>
    )
  });

  const showOffBadges =  offBadgesData.map((option) => {
    return (
      <div key={option.info} className="flex flex-row">
        <div className="mb-3 mr-3 rounded p-1 bg-gray-300">{option.value}</div><div>{option.info}</div>
      </div>
    )
  });

  const showDefBadges =  defBadgesData.map((option) => {
    return (
      <div key={option.info} className="flex flex-row">
        <div className="mb-3 mr-3 rounded p-1 bg-gray-300">{option.value}</div><div>{option.info}</div>
      </div>
    )
  });

  const showOtherBadges =  otherBadgesData.map((option) => {
    return (
      <div key={option.info} className="flex flex-row">
        <div className="mb-3 mr-3 rounded p-1 bg-gray-300">{option.value}</div><div>{option.info}</div>
      </div>
    )
  });

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <div className="flex flex-row">
      <div className="flex flex-col">
        {showModalList}
      </div>
      <div className="ml-10">
        {showOffBadges}
      </div>
      <div className="ml-10">
        {showDefBadges}
      </div>
      <div className="ml-10">
        <div className="mb-5">{showOtherBadges}</div>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="mb-1.5 mr-3 rounded px-2 bg-purple-600">H</div><div>Hall of Fame</div>
          </div>
          <div className="flex flex-row">
            <div className="mb-1.5 mr-3 rounded px-2 bg-yellow-300">G</div><div>Gold</div>
          </div>
          <div className="flex flex-row">
            <div className="mb-1.5 mr-3 rounded px-2 bg-gray-300">S</div><div>Silver</div>
          </div>
          <div className="flex flex-row">
            <div className="mb-1.5 mr-3 rounded px-2 bg-yellow-600">B</div><div>Bronze</div>
          </div>
        </div>
      </div>
    </div>

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