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
      <div className={`border-white p-2 m-0.5 flex w-24 justify-center`}>
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

  const iFormationPro = (
    <>
      <div className="sm:contents md:contents lg:hidden xl:hidden 2xl:hidden">
        <div className="flex flex-row w-full">
          <div className="bg-white items-center content-center mx-auto">
            <AltPlayerCardList data={offensiveLine} />
          </div>
        </div>

        <div className="flex flex-row bg-white">
          <div className="flex w-1/3 justify-start items-start sm:-mt-16">
            <div className="">
              <AltPlayerCardList data={reciever2} />
            </div>
          </div>

          <div className="w-1/3"></div>

          <div className="w-1/3 content-end flex justify-between items-end bg-white sm:-mt-16">
            <div className="flex">
              <AltPlayerCardList data={tightEnd1} />
            </div>
            <div className="flex justify-end">
              <AltPlayerCardList data={reciever1} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center -mt-16 sm:mt-0 content-center mx-auto bg-white">
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

      <div className="hidden sm:hidden md:hidden lg:contents xl:contents 2xl:contents">
        <div className="flex flex-row justify-between bg-red-white w-full">
          <div className="flex bg-white w-full">
            <FootballPlayerCardList data={reciever2} />
          </div>
          <>{ghostPlayer}</>
          <div className="bg-white">
            <FootballPlayerCardList data={offensiveLine} />
          </div>
          <div className="mt-14">
            <FootballPlayerCardList data={tightEnd1} />
          </div>
          <div className="bg-white w-full content-end flex justify-end">
            <FootballPlayerCardList data={reciever1} />
          </div>
        </div>

        <div className="flex flex-col -mt-14 items-center content-center mx-auto bg-white">
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
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 right-[30px]">
        <FootballPlayerCardList
          data={tightEnd2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[460px]">
        <FootballPlayerCardList
          data={fullBack}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const iFormationSlot = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 left-[585px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever3}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[460px]">
        <FootballPlayerCardList
          data={fullBack}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const iFormationHulk = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-[30px]">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 right-[725px]">
        <FootballPlayerCardList
          data={tightEnd2}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 right-[525px]">
        <FootballPlayerCardList
          data={tightEnd3}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[460px]">
        <FootballPlayerCardList
          data={fullBack}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const fullHouseWide = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[460px] right-72">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[460px] right-[560px]">
        <FootballPlayerCardList
          data={fullBack}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const fullHouseTight = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[460px] right-72">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-52 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-52 left-[603px]">
        <FootballPlayerCardList
          data={tightEnd2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[460px] right-[560px]">
        <FootballPlayerCardList
          data={fullBack}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const wingTWide = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[595px] right-[225px]">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const wingTTight = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[595px] right-[225px]">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-52 right-[725px]">
        <FootballPlayerCardList
          data={tightEnd2}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const pistolSpread = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 left-[590px]">
        <FootballPlayerCardList
          data={reciever3}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 right-[115px]">
        <FootballPlayerCardList
          data={reciever4}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[475px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[630px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const pistolBunch = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[330px] right-[25px]">
        <FootballPlayerCardList
          data={reciever3}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[475px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[630px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const pistolStrong = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 right-[115px]">
        <FootballPlayerCardList
          data={reciever3}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[475px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[630px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[475px] right-72">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const pistolAce = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[475px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[630px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 left-[603px]">
        <FootballPlayerCardList
          data={tightEnd2}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const pistolFullHouse = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[450px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[600px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[525px] right-72">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[525px] right-[560px]">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const pistolStrongTight = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[475px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[630px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[475px] right-72">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const pistolWingTight = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[475px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[630px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[475px] right-72">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 left-[603px]">
        <FootballPlayerCardList
          data={tightEnd2}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const powerI = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-[595px] right-72">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[460px]">
        <FootballPlayerCardList
          data={fullBack}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const strongIWide = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[460px] right-[275px]">
        <FootballPlayerCardList
          data={fullBack}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const strongITight = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[325px]">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[595px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 left-[603px]">
        <FootballPlayerCardList
          data={tightEnd2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[460px] right-[275px]">
        <FootballPlayerCardList
          data={fullBack}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const wildcatPro = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 right-2">
        <FootballPlayerCardList
          data={quarterback}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-64 left-[590px]">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[350px] right-[200px]">
        <FootballPlayerCardList
          data={reciever2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[495px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-52 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  const wildcatUnbalanced = (
    <div className="flex justify-center flex-col items-center content-center">
      <div className="absolute top-48">
        <FootballPlayerCardList
          data={offensiveLine}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-48 right-2">
        <FootballPlayerCardList
          data={reciever1}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[495px]">
        <FootballPlayerCardList
          data={runningback1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-48 left-[480px]">
        <FootballPlayerCardList
          data={runningback2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-52 right-32">
        <FootballPlayerCardList
          data={tightEnd1}
          // handleDelete={handleDelete}
        />
      </div>
      <div className="absolute top-64 left-[603px]">
        <FootballPlayerCardList
          data={tightEnd2}
          // handleDelete={handleDelete}
        />
      </div>

      <div className="absolute top-[350px] right-[200px]">
        <FootballPlayerCardList
          data={fullBack}
          // handleDelete={handleDelete}
        />
      </div>
    </div>
  );

  // const template = (
  //   <div className="flex justify-center flex-col items-center content-center">
  //   <div className="absolute top-48">
  //     <FootballPlayerCardList
  //       data={offensiveLine}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute top-48 right-2">
  //     <FootballPlayerCardList
  //       data={reciever1}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute top-48 left-[480px]">
  //     <FootballPlayerCardList
  //       data={reciever2}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute top-[425px] left-[550px]">
  //     <FootballPlayerCardList
  //       data={reciever3}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute top-[425px] right-10">
  //     <FootballPlayerCardList
  //       data={reciever4}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute top-[325px]">
  //     <FootballPlayerCardList
  //       data={quarterback}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute top-[595px]">
  //     <FootballPlayerCardList
  //       data={runningback1}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute top-[595px] right-72">
  //     <FootballPlayerCardList
  //       data={runningback2}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute top-64 right-32">
  //     <FootballPlayerCardList
  //       data={tightEnd1}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  //   <div className="absolute top-64 left-[603px]">
  //     <FootballPlayerCardList
  //       data={tightEnd2}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>

  //   <div className="absolute top-[460px]">
  //     <FootballPlayerCardList
  //       data={fullBack}
  //       // handleDelete={handleDelete}
  //     />
  //   </div>
  // </div>
  // );

  return (
    <div>
      {(offPlaySelection.label === "I Formation Pro" ||
        offPlaySelection.label === undefined) &&
        iFormationPro}
      {offPlaySelection.label === "I Formation Tight" && iFormationTight}
      {offPlaySelection.label === "I Formation Slot" && iFormationSlot}
      {offPlaySelection.label === "I Formation Hulk" && iFormationHulk}
      {offPlaySelection.label === "Full House Wide" && fullHouseWide}
      {offPlaySelection.label === "Full House Tight" && fullHouseTight}
      {offPlaySelection.label === "Wing-T Wide" && wingTWide}
      {offPlaySelection.label === "Wing-T Tight" && wingTTight}

      {offPlaySelection.label === "Pistol Spread" && pistolSpread}
      {offPlaySelection.label === "Pistol Bunch" && pistolBunch}
      {offPlaySelection.label === "Pistol Strong" && pistolStrong}
      {offPlaySelection.label === "Pistol Ace" && pistolAce}
      {offPlaySelection.label === "Pistol Full House" && pistolFullHouse}
      {offPlaySelection.label === "Pistol Strong Tight" && pistolStrongTight}
      {offPlaySelection.label === "Pistol Wing Tight" && pistolWingTight}

      {offPlaySelection.label === "Power I" && powerI}

      {offPlaySelection.label === "Strong I Wide" && strongIWide}
      {offPlaySelection.label === "Strong I Tight" && strongITight}

      {offPlaySelection.label === "Wildcat Pro" && wildcatPro}
      {offPlaySelection.label === "Wildcat Unbalanced" && wildcatUnbalanced}
    </div>
  );
}

export default OffFormations;
