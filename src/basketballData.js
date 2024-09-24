// Shooting/Scoring Badges
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

// Other
// import { ImAidKit } from "react-icons/im"; // Injured or Injury
// import { BsBricks } from "react-icons/bs"; // Brick Wall Screener
// import { CiDumbbell } from "react-icons/ci"; // Strong Player
// import { FaPlaneDeparture } from "react-icons/fa"; // High Flying Vertical Threat
// import { FaTrafficLight } from "react-icons/fa"; // Stop and go speed
// import { FaWind } from "react-icons/fa"; // Fast/Quick - Wind?
// import { ImPowerCord } from "react-icons/im"; // Bench Spark Plug
// import { ImEqualizer } from "react-icons/im"; // Filter Icon (!!!!!!!!!!!!!!!!!!!)
// import { IoMdOutlet } from "react-icons/io"; // Outlet Passer
// import { GiVacuumCleaner } from "react-icons/gi"; // Rebounding Vacuum
// import { GiFalling } from "react-icons/gi"; // fadeaway specialsit
// import { BsCurrencyExchange } from "react-icons/bs"; // Dimer Dropper
// import { GiTwoCoins } from "react-icons/gi"; // Dimer Dropper
// import { ImFire } from "react-icons/im"; // heat check or explosive scorer
// import { FaFeatherAlt } from "react-icons/fa"; // Feathery Finishing (Finesse)
// import { GiBlackHoleBolas } from "react-icons/gi"; // Connective Passer or Def. Nucleus or

// ------------------------------------------- //
const lakersPrimary = "bg-purple-700";
const lakersSecondary = "text-yellow-400";
const lakersThird = "white";
const lakersCurrentLogo =
  "https://cdn.iconscout.com/icon/free/png-256/free-los-angeles-lakers-logo-icon-download-in-svg-png-gif-file-formats--nba-basketball-pack-logos-icons-1593200.png?f=webp&w=256";
const lakersCurrentLogoStyling = "h-14 -top-1 left-0";
// ------------------------------------------- //
const sunsPrimary = "bg-orange-600";
const sunsSecondary = "text-purple-900";
const sunsThird = "white";
const sunsCurrentLogo =
  "https://logodownload.org/wp-content/uploads/2021/07/phoenix-suns-logo-1.png";
const sunsCurrentLogoStyling = "h-12 top-0.5 -left-1";
// ------------------------------------------- //
const warriorsPrimary = "bg-blue-600";
const warriorsSecondary = "text-yellow-300";
const warriorsThird = "white";
const warriorsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612744/2022/06/gsw-logo-1920.svg";
const warriorsCurrentLogoStyling = "h-16 -top-1.5 -left-2";
// ------------------------------------------- //
const spursPrimary = "bg-black";
const spursSecondary = "text-gray-300";
const spursThird = "white";
const spursCurrentLogo =
  "https://seekvectors.com/files/download/San%20Antonio%20Spurs%20Logo-01.png";
const spursCurrentLogoStyling = "h-16 -top-2 -left-1.5";
// ------------------------------------------- //
const timberwolvesPrimary = "bg-black";
const timberwolvesSecondary = "text-green-300";
const timberwolvesThird = "blue-500";
const timberwolvesCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/05/Minnesota-Timberwolves-Logo-2017-Present.png";
const timberwolvesCurrentLogoStyling = "h-12 top-0 -left-5";
// ------------------------------------------- //
const jazzPrimary = "bg-purple-700";
const jazzSecondary = "text-cyan-300";
const jazzThird = "green-700";
const jazzCurrentLogo =
  "https://content.sportslogos.net/logos/6/234/full/utah_jazz_logo_primary_19973688.png";
const jazzCurrentLogoStyling = "h-10 top-0.5 -left-0.5";
// ------------------------------------------- //
const trailblazersPrimary = "bg-red-600";
const trailblazersSecondary = "text-black";
const trailblazersThird = "white-400";
const trailblazersCurrentLogo =
  "https://i.pinimg.com/originals/7d/07/ea/7d07eaa72e74a2def63540ac7d55ba0f.png";
const trailblazersCurrentLogoStyling = "h-11 top-1 left-1";
// ------------------------------------------- //
const grizzliesPrimary = "bg-blue-800";
const grizzliesSecondary = "text-blue-300";
const grizzliesThird = "yellow-500";
const grizzliesCurrentLogo =
  "https://cdn.iconscout.com/icon/free/png-256/free-memphis-grizzlies-logo-icon-download-in-svg-png-gif-file-formats--nba-basketball-game-sport-ball-pack-logos-icons-1593220.png?f=webp&w=256";
const grizzliesCurrentLogoStyling = "h-14 top-0.5 -left-1.5";
// ------------------------------------------- //
const thunderPrimary = "bg-blue-600";
const thunderSecondary = "text-white";
const thunderThird = "orange-400";
const thunderCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/05/Oklahoma-City-Thunder-logo.png";
const thunderCurrentLogoStyling = "h-12 -top-0.5 -left-4";
// ------------------------------------------- //
const mavericksPrimary = "bg-blue-600";
const mavericksSecondary = "text-gray-300";
const mavericksThird = "blue-800";
const mavericksCurrentLogo =
  "https://www.mavs.com/wp-content/themes/mavs/images/logo.svg";
const mavericksCurrentLogoStyling = "h-11 top-1 left-1";
// ------------------------------------------- //
const rocketsPrimary = "bg-red-600";
const rocketsSecondary = "text-yellow-300";
const rocketsThird = "white";
const rocketsCurrentLogo =
  "https://seeklogo.com/images/H/houston-rockets-logo-1AD80DE2AF-seeklogo.com.png";
const rocketsCurrentLogoStyling = "h-14 top-0 left-1";
// ------------------------------------------- //
const clippersPrimary = "bg-blue-600";
const clippersSecondary = "text-white";
const clippersThird = "red-500";
const clippersCurrentLogo =
  "https://i.pinimg.com/originals/31/2c/6d/312c6d65630d08a85549bd5dee6dd7c6.png";
const clippersCurrentLogoStyling = "h-11 top-1 left-1";
// ------------------------------------------- //
const nuggetsPrimary = "bg-blue-600";
const nuggetsSecondary = "text-yellow-300";
const nuggetsThird = "red-600";
const nuggetsCurrentLogo =
  "https://logodownload.org/wp-content/uploads/2021/07/denver-nuggets-logo.png";
const nuggetsCurrentLogoStyling = "h-10 top-1 left-1";
// ------------------------------------------- //
const pelicansPrimary = "bg-blue-900";
const pelicansSecondary = "text-yellow-500";
const pelicansThird = "red-600";
const pelicansCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-new-orleans-pelicans-logo.png";
const pelicansCurrentLogoStyling = "h-14 -top-0.5 -left-1";
// ------------------------------------------- //
const kingsPrimary = "bg-purple-700";
const kingsSecondary = "text-white";
const kingsThird = "white";
const kingsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612758/2022/04/Kings-Primary.svg";
const kingsCurrentLogoStyling = "h-11 top-0 left-1";

// ------------------------------------------- //

const celticsPrimary = "bg-green-700";
const celticsSecondary = "text-white";
const celticsThird = "black";
const celticsCurrentLogo =
  "https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19759952.png";
const celticsCurrentLogoStyling = "h-11 top-1.5 left-1.5";
// ------------------------------------------- //
const pistonsPrimary = "bg-blue-600";
const pistonsSecondary = "text-red-500";
const pistonsThird = "white";
const pistonsCurrentLogo =
  "https://1000logos.net/wp-content/uploads/2017/08/Detroit-Pistons-logo.png";
const pistonsCurrentLogoStyling = "h-11 top-1.5 -left-3";
// ------------------------------------------- //
const sixersPrimary = "bg-blue-600";
const sixersSecondary = "text-white";
const sixersThird = "red-500";
const sixersCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/05/Philadelphia-76ers-logo.png";
const sixersCurrentLogoStyling = "h-11 top-1 -left-3.5";
const sixersCurrentLogoSize = "";
// ------------------------------------------- //
const cavaliersPrimary = "bg-red-900";
const cavaliersSecondary = "text-white";
const cavaliersThird = "yellow-400";
const cavaliersCurrentLogo = "";
const cavaliersCurrentLogoStyling = "h-12 top-0 left-0";
const cavaliersCurrentLogoSize = "";
const cavaliersThrowbackLogo =
  "https://content.sportslogos.net/logos/6/222/full/cleveland_cavaliers_logo_primary_20046125.png";
const cavaliersThrowbackLogoStyling = "h-8 top-1 -left-2";
// const cavaliersThrowbackLogoSize = "h-8 top-1 -left-5";
// ------------------------------------------- //
const hornetsPrimary = "bg-cyan-400";
const hornetsSecondary = "text-blue-700";
const hornetsThird = "purple-700";
const hornetsCurrentLogo =
  "https://content.sportslogos.net/logos/6/256/full/charlotte_hornets_logo_primary_19896932.png";
const hornetsCurrentLogoStyling = "h-12 top-1 left-1";
// ------------------------------------------- //
const magicPrimary = "bg-blue-600";
const magicSecondary = "text-white";
const magicThird = "black";
const magicCurrentLogo =
  "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20017625.png";
