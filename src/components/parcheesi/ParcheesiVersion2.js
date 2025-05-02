import Pawn from "./Pawn";
import Nest from "./Nest";
import { useState } from "react";

const ParcheesiVersion2 = ({
  pawns,
  currentPlayer,
  selectedPawn,
  setSelectedPawn,
  setSelectedDice,
  blockades,
}) => {
  const [topQuad, setTopQuad] = useState([
    { id: 26, type: "regular", position: [0, 0] },
    { id: 107, type: "home-column", position: [1, 0] },
    { id: 42, type: "regular", position: [2, 0] },
    { id: 27, type: "regular", position: [0, 1] },
    { id: 106, type: "home-column", position: [1, 1] },
    { id: 41, type: "regular", position: [2, 1] },
    { id: 28, type: "regular", position: [0, 2] },
    { id: 105, type: "home-column", position: [1, 2] },
    { id: 40, type: "regular", position: [2, 2] },
    { id: 29, type: "safe", position: [0, 3] },
    { id: 104, type: "home-column", position: [1, 3] },
    { id: 39, type: "safe", position: [2, 3] },
    { id: 30, type: "regular", position: [0, 4] },
    { id: 103, type: "home-column", position: [1, 4] },
    { id: 38, type: "regular", position: [2, 4] },
    { id: 31, type: "regular", position: [0, 5] },
    { id: 102, type: "home-column", position: [1, 5] },
    { id: 37, type: "regular", position: [2, 5] },
    { id: 32, type: "regular", position: [0, 6] },
    { id: 101, type: "home-column", position: [1, 6] },
    { id: 36, type: "regular", position: [2, 6] },
    { id: 33, type: "regular", position: [0, 7] },
    { id: 34, type: "safe", position: [1, 7] },
    { id: 35, type: "regular", position: [2, 7] },
  ]);

  const [rightQuad, setRightQuad] = useState([
    { id: 9, type: "regular", position: [0, 0] },
    { id: 207, type: "home-column", position: [1, 0] },
    { id: 25, type: "regular", position: [2, 0] },
    { id: 10, type: "regular", position: [0, 1] },
    { id: 206, type: "home-column", position: [1, 1] },
    { id: 24, type: "regular", position: [2, 1] },
    { id: 11, type: "regular", position: [0, 2] },
    { id: 205, type: "home-column", position: [1, 2] },
    { id: 23, type: "regular", position: [2, 2] },
    { id: 12, type: "safe", position: [0, 3] },
    { id: 204, type: "home-column", position: [1, 3] },
    { id: 22, type: "safe", position: [2, 3] },
    { id: 13, type: "regular", position: [0, 4] },
    { id: 203, type: "home-column", position: [1, 4] },
    { id: 21, type: "regular", position: [2, 4] },
    { id: 14, type: "regular", position: [0, 5] },
    { id: 202, type: "home-column", position: [1, 5] },
    { id: 20, type: "regular", position: [2, 5] },
    { id: 15, type: "regular", position: [0, 6] },
    { id: 201, type: "home-column", position: [1, 6] },
    { id: 19, type: "regular", position: [2, 6] },
    { id: 16, type: "regular", position: [0, 7] },
    { id: 17, type: "safe", position: [1, 7] },
    { id: 18, type: "regular", position: [2, 7] },
  ]);

  const [bottomQuad, setBottomQuad] = useState([
    { id: 60, type: "regular", position: [0, 0] },
    { id: 307, type: "home-column", position: [1, 0] },
    { id: 8, type: "regular", position: [2, 0] },
    { id: 61, type: "regular", position: [0, 1] },
    { id: 306, type: "home-column", position: [1, 1] },
    { id: 7, type: "regular", position: [2, 1] },
    { id: 62, type: "regular", position: [0, 2] },
    { id: 305, type: "home-column", position: [1, 2] },
    { id: 6, type: "regular", position: [2, 2] },
    { id: 63, type: "safe", position: [0, 3] },
    { id: 304, type: "home-column", position: [1, 3] },
    { id: 5, type: "safe", position: [2, 3] },
    { id: 64, type: "regular", position: [0, 4] },
    { id: 303, type: "home-column", position: [1, 4] },
    { id: 4, type: "regular", position: [2, 4] },
    { id: 65, type: "regular", position: [0, 5] },
    { id: 302, type: "home-column", position: [1, 5] },
    { id: 3, type: "regular", position: [2, 5] },
    { id: 66, type: "regular", position: [0, 6] },
    { id: 301, type: "home-column", position: [1, 6] },
    { id: 2, type: "regular", position: [2, 6] },
    { id: 67, type: "regular", position: [0, 7] },
    { id: 68, type: "safe", position: [1, 7] },
    { id: 1, type: "regular", position: [2, 7] },
  ]);

  const [leftQuad, setLeftQuad] = useState([
    { id: 43, type: "regular", position: [0, 0] },
    { id: 407, type: "home-column", position: [1, 0] },
    { id: 59, type: "regular", position: [2, 0] },
    { id: 44, type: "regular", position: [0, 1] },
    { id: 406, type: "home-column", position: [1, 1] },
    { id: 58, type: "regular", position: [2, 1] },
    { id: 45, type: "regular", position: [0, 2] },
    { id: 405, type: "home-column", position: [1, 2] },
    { id: 57, type: "regular", position: [2, 2] },
    { id: 46, type: "safe", position: [0, 3] },
    { id: 404, type: "home-column", position: [1, 3] },
    { id: 56, type: "safe", position: [2, 3] },
    { id: 47, type: "regular", position: [0, 4] },
    { id: 403, type: "home-column", position: [1, 4] },
    { id: 55, type: "regular", position: [2, 4] },
    { id: 48, type: "regular", position: [0, 5] },
    { id: 402, type: "home-column", position: [1, 5] },
    { id: 54, type: "regular", position: [2, 5] },
    { id: 49, type: "regular", position: [0, 6] },
    { id: 401, type: "home-column", position: [1, 6] },
    { id: 53, type: "regular", position: [2, 6] },
    { id: 50, type: "regular", position: [0, 7] },
    { id: 51, type: "safe", position: [1, 7] },
    { id: 52, type: "regular", position: [2, 7] },
  ]);

  const [home, setHome] = useState([
    {
      id: "home",
      finalPosition: { red: 108, blue: 308, yellow: 408, green: 208 },
      pawns: [],
    },
  ]);

  const determineSpaceType = (index) => {
    let spaceTypeStyle = "";
    const safeSpaces = [5, 12, 17, 22, 29, 34, 39, 46, 51, 56, 63, 68];
    const redColumns = [101, 102, 103, 104, 105, 106, 107];
    const yellowColumns = [301, 302, 303, 304, 305, 306, 307];
    const greenColumns = [401, 402, 403, 404, 405, 406, 407];
    const blueColumns = [201, 202, 203, 204, 205, 206, 207];

    if (safeSpaces.includes(index)) {
      spaceTypeStyle = "bg-blue-300";
    } else if (redColumns.includes(index)) {
      spaceTypeStyle = "bg-red-300";
    } else if (yellowColumns.includes(index)) {
      spaceTypeStyle = "bg-yellow-200";
    } else if (greenColumns.includes(index)) {
      spaceTypeStyle = "bg-emerald-300";
    } else if (blueColumns.includes(index)) {
      spaceTypeStyle = "bg-sky-300";
    } else {
      spaceTypeStyle = "bg-white";
    }

    return spaceTypeStyle;
  };

  const startSpaceStyling = (id) => {
    if (id === 5) {
      return "border-yellow-500";
    } else if (id === 22) {
      return "border-blue-500";
    } else if (id === 39) {
      return "border-red-400";
    } else if (id === 56) {
      return "border-green-500";
    } else {
      return "border-blue-300";
    }
  };

  const redHomePawns = pawns.filter(
    (pawn) => pawn.position === home[0].finalPosition.red
  );
  const greenHomePawns = pawns.filter(
    (pawn) => pawn.position === home[0].finalPosition.green
  );
  const blueHomePawns = pawns.filter(
    (pawn) => pawn.position === home[0].finalPosition.blue
  );
  const yellowHomePawns = pawns.filter(
    (pawn) => pawn.position === home[0].finalPosition.yellow
  );

  const handlePawnSelection = (pawn) => {
    if (pawn.color !== currentPlayer) return; // Only allow selecting own pawns
    setSelectedPawn(pawn);
    setSelectedDice(null); // Reset dice selection
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 bg-gray-300 border-4 border-black shadow-lg rounded-sm w-[590px] h-[590px]">
      <Nest
        color="red"
        pawns={pawns}
        handlePawnSelection={handlePawnSelection}
        selectedPawn={selectedPawn}
      />
      {/* Top Quadrant */}
      <div className="grid grid-cols-3 grid-rows-8 m-auto transform rotate-180 border border-black">
        {topQuad.map((space) => {
          const pawnsHere = pawns.filter((p) => {
            if (
              space.id >= 101 &&
              space.id <= 107 &&
              p.location === "homeColumn" &&
              p.color === "red"
            ) {
              // Red home column spaces (101-107)
              return p.position === space.id - 100;
            }
            if (
              space.id >= 201 &&
              space.id <= 207 &&
              p.location === "homeColumn" &&
              p.color === "blue"
            ) {
              // Blue home column spaces (201-207)
              return p.position === space.id - 200;
            }
            if (
              space.id >= 301 &&
              space.id <= 307 &&
              p.location === "homeColumn" &&
              p.color === "yellow"
            ) {
              // Yellow home column spaces (301-307)
              return p.position === space.id - 300;
            }
            if (
              space.id >= 401 &&
              space.id <= 407 &&
              p.location === "homeColumn" &&
              p.color === "green"
            ) {
              // Green home column spaces (401-407)
              return p.position === space.id - 400;
            }
            return p.location === "onTrack" && p.position === space.id;
          });

          return (
            <div
              key={space.id}
              className={`flex items-center justify-center border-black border w-16 h-6 ${determineSpaceType(
                space.id
              )} ${blockades.includes(space.id) ? "bg-black text-white" : ""}`}
            >
              <div className="absolute">
                {space.type === "safe" && (
                  <div className="border-2 w-[24px] h-6 rounded-full border-black flex justify-center items-center">
                    <div
                      className={`border-2 w-[10px] h-[10px] rounded-full ${startSpaceStyling(
                        space.id
                      )}`}
                    ></div>
                  </div>
                )}
              </div>

              <div className="absolute transform rotate-90">
                {pawnsHere.map((pawn) => (
                  <div
                    key={pawn.id}
                    className={`z-50 ${
                      selectedPawn?.id === pawn.id
                        ? "border-2 border-red-500"
                        : "cursor-pointer"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Pawn Clicked!", pawn);
                      handlePawnSelection(pawn);
                    }}
                  >
                    <Pawn color={pawn.color} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Nest
        color="blue"
        pawns={pawns}
        handlePawnSelection={handlePawnSelection}
        selectedPawn={selectedPawn}
      />

      {/* Left Quadrant */}
      <div className="grid grid-cols-3 grid-rows-8 bg-green-300 border transform rotate-90 border-black">
        {leftQuad.map((space) => {
          const pawnsHere = pawns.filter((p) => {
            if (
              space.id >= 101 &&
              space.id <= 107 &&
              p.location === "homeColumn" &&
              p.color === "red"
            ) {
              // Red home column spaces (101-107)
              return p.position === space.id - 100;
            }
            if (
              space.id >= 201 &&
              space.id <= 207 &&
              p.location === "homeColumn" &&
              p.color === "blue"
            ) {
              // Blue home column spaces (201-207)
              return p.position === space.id - 200;
            }
            if (
              space.id >= 301 &&
              space.id <= 307 &&
              p.location === "homeColumn" &&
              p.color === "yellow"
            ) {
              // Yellow home column spaces (301-307)
              return p.position === space.id - 300;
            }
            if (
              space.id >= 401 &&
              space.id <= 407 &&
              p.location === "homeColumn" &&
              p.color === "green"
            ) {
              // Green home column spaces (401-407)
              return p.position === space.id - 400;
            }
            return p.location === "onTrack" && p.position === space.id;
          });

          return (
            <div
              key={space.id}
              className={`flex items-center justify-center border-black border w-16 h-6 ${determineSpaceType(
                space.id
              )} ${blockades.includes(space.id) ? "bg-black text-white" : ""}`}
            >
              <div className="absolute">
                {space.type === "safe" && (
                  <div className="border-2 w-[24px] h-6 rounded-full border-black flex justify-center items-center">
                    <div
                      className={`border-2 w-[10px] h-[10px] rounded-full ${startSpaceStyling(
                        space.id
                      )}`}
                    ></div>
                  </div>
                )}
              </div>
              <div className="absolute transform rotate-90">
                {pawnsHere.map((pawn) => (
                  <div
                    key={pawn.id}
                    className={`z-50 ${
                      selectedPawn?.id === pawn.id
                        ? "border-2 border-red-500"
                        : "cursor-pointer"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Pawn Clicked!", pawn);
                      handlePawnSelection(pawn);
                    }}
                  >
                    <Pawn color={pawn.color} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-red-500 w-full h-full flex flex-col justify-center items-center text-4xl border border-black">
        <div className="relative flex justify-center items-center z-50">
          {/* RED – Top Center */}
          <div className="absolute top-[2%] left-1/2 transform -translate-x-1/2 flex gap-1">
            {redHomePawns.map((pawn) => (
              <div key={pawn.id}>
                <Pawn color={pawn.color} />
              </div>
            ))}
          </div>

          {/* BLUE – Right Center */}
          <div className="absolute right-[2%] top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
            {blueHomePawns.map((pawn) => (
              <div key={pawn.id}>
                <Pawn color={pawn.color} />
              </div>
            ))}
          </div>

          {/* YELLOW – Bottom Center */}
          <div className="absolute bottom-[2%] left-1/2 transform -translate-x-1/2 flex gap-1">
            {yellowHomePawns.map((pawn) => (
              <div key={pawn.id}>
                <Pawn color={pawn.color} />
              </div>
            ))}
          </div>

          {/* GREEN – Left Center */}
          <div className="absolute left-[2%] top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
            {greenHomePawns.map((pawn) => (
              <div key={pawn.id}>
                <Pawn color={pawn.color} />
              </div>
            ))}
          </div>

          <div className="shadow-lg rounded-lg bg-red-700 py-2 px-1.5">
            <div className="shadow-lg rounded-lg bg-red-400 py-4 px-3">
              <div className="shadow-lg rounded-lg bg-red-600 py-4 px-3">
                <div className="shadow-lg rounded-lg bg-red-500 py-4 px-3">
                  <div className="font-[cursive] text-white bg-red-600 shadow-lg py-4 px-2 rounded-lg">
                    Home
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Quadrant */}
      <div className="grid grid-cols-3 grid-rows-8 bg-blue-300 transform -rotate-90 border border-black">
        {rightQuad.map((space) => {
          const pawnsHere = pawns.filter((p) => {
            if (
              space.id >= 101 &&
              space.id <= 107 &&
              p.location === "homeColumn" &&
              p.color === "red"
            ) {
              // Red home column spaces (101-107)
              return p.position === space.id - 100;
            }
            if (
              space.id >= 201 &&
              space.id <= 207 &&
              p.location === "homeColumn" &&
              p.color === "blue"
            ) {
              // Blue home column spaces (201-207)
              return p.position === space.id - 200;
            }
            if (
              space.id >= 301 &&
              space.id <= 307 &&
              p.location === "homeColumn" &&
              p.color === "yellow"
            ) {
              // Yellow home column spaces (301-307)
              return p.position === space.id - 300;
            }
            if (
              space.id >= 401 &&
              space.id <= 407 &&
              p.location === "homeColumn" &&
              p.color === "green"
            ) {
              // Green home column spaces (401-407)
              return p.position === space.id - 400;
            }
            return p.location === "onTrack" && p.position === space.id;
          });

          return (
            <div
              key={space.id}
              className={`flex items-center justify-center border-black border w-16 h-6 ${determineSpaceType(
                space.id
              )} ${blockades.includes(space.id) ? "bg-black text-white" : ""}`}
            >
              <div className="absolute">
                {space.type === "safe" && (
                  <div className="border-2 w-[24px] h-6 rounded-full border-black flex justify-center items-center">
                    <div
                      className={`border-2 w-[10px] h-[10px] rounded-full ${startSpaceStyling(
                        space.id
                      )}`}
                    ></div>
                  </div>
                )}
              </div>
              <div className="absolute transform rotate-90">
                {pawnsHere.map((pawn) => (
                  <div
                    key={pawn.id}
                    className={`z-50 ${
                      selectedPawn?.id === pawn.id
                        ? "border-2 border-red-500"
                        : "cursor-pointer"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Pawn Clicked!", pawn);
                      handlePawnSelection(pawn);
                    }}
                  >
                    <Pawn color={pawn.color} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Nest
        color="green"
        pawns={pawns}
        handlePawnSelection={handlePawnSelection}
        selectedPawn={selectedPawn}
      />
      {/* Bottom Quadrant */}
      <div className="grid grid-cols-3 grid-rows-8 bg-yellow-300 transform border border-black">
        {bottomQuad.map((space) => {
          const pawnsHere = pawns.filter((p) => {
            if (
              space.id >= 101 &&
              space.id <= 107 &&
              p.location === "homeColumn" &&
              p.color === "red"
            ) {
              // Red home column spaces (101-107)
              return p.position === space.id - 100;
            }
            if (
              space.id >= 201 &&
              space.id <= 207 &&
              p.location === "homeColumn" &&
              p.color === "blue"
            ) {
              // Blue home column spaces (201-207)
              return p.position === space.id - 200;
            }
            if (
              space.id >= 301 &&
              space.id <= 307 &&
              p.location === "homeColumn" &&
              p.color === "yellow"
            ) {
              // Yellow home column spaces (301-307)
              return p.position === space.id - 300;
            }
            if (
              space.id >= 401 &&
              space.id <= 407 &&
              p.location === "homeColumn" &&
              p.color === "green"
            ) {
              // Green home column spaces (401-407)
              return p.position === space.id - 400;
            }
            return p.location === "onTrack" && p.position === space.id;
          });

          return (
            <div
              key={space.id}
              className={`flex items-center justify-center border-black border w-16 h-6 ${determineSpaceType(
                space.id
              )} ${blockades.includes(space.id) ? "bg-black text-white" : ""}`}
            >
              <div className="absolute">
                {space.type === "safe" && (
                  <div className="border-2 w-[24px] h-6 rounded-full border-black flex justify-center items-center">
                    <div
                      className={`border-2 w-[10px] h-[10px] rounded-full ${startSpaceStyling(
                        space.id
                      )}`}
                    ></div>
                  </div>
                )}
              </div>
              <div className="absolute transform rotate-90">
                {pawnsHere.map((pawn) => (
                  <div
                    key={pawn.id}
                    className={`z-50 ${
                      selectedPawn?.id === pawn.id
                        ? "border-2 border-red-500"
                        : "cursor-pointer"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("Pawn Clicked!", pawn);
                      handlePawnSelection(pawn);
                    }}
                  >
                    <Pawn color={pawn.color} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Nest
        color="yellow"
        pawns={pawns}
        handlePawnSelection={handlePawnSelection}
        selectedPawn={selectedPawn}
      />
    </div>
  );
};
export default ParcheesiVersion2;
