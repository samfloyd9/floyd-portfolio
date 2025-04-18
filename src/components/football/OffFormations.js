import AltPlayerCardList from "./AltPlayerCardList";
import FootballPlayerCardList from "./FootballPlayerCardList";

function OffFormations({
  offensiveLine,
  quarterback,
  runningback1,
  runningback2,
  fullBack,
  tightEnd1,
  tightEnd2,
  tightEnd3,
  reciever1,
  reciever2,
  reciever3,
  reciever4,
  offPlaySelection,
}) {
  const ghostPlayer = (
    <div>
      <div className={`p-2 m-0.5 flex w-24 justify-center`}>
        <div className="px-1.5 min-h-28 text-xs flex content-center justify-center text-center items-center"></div>
      </div>
    </div>
  );

  const altGhostPlayer = (
    <div>
      <div className={`px-[1px] py-0.5 m-0.5 flex w-12 justify-center`}>
        <div className="px-0.5 min-h-14 text-xs flex content-center justify-center text-center items-center"></div>
      </div>
    </div>
  );

  const iFormationPro = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          <>{altGhostPlayer}</>
          <div className="justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
          <div className="flex justify-center items-center content-center mt-8">
            <AltPlayerCardList data={tightEnd1} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex w-1/3 justify-start items-start sm:-mt-16">
            <div className="">
              <AltPlayerCardList data={reciever2} />
            </div>
          </div>

          <div className="w-1/3"></div>

          <div className="flex w-1/3 content-end justify-end items-end sm:-mt-16">
            <div className="flex justify-end">
              <AltPlayerCardList data={reciever1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center -mt-20 sm:-mt-4 md:-mt-4 content-center mx-auto ">
          <div className="">
            <AltPlayerCardList data={quarterback} />
          </div>
          <div className="">
            <AltPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <AltPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between w-full">
          <div className="flex   w-full">
            <FootballPlayerCardList data={reciever2} />
          </div>
          <>{ghostPlayer}</>
          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>
          <div className="mt-14">
            <FootballPlayerCardList data={tightEnd1} />
          </div>
          <div className="  w-full content-end flex justify-end">
            <FootballPlayerCardList data={reciever1} />
          </div>
        </div>

        <div className="flex flex-col -mt-14 items-center content-center mx-auto  ">
          <div className="">
            <FootballPlayerCardList data={quarterback} />
          </div>
          <div className="">
            <FootballPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <FootballPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>
    </>
  );

  const iFormationTight = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          <div className="flex justify-center items-center content-center">
            <AltPlayerCardList data={tightEnd2} />
          </div>
          <div className="`justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
          <div className="flex justify-center items-center content-center mt-8">
            <AltPlayerCardList data={tightEnd1} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex w-1/3 justify-start items-start sm:-mt-16"></div>

          <div className="w-1/3"></div>

          <div className="flex w-1/3 content-end justify-end items-end sm:-mt-16">
            <div className="flex justify-end">
              <AltPlayerCardList data={reciever1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center -mt-20 sm:-mt-4 md:-mt-4 content-center mx-auto ">
          <div className="">
            <AltPlayerCardList data={quarterback} />
          </div>
          <div className="">
            <AltPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <AltPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between w-full">
          <div className="flex   justify-start w-full">{ghostPlayer}</div>
          <div className="">
            <FootballPlayerCardList data={tightEnd2} />
          </div>
          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>
          <div className="mt-14">
            <FootballPlayerCardList data={tightEnd1} />
          </div>
          <div className="  w-full content-end flex justify-end">
            <FootballPlayerCardList data={reciever1} />
          </div>
        </div>

        <div className="flex flex-col -mt-14 items-center content-center mx-auto  ">
          <div className="">
            <FootballPlayerCardList data={quarterback} />
          </div>
          <div className="">
            <FootballPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <FootballPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>
    </>
  );

  const iFormationSlot = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          <div className="justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="flex w-1/4 justify-start items-start sm:-mt-16">
            <div className="">
              <AltPlayerCardList data={reciever2} />
            </div>
          </div>

          <div className="w-1/4"></div>
          <div className="w-1/4"></div>

          <div className="flex w-1/4 sm:-mt-16 justify-between">
            <div className="flex mt-8">
              <AltPlayerCardList data={reciever3} />
            </div>
            <div className="flex">
              <AltPlayerCardList data={reciever1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center -mt-24 sm:-mt-8 md:-mt-8 content-center mx-auto ">
          <div className="">
            <AltPlayerCardList data={quarterback} />
          </div>
          <div className="">
            <AltPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <AltPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between w-full">
          <div className="flex   w-full">
            <FootballPlayerCardList data={reciever2} />
          </div>
          <div className="  w-full flex justify-end">
            <>{ghostPlayer}</>
          </div>
          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>

          <div className="  w-full mt-14 flex justify-end">
            <FootballPlayerCardList data={reciever3} />
          </div>

          <div className="  w-full content-end flex justify-end">
            <FootballPlayerCardList data={reciever1} />
          </div>
        </div>

        <div className="flex flex-col -mt-14 items-center content-center mx-auto  ">
          <div className="">
            <FootballPlayerCardList data={quarterback} />
          </div>
          <div className="">
            <FootballPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <FootballPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>
    </>
  );

  const iFormationHulk = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          <div className="hidden sm:contents md:contents lg:contents xl:contents 2xl:contents">
            {altGhostPlayer}
          </div>
          <div className="flex justify-center items-center content-center">
            <AltPlayerCardList data={tightEnd2} />
          </div>
          <div className="justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
          <div className="flex justify-center items-center content-center">
            <AltPlayerCardList data={tightEnd3} />
          </div>
          <div className="hidden sm:contents md:contents lg:contents xl:contents 2xl:contents">
            <div className="flex justify-center items-center content-center mt-8">
              <AltPlayerCardList data={tightEnd1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center sm:-mt-4 md:-mt-4 content-center mx-auto ">
          <div className="flex flex-row gap-20 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0">
            <div className="flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
              {altGhostPlayer}
            </div>
            <div className="">
              <AltPlayerCardList data={quarterback} />
            </div>
            <div className="flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
              <AltPlayerCardList data={tightEnd1} />
            </div>
          </div>

          <div className="">
            <AltPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <AltPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-center w-full">
          {ghostPlayer}
          <div className="">
            <FootballPlayerCardList data={tightEnd2} />
          </div>
          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>
          <div className="">
            <FootballPlayerCardList data={tightEnd3} />
          </div>
          <div className="mt-14">
            <FootballPlayerCardList data={tightEnd1} />
          </div>
        </div>

        <div className="flex flex-col -mt-14 items-center content-center mx-auto  ">
          <div className="">
            <FootballPlayerCardList data={quarterback} />
          </div>
          <div className="">
            <FootballPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <FootballPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>
    </>
  );

  const fullHouse = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          <div className="justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex w-1/3 justify-start items-start sm:-mt-16">
            <div className="">
              <AltPlayerCardList data={reciever2} />
            </div>
          </div>

          <div className="w-1/3"></div>

          <div className="flex w-1/3 content-end justify-end items-end sm:-mt-16">
            <div className="flex justify-end">
              <AltPlayerCardList data={reciever1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center content-center mx-auto -mt-[65px] sm:-mt-0">
          <div className="">
            <AltPlayerCardList data={quarterback} />
          </div>
          <div className="flex flex-row gap-24">
            <div className="">
              <AltPlayerCardList data={fullBack} />
            </div>
            <div className="">
              <AltPlayerCardList data={tightEnd1} />
            </div>
          </div>
          <div className="">
            <AltPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between w-full">
          <div className="flex   w-full">
            <FootballPlayerCardList data={reciever2} />
          </div>
          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>
          <div className="  w-full content-end flex justify-end">
            <FootballPlayerCardList data={reciever1} />
          </div>
        </div>

        <div className="flex flex-col items-center content-center mx-auto  ">
          <div className="">
            <FootballPlayerCardList data={quarterback} />
          </div>

          <div className="flex flex-row gap-48">
            <div className="">
              <FootballPlayerCardList data={tightEnd1} />
            </div>
            <div className="">
              <FootballPlayerCardList data={fullBack} />
            </div>
          </div>

          <div className="">
            <FootballPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>
    </>
  );

  // const wingTWide = <div></div>;

  // const wingTTight = <div></div>;

  // const pistolSpread = <div></div>;

  // const pistolBunch = <div></div>;

  // const pistolStrong = <div></div>;

  // const pistolAce = <div></div>;

  // const pistolFullHouse = <div></div>;

  // const pistolStrongTight = <div></div>;

  // const pistolWingTight = <div></div>;

  const powerI = (
    <div>
      <>
        <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
          <div className="flex flex-row w-full justify-center items-center content-center">
            <>{altGhostPlayer}</>
            <div className="justify-center items-center content-center">
              <AltPlayerCardList data={offensiveLine} />
            </div>
            <div className="flex justify-center items-center content-center mt-8">
              <AltPlayerCardList data={tightEnd1} />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex w-1/3 justify-start items-start sm:-mt-16">
              <div className="">
                <AltPlayerCardList data={reciever1} />
              </div>
            </div>

            <div className="w-1/3"></div>

            <div className="flex w-1/3 content-end justify-end items-end sm:-mt-16">
              <div className="flex justify-end">
                <>{altGhostPlayer}</>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center -mt-20 sm:-mt-4 md:-mt-4 content-center mx-auto ">
            <div className="">
              <AltPlayerCardList data={quarterback} />
            </div>
            <div className="flex flex-row gap-8">
              <>{altGhostPlayer}</>
              <div className="">
                <AltPlayerCardList data={fullBack} />
              </div>
              <div className="">
                <AltPlayerCardList data={runningback2} />
              </div>
            </div>
            <div className="">
              <AltPlayerCardList data={runningback1} />
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------- */}

        <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
          <div className="flex flex-row justify-between w-full">
            <div className="flex   justify-start w-full">
              <FootballPlayerCardList data={reciever1} />
            </div>
            {ghostPlayer}
            <div className=" ">
              <FootballPlayerCardList data={offensiveLine} />
            </div>
            <div className="">
              <FootballPlayerCardList data={tightEnd1} />
            </div>
            <div className="  w-full content-end flex justify-end">
              {ghostPlayer}
            </div>
          </div>

          <div className="flex flex-col items-center content-center mx-auto  ">
            <div className="">
              <FootballPlayerCardList data={quarterback} />
            </div>

            <div className="flex flex-row gap-24">
              <>{ghostPlayer}</>
              <div className="">
                <FootballPlayerCardList data={fullBack} />
              </div>
              <div className="">
                <FootballPlayerCardList data={runningback2} />
              </div>
            </div>

            <div className="">
              <FootballPlayerCardList data={runningback1} />
            </div>
          </div>
        </div>
      </>
    </div>
  );

  const strongIWide = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          <>{altGhostPlayer}</>
          <div className="justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
          <div className="flex justify-center items-center content-center mt-8">
            <AltPlayerCardList data={tightEnd1} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex w-1/3 justify-start items-start sm:-mt-16">
            <div className="">
              <AltPlayerCardList data={reciever2} />
            </div>
          </div>

          <div className="w-1/3"></div>

          <div className="flex w-1/3 content-end justify-end items-end sm:-mt-16">
            <div className="flex justify-end">
              <AltPlayerCardList data={reciever1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center -mt-20 sm:-mt-4 md:-mt-4 content-center mx-auto ">
          <div className="">
            <AltPlayerCardList data={quarterback} />
          </div>
          <div className="ml-32">
            <AltPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <AltPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between w-full">
          <div className="flex   w-full">
            <FootballPlayerCardList data={reciever2} />
          </div>
          <>{ghostPlayer}</>
          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>
          <div className="mt-14">
            <FootballPlayerCardList data={tightEnd1} />
          </div>
          <div className="  w-full content-end flex justify-end">
            <FootballPlayerCardList data={reciever1} />
          </div>
        </div>

        <div className="flex flex-col -mt-14 items-center content-center mx-auto  ">
          <div className="">
            <FootballPlayerCardList data={quarterback} />
          </div>
          <div className="ml-72">
            <FootballPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <FootballPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>
    </>
  );

  const strongITight = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          <div className="flex justify-center items-center content-center">
            <AltPlayerCardList data={tightEnd2} />
          </div>
          <div className="1`justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
          <div className="flex justify-center items-center content-center mt-8">
            <AltPlayerCardList data={tightEnd1} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex w-1/3 justify-start items-start sm:-mt-16"></div>

          <div className="w-1/3"></div>

          <div className="flex w-1/3 content-end justify-end items-end sm:-mt-16">
            <div className="flex justify-end">
              <AltPlayerCardList data={reciever1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center -mt-20 sm:-mt-4 md:-mt-4 content-center mx-auto ">
          <div className="">
            <AltPlayerCardList data={quarterback} />
          </div>
          <div className="ml-32">
            <AltPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <AltPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between w-full">
          <div className="flex   justify-start w-full">{ghostPlayer}</div>
          <div className="mt-14">
            <FootballPlayerCardList data={tightEnd2} />
          </div>
          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>
          <div className="">
            <FootballPlayerCardList data={tightEnd1} />
          </div>
          <div className="  w-full content-end flex justify-end">
            <FootballPlayerCardList data={reciever1} />
          </div>
        </div>

        <div className="flex flex-col -mt-14 items-center content-center mx-auto  ">
          <div className="">
            <FootballPlayerCardList data={quarterback} />
          </div>
          <div className="ml-72">
            <FootballPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <FootballPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>
    </>
  );

  const wildcatPro = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          {altGhostPlayer}
          <div className="justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
          <div className="">
            <AltPlayerCardList data={tightEnd1} />
          </div>
        </div>

        <div className="flex flex-row mt-36 sm:mt-0">
          <div className="flex w-1/3 justify-start items-start">
            <div className="">
              <AltPlayerCardList data={reciever2} />
            </div>
          </div>

          <div className="w-1/3"></div>

          <div className="flex w-1/3 justify-end">
            <div className="flex justify-end sm:-mt-16">
              <AltPlayerCardList data={reciever1} />
            </div>
            <div className="flex">
              <AltPlayerCardList data={quarterback} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center content-center mx-auto   gap-3 -mt-52 sm:-mt-16">
          <div className="ml-60">
            <AltPlayerCardList data={runningback2} />
          </div>
          <div className="">
            <AltPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between w-full">
          <div className="flex   w-full mt-32">
            <FootballPlayerCardList data={reciever2} />
          </div>
          {ghostPlayer}
          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>
          <div className="">
            <FootballPlayerCardList data={tightEnd1} />
          </div>
          <div className="  w-full content-end flex justify-end">
            <div className="flex flex-row justify-between">
              <div>
                <FootballPlayerCardList data={reciever1} />
              </div>
              <div className="mt-32">
                <FootballPlayerCardList data={quarterback} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center content-center mx-auto   gap-8 -mt-32">
          <div className="ml-[500px]">
            <FootballPlayerCardList data={runningback2} />
          </div>
          <div className="">
            <FootballPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>
    </>
  );

  const wildcatUnbalanced = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          <div className="mt-8">
            <AltPlayerCardList data={tightEnd2} />
          </div>
          <div className="justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
          <div className="">
            <AltPlayerCardList data={tightEnd1} />
          </div>
        </div>

        <div className="flex flex-row mt-36 sm:mt-0">
          <div className="flex w-1/3 justify-start items-start">
            <div className="">
              <div className="">
                <AltPlayerCardList data={runningback2} />
              </div>
            </div>
          </div>

          <div className="w-1/3"></div>

          <div className="flex w-1/3 justify-end">
            <div className="flex justify-end sm:-mt-16">
              <AltPlayerCardList data={reciever1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center content-center mx-auto   gap-3 -mt-52 sm:-mt-16">
          <div className="ml-60">
            <AltPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <AltPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between w-full">
          <div className="flex   w-full mt-32">
            <FootballPlayerCardList data={runningback2} />
          </div>
          <div className="mt-16">
            <FootballPlayerCardList data={tightEnd2} />
          </div>
          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>
          <div className="">
            <FootballPlayerCardList data={tightEnd1} />
          </div>
          <div className="  w-full content-end flex justify-end">
            <div className="flex flex-row justify-between">
              <div>
                <FootballPlayerCardList data={reciever1} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center content-center mx-auto   gap-8 -mt-32">
          <div className="ml-[500px]">
            <FootballPlayerCardList data={fullBack} />
          </div>
          <div className="">
            <FootballPlayerCardList data={runningback1} />
          </div>
        </div>
      </div>
    </>
  );

  // flex justify-center items-center content-center mt-8

  const shotgun = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full justify-center items-center content-center">
          <div className="justify-center items-center content-center">
            <AltPlayerCardList data={offensiveLine} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex w-1/3 justify-between items-start sm:-mt-16">
            <div className="">
              <AltPlayerCardList data={reciever2} />
            </div>
            <div className="">
              <AltPlayerCardList data={reciever3} />
            </div>
            <>{altGhostPlayer}</>
          </div>

          <div className="w-1/3"></div>

          <div className="flex w-1/3 items-center justify-between sm:-mt-16">
            {/* <div className="flex justify-between w-full"> */}
              <div className="">
                <AltPlayerCardList data={tightEnd1} />
              </div>
              <div className="">
                <AltPlayerCardList data={reciever1} />
              </div>
              <div className="">
                <AltPlayerCardList data={reciever4} />
              </div>
            {/* </div> */}
          </div>
        </div>

        <div className="flex flex-col items-center -mt-20 sm:-mt-4 md:-mt-4 content-center mx-auto ">
          <div className="mt-20">
            <AltPlayerCardList data={quarterback} />
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between w-full">
          <div className="flex   w-full justify-between">
            <div className="mt-14">
              <FootballPlayerCardList data={reciever2} />
            </div>
            <div className="">
              <FootballPlayerCardList data={reciever3} />
            </div>
            <>{ghostPlayer}</>
          </div>

          <div className=" ">
            <FootballPlayerCardList data={offensiveLine} />
          </div>

          <div className="  w-full flex justify-end lg:gap-6">
            <div className="">
              <FootballPlayerCardList data={tightEnd1} />
            </div>
            <div className="mt-14">
              <FootballPlayerCardList data={reciever4} />
            </div>
            <div className="mt-14">
              <FootballPlayerCardList data={reciever1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-24 items-center content-center mx-auto  ">
          <div className="">
            <FootballPlayerCardList data={quarterback} />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {(offPlaySelection.label === "I Formation Pro" ||
        offPlaySelection.label === undefined) &&
        iFormationPro}
      {offPlaySelection.label === "I Formation Tight" && iFormationTight}
      {offPlaySelection.label === "I Formation Slot" && iFormationSlot}
      {offPlaySelection.label === "I Formation Hulk" && iFormationHulk}
      {offPlaySelection.label === "Full House" && fullHouse}

      {/* {offPlaySelection.label === "Wing-T Wide" && wingTWide}
      {offPlaySelection.label === "Wing-T Tight" && wingTTight} */}
      {/* 
      {offPlaySelection.label === "Pistol Spread" && pistolSpread}
      {offPlaySelection.label === "Pistol Bunch" && pistolBunch}
      {offPlaySelection.label === "Pistol Strong" && pistolStrong}
      {offPlaySelection.label === "Pistol Ace" && pistolAce}
      {offPlaySelection.label === "Pistol Full House" && pistolFullHouse}
      {offPlaySelection.label === "Pistol Strong Tight" && pistolStrongTight}
      {offPlaySelection.label === "Pistol Wing Tight" && pistolWingTight} */}

      {offPlaySelection.label === "Power I" && powerI}

      {offPlaySelection.label === "Strong I Wide" && strongIWide}
      {offPlaySelection.label === "Strong I Tight" && strongITight}

      {offPlaySelection.label === "Wildcat Pro" && wildcatPro}
      {offPlaySelection.label === "Wildcat Unbalanced" && wildcatUnbalanced}
      {offPlaySelection.label === "Shotgun Empty" && shotgun}
    </div>
  );
}

export default OffFormations;