const magicCurrentLogoStyling = "h-11 top-1 left-1";
// ------------------------------------------- //
const hawksPrimary = "bg-red-600";
const hawksSecondary = "text-yellow-300";
const hawksThird = "white";
const hawksCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/07/Atlanta-Hawks-Logo.png";
const hawksCurrentLogoStyling = "h-11 top-1 -left-3";
// ------------------------------------------- //
const heatPrimary = "bg-black";
const heatSecondary = "text-red-500";
const heatThird = "white";
const heatCurrentLogo =
  "https://logodownload.org/wp-content/uploads/2019/06/miami-heat-logo-3.png";
const heatCurrentLogoStyling = "h-12 top-1 left-2";
// ------------------------------------------- //
const raptorsPrimary = "bg-red-600";
const raptorsSecondary = "text-white";
const raptorsThird = "black";
const raptorsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612761/2021/09/Toronto-Raptors.svg";
const raptorsCurrentLogoStyling = "h-12 top-0 left-0";
// ------------------------------------------- //
const pacersPrimary = "bg-blue-700";
const pacersSecondary = "text-yellow-400";
const pacersThird = "white";
const pacersCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-indiana-pacers-logo.png";
const pacersCurrentLogoStyling = "h-12 top-0 left-0";
// ------------------------------------------- //
const bucksPrimary = "bg-green-800";
const bucksSecondary = "text-yellow-500";
const bucksThird = "black";
const bucksCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo.png";
const bucksCurrentLogoStyling = "h-14 top-0 left-0";
// ------------------------------------------- //
const knicksPrimary = "bg-blue-600";
const knicksSecondary = "text-orange-600";
const knicksThird = "white";
const knicksCurrentLogo =
  "https://content.sportslogos.net/logos/6/216/full/new_york_knicks_logo_primary_19938358.png";
const knicksCurrentLogoStyling = "h-11 top-1 left-0";
// ------------------------------------------- //
const netsPrimary = "bg-black";
const netsSecondary = "text-gray-200";
const netsThird = "white";
const netsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612751/2024/07/BKN_Primary.svg";
const netsCurrentLogoStyling = "h-11 top-0.5 left-0.5";
// ------------------------------------------- //
const wizardsPrimary = "bg-blue-700";
const wizardsSecondary = "text-red-500";
const wizardsThird = "white";
const wizardsCurrentLogo =
  "https://seeklogo.com/images/W/washington-wizards-logo-24AD777BE1-seeklogo.com.png";
const wizardsCurrentLogoStyling = "h-10 top-1 left-1";
// ------------------------------------------- //
const bullsPrimary = "bg-red-600";
const bullsSecondary = "text-black-300";
const bullsThird = "white";
const bullsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612741/2021/10/bulls-svg.svg";
const bullsCurrentLogoStyling = "h-11 top-0 left-1";
// ------------------------------------------- //

