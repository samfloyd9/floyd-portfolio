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
            <div className="bg-white w-full content-start flex justify-start">
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

            <div className="bg-white w-full content-end flex justify-end">
              <FootballPlayerCardList data={cornerback2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // const template = (
  //   <div className="flex justify-center flex-col items-center content-center">
  //   <div className="absolute bottom-16 right-[625px]">
  //     <FootballPlayerCardList
  //       data={rightDefensiveEnd}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute bottom-16 right-[525px]">
  //     <FootballPlayerCardList
  //       data={rightDefensiveTackle}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute bottom-16">
  //     <FootballPlayerCardList
  //       data={noseTackle}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute bottom-16 right-[325px]">
  //     <FootballPlayerCardList
  //       data={leftDefensiveTackle}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute bottom-16 right-[225px]">
  //     <FootballPlayerCardList
  //       data={leftDefensiveEnd}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute bottom-[265px] right-[675px]">
  //     <FootballPlayerCardList
  //       data={rightOutsideLinebacker}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute bottom-[265px] right-[350px]">
  //     <FootballPlayerCardList
  //       data={middleLinebacker1}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute bottom-[265px] right-[500px]">
  //     <FootballPlayerCardList
  //       data={middleLinebacker2}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute bottom-[265px] right-[180px]">
  //     <FootballPlayerCardList
  //       data={leftOutsideLinebacker}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute top-[190px] right-[275px]">
  //     <FootballPlayerCardList
  //       data={freeSafety}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute top-[190px] right-[575px]">
  //     <FootballPlayerCardList
  //       data={strongSafety}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute bottom-16 right-1">
  //     <FootballPlayerCardList
  //       data={cornerback1}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute bottom-16 right-[845px]">
  //     <FootballPlayerCardList
  //       data={cornerback2}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute bottom-32 right-[115px]">
  //     <FootballPlayerCardList
  //       data={cornerback3}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute bottom-32 right-[735px]">
  //     <FootballPlayerCardList
  //       data={cornerback4}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  // </div>
  // );

  return (
    <div>
      {(defPlaySelection.label === "3-4" ||
        defPlaySelection.label === undefined) &&
        threeFour}
    </div>
  );
}

export default DefFormations;
