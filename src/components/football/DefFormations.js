/* eslint-disable no-unused-vars */

import AltPlayerCardList from "./AltPlayerCardList";
import FootballPlayerCardList from "./FootballPlayerCardList";

function DefFormations({
  noseTackle,
  rightDefensiveTackle,
  leftDefensiveTackle,
  leftDefensiveEnd,
  rightDefensiveEnd,
  rightOutsideLinebacker,
  leftOutsideLinebacker,
  middleLinebacker1,
  middleLinebacker2,
  freeSafety,
  strongSafety,
  cornerback1,
  cornerback2,
  cornerback3,
  cornerback4,
  defPlaySelection,
}) {
  const ghostPlayer = (
    <div>
      <div className={` border-white p-2 m-0.5 flex w-24 justify-center`}>
        <div className="bg-white text-white px-1.5 min-h-28 text-xs flex content-center justify-center text-center items-center">
          GHOST
        </div>
      </div>
    </div>
  );

  const altGhostPlayer = (
    <div>
      <div
        className={`border-white px-[1px] py-0.5 m-0.5 flex w-12 justify-center`}
      >
        <div className="bg-white text-white px-0.5 min-h-14 text-xs flex content-center justify-center text-center items-center">
          GHOST
        </div>
      </div>
    </div>
  );

  const threeFour = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col items-center mx-auto gap-8 bg-white">
          <div className="flex flex-row gap-40">
            <div className="">
              <AltPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <AltPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="mt-4">
              <AltPlayerCardList data={rightOutsideLinebacker} />
            </div>
            <div className="">
              <AltPlayerCardList data={middleLinebacker1} />
            </div>
            <div className="">
              <AltPlayerCardList data={middleLinebacker2} />
            </div>

            <div className="mt-4">
              <AltPlayerCardList data={leftOutsideLinebacker} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start">
              <AltPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-1">
              <div className="">
                <AltPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div>
                <AltPlayerCardList data={noseTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end">
              <AltPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>

        {/* <div className="bg-purple-300 mt-10 w-full flex items-center justify-center text-white">
          <FootballPlayerCardList data={cornerback2} />
        </div> */}

      </div>

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-col items-center content-start mx-auto gap-12 bg-white">
          <div className="flex flex-row gap-80">
            <div className="">
              <FootballPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <FootballPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row gap-24">
            <div className="">
              <FootballPlayerCardList data={middleLinebacker1} />
            </div>
            <div className="">
              <FootballPlayerCardList data={middleLinebacker2} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start ml-4 -mt-12">
              <FootballPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-10">
              <div className="-mt-10">
                <FootballPlayerCardList data={rightOutsideLinebacker} />
              </div>
              <div className="">
                <FootballPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div>
                <FootballPlayerCardList data={noseTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveEnd} />
              </div>
              <div className="-mt-10">
                <FootballPlayerCardList data={leftOutsideLinebacker} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end mr-4 -mt-12">
              <FootballPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const fourThree = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col items-center content-start mx-auto gap-8 bg-white">
          <div className="flex flex-row gap-40">
            <div className="">
              <AltPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <AltPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="">
              <AltPlayerCardList data={rightOutsideLinebacker} />
            </div>
            <div className="">
              <AltPlayerCardList data={middleLinebacker1} />
            </div>

            <div className="">
              <AltPlayerCardList data={leftOutsideLinebacker} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start">
              <AltPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-1">
              <div className="">
                <AltPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <AltPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end">
              <AltPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-col items-center content-start mx-auto gap-12 bg-white">
          <div className="flex flex-row gap-[450px]">
            <div className="">
              <FootballPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <FootballPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row gap-16">
            <div className="">
              <FootballPlayerCardList data={rightOutsideLinebacker} />
            </div>
            <div className="">
              <FootballPlayerCardList data={middleLinebacker1} />
            </div>
            <div className="">
              <FootballPlayerCardList data={leftOutsideLinebacker} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start ml-4 -mt-12">
              <FootballPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-14">
              <div className="">
                <FootballPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <FootballPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end mr-4 -mt-12">
              <FootballPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const threeThreeFive = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col items-center content-start mx-auto gap-8 bg-white">
          <div className="flex flex-row gap-40">
            <div className="">
              <AltPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <AltPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="w-full content-start flex justify-start">
              {altGhostPlayer}
            </div>

            <div className="flex flex-row gap-1.5">
              <div className="flex flex-row justify-center">
                <AltPlayerCardList data={rightOutsideLinebacker} />
              </div>
              <div className="">
                <AltPlayerCardList data={middleLinebacker1} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftOutsideLinebacker} />
              </div>
            </div>

            <div className="w-full flex justify-center">
              <AltPlayerCardList data={cornerback3} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start">
              <AltPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-4">
              <div className="">
                <AltPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <AltPlayerCardList data={noseTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end">
              <AltPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-col items-center content-start mx-auto gap-12 bg-white">
          <div className="flex flex-row gap-[450px]">
            <div className="">
              <FootballPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <FootballPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row w-full mx-4">
            <div className="w-full content-start flex justify-start">
              {ghostPlayer}
            </div>

            <div>
              <div className="flex justify-center w-[500px]">
                <FootballPlayerCardList data={middleLinebacker1} />
              </div>
            </div>

            <div className="w-full flex justify-center">
              <FootballPlayerCardList data={cornerback3} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start ml-4 -mt-12">
              <FootballPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-10">
              <div className="-mt-12">
                <FootballPlayerCardList data={rightOutsideLinebacker} />
              </div>
              <div className="">
                <FootballPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <FootballPlayerCardList data={noseTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveEnd} />
              </div>
              <div className="-mt-12">
                <FootballPlayerCardList data={leftOutsideLinebacker} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end mr-4 -mt-12">
              <FootballPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const fourFour = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col items-center content-start mx-auto gap-8 bg-white">
          <div className="flex flex-row">
            <div className="">
              <AltPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="">
              <AltPlayerCardList data={rightOutsideLinebacker} />
            </div>
            <div className="">
              <AltPlayerCardList data={middleLinebacker1} />
            </div>

            <div className="">
              <AltPlayerCardList data={middleLinebacker2} />
            </div>

            <div className="">
              <AltPlayerCardList data={leftOutsideLinebacker} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start">
              <AltPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-1">
              <div className="">
                <AltPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <AltPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end">
              <AltPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-col items-center content-start mx-auto gap-12 bg-white">
          <div className="flex flex-row">
            <div className="">
              <FootballPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row gap-32">
            <div className="">
              <FootballPlayerCardList data={middleLinebacker1} />
            </div>
            <div className="">
              <FootballPlayerCardList data={middleLinebacker2} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start ml-4 -mt-20">
              <FootballPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-6">
              <div className="-mt-20">
                <FootballPlayerCardList data={rightOutsideLinebacker} />
              </div>
              <div className="">
                <FootballPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <FootballPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveEnd} />
              </div>
              <div className="-mt-20">
                <FootballPlayerCardList data={leftOutsideLinebacker} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end mr-4 -mt-20">
              <FootballPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const fourSix = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col items-center content-start mx-auto gap-8 bg-white">
          <div className="flex flex-row">
            <div className="">
              <AltPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start">
              <AltPlayerCardList data={cornerback1} />
            </div>
            <div className="flex flex-row w-full justify-center gap-4">
              <div className="">
                <AltPlayerCardList data={middleLinebacker1} />
              </div>
              <div className="">
                <AltPlayerCardList data={strongSafety} />
              </div>
            </div>
            <div className="bg-white w-full content-end flex justify-end">
              <AltPlayerCardList data={cornerback2} />
            </div>
          </div>

          <div className="flex flex-row w-full justify-center">
            <div className="flex flex-row gap-0">
              <div className="">
                <AltPlayerCardList data={rightOutsideLinebacker} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftOutsideLinebacker} />
              </div>
              <div className="">
                <AltPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <AltPlayerCardList data={noseTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-col items-center content-start mx-auto gap-12 bg-white">
          <div className="flex flex-row">
            <div className="">
              <FootballPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row gap-52">
            <div className="">
              <FootballPlayerCardList data={middleLinebacker1} />
            </div>
            <div className="">
              <FootballPlayerCardList data={strongSafety} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start ml-4 -mt-20">
              <FootballPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-4">
              <div className="">
                <FootballPlayerCardList data={rightOutsideLinebacker} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftOutsideLinebacker} />
              </div>
              <div className="">
                <FootballPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <FootballPlayerCardList data={noseTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end mr-4 -mt-20">
              <FootballPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const fiveTwo = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col items-center content-start mx-auto gap-8 bg-white">
          <div className="flex flex-row gap-40">
            <div className="">
              <AltPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <AltPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start">
              <AltPlayerCardList data={cornerback1} />
            </div>
            <div className="flex flex-row w-full justify-center gap-6">
              <div className="">
                <AltPlayerCardList data={middleLinebacker1} />
              </div>
              <div className="">
                <AltPlayerCardList data={middleLinebacker2} />
              </div>
            </div>
            <div className="bg-white w-full content-end flex justify-end">
              <AltPlayerCardList data={cornerback2} />
            </div>
          </div>

          <div className="flex flex-row w-full justify-center">
            <div className="flex flex-row gap-0">
              <div className="">
                <AltPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <AltPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={noseTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-col items-center content-start mx-auto gap-12 bg-white">
          <div className="flex flex-row gap-[480px]">
            <div className="">
              <FootballPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <FootballPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row gap-52">
            <div className="">
              <FootballPlayerCardList data={middleLinebacker1} />
            </div>
            <div className="">
              <FootballPlayerCardList data={middleLinebacker2} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="bg-white w-full content-start flex justify-start ml-4 -mt-20">
              <FootballPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-4">
              <div className="">
                <FootballPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <FootballPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={noseTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>

            <div className="bg-white w-full content-end flex justify-end mr-4 -mt-20">
              <FootballPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const nickle = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col items-center content-start mx-auto gap-8 bg-white">
          <div className="flex flex-row gap-40">
          <div className="">
                <AltPlayerCardList data={strongSafety} />
              </div>
            <div className="">
              <AltPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="w-full content-start flex justify-start">
              {altGhostPlayer}
            </div>

            <div className="flex flex-row gap-5">
              <div className="flex flex-row justify-center">
                <AltPlayerCardList data={rightOutsideLinebacker} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftOutsideLinebacker} />
              </div>
            </div>

            <div className="w-full flex justify-center">
              <AltPlayerCardList data={cornerback3} />
            </div>
          </div>

          <div className="flex flex-row w-full justify-center">
          <div className="bg-white w-full content-start flex justify-start">
              <AltPlayerCardList data={cornerback1} />
            </div>
            <div className="flex flex-row gap-0">
              <div className="">
                <AltPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <AltPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>
            <div className="bg-white w-full content-end flex justify-end">
              <AltPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-col items-center content-start mx-auto gap-12 bg-white">
          <div className="flex flex-row gap-[450px]">
          <div className="">
              <FootballPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <FootballPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row w-full mx-4">
            <div className="w-full content-start flex justify-start">
              {ghostPlayer}
            </div>

            <div className="flex justify-center w-[500px] gap-24">
              <div className="">
                <FootballPlayerCardList data={rightOutsideLinebacker} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftOutsideLinebacker} />
              </div>
            </div>

            <div className="w-full flex justify-center">
              <FootballPlayerCardList data={cornerback3} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="w-full content-start flex justify-start ml-4 -mt-20">
              <FootballPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-8">
              <div className="">
                <FootballPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <FootballPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>

            <div className="w-full content-end flex justify-end mr-4 -mt-20">
              <FootballPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const dime = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-col items-center content-start mx-auto gap-8 bg-white">
          <div className="flex flex-row gap-40">
          <div className="">
                <AltPlayerCardList data={strongSafety} />
              </div>
            <div className="">
              <AltPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="w-full flex justify-center">
              <AltPlayerCardList data={cornerback4} />
            </div>

            <div className="flex flex-row gap-5">
              <div className="flex flex-row justify-center">
                <AltPlayerCardList data={middleLinebacker1} />
              </div>
            </div>

            <div className="w-full flex justify-center">
              <AltPlayerCardList data={cornerback3} />
            </div>
          </div>

          <div className="flex flex-row w-full justify-center">
          <div className="bg-white w-full content-start flex justify-start">
              <AltPlayerCardList data={cornerback1} />
            </div>
            <div className="flex flex-row gap-0">
              <div className="">
                <AltPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <AltPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <AltPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>
            <div className="bg-white w-full content-end flex justify-end">
              <AltPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-col items-center content-start mx-auto gap-12 bg-white">
          <div className="flex flex-row gap-[450px]">
          <div className="">
              <FootballPlayerCardList data={strongSafety} />
            </div>
            <div className="">
              <FootballPlayerCardList data={freeSafety} />
            </div>
          </div>

          <div className="flex flex-row w-full mx-4">
            <div className="w-full flex justify-center">
              <FootballPlayerCardList data={cornerback4} />
            </div>

            <div className="flex justify-center w-[500px] gap-24">
              <div className="">
                <FootballPlayerCardList data={middleLinebacker1} />
              </div>
            </div>

            <div className="w-full flex justify-center">
              <FootballPlayerCardList data={cornerback3} />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="w-full content-start flex justify-start ml-4 -mt-20">
              <FootballPlayerCardList data={cornerback1} />
            </div>

            <div className="flex flex-row gap-8">
              <div className="">
                <FootballPlayerCardList data={rightDefensiveEnd} />
              </div>
              <div className="">
                <FootballPlayerCardList data={rightDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveTackle} />
              </div>
              <div className="">
                <FootballPlayerCardList data={leftDefensiveEnd} />
              </div>
            </div>

            <div className="w-full content-end flex justify-end mr-4 -mt-20">
              <FootballPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {(defPlaySelection.label === "3-4" ||
        defPlaySelection.label === undefined) &&
        threeFour}
      {defPlaySelection.label === "4-3" && fourThree}
      {defPlaySelection.label === "3-3-5" && threeThreeFive}
      {defPlaySelection.label === "4-4" && fourFour}
      {defPlaySelection.label === "46" && fourSix}
      {defPlaySelection.label === "5-2" && fiveTwo}
      {defPlaySelection.label === "Nickle" && nickle}
      {defPlaySelection.label === "Dime" && dime}
    </div>
  );
}

export default DefFormations;