export const data = [
  {
    name: "LeBron James",
    nickname: "King James",
    position: "SF",
    year: "2008-09",
    team: "CLE",
    fullTeamName: "Cleveland Cavaliers",
    teamColor: cavaliersPrimary,
    teamColor2: cavaliersSecondary,
    teamColor3: cavaliersThird,
    cardColor: "ruby",
    pts75: 30.6,
    ts: +4.7,
    reb75: 10.9,
    ast75: 10.4,
    stk75: 4.0,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "hof",
        explanation: "Dime Dropper",
      },
      {
        icon: <RiTeamFill />,
        color: "hof",
        explanation: "Switchable Specialist",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
      },
      {
        icon: <GiHandcuffs />,
        color: "gold",
        explanation: "Perimeter Handcuffs",
      },
    ],
    teamScoring: 9.5,
    teamEfficiency: 8,
    teamSpacing: 6.5,
    teamFinishing: 10,
    teamPassing: 9.5,
    teamCreation: 10,
    teamOffRebounding: 6,
    //
    teamInteriorDef: 7,
    teamPerimeterDef: 7,
    teamSwitchability: 10,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 8,
    teamDefRebounding: 7.5,
    //
    teamOffChemRating: -2,
    teamDefChemRating: 1.5,
    teamTotalChemRating: -0.5,
    teamOffImpact: 5.75,
    teamDefImpact: 1.65,
    teamTotalImpact: 7.4,
    //
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jamesle01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/474x/b9/80/ea/b980ea57d849c33f2e7f39ce03e4264e.jpg",
    teamLogoSrc: cavaliersThrowbackLogo,
    teamLogoStyling: cavaliersThrowbackLogoStyling,
  },
  {
    name: "Michael Jordan",
    nickname: "Air Jordan",
    position: "SG",
    year: "1987-88",
    team: "CHI",
    fullTeamName: "Chicago Bulls",
    teamColor: bullsPrimary,
    teamColor2: bullsSecondary,
    teamColor3: bullsThird,
    cardColor: "ruby",
    pts75: 32.7,
    ts: +6.5,
    reb75: 6.8, // Fix
    ast75: 7.4, // Fix
    stk75: 5.9, // Fix
    tov75: 3.8, // Fix
    bpm: 13.0, // Fix
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <TbEngine />,
        color: "gold",
        explanation: "Offensiive Engine",
      },
      {
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "hof",
        explanation: "Pick Pocket/Interceptor",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
      },
    ],
    teamScoring: 10,
    teamEfficiency: 7.5,
    teamSpacing: 6,
    teamFinishing: 9.5,
    teamPassing: 8.5,
    teamCreation: 9.5,
    teamOffRebounding: 5,
    //
    teamInteriorDef: 4,
    teamPerimeterDef: 9,
    teamSwitchability: 5,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 9.5,
    teamDefRebounding: 6.5,
    //
    teamOffChemRating: -1,
    teamDefChemRating: 1.4,
    teamTotalChemRating: 0.4,
    teamOffImpact: 5.75,
    teamDefImpact: 1.5,
    teamTotalImpact: 7.3,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jordami01.jpg",
    plyrCardPictureSrc:
      "https://pbs.twimg.com/media/DWwK7VvX0AExJDd?format=jpg&name=4096x4096",
    teamLogoSrc: bullsCurrentLogo,
    teamLogoStyling: bullsCurrentLogoStyling,
  },
  {
    name: "Kareem Abdul-Jabbar",
    altName: "K. Abdul-Jabbar",
    nickname: "Cap",
    position: "C",
    year: "1971-72",
    team: "MIL",
    fullTeamName: "Milwuakee Bucks",
    teamColor: bucksPrimary,
    teamColor2: bucksSecondary,
    teamColor3: bucksThird,
    cardColor: "emerald",
    pts75: 25.7,
    ts: +9.9,
    reb75: 12,
    ast75: 4,
    stk75: 3.0,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "gold",
        explanation: "Defensive Anchor",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 9,
    teamSpacing: 4.5,
    teamFinishing: 10,
    teamPassing: 6.5,
    teamCreation: 7,
    teamOffRebounding: 9,
    //
    teamInteriorDef: 9,
    teamPerimeterDef: 2,
    teamSwitchability: 1.5,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 7.5,
    teamDefRebounding: 9,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 1.7,
    teamTotalChemRating: 1.7,
    teamOffImpact: 3.86,
    teamDefImpact: 2.37,
    teamTotalImpact: 6.2,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/abdulka01.jpg",
    plyrCardPictureSrc:
      "https://www.sportsbusinessjournal.com/-/media/Images/SBJ-Photos/2014/02/10/Champions-Kareem-Abdul-Jabbar.ashx",
    teamLogoSrc: bucksCurrentLogo,
    teamLogoStyling: bucksCurrentLogoStyling,
  },
  {
    name: "Wilt Chamberlain",
    nickname: "Wilt the Stilt, Goliath, The Big Dipper",
    position: "C",
    year: "1966-67",
    team: "PHI",
    fullTeamName: "Philadelphia 76ers",
    teamColor: sixersPrimary,
    teamColor2: sixersSecondary,
    teamColor3: sixersThird,
    cardColor: "sapphire",
    pts75: 15.2,
    ts: +14.4,
    reb75: 22,
    ast75: 8,
    stk75: 8.0,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "hof",
        explanation: "Defensive Anchor",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
    ],
    teamScoring: 6,
    teamEfficiency: 10,
    teamSpacing: 4,
    teamFinishing: 10,
    teamPassing: 8.5,
    teamCreation: 7,
    teamOffRebounding: 10,
    //
    teamInteriorDef: 10,
    teamPerimeterDef: 5.5,
    teamSwitchability: 4,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 10,
    teamDefRebounding: 10,
    //
    teamOffChemRating: 1,
    teamDefChemRating: 2,
    teamTotalChemRating: 3,
    teamOffImpact: 2.63,
    teamDefImpact: 3.5,
    teamTotalImpact: 6.1,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/chambwi01.jpg",
    plyrCardPictureSrc:
      "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/3078293/6065502/EVCRWFA003UW102HLARGE__68119.1706698884.jpg?c=2",
    // "https://media.tumblr.com/e5b8990f17d46f920d6279da2b9eeb10/tumblr_inline_mjyy7mshLc1qz4rgp.jpg",
    teamLogoSrc: sixersCurrentLogo,
    teamLogoStyling: sixersCurrentLogoStyling,
  },
  {
    name: "Steph Curry",
    nickname: "Chef Curry",
    position: "PG",
    year: "2015-16",
    team: "GSW",
    fullTeamName: "Golden State Warriors",
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: "sapphire",
    pts75: 31.9,
    ts: +12.8,
    reb75: 5,
    ast75: 5,
    stk75: 2.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deep Range Deadeye",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaWifi />,
        color: "hof",
        explanation: "Limitless Range",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <ImEarth />,
        color: "hof",
        explanation: "Offensive Gravity",
      },
      {
        icon: <ImDribbble />,
        color: "hof",
        explanation: "Houdini Handles",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 10,
    teamSpacing: 10,
    teamFinishing: 8.5,
    teamPassing: 7.5,
    teamCreation: 10,
    teamOffRebounding: 2,
    //
    teamInteriorDef: 1.5,
    teamPerimeterDef: 6,
    teamSwitchability: 1,
    teamDefIntangibles: 5,
    teamDefPlaymaking: 5,
    teamDefRebounding: 5,
    //
    teamOffChemRating: 2,
    teamDefChemRating: -0.5,
    teamTotalChemRating: 1.5,
    teamOffImpact: 5.75,
    teamDefImpact: 0.13,
    teamTotalImpact: 5.9,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/curryst01.jpg",
    plyrCardPictureSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Stephen_Curry_dribbling_2016_%28cropped%29.jpg/640px-Stephen_Curry_dribbling_2016_%28cropped%29.jpg",
    teamLogoSrc: warriorsCurrentLogo,
    teamLogoStyling: warriorsCurrentLogoStyling,
  },
  {
    name: "Kevin Garnett",
    nickname: "The Big Ticket, KG",
    position: "PF",
    year: "2003-04",
    team: "MIN",
    fullTeamName: "Minnesotta Timberwolves",
    teamColor: timberwolvesPrimary,
    teamColor2: timberwolvesSecondary,
    teamColor3: timberwolvesThird,
    cardColor: "emerald",
    pts75: 24.9,
    ts: +3.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <FaTools />,
        color: "gold",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <RiTeamFill />,
        color: "hof",
        explanation: "Switchable Specialsit",
      },
      {
        icon: <FaAnchor />,
        color: "hof",
        explanation: "Defensive Anchor",
      },
      {
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
      {
        icon: <GiEmbrassedEnergy />,
        color: "hof",
        explanation: "High Energy Defender",
      },
    ],
    teamScoring: 7.5,
    teamEfficiency: 7,
    teamSpacing: 6.5,
    teamFinishing: 8.5,
    teamPassing: 8,
    teamCreation: 7,
    teamOffRebounding: 8,
    //
    teamInteriorDef: 9,
    teamPerimeterDef: 8,
    teamSwitchability: 9.5,
    teamDefIntangibles: 10,
    teamDefPlaymaking: 9,
    teamDefRebounding: 10,
    //
    teamOffChemRating: 1,
    teamDefChemRating: 2,
    teamTotalChemRating: 3,
    teamOffImpact: 2.63,
    teamDefImpact: 3.37,
    teamTotalImpact: 6.0,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/garneke01.jpg",
    plyrCardPictureSrc:
      "https://www.taipeitimes.com/images/2007/08/01/20070731205021.jpeg",
    teamLogoSrc: timberwolvesCurrentLogo,
    teamLogoStyling: timberwolvesCurrentLogoStyling,
  },
  {
    name: "Hakeem Olajuwon",
    nickname: "The Dream",
    position: "C",
    year: "1992-93",
    team: "HOU",
    fullTeamName: "Houston Rockets",
    teamColor: rocketsPrimary,
    teamColor2: rocketsSecondary,
    teamColor3: rocketsThird,
    cardColor: "ruby",
    pts75: 25.2,
    ts: +4.1,
    reb75: 12,
    ast75: 3,
    stk75: 6,
    tov75: 3.3,
    bpm: 7.2,
    badges: [
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaAnchor />,
        color: "hof",
        explanation: "Defensive Anchor",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <RiTeamFill />,
        color: "gold",
        explanation: "Switchable Specialist",
      },
    ],
    teamScoring: 8,
    teamEfficiency: 7,
    teamSpacing: 6,
    teamFinishing: 9,
    teamPassing: 4,
    teamCreation: 6.5,
    teamOffRebounding: 8,
    //
    teamInteriorDef: 10,
    teamPerimeterDef: 6.5,
    teamSwitchability: 7.5,
    teamDefIntangibles: 9.5,
    teamDefPlaymaking: 10,
    teamDefRebounding: 9,
    //
    teamOffChemRating: -1,
    teamDefChemRating: 2,
    teamTotalChemRating: 1,
    teamOffImpact: 3.0,
    teamDefImpact: 3.63,
    teamTotalImpact: 6.6,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/olajuha01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/15/da/04/15da04256253d97d453743eeee0abf60.jpg",
    teamLogoSrc: rocketsCurrentLogo,
    teamLogoStyling: rocketsCurrentLogoStyling,
  },
  {
    name: "Magic Johnson",
    nickname: "Magic",
    position: "PG",
    year: "1986-87",
    team: "LAL",
    fullTeamName: "Los Angeles Lakers",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: "amethyst",
    pts75: 23.3,
    ts: +6.4,
    reb75: 9,
    ast75: 14,
    stk75: 3.1,
    tov75: 4.3,
    bpm: 9.2,
    badges: [
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "hof",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImDribbble />,
        color: "hof",
        explanation: "Houdini Handles",
      },
      {
        icon: <ImMagnet />,
        color: "gold",
        explanation: "Rebound Magnet",
      },
      {
        icon: <RiTeamFill />,
        color: "gold",
        explanation: "Switchable Specialist",
      },
    ],
    teamScoring: 6,
    teamEfficiency: 9,
    teamSpacing: 6,
    teamFinishing: 9,
    teamPassing: 10,
    teamCreation: 10,
    teamOffRebounding: 6.5,
    //
    teamInteriorDef: 4,
    teamPerimeterDef: 6.5,
    teamSwitchability: 8,
    teamDefIntangibles: 5,
    teamDefPlaymaking: 5,
    teamDefRebounding: 8,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 0,
    teamTotalChemRating: 0,
    teamOffImpact: 6,
    teamDefImpact: 0.13,
    teamTotalImpact: 6.1,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/johnsma02.jpg",
    plyrCardPictureSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PN5nNRCJmXODAoT68aBxNO_qE-UxbGZX_w&s",
    teamLogoSrc: lakersCurrentLogo,
    teamLogoStyling: lakersCurrentLogoStyling,
  },
  {
    name: "Larry Bird",
    position: "SF",
    year: "1985-86",
    team: "BOS",
    fullTeamName: "Boston Celtics",
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: "emerald",
    pts75: 24.1,
    ts: +3.9,
    reb75: 10,
    ast75: 7,
    stk75: 2.9,
    tov75: 4.3,
    bpm: 8.2,
    badges: [
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <FaWifi />,
        color: "gold",
        explanation: "Limitless Range",
      },
      {
        icon: <RiHandCoinLine />,
        color: "hof",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImMagnet />,
        color: "gold",
        explanation: "Rebound Magnet",
      },
      {
        icon: <GiBrain />,
        color: "gold",
        explanation: "High IQ Defender",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 6.5,
    teamSpacing: 9,
    teamFinishing: 6,
    teamPassing: 9,
    teamCreation: 9,
    teamOffRebounding: 7,
    //
    teamInteriorDef: 6.5,
    teamPerimeterDef: 4,
    teamSwitchability: 4,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 5,
    teamDefRebounding: 7.5,
    //
    teamOffChemRating: 2,
    teamDefChemRating: 0.8,
    teamTotalChemRating: 2.8,
    teamOffImpact: 5.13,
    teamDefImpact: 0.75,
    teamTotalImpact: 5.9,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/birdla01.jpg",
    plyrCardPictureSrc:
      "https://cdn.britannica.com/60/258260-050-35DB0395/larry-bird-of-boston-celtics-shoots-free-throw-against-the-washington-bullets-1985.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Kobe Bryant",
    position: "SG",
    year: "2007-08",
    team: "LAL",
    fullTeamName: "Los Angeles Lakers",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: "amethyst",
    pts75: 27.4,
    ts: +3.6,
    reb75: 5,
    ast75: 5,
    stk75: 3.5,
    tov75: 4.3,
    bpm: 6.2,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <ImEarth />,
        color: "hof",
        explanation: "Offensive Gravity",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 5,
    teamSpacing: 9,
    teamFinishing: 8.75,
    teamPassing: 7.5,
    teamCreation: 7.5,
    teamOffRebounding: 5,
    //
    teamInteriorDef: 5,
    teamPerimeterDef: 8.5,
    teamSwitchability: 5,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 7,
    teamDefRebounding: 6,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 0.5,
    teamTotalChemRating: 0.5,
    teamOffImpact: 5.13,
    teamDefImpact: 0.5,
    teamTotalImpact: 5.6,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/bryanko01.jpg",
    plyrCardPictureSrc:
      "https://people.com/thmb/DjhcXEV6R-f9jcpkaoTkgd0lWYY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(665x0:667x2)/kobe-bryant-n-2a3e767270fd44fa9e02b81117a207ba.jpg",
    teamLogoSrc: lakersCurrentLogo,
    teamLogoStyling: lakersCurrentLogoStyling,
  },
  {
    name: "Tim Duncan",
    position: "PF",
    year: "2002-03",
    team: "SAS",
    fullTeamName: "San Antonio Spurs",
    teamColor: spursPrimary,
    teamColor2: spursSecondary,
    teamColor3: spursThird,
    cardColor: "diamond",
    pts75: 23.7,
    ts: +4.5,
    reb75: 13,
    ast75: 4,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 8.1,
    badges: [
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <FaAnchor />,
        color: "hof",
        explanation: "Defensive Anchor",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
      {
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
    ],
    teamScoring: 7,
    teamEfficiency: 6,
    teamSpacing: 5,
    teamFinishing: 9,
    teamPassing: 5,
    teamCreation: 4.5,
    teamOffRebounding: 9,
    //
    teamInteriorDef: 10,
    teamPerimeterDef: 4.5,
    teamSwitchability: 4,
    teamDefIntangibles: 10,
    teamDefPlaymaking: 8.75,
    teamDefRebounding: 9,
    //
    teamOffChemRating: -1,
    teamDefChemRating: 2,
    teamTotalChemRating: -0.5,
    teamOffImpact: 3.25,
    teamDefImpact: 3.13,
    teamTotalImpact: 6.4,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/duncati01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/1200x/8f/46/83/8f46833041c9843efaa1356ac255f6c8.jpg",
    teamLogoSrc: spursCurrentLogo,
    teamLogoStyling: spursCurrentLogoStyling,
  },
  {
    name: "Jerry West",
    position: "PG",
    year: "1964-65",
    team: "LAL",
    fullTeamName: "Los Angeles Lakers",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: "amethyst",
    pts75: 23,
    ts: +9.3,
    reb75: 5,
    ast75: 7.5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <GiWhistle />,
        color: "hof",
        explanation: "Foul Drawer",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <TbEngine />,
        color: "gold",
        explanation: "Offensive Engine",
      },
      {
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "hof",
        explanation: "Pick Pocket/Interceptor",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 8,
    teamSpacing: 8.5,
    teamFinishing: 8,
    teamPassing: 7.25,
    teamCreation: 8.75,
    teamOffRebounding: 5,
    //
    teamInteriorDef: 3.5,
    teamPerimeterDef: 9,
    teamSwitchability: 4.4,
    teamDefIntangibles: 7,
    teamDefPlaymaking: 8.5,
    teamDefRebounding: 7.5,
    //
    teamOffChemRating: 1,
    teamDefChemRating: 0.5,
    teamTotalChemRating: 1.5,
    teamOffImpact: 5.2,
    teamDefImpact: 0.5,
    teamTotalImpact: 5.7,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/westje01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/236x/e1/7c/10/e17c1066d1544bb501cd28ed647813ec.jpg",
    teamLogoSrc: lakersCurrentLogo,
    teamLogoStyling: lakersCurrentLogoStyling,
  },
  {
    name: "Shaquille O'Neal",
    position: "C",
    year: "1999-00",
    team: "LAL",
    fullTeamName: "Los Angeles Lakers",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: "amethyst",
    pts75: 28.6,
    ts: +5.5,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <GiWhistle />,
        color: "hof",
        explanation: "Foul Drawer",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImEarth />,
        color: "hof",
        explanation: "Offensive Gravity",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "gold",
        explanation: "Defensive Anchor",
      },
    ],
    teamScoring: 9.5,
    teamEfficiency: 8.5,
    teamSpacing: 1,
    teamFinishing: 10,
    teamPassing: 5,
    teamCreation: 7.5,
    teamOffRebounding: 10,
    //
    teamInteriorDef: 9,
    teamPerimeterDef: 2.5,
    teamSwitchability: 2,
    teamDefIntangibles: 6,
    teamDefPlaymaking: 7.75,
    teamDefRebounding: 10,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 1.25,
    teamTotalChemRating: 1.25,
    teamOffImpact: 5,
    teamDefImpact: 2,
    teamTotalImpact: 7,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/onealsh01.jpg",
    plyrCardPictureSrc:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/2-shaquille-oneal-nathaniel-s-butler.jpg",
    teamLogoSrc: lakersCurrentLogo,
    teamLogoStyling: lakersCurrentLogoStyling,
  },
  {
    name: "Dirk Nowitzki",
    position: "PF",
    year: "2006-07",
    team: "DAL",
    fullTeamName: "Dallas Mavericks",
    teamColor: mavericksPrimary,
    teamColor2: mavericksSecondary,
    teamColor3: mavericksThird,
    cardColor: "sapphire",
    pts75: 27.3,
    ts: +6.4,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaWifi />,
        color: "hof",
        explanation: "Limitless Range",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <TbEngine />,
        color: "gold",
        explanation: "Offensive Engine",
      },
      {
        icon: <ImEarth />,
        color: "gold",
        explanation: "Offensive Gravity",
      },
      {
        icon: <GiBrain />,
        color: "gold",
        explanation: "High IQ Defender",
      },
    ],
    teamScoring: 8.75,
    teamEfficiency: 9,
    teamSpacing: 10,
    teamFinishing: 7.5,
    teamPassing: 5,
    teamCreation: 5,
    teamOffRebounding: 8,
    //
    teamInteriorDef: 7,
    teamPerimeterDef: 3.5,
    teamSwitchability: 2,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 3,
    teamDefRebounding: 8.5,
    //
    teamOffChemRating: 1,
    teamDefChemRating: 0,
    teamTotalChemRating: 1,
    teamOffImpact: 4.37,
    teamDefImpact: 0.37,
    teamTotalImpact: 4.7,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/nowitdi01.jpg",
    plyrCardPictureSrc:
      "https://cdn.hoopsrumors.com/files/2014/07/USATSI_7899763.jpg",
    teamLogoSrc: mavericksCurrentLogo,
    teamLogoStyling: mavericksCurrentLogoStyling,
  },
  {
    name: "Kevin Durant",
    position: "SF",
    year: "2013-14",
    team: "OKC",
    fullTeamName: "Oklahoma City Thunder",
    teamColor: thunderPrimary,
    teamColor2: thunderSecondary,
    teamColor3: thunderThird,
    cardColor: "sapphire",
    pts75: 31.4,
    ts: +9.4,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaWifi />,
        color: "hof",
        explanation: "Limitless Range",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <ImEarth />,
        color: "gold",
        explanation: "Offensive Gravity",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
      },
      {
        icon: <RiTeamFill />,
        color: "gold",
        explanation: "Switchable Specialsit",
      },
    ],
    teamScoring: 10,
    teamEfficiency: 10,
    teamSpacing: 10,
    teamFinishing: 9,
    teamPassing: 7,
    teamCreation: 6.5,
    teamOffRebounding: 6.5,
    //
    teamInteriorDef: 6.5,
    teamPerimeterDef: 6,
    teamSwitchability: 6,
    teamDefIntangibles: 6.5,
    teamDefPlaymaking: 7,
    teamDefRebounding: 7,
    //
    teamOffChemRating: 1,
    teamDefChemRating: 1.25,
    teamTotalChemRating: 2.25,
    teamOffImpact: 4.87,
    teamDefImpact: 0.37,
    teamTotalImpact: 5.2,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/duranke01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/f7/56/89/f7568974e3d5df7af1ac73f1e4e925e0.jpg",
    teamLogoSrc: thunderCurrentLogo,
    teamLogoStyling: thunderCurrentLogoStyling,
  },
  {
    name: "Bill Russell",
    position: "C",
    year: "1963-64",
    team: "BOS",
    fullTeamName: "Boston Celtics",
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: "emerald",
    pts75: 9.7,
    ts: -2.4,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "hof",
        explanation: "Defensive Anchor",
      },
      {
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <GiEmbrassedEnergy />,
        color: "hof",
        explanation: "High Energy Defender",
      },
      {
        icon: <RiTeamFill />,
        color: "gold",
        explanation: "Switchable Specialsit",
      },
    ],
    teamScoring: 2,
    teamEfficiency: 1,
    teamSpacing: 1,
    teamFinishing: 9,
    teamPassing: 6,
    teamCreation: 3.5,
    teamOffRebounding: 10,
    //
    teamInteriorDef: 10,
    teamPerimeterDef: 8.5,
    teamSwitchability: 9.25,
    teamDefIntangibles: 10,
    teamDefPlaymaking: 10,
    teamDefRebounding: 10,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 3,
    teamTotalChemRating: 3,
    teamOffImpact: 0.5,
    teamDefImpact: 5.75,
    teamTotalImpact: 6.3,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/russebi01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/474x/f7/b0/17/f7b01716aa43757cfee2bbe248999cbf.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Dwyane Wade",
    position: "SG",
    year: "2008-09",
    team: "MIA",
    fullTeamName: "Miami Heat",
    teamColor: heatPrimary,
    teamColor2: heatSecondary,
    teamColor3: heatThird,
    cardColor: "ruby",
    pts75: 31.4,
    ts: +3.0,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiWhistle />,
        color: "gold",
        explanation: "Foul Drawer",
      },
      {
        icon: <TbEngine />,
        color: "gold",
        explanation: "Offensive Engine",
      },
      {
        icon: <GiHandcuffs />,
        color: "gold",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 6,
    teamSpacing: 5,
    teamFinishing: 6,
    teamPassing: 9,
    teamCreation: 9,
    teamOffRebounding: 7,
    //
    teamInteriorDef: 6.5,
    teamPerimeterDef: 6.5,
    teamSwitchability: 5,
    teamDefIntangibles: 5,
    teamDefPlaymaking: 8,
    teamDefRebounding: 7,
    //
    teamOffChemRating: -1,
    teamDefChemRating: 1.1,
    teamTotalChemRating: 0.1,
    teamOffImpact: 5,
    teamDefImpact: 0.75,
    teamTotalImpact: 5.8,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/wadedw01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/564x/bd/68/d5/bd68d509f6201a4f4da2b26785a1e8c8.jpg",
    teamLogoSrc: heatCurrentLogo,
    teamLogoStyling: heatCurrentLogoStyling,
  },
  {
    name: "Julius Erving",
    position: "SF",
    year: "1975-76",
    team: "BRK",
    fullTeamName: "Brooklyn Nets",
    teamColor: netsPrimary,
    teamColor2: netsSecondary,
    teamColor3: netsThird,
    cardColor: "diamond",
    pts75: 25.8,
    ts: +5.2,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImMagnet />,
        color: "gold",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
      },
    ],
    teamScoring: 8.5,
    teamEfficiency: 7,
    teamSpacing: 6,
    teamFinishing: 10,
    teamPassing: 7.5,
    teamCreation: 7,
    teamOffRebounding: 7,
    //
    teamInteriorDef: 7,
    teamPerimeterDef: 6.5,
    teamSwitchability: 6,
    teamDefIntangibles: 6,
    teamDefPlaymaking: 8.5,
    teamDefRebounding: 8.5,
    //
    teamOffChemRating: -1,
    teamDefChemRating: 1.5,
    teamTotalChemRating: 0.5,
    teamOffImpact: 5.13,
    teamDefImpact: 1.12,
    teamTotalImpact: 5.3,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/ervinju01.jpg",
    plyrCardPictureSrc:
      "https://cdn.nba.com/manage/2020/10/julius-erving-nets-392x588.jpg",
    teamLogoSrc: netsCurrentLogo,
    teamLogoStyling: netsCurrentLogoStyling,
  },
  {
    name: "Oscar Robertson",
    position: "PG",
    year: "1963-64",
    team: "SAC",
    fullTeamName: "Sacramento Kings",
    teamColor: kingsPrimary,
    teamColor2: kingsSecondary,
    teamColor3: kingsThird,
    cardColor: "amethyst",
    pts75: 21.2,
    ts: +9.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <FaTools />,
        color: "gold",
        explanation: "Post Move Technician",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "hof",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImDribbble />,
        color: "hof",
        explanation: "Houdini Handles",
      },
      {
        icon: <ImMagnet />,
        color: "gold",
        explanation: "Rebound Magnet",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 9,
    teamSpacing: 7.5,
    teamFinishing: 9,
    teamPassing: 9.5,
    teamCreation: 10,
    teamOffRebounding: 8,
    //
    teamInteriorDef: 3.5,
    teamPerimeterDef: 8,
    teamSwitchability: 3,
    teamDefIntangibles: 6,
    teamDefPlaymaking: 5.5,
    teamDefRebounding: 9,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 0.25,
    teamTotalChemRating: 0.25,
    teamOffImpact: 5.54,
    teamDefImpact: 0.25,
    teamTotalImpact: 5.8,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/roberos01.jpg",
    plyrCardPictureSrc:
      "https://cdn.nba.com/teams/uploads/sites/1610612758/2022/08/robertson-history-main-image-v4.jpeg",
    teamLogoSrc: kingsCurrentLogo,
    teamLogoStyling: kingsCurrentLogoStyling,
  },
  {
    name: "Giannis Antetokounmpo",
    altName: "G. Antetokounmpo",
    position: "PF",
    year: "2019-20",
    team: "MIL",
    fullTeamName: "Milwuakee Bucks",
    teamColor: bucksPrimary,
    teamColor2: bucksSecondary,
    teamColor3: bucksThird,
    cardColor: "emerald",
    pts75: 33.2,
    ts: +4.8,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <ImEarth />,
        color: "gold",
        explanation: "Offensive Gravity",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <RiTeamFill />,
        color: "hof",
        explanation: "Switchable Specialsit",
      },
      {
        icon: <GiEmbrassedEnergy />,
        color: "hof",
        explanation: "High Energy Defender",
      },
      {
        icon: <GiBrain />,
        color: "gold",
        explanation: "High IQ Defender",
      },
      {
        icon: <FaAnchor />,
        color: "gold",
        explanation: "Defensive Anchor",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 7.5,
    teamSpacing: 4,
    teamFinishing: 10,
    teamPassing: 7.5,
    teamCreation: 8,
    teamOffRebounding: 9,
    //
    teamInteriorDef: 9,
    teamPerimeterDef: 7,
    teamSwitchability: 7,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 8.75,
    teamDefRebounding: 9,
    //
    teamOffChemRating: -1,
    teamDefChemRating: 1.75,
    teamTotalChemRating: 0.75,
    teamOffImpact: 3.37,
    teamDefImpact: 2.63,
    teamTotalImpact: 6,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/antetgi01.jpg",
    plyrCardPictureSrc:
      "https://cdn.britannica.com/53/232053-050-024C0309/Giannis-Antetokounmpo-Milwaukee-Bucks-2021-NBA.jpg",
    teamLogoSrc: bucksCurrentLogo,
    teamLogoStyling: bucksCurrentLogoStyling,
  },
  {
    name: "Nikola Jokic",
    position: "C",
    year: "2022-23",
    team: "DEN",
    fullTeamName: "Denver Nuggets",
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    teamColor3: nuggetsThird,
    cardColor: "sapphire",
    pts75: 26.7,
    ts: +12.0,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <ImTarget />,
        color: "gold",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "hof",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <GiBrain />,
        color: "gold",
        explanation: "High IQ Defender",
      },
    ],
    teamScoring: 8.5,
    teamEfficiency: 9,
    teamSpacing: 8.5,
    teamFinishing: 9,
    teamPassing: 10,
    teamCreation: 9.5,
    teamOffRebounding: 9.5,
    //
    teamInteriorDef: 6.25,
    teamPerimeterDef: 1,
    teamSwitchability: 1,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 6.5,
    teamDefRebounding: 9.25,
    //
    teamOffChemRating: 2,
    teamDefChemRating: -0.5,
    teamTotalChemRating: 1.5,
    teamOffImpact: 5.75,
    teamDefImpact: 0,
    teamTotalImpact: 5.8,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/jokicni01.jpg",
    plyrCardPictureSrc:
      "https://cdn.britannica.com/70/244270-050-F6F2B65A/Nikola-Jokic-Denver-Nuggets-2022.jpg",
    teamLogoSrc: nuggetsCurrentLogo,
    teamLogoStyling: nuggetsCurrentLogoStyling,
  },
  {
    name: "Chris Paul",
    position: "PG",
    year: "2007-08",
    team: "NOP",
    fullTeamName: "New Orleans Pelicans",
    teamColor: pelicansPrimary,
    teamColor2: pelicansSecondary,
    teamColor3: pelicansThird,
    cardColor: "diamond",
    pts75: 22.4,
    ts: +3.6,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "hof",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImDribbble />,
        color: "hof",
        explanation: "Houdini Handles",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "hof",
        explanation: "Pick Pocket/Interceptor",
      },
      {
        icon: <GiHandcuffs />,
        color: "gold",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <ImBug />,
        color: "gold",
        explanation: "Defensive Pest",
      },
    ],
    teamScoring: 8,
    teamEfficiency: 7.5,
    teamSpacing: 9,
    teamFinishing: 9,
    teamPassing: 10,
    teamCreation: 9.5,
    teamOffRebounding: 3,
    //
    teamInteriorDef: 2,
    teamPerimeterDef: 9,
    teamSwitchability: 1,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 7,
    teamDefRebounding: 5.5,
    //
    teamOffChemRating: -1,
    teamDefChemRating: 1,
    teamTotalChemRating: 0,
    teamOffImpact: 5.13,
    teamDefImpact: 0.5,
    teamTotalImpact: 5.6,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/paulch01.jpg",
    plyrCardPictureSrc:
      "https://cdn.bleacherreport.net/images_root/slides/photos/000/549/883/106599662_original.jpg?1291737327",
    teamLogoSrc: pelicansCurrentLogo,
    teamLogoStyling: pelicansCurrentLogoStyling,
  },
  {
    name: "James Harden",
    position: "SG",
    year: "2018-19",
    team: "HOU",
    fullTeamName: "Houston Rockets",
    teamColor: rocketsPrimary,
    teamColor2: rocketsSecondary,
    teamColor3: rocketsThird,
    cardColor: "ruby",
    pts75: 36.1,
    ts: +5.9,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaWifi />,
        color: "hof",
        explanation: "Limitless Range",
      },
      {
        icon: <GiWhistle />,
        color: "hof",
        explanation: "Foul Drawer",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "hof",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImEarth />,
        color: "gold",
        explanation: "Offensive Gravity",
      },
      {
        icon: <ImDribbble />,
        color: "gold",
        explanation: "Houdini Handles",
      },
    ],
    teamScoring: 10,
    teamEfficiency: 8.5,
    teamSpacing: 9.5,
    teamFinishing: 9,
    teamPassing: 9,
    teamCreation: 10,
    teamOffRebounding: 5,
    //
    teamInteriorDef: 4,
    teamPerimeterDef: 2,
    teamSwitchability: 5,
    teamDefIntangibles: 5,
    teamDefPlaymaking: 5,
    teamDefRebounding: 7,
    //
    teamOffChemRating: -2,
    teamDefChemRating: 1.5,
    teamTotalChemRating: -0.5,
    teamOffImpact: 5.75,
    teamDefImpact: 1.65,
    teamTotalImpact: 7.4,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/hardeja01.jpg",
    plyrCardPictureSrc:
      "https://www.amarillo.com/gcdn/authoring/2015/03/15/NAGN/ghows-TX-5a3ff5cb-5f4e-4be9-a5e1-2b2fefc92bde-49165afd.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
    teamLogoSrc: rocketsCurrentLogo,
    teamLogoStyling: rocketsCurrentLogoStyling,
  },
  {
    name: "Kawhi Leonard",
    position: "SF",
    year: "2018-19",
    team: "TOR",
    fullTeamName: "Toronto Raptors",
    teamColor: raptorsPrimary,
    teamColor2: raptorsSecondary,
    teamColor3: raptorsThird,
    cardColor: "ruby",
    pts75: 28.1,
    ts: +4.9,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <ImTarget />,
        color: "gold",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "hof",
        explanation: "Pick Pocket/Interceptor",
      },
      {
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
      {
        icon: <ImBug />,
        color: "gold",
        explanation: "Defensive Pest",
      },
    ],
    teamScoring: 8.75,
    teamEfficiency: 9,
    teamSpacing: 8.5,
    teamFinishing: 8.5,
    teamPassing: 7,
    teamCreation: 5.25,
    teamOffRebounding: 5,
    //
    teamInteriorDef: 6.5,
    teamPerimeterDef: 9,
    teamSwitchability: 7,
    teamDefIntangibles: 9.5,
    teamDefPlaymaking: 8,
    teamDefRebounding: 7.5,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 1.5,
    teamTotalChemRating: 1.5,
    teamOffImpact: 4.13,
    teamDefImpact: 0.87,
    teamTotalImpact: 5,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/leonaka01.jpg",
    plyrCardPictureSrc:
      "https://cdn.images.express.co.uk/img/dynamic/4/590x/secondary/Kawhi-Leonard-1559573.jpg?r=1539846480454",
    teamLogoSrc: raptorsCurrentLogo,
    teamLogoStyling: raptorsCurrentLogoStyling,
  },
  {
    name: "David Robinson",
    position: "C",
    year: "1994-95",
    team: "SAS",
    fullTeamName: "San Antonio Spurs",
    teamColor: spursPrimary,
    teamColor2: spursSecondary,
    teamColor3: spursThird,
    cardColor: "diamond",
    pts75: 27.7,
    ts: +5.9,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <FaTools />,
        color: "gold",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaAnchor />,
        color: "hof",
        explanation: "Defensive Anchor",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
      },
    ],
    teamScoring: 8,
    teamEfficiency: 8,
    teamSpacing: 6.5,
    teamFinishing: 10,
    teamPassing: 6.5,
    teamCreation: 5,
    teamOffRebounding: 10,
    //
    teamInteriorDef: 10,
    teamPerimeterDef: 4.5,
    teamSwitchability: 4,
    teamDefIntangibles: 9,
    teamDefPlaymaking: 10,
    teamDefRebounding: 10,
    //
    teamOffChemRating: 1,
    teamDefChemRating: 2,
    teamTotalChemRating: 3,
    teamOffImpact: 2.25,
    teamDefImpact: 3.13,
    teamTotalImpact: 5.4,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/robinda01.jpg",
    plyrCardPictureSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBFrwYEOO7JRhED9B8BcQaUwOVml-fxft3FQ&s",
    teamLogoSrc: spursCurrentLogo,
    teamLogoStyling: spursCurrentLogoStyling,
  },
  {
    name: "Steve Nash",
    position: "PG",
    year: "2005-06",
    team: "PHX",
    fullTeamName: "Phoenix Suns",
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: "amethyst",
    pts75: 20,
    ts: +9.7,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <FaWifi />,
        color: "hof",
        explanation: "Limitless Range",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "hof",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImDribbble />,
        color: "gold",
        explanation: "Houdini Handles",
      },
    ],
    teamScoring: 7,
    teamEfficiency: 10,
    teamSpacing: 10,
    teamFinishing: 8.5,
    teamPassing: 10,
    teamCreation: 10,
    teamOffRebounding: 4,
    //
    teamInteriorDef: 1,
    teamPerimeterDef: 5,
    teamSwitchability: 1,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 3,
    teamDefRebounding: 4,
    //
    teamOffChemRating: -1,
    teamDefChemRating: -1.5,
    teamTotalChemRating: -2.5,
    teamOffImpact: 6,
    teamDefImpact: -0.37,
    teamTotalImpact: 5.6,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/nashst01.jpg",
    plyrCardPictureSrc:
      "https://cdn.bleacherreport.net/images_root/slides/photos/000/624/568/107673038_original.jpg?1294634195",
    teamLogoSrc: sunsCurrentLogo,
    teamLogoStyling: sunsCurrentLogoStyling,
  },
  {
    name: "Scottie Pippen",
    position: "SF",
    year: "1993-94",
    team: "CHI",
    fullTeamName: "Chicago Bulls",
    teamColor: bullsPrimary,
    teamColor2: bullsSecondary,
    teamColor3: bullsThird,
    cardColor: "ruby",
    pts75: 22.5,
    ts: +1.6,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <ImBug />,
        color: "hof",
        explanation: "Defensive Pest",
      },
      {
        icon: <RiTeamFill />,
        color: "hof",
        explanation: "Switchable Specialsit",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "hof",
        explanation: "Pick Pocket/Interceptor",
      },
      {
        icon: <GiEmbrassedEnergy />,
        color: "hof",
        explanation: "High Energy Defender",
      },
    ],
    teamScoring: 7,
    teamEfficiency: 4,
    teamSpacing: 7,
    teamFinishing: 9,
    teamPassing: 8.5,
    teamCreation: 7,
    teamOffRebounding: 7,
    //
    teamInteriorDef: 7,
    teamPerimeterDef: 9.75,
    teamSwitchability: 9,
    teamDefIntangibles: 9,
    teamDefPlaymaking: 8,
    teamDefRebounding: 7,
    //
    teamOffChemRating: 1,
    teamDefChemRating: 1.85,
    teamTotalChemRating: 2.85,
    teamOffImpact: 2.25,
    teamDefImpact: 2,
    teamTotalImpact: 4.3,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/pippesc01.jpg",
    plyrCardPictureSrc:
      "https://cdn.nba.com/teams/legacy/i.cdn.turner.com/nba/nba/media/bulls/pippen_970218.jpg",
    teamLogoSrc: bullsCurrentLogo,
    teamLogoStyling: bullsCurrentLogoStyling,
  },
  {
    name: "Charles Barkley",
    position: "PF",
    year: "1992-93",
    team: "PHX",
    fullTeamName: "Phoenix Suns",
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: "amethyst",
    pts75: 24.5,
    ts: +6.0,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <TbEngine />,
        color: "gold",
        explanation: "Offensive Engine",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
      },
    ],
    teamScoring: 8.75,
    teamEfficiency: 9.75,
    teamSpacing: 6,
    teamFinishing: 9.5,
    teamPassing: 7,
    teamCreation: 6.5,
    teamOffRebounding: 10,
    //
    teamInteriorDef: 6.5,
    teamPerimeterDef: 2.75,
    teamSwitchability: 7,
    teamDefIntangibles: 5,
    teamDefPlaymaking: 8,
    teamDefRebounding: 10,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 0,
    teamTotalChemRating: 0,
    teamOffImpact: 4.75,
    teamDefImpact: 0.13,
    teamTotalImpact: 4.9,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/barklch01.jpg",
    plyrCardPictureSrc:
      "https://cdn.nba.com/teams/legacy/www.nba.com/suns/sites/suns/files/legacy/main_photo/barkley_220_feature.jpg",
    teamLogoSrc: sunsCurrentLogo,
    teamLogoStyling: sunsCurrentLogoStyling,
  },
  {
    name: "Pau Gasol",
    position: "PF",
    year: "2005-06",
    team: "MEM",
    fullTeamName: "Memphis Grizzlies",
    teamColor: grizzliesPrimary,
    teamColor2: grizzliesSecondary,
    teamColor3: grizzliesThird,
    cardColor: "sapphire",
    pts75: 21.7,
    ts: +2.0,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImMagnet />,
        color: "gold",
        explanation: "Rebound Magnet",
      },
      {
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
      {
        icon: <FaLock />,
        color: "gold",
        explanation: "Lockdown Post Defender",
      },
    ],
    teamScoring: 7,
    teamEfficiency: 6,
    teamSpacing: 7.5,
    teamFinishing: 8.75,
    teamPassing: 7.75,
    teamCreation: 4,
    teamOffRebounding: 8.75,
    //
    teamInteriorDef: 8.25,
    teamPerimeterDef: 1.75,
    teamSwitchability: 2,
    teamDefIntangibles: 9,
    teamDefPlaymaking: 6.25,
    teamDefRebounding: 9,
    //
    teamOffChemRating: 1,
    teamDefChemRating: 1,
    teamTotalChemRating: 2,
    teamOffImpact: 2.5,
    teamDefImpact: 0.75,
    teamTotalImpact: 3.3,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/gasolpa01.jpg",
    plyrCardPictureSrc:
      "https://cdn.nba.com/teams/legacy/www.nba.com/grizzlies/sites/grizzlies/files/legacy/main_photo/gasol-080106-jm157-300.jpg",
    teamLogoSrc: grizzliesCurrentLogo,
    teamLogoStyling: grizzliesCurrentLogoStyling,
  },
  {
    name: "Dwight Howard",
    position: "C",
    year: "2010-11",
    team: "ORL",
    fullTeamName: "Orlando Magic",
    teamColor: magicPrimary,
    teamColor2: magicSecondary,
    teamColor3: magicThird,
    cardColor: "sapphire",
    pts75: 24.0,
    ts: +7.5,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <GiWhistle />,
        color: "gold",
        explanation: "Foul Drawer",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaAnchor />,
        color: "hof",
        explanation: "Defensive Anchor",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <GiEmbrassedEnergy />,
        color: "gold",
        explanation: "High Energy Defender",
      },
    ],
    teamScoring: 7.5,
    teamEfficiency: 8.5,
    teamSpacing: 0,
    teamFinishing: 9.5,
    teamPassing: 3,
    teamCreation: 2.5,
    teamOffRebounding: 10,
    //
    teamInteriorDef: 9.75,
    teamPerimeterDef: 3.5,
    teamSwitchability: 4,
    teamDefIntangibles: 7,
    teamDefPlaymaking: 9,
    teamDefRebounding: 10,
    //
    teamOffChemRating: 1,
    teamDefChemRating: 1.9,
    teamTotalChemRating: 2.9,
    teamOffImpact: 1.5,
    teamDefImpact: 3,
    teamTotalImpact: 4.5,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/howardw01.jpg",
    plyrCardPictureSrc:
      "https://www.nydailynews.com/wp-content/uploads/migration/2012/03/19/EY2IF6Q7ZLWL7VSRKP3LDMGD64.jpg?w=1024",
    teamLogoSrc: magicCurrentLogo,
    teamLogoStyling: magicCurrentLogoStyling,
  },
  {
    name: "Bob Pettit",
    position: "PF",
    year: "1957-58",
    team: "ATL",
    fullTeamName: "Atlanta Hawks",
    teamColor: hawksPrimary,
    teamColor2: hawksSecondary,
    teamColor3: hawksThird,
    cardColor: "ruby",
    pts75: 20.3,
    ts: +4.3,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <FaWifi />,
        color: "hof",
        explanation: "Limitless Range",
      },
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaLock />,
        color: "gold",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <GiBrain />,
        color: "gold",
        explanation: "High IQ Defender",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 7.25,
    teamSpacing: 9,
    teamFinishing: 9,
    teamPassing: 5,
    teamCreation: 3.5,
    teamOffRebounding: 9.5,
    //
    teamInteriorDef: 7,
    teamPerimeterDef: 2.5,
    teamSwitchability: 4,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 4,
    teamDefRebounding: 9.5,
    //
    teamOffChemRating: 0.25,
    teamDefChemRating: 0.25,
    teamTotalChemRating: 0.5,
    teamOffImpact: 3.5,
    teamDefImpact: 0.5,
    teamTotalImpact: 4.0,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/pettibo01.jpg",
    plyrCardPictureSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bob_Pettit_1961.jpeg/1200px-Bob_Pettit_1961.jpeg",
    teamLogoSrc: hawksCurrentLogo,
    teamLogoStyling: hawksCurrentLogoStyling,
  },
  {
    name: "Reggie Miller",
    position: "SG",
    year: "1993-94",
    team: "IND",
    fullTeamName: "Indiana Pacers",
    teamColor: pacersPrimary,
    teamColor2: pacersSecondary,
    teamColor3: pacersThird,
    cardColor: "sapphire",
    pts75: 23.0,
    ts: +10.8,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
    {
        icon: <FaWifi />,
        color: "hof",
        explanation: "Limitless Range",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <ImEarth />,
        color: "hof",
        explanation: "Offensive Gravity",
      },
      {
        icon: <GiHandcuffs />,
        color: "gold",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
      },
    ],
    teamScoring: 8,
    teamEfficiency: 9.75,
    teamSpacing: 10,
    teamFinishing: 8.25,
    teamPassing: 6.75,
    teamCreation: 5.5,
    teamOffRebounding: 4.75,
    //
    teamInteriorDef: 3.5,
    teamPerimeterDef: 7.75,
    teamSwitchability: 5,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 3,
    teamDefRebounding: 3,
    //
    teamOffChemRating: 2,
    teamDefChemRating: -0.75,
    teamTotalChemRating: 1.25,
    teamOffImpact: 3.37,
    teamDefImpact: -0.13,
    teamTotalImpact: 3.2,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/millere01.jpg",
    plyrCardPictureSrc:
      "https://m.media-amazon.com/images/S/pv-target-images/71e20a72b46a0ab2e48a746ad829afe1f6ac838e88bbe4675c43e0399045573c.jpg",
    teamLogoSrc: pacersCurrentLogo,
    teamLogoStyling: pacersCurrentLogoStyling,
  },
  {
    name: "Elvin Hayes",
    position: "PF",
    year: "1974-75",
    team: "WAS",
    fullTeamName: "Washington Wizards",
    teamColor: wizardsPrimary,
    teamColor2: wizardsSecondary,
    teamColor3: wizardsThird,
    cardColor: "sapphire",
    pts75: 18.9,
    ts: -2.0,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "gold",
        explanation: "Defensive Anchor",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 5,
    teamSpacing: 5,
    teamFinishing: 9.75,
    teamPassing: 4,
    teamCreation: 3,
    teamOffRebounding: 9.75,
    //
    teamInteriorDef: 9,
    teamPerimeterDef: 2,
    teamSwitchability: 3.75,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 7.25,
    teamDefRebounding: 10,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 1.4,
    teamTotalChemRating: 1.4,
    teamOffImpact: 0.5,
    teamDefImpact: 2,
    teamTotalImpact: 2.5,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/hayesel01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/e8/b5/d5/e8b5d50019de40ae6a3a35b2c2fa903b.jpg",
    teamLogoSrc: wizardsCurrentLogo,
    teamLogoStyling: wizardsCurrentLogoStyling,
  },
  {
    name: "Patrick Ewing",
    position: "C",
    year: "1992-93",
    team: "NYK",
    fullTeamName: "New York Knicks",
    teamColor: knicksPrimary,
    teamColor2: knicksSecondary,
    teamColor3: knicksThird,
    cardColor: "sapphire",
    pts75: 27.1,
    ts: +6.2,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaAnchor />,
        color: "hof",
        explanation: "Defensive Anchor",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 6.25,
    teamSpacing: 6.75,
    teamFinishing: 9,
    teamPassing: 5,
    teamCreation: 3.5,
    teamOffRebounding: 9,
    //
    teamInteriorDef: 9.5,
    teamPerimeterDef: 2,
    teamSwitchability: 1,
    teamDefIntangibles: 8,
    teamDefPlaymaking: 8,
    teamDefRebounding: 9.5,
    //
    teamOffChemRating: -2,
    teamDefChemRating: 1.8,
    teamTotalChemRating: -0.2,
    teamOffImpact: 2.25,
    teamDefImpact: 2.37,
    teamTotalImpact: 4.6,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/ewingpa01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/474x/86/da/64/86da64cf5589e9029c8a2826c684e11b.jpg",
    teamLogoSrc: knicksCurrentLogo,
    teamLogoStyling: knicksCurrentLogoStyling,
  },
  {
    name: "Bob McAdoo",
    position: "PF",
    year: "1973-74",
    team: "LAC",
    fullTeamName: "Los Angeles Clippers",
    teamColor: clippersPrimary,
    teamColor2: clippersSecondary,
    teamColor3: clippersThird,
    cardColor: "sapphire",
    pts75: 23.4,
    ts: +9.1,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
            {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiWhistle />,
        color: "gold",
        explanation: "Foul Drawer",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaLock />,
        color: "gold",
        explanation: "Lockdown Post Defender",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 8.25,
    teamSpacing: 6,
    teamFinishing: 9,
    teamPassing: 4,
    teamCreation: 3,
    teamOffRebounding: 9,
    //
    teamInteriorDef: 7,
    teamPerimeterDef: 3,
    teamSwitchability: 5,
    teamDefIntangibles: 5,
    teamDefPlaymaking: 5,
    teamDefRebounding: 9,
    //
    teamOffChemRating: -1,
    teamDefChemRating: 0,
    teamTotalChemRating: -1,
    teamOffImpact: 3.75,
    teamDefImpact: 0,
    teamTotalImpact: 3.8,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mcadobo01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/35/1f/5b/351f5b8d07895d5ede59647858599727.jpg",
    teamLogoSrc: clippersCurrentLogo,
    teamLogoStyling: clippersCurrentLogoStyling,
  },
  {
    name: "Karl Malone",
    position: "PF",
    year: "1997-98",
    team: "UTA",
    fullTeamName: "Utah Jazz",
    teamColor: jazzPrimary,
    teamColor2: jazzSecondary,
    teamColor3: jazzThird,
    cardColor: "amethyst",
    pts75: 29.2,
    ts: +7.3,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiWhistle />,
        color: "gold",
        explanation: "Foul Drawer",
      },
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <ImMagnet />,
        color: "hof",
        explanation: "Rebound Magnet",
      },
      {
        icon: <GiBrain />,
        color: "gold",
        explanation: "High IQ Defender",
      },
    ],
    teamScoring: 9,
    teamEfficiency: 8.5,
    teamSpacing: 7.75,
    teamFinishing: 9.5,
    teamPassing: 5,
    teamCreation: 4.5,
    teamOffRebounding: 9,
    //
    teamInteriorDef: 7,
    teamPerimeterDef: 4,
    teamSwitchability: 4,
    teamDefIntangibles: 6,
    teamDefPlaymaking: 5,
    teamDefRebounding: 9.5,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 0.6,
    teamTotalChemRating: 0.6,
    teamOffImpact: 3.87,
    teamDefImpact: 0.87,
    teamTotalImpact: 4.7,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/malonka01.jpg",
    plyrCardPictureSrc:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-karl-malone-rocky-widner.jpg",
    teamLogoSrc: jazzCurrentLogo,
    teamLogoStyling: jazzCurrentLogoStyling,
  },
  {
    name: "Isiah Thomas",
    position: "PG",
    year: "1985-86",
    team: "DET",
    fullTeamName: "Detroit Pistons",
    teamColor: pistonsPrimary,
    teamColor2: pistonsSecondary,
    teamColor3: pistonsThird,
    cardColor: "sapphire",
    pts75: 19.9,
    ts: +1.3,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
  {
    icon: <FaHatWizard />,
    color: "hof",
    explanation: "Middy Magician",
  },
  {
    icon: <GiBodyBalance />,
    color: "gold",
    explanation: "Acrobatic Finisher",
  },
  {
    icon: <MdOutlineSportsKabaddi />,
    color: "gold",
    explanation: "Tough Shot Maker",
  },
  {
    icon: <TbEngine />,
    color: "hof",
    explanation: "Offensive Engine",
  },
  {
    icon: <RiHandCoinLine />,
    color: "hof",
    explanation: "Dime Dropper",
  },
  {
    icon: <ImDribbble />,
    color: "hof",
    explanation: "Houdini Handles",
  },
  {
    icon: <GiHandcuffs />,
    color: "gold",
    explanation: "Perimeter Handcuffs",
  },
  {
    icon: <GiMonsterGrasp />,
    color: "gold",
    explanation: "Pick Pocket/Interceptor",
  },
    ],
    teamScoring: 8,
    teamEfficiency: 4.5,
    teamSpacing: 7,
    teamFinishing: 8.5,
    teamPassing: 9.5,
    teamCreation: 10,
    teamOffRebounding: 2,
    //
    teamInteriorDef: 2,
    teamPerimeterDef: 8,
    teamSwitchability: 2,
    teamDefIntangibles: 9,
    teamDefPlaymaking: 7,
    teamDefRebounding: 4,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 0.25,
    teamTotalChemRating: 0.25,
    teamOffImpact: 3.63,
    teamDefImpact: 0.37,
    teamTotalImpact: 4,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/thomais01.jpg",
    plyrCardPictureSrc:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/isiah-thomas-scott-cunningham.jpg",
    teamLogoSrc: pistonsCurrentLogo,
    teamLogoStyling: pistonsCurrentLogoStyling,
  },
  {
    name: "Alonzo Mourning",
    position: "C",
    year: "1993-94",
    team: "CHA",
    fullTeamName: "Charlotte Hornets",
    teamColor: hornetsPrimary,
    teamColor2: hornetsSecondary,
    teamColor3: hornetsThird,
    cardColor: "amethyst",
    pts75: 22.4,
    ts: +5.2,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <FaTools />,
        color: "gold",
        explanation: "Post Move Technician",
      },
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <ImMagnet />,
        color: "gold",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "hof",
        explanation: "Defensive Anchor",
      },
      {
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
    ],
    teamScoring: 7.75,
    teamEfficiency: 6,
    teamSpacing: 4,
    teamFinishing: 9.5,
    teamPassing: 3,
    teamCreation: 2,
    teamOffRebounding: 9.5,
    //
    teamInteriorDef: 10,
    teamPerimeterDef: 3,
    teamSwitchability: 2,
    teamDefIntangibles: 9,
    teamDefPlaymaking: 9,
    teamDefRebounding: 10,
    //
    teamOffChemRating: -1,
    teamDefChemRating: 1.95,
    teamTotalChemRating: 0.95,
    teamOffImpact: 1.63,
    teamDefImpact: 3,
    teamTotalImpact: 4.6,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mournal01.jpg",
    plyrCardPictureSrc:
      "https://i.pinimg.com/564x/97/7b/0c/977b0cd0cb6843762c9cc2067fdc3730.jpg",
    teamLogoSrc: hornetsCurrentLogo,
    teamLogoStyling: hornetsCurrentLogoStyling,
  },
  {
    name: "Clyde Drexler",
    position: "SG",
    year: "1991-92",
    team: "POR",
    fullTeamName: "Portland Trailblazers",
    teamColor: trailblazersPrimary,
    teamColor2: trailblazersSecondary,
    teamColor3: trailblazersThird,
    cardColor: "ruby",
    pts75: 25.1,
    ts: +2.9,
    reb75: 14,
    ast75: 5,
    stk75: 4.5,
    tov75: 4.3,
    bpm: 13.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <GiHandcuffs />,
        color: "gold",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
      },
      {
        icon: <GiBrain />,
        color: "gold",
        explanation: "High IQ Defender",
      },
    ],
    teamScoring: 8.75,
    teamEfficiency: 5.5,
    teamSpacing: 7.5,
    teamFinishing: 9.75,
    teamPassing: 7.5,
    teamCreation: 7,
    teamOffRebounding: 5,
    //
    teamInteriorDef: 3,
    teamPerimeterDef: 8.5,
    teamSwitchability: 4.5,
    teamDefIntangibles: 7,
    teamDefPlaymaking: 7.75,
    teamDefRebounding: 7,
    //
    teamOffChemRating: 0,
    teamDefChemRating: 0.65,
    teamTotalChemRating: 0.65,
    teamOffImpact: 3.37,
    teamDefImpact: 0.5,
    teamTotalImpact: 3.9,
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/drexlcl01.jpg",
    plyrCardPictureSrc:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/clyde-drexler-dale-tait.jpg",
    teamLogoSrc: trailblazersCurrentLogo,
    teamLogoStyling: trailblazersCurrentLogoStyling,
  },
];

