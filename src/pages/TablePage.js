import SortableTable from "../components/SortableTable";
import useSort from '../hooks/use-sort';
import { useState } from "react";
import { ImTarget } from "react-icons/im"; // Accuracy or Range Indicator
import { ImEqualizer } from "react-icons/im"; // Filter Icon
import { ImFire } from "react-icons/im"; // Can heat up quick
import { ImEarth } from "react-icons/im"; //International Players
import { ImDribbble } from "react-icons/im"; // Good handle
import { ImAidKit } from "react-icons/im"; // Injured
import { ImLock } from "react-icons/im"; // Lockdown defender
import { ImBug } from "react-icons/im"; // Pest on defense
import { ImMagnet } from "react-icons/im"; // Rebound Magnet
import { ImPowerCord } from "react-icons/im"; // Spark plug
import { BsBricks } from "react-icons/bs"; // Brick Wall Screens
import { BsCurrencyExchange } from "react-icons/bs"; // Dimer passer
import { BiSolidMapPin } from "react-icons/bi"; // Pinpoint accuracy
import { CiDumbbell } from "react-icons/ci"; // Strong Player
import { FaFeatherAlt } from "react-icons/fa"; // Feathery Touch
import { FaPlaneDeparture } from "react-icons/fa"; // Can Take flight
import { FaTrafficLight } from "react-icons/fa"; // Stop and go speed
// import { FaLocationCrosshairs } from "react-icons/fa6"; // Pinpoint accuracy
// import { FaCrutch } from "react-icons/fa6"; // Injury

