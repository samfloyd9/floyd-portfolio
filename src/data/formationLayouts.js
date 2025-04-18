import AltPlayerCardList from "./AltPlayerCardList";
import FootballPlayerCardList from "./FootballPlayerCardList";

export const formations = {
  "3-4": {
    mobile: (players) => (
      <div className="flex flex-col items-center mx-auto gap-8 bg-white">
        {/* Safeties */}
        <div className="flex flex-row gap-40">
          <AltPlayerCardList data={players.strongSafety} />
          <AltPlayerCardList data={players.freeSafety} />
        </div>

        {/* Linebackers */}
        <div className="flex flex-row gap-2 mt-4">
          <AltPlayerCardList data={players.rightOutsideLinebacker} />
          <AltPlayerCardList data={players.middleLinebacker1} />
          <AltPlayerCardList data={players.middleLinebacker2} />
          <AltPlayerCardList data={players.leftOutsideLinebacker} />
        </div>

        {/* Defensive line and corners */}
        <div className="flex flex-row w-full justify-between">
          <div className="flex justify-start w-full">
            <AltPlayerCardList data={players.cornerback1} />
          </div>

          <div className="flex flex-row gap-1 justify-center">
            <AltPlayerCardList data={players.rightDefensiveEnd} />
            <AltPlayerCardList data={players.noseTackle} />
            <AltPlayerCardList data={players.leftDefensiveEnd} />
          </div>

          <div className="flex justify-end w-full">
            <AltPlayerCardList data={players.cornerback2} />
          </div>
        </div>
      </div>
    ),

    desktop: (players) => (
      <div className="flex flex-col items-center mx-auto gap-12 bg-white">
        {/* Safeties */}
        <div className="flex flex-row gap-80">
          <FootballPlayerCardList data={players.strongSafety} />
          <FootballPlayerCardList data={players.freeSafety} />
        </div>

        {/* Inside linebackers */}
        <div className="flex flex-row gap-24">
          <FootballPlayerCardList data={players.middleLinebacker1} />
          <FootballPlayerCardList data={players.middleLinebacker2} />
        </div>

        {/* Defensive line and corners */}
        <div className="flex flex-row w-full">
          <div className="flex justify-start w-full ml-4 -mt-12">
            <FootballPlayerCardList data={players.cornerback1} />
          </div>

          <div className="flex flex-row gap-10 justify-center">
            <FootballPlayerCardList data={players.rightOutsideLinebacker} />
            <FootballPlayerCardList data={players.rightDefensiveEnd} />
            <FootballPlayerCardList data={players.noseTackle} />
            <FootballPlayerCardList data={players.leftDefensiveEnd} />
            <FootballPlayerCardList data={players.leftOutsideLinebacker} />
          </div>

          <div className="flex justify-end w-full mr-4 -mt-12">
            <FootballPlayerCardList data={players.cornerback2} />
          </div>
        </div>
      </div>
    ),
  },
};