// *****************************************************************
// *****************************************************************
// *****************************************************************

//   {
//     icon: <ImTarget />,
//     color: "hof",
//     explanation: "Deadeye Shooter",
//   },
//   {
//     icon: <MdOutlineSportsKabaddi />,
//     color: "hof",
//     explanation: "Tough Shot Maker",
//   },
//   {
//     icon: <MdSportsHandball />,
//     color: "hof",
//     explanation: "Lob/Putback/Dunk Master",
//   },
//  `{
//     icon: <FaWifi />,
//     color: "hof",
//     explanation: "Limitless Range",
//   },
//   {
//     icon: <FaHatWizard />,
//     color: "hof",
//     explanation: "Middy Magician",
//   },
//   {
//     icon: <GiWhistle />,
//     color: "hof",
//     explanation: "Foul Drawer",
//   },
//   {
//     icon: <GiBodyBalance />,
//     color: "bronze",
//     explanation: "Acrobatic Finisher",
//   },
//   {
//     icon: <GiWreckingBall />,
//     color: "gold",
//     explanation: "Contact Finisher",
//   },
//   {
//     icon: <FaTools />,
//     color: "gold",
//     explanation: "Post Move Technician",
//   },

// *****************************************************************

//   {
//     icon: <TbEngine />,
//     color: "gold",
//     explanation: "Offensive Engine",
//   },
//   {
//     icon: <RiHandCoinLine />,
//     color: "gold",
//     explanation: "Dime Dropper",
//   },
//   {
//     icon: <ImEarth />,
//     color: "gold",
//     explanation: "Offensive Gravity",
//   },
//   {
//     icon: <ImDribbble />,
//     color: "gold",
//     explanation: "Houdini Handles",
//   },

