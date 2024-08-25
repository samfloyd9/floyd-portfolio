import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

function TablePage() {
  const data = [
    {
      name: "LeBron James",
      position: "SF",
      year: "2012-13",
      team: "CLE",
      teamColor: "bg-red-800",
      teamColor2: "text-yellow-500",
      pts75: 27,
      ts: +5.5,
      reb75: 7,
      ast75: 7,
      stk75: 2.5,
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
      ts: +10.5,
      reb75: 5,
      ast75: 5,
      stk75: 2.5,
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
      ts: +2.5,
      reb75: 14,
      ast75: 5,
      stk75: 4.5,
      plyrPictureSrc:
        "https://www.basketball-reference.com/req/202106291/images/headshots/garneke01.jpg",
    },
  ];

  const positionColorLogic = (data) => {
    switch (data.position) {
      case
    }
  }

  const config = [
    {
      label: "Name",
      render: (player) => (
        <div className="text-start flex flex-row items-center">
          <img className="max-h-12 mr-4 rounded-lg" src={player.plyrPictureSrc} alt={`Picture of ${player.name}`} />
          {player.name}
        </div>
      ),
      sortValue: (player) => player.name,
    },
    {
      label: "Position",
      render: (player) => <div className="bg-gray-300 rounded">{player.position}</div>,
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
      render: (player) => player.pts75,
      sortValue: (player) => player.pts75,
    },
    {
      label: "rTS%",
      render: (player) => player.ts,
      sortValue: (player) => player.ts,
    },
    {
      label: "Rebs/75",
      render: (player) => player.reb75,
      sortValue: (player) => player.reb75,
    },
    {
      label: "Ast/75",
      render: (player) => player.ast75,
      sortValue: (player) => player.ast75,
    },
    {
      label: "Stk/75",
      render: (player) => player.stk75,
      sortValue: (player) => player.stk75,
    },
  ];

  const keyFn = (player) => {
    return player.name;
  };

  return (
    <div className="flex justify-center items-center content-center mt-10">
      <SortableTable config={config} data={data} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