function TablePage() {
  const [hover, setHover] = useState(false);

  // const handleBadgeHover = () => {
  //   setHover(true);
  // }

  // const handleBadgeLeave = () => {
  //   setHover(false);
  // }

  const data = [
    {
      name: "LeBron James",
      position: "SF",
      year: "2008-09",
      team: "CLE",
      teamColor: "bg-red-800",
      teamColor2: "text-yellow-500",
      pts75: 40.8,
      ts: +4.7,
      reb75: 10.9,
      ast75: 10.4,
      stk75: 4.0,
      tov75: 4.3,
      bpm: 13.2,
      badges: [
        {
          icon: (
            <div
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
            >
              <ImTarget />
              {/* {hover ? (
                <div className="absolute border rounded bg-gray-300">
                  Deep Range Accuracy
                </div>
              ) : (
                ""
              )} */}
            </div>
          ),
          color: "gold",
        },
        {
          icon: (
            <div>
              <ImFire />
            </div>
          ),
          color: "silver",
        },
        {
          icon: <ImEarth />,
          color: "hof",
        },
        {
          icon: <ImDribbble />,
          color: "bronze",
        },
        {
          icon: <ImAidKit />,
          color: "gold",
        },
      ],
      plyrPictureSrc:
        "https://www.basketball-reference.com/req/202106291/images/headshots/jamesle01.jpg",
    },
    {
      name: "Michael Jordan",
      position: "SG",
      year: "1987-88",
      team: "CHI",
      teamColor: "bg-red-500",
      teamColor2: "text-black",
      pts75: 32,
      ts: +3.5,
      reb75: 6,
      ast75: 6,
      stk75: 3.0,
      tov75: 4.3,
      bpm: 13.2,
      badges: [
        <ImTarget />,
        <ImFire />,
        <ImEarth />,
        <ImDribbble />,
        <ImAidKit />,
      ],
      plyrPictureSrc:
        "https://www.basketball-reference.com/req/202106291/images/headshots/jordami01.jpg",
    },
    {
      name: "Kareem Abdul-Jabbar",
      position: "C",
      year: "1971-72",
      team: "MIL",
      teamColor: "bg-green-700",
      teamColor2: "text-red-600",
      pts75: 26,
      ts: +8.5,
      reb75: 12,
      ast75: 4,
      stk75: 3.0,
      tov75: 4.3,
      bpm: 13.2,
      badges: [
        <ImTarget />,
        <ImFire />,
        <ImEarth />,
        <ImDribbble />,
        <ImAidKit />,
      ],
      plyrPictureSrc:
        "https://www.basketball-reference.com/req/202106291/images/headshots/abdulka01.jpg",
    },
    {
      name: "Wilt Chamberlain",
      position: "C",
      year: "1966-67",
      team: "PHI",
      teamColor: "bg-blue-700",
      teamColor2: "text-red-500",
      pts75: 24,
      ts: +12.5,
      reb75: 22,
      ast75: 8,
      stk75: 8.0,
      tov75: 4.3,
      bpm: 13.2,
      badges: [
        <ImTarget />,
        <ImFire />,
        <ImEarth />,
        <ImDribbble />,
        <ImAidKit />,
      ],
      plyrPictureSrc:
        "https://www.basketball-reference.com/req/202106291/images/headshots/chambwi01.jpg",
    },
    {
      name: "Steph Curry",
      position: "PG",
      year: "2015-16",
      team: "GSW",
      teamColor: "bg-yellow-400",
      teamColor2: "text-blue-700",
      pts75: 30,
      ts: -3.5,
      reb75: 5,
      ast75: 5,
      stk75: 2.5,
      tov75: 4.3,
      bpm: 13.2,
      badges: [
        <ImTarget />,
        <ImFire />,
        <ImEarth />,
        <ImDribbble />,
        <ImAidKit />,
      ],
      plyrPictureSrc:
        "https://www.basketball-reference.com/req/202106291/images/headshots/curryst01.jpg",
    },
    {
      name: "Kevin Garnett",
      position: "PF",
      year: "2003-04",
      team: "MIN",
      teamColor: "bg-black",
      teamColor2: "text-green-600",
      pts75: 22,
      ts: +3.1,
      reb75: 14,
      ast75: 5,
      stk75: 4.5,
      tov75: 4.3,
      bpm: 13.2,
      badges: [
        <ImTarget />,
        <ImFire />,
        <ImEarth />,
        <ImDribbble />,
        <ImAidKit />,
      ],
      plyrPictureSrc:
        "https://www.basketball-reference.com/req/202106291/images/headshots/garneke01.jpg",
    },
  ];

  const positionColorLogic = (data) => {
    switch (data.position) {
      case "PG":
        return "bg-blue-200";
      case "SG":
        return "bg-red-200";
      case "SF":
        return "bg-green-200";
      case "PF":
        return "bg-purple-200";
      case "C":
        return "bg-yellow-200";
      default:
        return "bg-gray-200";
    }
  };

  const tsColorLogic = (data) => {
    if (data.ts > 0) {
      return <div className="text-green-700">+{data.ts}</div>;
    } else if (data.ts == 0) {
      return <div className="text-yellow-500">{data.ts}</div>;
    } else if (data.ts < 0) {
      return <div className="text-red-600">{data.ts}</div>;
    }
  };

  const badgeColorLogic = (data) => {
    switch (data) {
      case "hof":
        return "bg-purple-400";
      case "gold":
        return "bg-yellow-400";
      case "silver":
        return "bg-slate-300";
      case "bronze":
        return "bg-yellow-600";
      default:
        return "bg-gray-200";
    }
  };

  const config = [
    {
      label: "Rnk",
      render: () => <div className="">{}</div>,
      // sortValue: () => ,
    },
    {
      label: "Player",
      render: (player) => (
        <div className="text-start flex flex-row items-center">
          <img
            className="max-h-12 mr-4 rounded-lg"
            src={player.plyrPictureSrc}
            alt={`Picture of ${player.name}`}
          />
          {player.name}
        </div>
      ),
      sortValue: (player) => player.name,
    },
    {
      label: "Position",
      render: (player) => (
        <div className="flex justify-center">
          <div className={`w-fit px-1.5 rounded ${positionColorLogic(player)}`}>
            {player.position}
          </div>
        </div>
      ),
      sortValue: (player) => player.position,
    },
    {
      label: "Year",
      render: (player) => player.year,
      sortValue: (player) => player.year,
    },
    {
      label: "Team",
      render: (player) => (
        <div
          className={`p-2 m-2 rounded-lg flex justify-center ${player.teamColor} ${player.teamColor2}`}
        >
          {player.team}
        </div>
      ),
      sortValue: (player) => player.team,
    },
    {
      label: "Pts/75",
      render: (player) => (player.pts75 * 0.75).toFixed(1),
      sortValue: (player) => player.pts75,
    },
    {
      label: "rTS%",
      render: (player) => tsColorLogic(player),
      sortValue: (player) => player.ts,
    },
    {
      label: "Rebs/75",
      render: (player) => (player.reb75 * 0.75).toFixed(1),
      sortValue: (player) => player.reb75,
    },
    {
      label: "Ast/75",
      render: (player) => (player.ast75 * 0.75).toFixed(1),
      sortValue: (player) => player.ast75,
    },
    {
      label: "Stk/75",
      render: (player) => (player.stk75 * 0.75).toFixed(1),
      sortValue: (player) => player.stk75,
    },
    {
      label: "Tov/75",
      render: (player) => (player.tov75 * 0.75).toFixed(1),
      sortValue: (player) => player.tov75,
    },
    {
      label: "BPM",
      render: (player) => player.bpm,
      sortValue: (player) => player.bpm,
    },
    {
      label: "Badges (Player Traits)",
      render: function (player) {
        const bunchOfBadges = player.badges.map((badge) => {
          return (
            <div
              className={`rounded m-1.5 p-1 ${badgeColorLogic(badge.color)}`}
            >
              {badge.icon}
            </div>
          );
        });
        return (
          <div key={player.name} className="flex flex-col">
            <div className="flex flex-row justify-center">{bunchOfBadges}</div>
          </div>
        );
      },
    },
  ];

  const keyFn = (player) => {
    return player.name;
  };

  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

  return (
    <div className="flex justify-center items-center content-center mt-10">
      <SortableTable config={config} data={data} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