// *****************************************************************

//   {
//     icon: <FaLock />,
//     color: "gold",
//     explanation: "Lockdown Post Defender",
//   },
//   {
//     icon: <GiHandcuffs />,
//     color: "gold",
//     explanation: "Perimeter Handcuffs",
//   },
//   {
//     icon: <ImBug />,
//     color: "gold",
//     explanation: "Defensive Pest",
//   },
//   {
//     icon: <SiAdblock />,
//     color: "gold",
//     explanation: "Shot Block Artist",
//   },
//   {
//     icon: <RiTeamFill />,
//     color: "gold",
//     explanation: "Switchable Specialsit",
//   },
//   {
//     icon: <FaAnchor />,
//     color: "gold",
//     explanation: "Defensive Anchor",
//   },
//   {
//     icon: <GiMonsterGrasp />,
//     color: "gold",
//     explanation: "Pick Pocket/Interceptor",
//   },
//   {
//     icon: <GiBrain />,
//     color: "gold",
//     explanation: "High IQ Defender",
//   },
//   {
//     icon: <GiEmbrassedEnergy />,
//     color: "gold",
//     explanation: "High Energy Defender",
//   },

// *****************************************************************

//   {
//     icon: <ImMagnet />,
//     color: "gold",
//     explanation: "Rebound Magnet",
//   },
