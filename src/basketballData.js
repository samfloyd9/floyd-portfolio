import { ImTarget } from "react-icons/im"; // Accuracy or Range Indicator
import { ImEqualizer } from "react-icons/im"; // Filter Icon
import { ImFire } from "react-icons/im"; // Can heat up quick
import { ImEarth } from "react-icons/im"; //International Players
import { ImDribbble } from "react-icons/im"; // Good handle
import { ImAidKit } from "react-icons/im"; // Injured
import { FaLock } from "react-icons/fa"; // Lockdown defender
import { ImBug } from "react-icons/im"; // Pest on defense
import { ImMagnet } from "react-icons/im"; // Rebound Magnet
import { ImPowerCord } from "react-icons/im"; // Spark plug
import { BsBricks } from "react-icons/bs"; // Brick Wall Screens
import { BsCurrencyExchange } from "react-icons/bs"; // Dimer passer
// import { BiSolidMapPin } from "react-icons/bi"; // Pinpoint accuracy
import { CiDumbbell } from "react-icons/ci"; // Strong Player
import { FaFeatherAlt } from "react-icons/fa"; // Feathery Touch
import { FaPlaneDeparture } from "react-icons/fa"; // Can Take flight
import { FaTrafficLight } from "react-icons/fa"; // Stop and go speed
// import { FaLocationCrosshairs } from "react-icons/fa6"; // Pinpoint accuracy
// import { FaCrutch } from "react-icons/fa6"; // Injury
import { MdSportsHandball } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { SiAdblock } from "react-icons/si";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { FaWind } from "react-icons/fa";

const lakersPrimary = "bg-purple-600";
const lakersSecondary = "text-yellow-300";

const sunsPrimary = "bg-orange-400";
const sunsSecondary = "text-purple-600";

const warriorsPrimary = "bg-blue-600";
const warriorsSecondary = "text-yellow-300";

const spursPrimary = "bg-black";
const spursSecondary = "text-gray-300";

const timberwolvesPrimary = "bg-black";
const timberwolvesSecondary = "text-green-300";

const jazzPrimary = "bg-blue-600";
const jazzSecondary = "text-yellow-600";

const trailblazersPrimary = "bg-red-600";
const trailblazersSecondary = "text-black";

const grizzliesPrimary = "bg-blue-600";
const grizzliesSecondary = "text-blue-300";

const thunderPrimary = "bg-blue-600";
const thunderSecondary = "text-white";

const mavericksPrimary = "bg-blue-600";
const mavericksSecondary = "text-gray-300";

const rocketsPrimary = "bg-red-600";
const rocketsSecondary = "text-yellow-300";

const clippersPrimary = "bg-blue-600";
const clippersSecondary = "text-white";

const nuggetsPrimary = "bg-blue-600";
const nuggetsSecondary = "text-yellow-300";

const pelicansPrimary = "bg-blue-600";
const pelicansSecondary = "text-red-300";

const kingsPrimary = "bg-purple-600";
const kingsSecondary = "text-white";

// ----------------------------------------------

const celticsPrimary = "bg-green-600";
const celticsSecondary = "text-white";

const pistonsPrimary = "bg-blue-600";
const pistonsSecondary = "text-red-300";

const sixersPrimary = "bg-blue-600";
const sixersSecondary = "text-white";

const cavaliersPrimary = "bg-red-600";
const cavaliersSecondary = "text-yellow-300";

const hornetsPrimary = "bg-blue-600";
const hornetsSecondary = "text-blue-300";

const magicPrimary = "bg-blue-600";
const magicSecondary = "text-white";

const hawksPrimary = "bg-red-600";
const hawksSecondary = "text-yellow-300";

const heatPrimary = "bg-black";
const heatSecondary = "text-red-500";

const raptorsPrimary = "bg-red-600";
const raptorsSecondary = "text-black-300";

const pacersPrimary = "bg-blue-600";
const pacersSecondary = "text-yellow-300";

const bucksPrimary = "bg-green-600";
const bucksSecondary = "text-yellow-300";

const knicksPrimary = "bg-blue-600";
const knicksSecondary = "text-orange-300";

const netsPrimary = "bg-black";
const netsSecondary = "text-gray-300";

const wizardsPrimary = "bg-blue-600";
const wizardsSecondary = "text-red-300";

const bullsPrimary = "bg-red-600";
const bullsSecondary = "text-black-300";

export const data = [
  {
    name: "LeBron James",
    position: "SF",
    year: "2008-09",
    team: "CLE",
    teamColor: cavaliersPrimary,
    teamColor2: cavaliersSecondary,
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
          <div>
            <ImTarget />
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
    teamLogoSrc:
      "https://cdn.nba.com/teams/uploads/sites/1610612739/2022/03/Asset-4-3.svg",
  },
  {
    name: "Michael Jordan",
    position: "SG",
    year: "1987-88",
    team: "CHI",
    teamColor: bullsPrimary,
    teamColor2: bullsSecondary,
    pts75: 32,
    ts: +3.5,
    reb75: 6,
    ast75: 6,
    stk75: 3.0,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaLock />,
        color: "gold",
      },
      {
        icon: <ImBug />,
        color: "silver",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
      },
      {
        icon: <ImPowerCord />,
        color: "bronze",
      },
      {
        icon: <BsBricks />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jordami01.jpg",
  },
  {
    name: "Kareem Abdul-Jabbar",
    position: "C",
    year: "1971-72",
    team: "MIL",
    teamColor: bucksPrimary,
    teamColor2: bucksSecondary,
    pts75: 26,
    ts: +8.5,
    reb75: 12,
    ast75: 4,
    stk75: 3.0,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "gold",
      },
      {
        icon: <BsCurrencyExchange />,
        color: "silver",
      },
      {
        icon: <CiDumbbell />,
        color: "hof",
      },
      {
        icon: <FaFeatherAlt />,
        color: "bronze",
      },
      {
        icon: <FaPlaneDeparture />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/abdulka01.jpg",
  },
  {
    name: "Wilt Chamberlain",
    position: "C",
    year: "1966-67",
    team: "PHI",
    teamColor: sixersPrimary,
    teamColor2: sixersSecondary,
    pts75: 24,
    ts: +12.5,
    reb75: 22,
    ast75: 8,
    stk75: 8.0,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/chambwi01.jpg",
  },
  {
    name: "Steph Curry",
    position: "PG",
    year: "2015-16",
    team: "GSW",
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    pts75: 30,
    ts: -3.5,
    reb75: 5,
    ast75: 5,
    stk75: 2.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/curryst01.jpg",
  },
  {
    name: "Kevin Garnett",
    position: "PF",
    year: "2003-04",
    team: "MIN",
    teamColor: timberwolvesPrimary,
    teamColor2: timberwolvesSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/garneke01.jpg",
  },
  {
    name: "Hakeem Olajuwon",
    position: "C",
    year: "1992-93",
    team: "HOU",
    teamColor: rocketsPrimary,
    teamColor2: rocketsSecondary,
    pts75: 24.5,
    ts: +3.1,
    reb75: 12,
    ast75: 3,
    stk75: 6,
    tov75: 3.3,
    bpm: 7.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/olajuha01.jpg",
  },
  {
    name: "Magic Johnson",
    position: "PG",
    year: "1986-87",
    team: "LAL",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    pts75: 19,
    ts: +3.1,
    reb75: 9,
    ast75: 12,
    stk75: 3.1,
    tov75: 4.3,
    bpm: 9.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/johnsma02.jpg",
  },
  {
    name: "Larry Bird",
    position: "SF",
    year: "1985-86",
    team: "BOS",
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    pts75: 27,
    ts: +3.1,
    reb75: 10,
    ast75: 7,
    stk75: 2.9,
    tov75: 4.3,
    bpm: 8.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/birdla01.jpg",
  },
  {
    name: "Kobe Bryant",
    position: "SG",
    year: "2007-08",
    team: "LAL",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    pts75: 28,
    ts: +3.1,
    reb75: 5,
    ast75: 5,
    stk75: 3.5,
    tov75: 4.3,
    bpm: 6.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/bryanko01.jpg",
  },
  {
    name: "Tim Duncan",
    position: "PF",
    year: "2002-03",
    team: "SAS",
    teamColor: spursPrimary,
    teamColor2: spursSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 13,
    ast75: 4,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 8.1,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/duncati01.jpg",
  },
  {
    name: "Jerry West",
    position: "PG",
    year: "1963-64",
    team: "LAL",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    pts75: 29,
    ts: +3.1,
    reb75: 5,
    ast75: 7.5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/westje01.jpg",
  },
  {
    name: "Shaquille O'Neal",
    position: "C",
    year: "1999-00",
    team: "LAL",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/onealsh01.jpg",
  },
  {
    name: "Dirk Nowitzki",
    position: "PF",
    year: "2005-06",
    team: "DAL",
    teamColor: mavericksPrimary,
    teamColor2: mavericksSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/nowitdi01.jpg",
  },
  {
    name: "Kevin Durant",
    position: "SF",
    year: "2013-14",
    team: "OKC",
    teamColor: thunderPrimary,
    teamColor2: thunderSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/duranke01.jpg",
  },
  {
    name: "Bill Russell",
    position: "C",
    year: "1963-64",
    team: "BOS",
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/russebi01.jpg",
  },
  {
    name: "Dwyane Wade",
    position: "SG",
    year: "2008-09",
    team: "MIA",
    teamColor: heatPrimary,
    teamColor2: heatSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/wadedw01.jpg",
  },
  {
    name: "Julius Erving",
    position: "SF",
    year: "1972-73",
    team: "BRK",
    teamColor: netsPrimary,
    teamColor2: netsSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/ervinju01.jpg",
  },
  {
    name: "Oscar Robertson",
    position: "PG",
    year: "1963-64",
    team: "SAC",
    teamColor: kingsPrimary,
    teamColor2: kingsSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/roberos01.jpg",
  },
  {
    name: "Giannis Antetokounmpo",
    position: "PF",
    year: "2019-20",
    team: "MIL",
    teamColor: bucksPrimary,
    teamColor2: bucksSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/antetgi01.jpg",
  },
  {
    name: "Nikola Jokic",
    position: "C",
    year: "2022-23",
    team: "DEN",
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jokicni01.jpg",
  },
  {
    name: "Chris Paul",
    position: "PG",
    year: "2007-08",
    team: "NOH",
    teamColor: pelicansPrimary,
    teamColor2: pelicansSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/paulch01.jpg",
  },
  {
    name: "James Harden",
    position: "SG",
    year: "2017-18",
    team: "HOU",
    teamColor: rocketsPrimary,
    teamColor2: rocketsSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/hardeja01.jpg",
  },
  {
    name: "Kawhi Leonard",
    position: "SF",
    year: "2018-19",
    team: "TOR",
    teamColor: raptorsPrimary,
    teamColor2: raptorsSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/leonaka01.jpg",
  },
  {
    name: "David Robinson",
    position: "C",
    year: "1994-95",
    team: "SAS",
    teamColor: spursPrimary,
    teamColor2: spursSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/robinda01.jpg",
  },
  {
    name: "Steve Nash",
    position: "PG",
    year: "2005-06",
    team: "PHX",
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/nashst01.jpg",
  },
  {
    name: "Scottie Pippen",
    position: "SF",
    year: "1993-94",
    team: "CHI",
    teamColor: bullsPrimary,
    teamColor2: bullsSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/pippesc01.jpg",
  },
  {
    name: "Charles Barkley",
    position: "PF",
    year: "1992-93",
    team: "SAS",
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    pts75: 22,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <RiTeamFill />,
        color: "gold",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "silver",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
      },
      {
        icon: <FaWind />,
        color: "bronze",
      },
      {
        icon: <FaTrafficLight />,
        color: "gold",
      },
    ],
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/barklch01.jpg",
  },
];