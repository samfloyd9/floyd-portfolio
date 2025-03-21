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

// Other Badges
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

// Card Border Colors
const RED = "ruby";
const GREEN = "emerald";
const BLUE = "sapphire";
const WHITE = "diamond";
const PURPLE = "amethyst";
const YELLOW = "canary";
const ORANGE = "citrine";

// ------------------------------------------- //
const lakersPrimary = "bg-purple-700";
const lakersSecondary = "text-yellow-400";
const lakersThird = "white";
const lakersCurrentLogo =
  "https://cdn.iconscout.com/icon/free/png-256/free-los-angeles-lakers-logo-icon-download-in-svg-png-gif-file-formats--nba-basketball-pack-logos-icons-1593200.png?f=webp&w=256";
const lakersCurrentLogoStyling = "h-14 -top-1 left-0";
const losAngelesLakers = "Los Angeles Lakers";
// ------------------------------------------- //
const sunsPrimary = "bg-orange-600";
const sunsSecondary = "text-purple-900";
const sunsThird = "white";
const sunsCurrentLogo =
  "https://logodownload.org/wp-content/uploads/2021/07/phoenix-suns-logo-1.png";
const sunsCurrentLogoStyling = "h-12 top-0.5 -left-1";
const phoenixSuns = "Phoenix Suns";
// ------------------------------------------- //
const warriorsPrimary = "bg-blue-600";
const warriorsSecondary = "text-yellow-300";
const warriorsThird = "white";
const warriorsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612744/2022/06/gsw-logo-1920.svg";
const warriorsCurrentLogoStyling = "h-16 -top-1.5 -left-2";
const goldenStateWarriors = "Golden State Warriors";
// ------------------------------------------- //
const spursPrimary = "bg-black";
const spursSecondary = "text-gray-300";
const spursThird = "white";
const spursCurrentLogo =
  "https://seekvectors.com/files/download/San%20Antonio%20Spurs%20Logo-01.png";
const spursCurrentLogoStyling = "h-16 -top-2 -left-1.5";
const sanAntonioSpurs = "San Antonio Spurs";
// ------------------------------------------- //
const timberwolvesPrimary = "bg-black";
const timberwolvesSecondary = "text-green-300";
const timberwolvesThird = "blue-500";
const timberwolvesCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/05/Minnesota-Timberwolves-Logo-2017-Present.png";
const timberwolvesCurrentLogoStyling = "h-12 top-0 -left-5";
const minnesotaTimberwolves = "Minnesota Timberwolves";
// ------------------------------------------- //
const jazzPrimary = "bg-purple-700";
const jazzSecondary = "text-cyan-300";
const jazzThird = "green-700";
const jazzCurrentLogo =
  "https://content.sportslogos.net/logos/6/234/full/utah_jazz_logo_primary_19973688.png";
const jazzCurrentLogoStyling = "h-10 top-0.5 -left-0.5";
const utahJazz = "Utah Jazz";
// ------------------------------------------- //
const trailblazersPrimary = "bg-red-600";
const trailblazersSecondary = "text-black";
const trailblazersThird = "white-400";
const trailblazersCurrentLogo =
  "https://i.pinimg.com/originals/7d/07/ea/7d07eaa72e74a2def63540ac7d55ba0f.png";
const trailblazersCurrentLogoStyling = "h-11 top-1 left-1";
const portlandTrailblazers = "Portland Trailblazers";
// ------------------------------------------- //
const grizzliesPrimary = "bg-blue-800";
const grizzliesSecondary = "text-blue-300";
const grizzliesThird = "yellow-500";
const grizzliesCurrentLogo =
  "https://cdn.iconscout.com/icon/free/png-256/free-memphis-grizzlies-logo-icon-download-in-svg-png-gif-file-formats--nba-basketball-game-sport-ball-pack-logos-icons-1593220.png?f=webp&w=256";
const grizzliesCurrentLogoStyling = "h-14 top-0.5 -left-1.5";
const memphisGrizzlies = "Memphis Grizzlies";
// ------------------------------------------- //
const thunderPrimary = "bg-blue-600";
const thunderSecondary = "text-white";
const thunderThird = "orange-400";
const thunderCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/05/Oklahoma-City-Thunder-logo.png";
const thunderCurrentLogoStyling = "h-12 -top-0.5 -left-4";
const oklahomaCityThunder = "Oklahoma City Thunder";

const supersonicsPrimary = "bg-green-700";
const supersonicsSecondary = "text-yellow-500";
const supersonicsThird = "white";
const supersonicsLogo =
  "https://logos-world.net/wp-content/uploads/2024/12/Seattle-SuperSonics-Logo.png";
const supersonicsLogoStyling = "h-12 -top-0.5 -left-4";
const seattleSupersonics = "Seattle Supersonics";

// ------------------------------------------- //
const mavericksPrimary = "bg-blue-600";
const mavericksSecondary = "text-gray-300";
const mavericksThird = "blue-800";
const mavericksCurrentLogo =
  "https://www.mavs.com/wp-content/themes/mavs/images/logo.svg";
const mavericksCurrentLogoStyling = "h-11 top-1 left-1";
const dallasMavericks = "Dallas Mavericks";
// ------------------------------------------- //
const rocketsPrimary = "bg-red-600";
const rocketsSecondary = "text-yellow-300";
const rocketsThird = "white";
const rocketsCurrentLogo =
  "https://seeklogo.com/images/H/houston-rockets-logo-1AD80DE2AF-seeklogo.com.png";
const rocketsCurrentLogoStyling = "h-14 top-0 left-1";
const houstonRockets = "Houston Rockets";
// ------------------------------------------- //
const clippersPrimary = "bg-blue-600";
const clippersSecondary = "text-white";
const clippersThird = "red-500";
const clippersCurrentLogo =
  "https://i.pinimg.com/originals/31/2c/6d/312c6d65630d08a85549bd5dee6dd7c6.png";
const clippersCurrentLogoStyling = "h-11 top-1 left-1";
const losAngelesClippers = "Los Angeles Clippers";

const bravesPrimary = "bg-orange-400";
const bravesSecondary = "text-black";
const bravesThird = "white";
const bravesLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Buffalo_Braves_%28black_and_orange_varient%29_logo.svg/1200px-Buffalo_Braves_%28black_and_orange_varient%29_logo.svg.png";
const bravesLogoStyling = "h-14 top-1 left-1";
const buffaloBraves = "Buffalo Braves";

const bravesAltPrimary = "bg-blue-400";
const bravesAltSecondary = "text-white";
const bravesAltThird = "black";
const bravesAltLogo = "https://1000logos.net/wp-content/uploads/2018/06/Buffalo-Braves-Logo-500x313.png";
const bravesAltLogoStyling = "h-11 top-1 -left-5";
// ------------------------------------------- //
const nuggetsPrimary = "bg-blue-600";
const nuggetsSecondary = "text-yellow-300";
const nuggetsThird = "red-600";
const nuggetsCurrentLogo =
  "https://logodownload.org/wp-content/uploads/2021/07/denver-nuggets-logo.png";
const nuggetsCurrentLogoStyling = "h-10 top-1 left-1";
const denverNuggets = "Denver Nuggets";
// ------------------------------------------- //
const pelicansPrimary = "bg-blue-900";
const pelicansSecondary = "text-yellow-500";
const pelicansThird = "red-600";
const pelicansCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-new-orleans-pelicans-logo.png";
const pelicansCurrentLogoStyling = "h-14 -top-0.5 -left-1";
const newOrleansPelicans = "New Orleans Pelicans";
// ------------------------------------------- //
const kingsPrimary = "bg-purple-700";
const kingsSecondary = "text-white";
const kingsThird = "white";
const kingsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612758/2022/04/Kings-Primary.svg";
const kingsCurrentLogoStyling = "h-11 top-0 left-1";
const sacramentoKings = "Sacramento Kings";

// ------------------------------------------- //

const celticsPrimary = "bg-green-700";
const celticsSecondary = "text-white";
const celticsThird = "black";
const celticsCurrentLogo =
  "https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19759952.png";
const celticsCurrentLogoStyling = "h-11 top-1.5 left-1.5";
const bostonCeltics = "Boston Celtics";
// ------------------------------------------- //
const pistonsPrimary = "bg-blue-600";
const pistonsSecondary = "text-red-500";
const pistonsThird = "white";
const pistonsCurrentLogo =
  "https://1000logos.net/wp-content/uploads/2017/08/Detroit-Pistons-logo.png";
const pistonsCurrentLogoStyling = "h-11 top-1.5 -left-3";
const detroitPistons = "Detroit Pistons";
// ------------------------------------------- //
const sixersPrimary = "bg-blue-600";
const sixersSecondary = "text-white";
const sixersThird = "red-500";
const sixersCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/05/Philadelphia-76ers-logo.png";
const sixersCurrentLogoStyling = "h-11 top-1 -left-3.5";
// const sixersCurrentLogoSize = "";
const philadelphiaSeventySixers = "Philadelphia 76ers";
// ------------------------------------------- //
const cavaliersPrimary = "bg-red-900";
const cavaliersSecondary = "text-white";
const cavaliersThird = "yellow-400";
// const cavaliersCurrentLogo = "";
// const cavaliersCurrentLogoStyling = "h-12 top-0 left-0";
const cavaliersThrowbackLogo =
  "https://content.sportslogos.net/logos/6/222/full/cleveland_cavaliers_logo_primary_20046125.png";
const cavaliersThrowbackLogoStyling = "h-8 top-1 -left-2";
const clevelandCavaliers = "Cleveland Cavaliers";
// ------------------------------------------- //
const hornetsPrimary = "bg-cyan-400";
const hornetsSecondary = "text-blue-700";
const hornetsThird = "purple-700";
const hornetsCurrentLogo =
  "https://content.sportslogos.net/logos/6/256/full/charlotte_hornets_logo_primary_19896932.png";
const hornetsCurrentLogoStyling = "h-12 top-1 left-1";
const charlotteHornets = "Charlotte Hornets";
// ------------------------------------------- //
const magicPrimary = "bg-blue-600";
const magicSecondary = "text-white";
const magicThird = "black";
const magicCurrentLogo =
  "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20017625.png";
const magicCurrentLogoStyling = "h-11 top-1 left-1";
const orlandoMagic = "Orlando Magic";
// ------------------------------------------- //
const hawksPrimary = "bg-red-600";
const hawksSecondary = "text-yellow-300";
const hawksThird = "white";
const hawksCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/07/Atlanta-Hawks-Logo.png";
const hawksCurrentLogoStyling = "h-11 top-1 -left-3";
const atlantaHawks = "Atlanta Hawks";
// ------------------------------------------- //
const heatPrimary = "bg-black";
const heatSecondary = "text-red-500";
const heatThird = "white";
const heatCurrentLogo =
  "https://logodownload.org/wp-content/uploads/2019/06/miami-heat-logo-3.png";
const heatCurrentLogoStyling = "h-12 top-1 left-2";
const miamiHeat = "Miami Heat";
// ------------------------------------------- //
const raptorsPrimary = "bg-red-600";
const raptorsSecondary = "text-white";
const raptorsThird = "black";
const raptorsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612761/2021/09/Toronto-Raptors.svg";
const raptorsCurrentLogoStyling = "h-12 top-0 left-0";
const torontoRaptors = "Toronto Raptors";
// ------------------------------------------- //
const pacersPrimary = "bg-blue-700";
const pacersSecondary = "text-yellow-400";
const pacersThird = "white";
const pacersCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-indiana-pacers-logo.png";
const pacersCurrentLogoStyling = "h-12 top-0 left-0";
const indianaPacers = "Indiana Pacers";
// ------------------------------------------- //
const bucksPrimary = "bg-green-800";
const bucksSecondary = "text-yellow-500";
const bucksThird = "black";
const bucksCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo.png";
const bucksCurrentLogoStyling = "h-14 top-0 left-0";
const milwaukeeBucks = "Milwuakee Bucks";
// ------------------------------------------- //
const knicksPrimary = "bg-blue-600";
const knicksSecondary = "text-orange-600";
const knicksThird = "white";
const knicksCurrentLogo =
  "https://content.sportslogos.net/logos/6/216/full/new_york_knicks_logo_primary_19938358.png";
const knicksCurrentLogoStyling = "h-11 top-1 left-0";
const newYorkKnicks = "New York Knicks";
// ------------------------------------------- //
const netsPrimary = "bg-black";
const netsSecondary = "text-gray-200";
const netsThird = "white";
const netsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612751/2024/07/BKN_Primary.svg";
const netsCurrentLogoStyling = "h-11 top-0.5 left-0.5";
const brooklynNets = "Brooklyn Nets";
// ------------------------------------------- //
const wizardsPrimary = "bg-blue-700";
const wizardsSecondary = "text-red-500";
const wizardsThird = "white";
const wizardsCurrentLogo =
  "https://seeklogo.com/images/W/washington-wizards-logo-24AD777BE1-seeklogo.com.png";
const wizardsCurrentLogoStyling = "h-10 top-1 left-1";
const washingtonWizards = "Washington Wizards";
// ------------------------------------------- //
const bullsPrimary = "bg-red-600";
const bullsSecondary = "text-black-300";
const bullsThird = "white";
const bullsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612741/2021/10/bulls-svg.svg";
const bullsCurrentLogoStyling = "h-11 top-0 left-1";
const chicagoBulls = "Chicago Bulls";
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
    pts75: 40.8,
    ts: +5.1,
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
    pts75: 43.6,
    ts: +6.5,
    reb75: 6.8, 
    ast75: 7.4,
    stk75: 5.9, 
    tov75: 3.8, 
    bpm: 13.0,
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
      "https://i.pinimg.com/736x/e6/83/39/e68339332b644fed9091cc813e346b65.jpg",
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
    pts75: 30.3,
    ts: +14.0,
    reb75: 30.4,
    ast75: 9.8,
    stk75: 'NaN',
    tov75: 'NaN',
    bpm: 'NaN',
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
    name: "Stephen Curry",
    nickname: "Chef Curry",
    position: "PG",
    year: "2015-16",
    team: "GSW",
    fullTeamName: "Golden State Warriors",
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: "sapphire",
    pts75: 42.5,
    ts: +13.1,
    reb75: 7.7,
    ast75: 9.4,
    stk75: 3.3,
    tov75: 4.7,
    bpm: 11.9,
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
        color: "hof",
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
        color: "gold",
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
        explanation: "Switchable Specialist",
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
    pts75: 41.8,
    ts: +8.2,
    reb75: 9.6,
    ast75: 7.2,
    stk75: 2.7,
    tov75: 4.6,
    bpm: 10.2,
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
        explanation: "Switchable Specialist",
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
        explanation: "Switchable Specialist",
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
        explanation: "Switchable Specialist",
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
        explanation: "Switchable Specialist",
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
  {
    name: "George Gervin",
    position: "SG",
    year: "1977-78",
    team: "SAS",
    fullTeamName: "San Antonio Spurs",
    teamColor: spursPrimary,
    teamColor2: spursSecondary,
    teamColor3: spursThird,
    cardColor: "diamond",
    pts75: 34.4,
    ts: +5.9,
    reb75: 6.5,
    ast75: 4.7,
    stk75: 3.8,
    tov75: 4.7,
    bpm: 4.8,
    badges: [
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
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
        icon: <TbEngine />,
        color: "silver",
        explanation: "Offensive Engine",
      },
      {
        icon: <FaTools />,
        color: "silver",
        explanation: "Post Move Technician",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "silver",
        explanation: "Pick Pocket/Interceptor",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/gervige01.jpg",
    plyrCardPictureSrc:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/san-antonio-spurs-george-gervin-andy-hayt.jpg",
    teamLogoSrc: spursCurrentLogo,
    teamLogoStyling: spursCurrentLogoStyling,
  },
  {
    name: "George Mikan",
    position: "C",
    year: "1950-51",
    team: "LAL",
    fullTeamName: "Los Angeles Lakers",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: "amethyst",
    pts75: 31.8,
    ts: +4.2,
    reb75: 15.8,
    ast75: 3.5,
    stk75: "NA",
    tov75: "NA",
    bpm: "NaN", // estimated 9.0
    badges: [
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <GiWhistle />,
        color: "hof",
        explanation: "Foul Drawer",
      },
      {
        icon: <GiWreckingBall />,
        color: "hof",
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
        color: "hof",
        explanation: "Defensive Anchor",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/mikange01.jpg",
    plyrCardPictureSrc:
      "https://cdn.britannica.com/25/61925-004-8BFA94EF/George-Mikan.jpg",
    teamLogoSrc: lakersCurrentLogo,
    teamLogoStyling: lakersCurrentLogoStyling,
  },
  {
    name: "Anthony Davis",
    position: "PF",
    year: "2017-18",
    team: "NOP",
    fullTeamName: "New Orleans Pelicans",
    teamColor: pelicansPrimary,
    teamColor2: pelicansSecondary,
    teamColor3: pelicansThird,
    cardColor: "sapphire",
    pts75: 36.9,
    ts: +9.9,
    reb75: 14.6,
    ast75: 3.0,
    stk75: 5.4,
    tov75: 2.8,
    bpm: 6.7,
    badges: [
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
        icon: <RiTeamFill />,
        color: "gold",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "gold",
        explanation: "Lockdown Post Defender",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/davisan02.jpg",
    plyrCardPictureSrc:
      "https://cdn.nba.com/manage/2020/10/anthony-davis-iso-392x588.jpg",
    teamLogoSrc: pelicansCurrentLogo,
    teamLogoStyling: pelicansCurrentLogoStyling,
  },
  {
    name: "Russell Westbrook",
    position: "PG",
    year: "2016-17",
    team: "OKC",
    fullTeamName: oklahomaCityThunder,
    teamColor: thunderPrimary,
    teamColor2: thunderSecondary,
    teamColor3: thunderThird,
    cardColor: BLUE,
    pts75: 44.8,
    ts: +0.3,
    reb75: 15.1,
    ast75: 14.7,
    stk75: 2.8,
    tov75: 7.7,
    bpm: 0.0,
    badges: [
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
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
      },
      {
        icon: <ImMagnet />,
        color: "gold",
        explanation: "Rebound Magnet",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/westbru01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.hoopsrumors.com/files/2016/08/USATSI_9314153.jpg",
    teamLogoSrc: thunderCurrentLogo,
    teamLogoStyling: thunderCurrentLogoStyling,
  },
  {
    name: "Tracy McGrady",
    position: "SG",
    year: "2002-03",
    team: "ORL",
    fullTeamName: orlandoMagic,
    teamColor: magicPrimary,
    teamColor2: magicSecondary,
    teamColor3: magicThird,
    cardColor: BLUE,
    pts75: 42.0,
    ts: +4.4,
    reb75: 8.5,
    ast75: 7.2,
    stk75: 3.2,
    tov75: 3.4,
    bpm: 0.0,
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
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <FaTools />,
        color: "gold",
        explanation: "Post Move Technician",
      },
      {
        icon: <TbEngine />,
        color: "gold",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <RiTeamFill />,
        color: "gold",
        explanation: "Switchable Specialist",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mcgratr01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://p3-pc-sign.douyinpic.com/tos-cn-i-0813/oAAAJQveOBAXeeLCAMErDFW7WAAIaQ87ABY8ug~tplv-dy-aweme-images:q75.webp?biz_tag=aweme_images&from=327834062&lk3s=138a59ce&s=PackSourceEnum_SEARCH&sc=image&se=false&x-expires=1744142400&x-signature=nRQa8ReP9uFos%2FuYt1Q46rIfCjk%3D",
    teamLogoSrc: magicCurrentLogo,
    teamLogoStyling: magicCurrentLogoStyling,
  },
  {
    name: "Elgin Baylor",
    position: "SF",
    year: "1961-62",
    team: "LAL",
    fullTeamName: losAngelesLakers,
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: PURPLE,
    pts75: 30.6,
    ts: +1.3,
    reb75: 14.9,
    ast75: 3.7,
    stk75: "NaN",
    tov75: "NaN",
    bpm: "NaN",
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <FaTools />,
        color: "gold",
        explanation: "Post Move Technician",
      },
      {
        icon: <GiWhistle />,
        color: "gold",
        explanation: "Foul Drawer",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/bayloel01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/474x/55/d6/1b/55d61b20c0d79b04f4a1f05eac2799ef.jpg",
    teamLogoSrc: lakersCurrentLogo,
    teamLogoStyling: lakersCurrentLogoStyling,
  },
  {
    name: "John Havlicek",
    position: "SF",
    year: "1970-71",
    team: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 25.8,
    ts: +0.2,
    reb75: 8.0,
    ast75: 6.7,
    stk75: "NaN",
    tov75: "NaN",
    bpm: "NaN",
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
        color: "gold",
        explanation: "Acrobatic Finisher",
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
      {
        icon: <GiBrain />,
        color: "gold",
        explanation: "High IQ Defender",
      },
      {
        icon: <GiEmbrassedEnergy />,
        color: "gold",
        explanation: "High Energy Defender",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/havlijo01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/ce/ab/32/ceab3243d3ea8dba700bc075d6989fbd.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Moses Malone",
    position: "C",
    year: "1981-82",
    team: "HOU",
    fullTeamName: houstonRockets,
    teamColor: rocketsPrimary,
    teamColor2: rocketsSecondary,
    teamColor3: rocketsThird,
    cardColor: RED,
    pts75: 36.6,
    ts: +7.8,
    reb75: 17.3,
    ast75: 2.1,
    stk75: 2.9,
    tov75: 4.3,
    bpm: 0.0,
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
        icon: <GiWhistle />,
        color: "hof",
        explanation: "Foul Drawer",
      },
      {
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
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
        color: "silver",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/malonmo01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://pbs.twimg.com/media/DXOTyuOWkAIgICu?format=jpg&name=4096x4096",
    teamLogoSrc: rocketsCurrentLogo,
    teamLogoStyling: rocketsCurrentLogoStyling,
  },
  {
    name: "Artis Gilmore",
    position: "C",
    year: "1977-78",
    team: "CHI",
    fullTeamName: chicagoBulls,
    teamColor: bullsPrimary,
    teamColor2: bullsSecondary,
    teamColor3: bullsThird,
    cardColor: RED,
    pts75: 29.0,
    ts: +2.6,
    reb75: 16.5,
    ast75: 4.1,
    stk75: 3.4,
    tov75: 5.6,
    bpm: 0.0,
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/gilmoar01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://jeffpearlman.com/wp-content/uploads/2020/07/c8477-gettyimages-52286401.jpg",
    teamLogoSrc: bullsCurrentLogo,
    teamLogoStyling: bullsCurrentLogoStyling,
  },
  {
    name: "Jason Kidd",
    position: "PG",
    year: "2001-02",
    team: "BRK",
    fullTeamName: brooklynNets,
    teamColor: netsPrimary,
    teamColor2: netsSecondary,
    teamColor3: netsThird,
    cardColor: WHITE,
    pts75: 20.7,
    ts: +1.2,
    reb75: 10.2,
    ast75: 13.8,
    stk75: 3.3,
    tov75: 4.9,
    bpm: 0.0,
    badges: [
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
        color: "gold",
        explanation: "Houdini Handles",
      },
      {
        icon: <ImMagnet />,
        color: "gold",
        explanation: "Rebound Magnet",
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
        icon: <ImBug />,
        color: "gold",
        explanation: "Defensive Pest",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/kiddja01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/236x/77/17/9e/77179e36b6a1623ca51ec17d129956c8.jpg",
    teamLogoSrc: netsCurrentLogo,
    teamLogoStyling: netsCurrentLogoStyling,
  },
  {
    name: "Kevin McHale",
    position: "PF",
    year: "1986-87",
    team: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 31.9,
    ts: +8.1,
    reb75: 12.1,
    ast75: 3.1,
    stk75: 3.3,
    tov75: 3.1,
    bpm: 0.0,
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mchalke01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://celticswire.usatoday.com/wp-content/uploads/sites/39/2021/05/USATSI_2122402-1.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Ray Allen",
    position: "SG",
    year: "2005-06",
    team: "OKC",
    fullTeamName: seattleSupersonics,
    teamColor: supersonicsPrimary,
    teamColor2: supersonicsSecondary,
    teamColor3: supersonicsThird,
    cardColor: GREEN,
    pts75: 33.9,
    ts: +2.9,
    reb75: 5.8,
    ast75: 5.0,
    stk75: 2.1,
    tov75: 3.3,
    bpm: 4.4,
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
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <ImEarth />,
        color: "gold",
        explanation: "Offensive Gravity",
      },
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <GiBrain />,
        color: "gold",
        explanation: "High IQ Defender",
      },
      {
        icon: <GiHandcuffs />,
        color: "silver",
        explanation: "Perimeter Handcuffs",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/allenra02.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://archive-images.seattletimes.com/ABPub/2005/07/05/2002357800.jpg",
    teamLogoSrc: supersonicsLogo,
    teamLogoStyling: supersonicsLogoStyling,
  },
  {
    name: "Rick Barry",
    position: "SF",
    year: "1974-75",
    team: "GSW",
    fullTeamName: goldenStateWarriors,
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: BLUE,
    pts75: 33.8,
    ts: +6.3,
    reb75: 6.3,
    ast75: 6.8,
    stk75: 3.6,
    tov75: 3.1,
    bpm: 4.9,
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
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/barryri01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://sportscollectorsdigest.com/.image/t_share/MjA0MzY2ODE4MTU0OTE0ODkz/barry-free-throws-getty.jpg",
    teamLogoSrc: warriorsCurrentLogo,
    teamLogoStyling: warriorsCurrentLogoStyling,
  },
  {
    name: "Bob Cousy",
    position: "PG",
    year: "1956-57",
    team: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 19.1,
    ts: +3.7,
    reb75: 4.5,
    ast75: 7.1,
    stk75: "NaN",
    tov75: "NaN",
    bpm: "NaN",
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <FaWifi />,
        color: "gold",
        explanation: "Limitless Range",
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
    // Headshot
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/cousybo01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i1.wp.com/www.retroseasons.com/retroimages/0-season-KBOSC-1956.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Manu Ginóbili",
    position: "SG",
    year: "2007-08",
    team: "SAS",
    fullTeamName: sanAntonioSpurs,
    teamColor: spursPrimary,
    teamColor2: spursSecondary,
    teamColor3: spursThird,
    cardColor: WHITE,
    pts75: 33.9,
    ts: +7.2,
    reb75: 8.3,
    ast75: 7.8,
    stk75: 3.4,
    tov75: 4.7,
    bpm: 8.3,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <ImTarget />,
        color: "gold",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <GiWhistle />,
        color: "silver",
        explanation: "Foul Drawer",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <TbEngine />,
        color: "silver",
        explanation: "Offensive Engine",
      },
      {
        icon: <ImDribbble />,
        color: "gold",
        explanation: "Houdini Handles",
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
    // Headshot
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/ginobma01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i.pinimg.com/236x/cf/81/dc/cf81dc4cda429b92b820d1e8e6f0f962.jpg",
    teamLogoSrc: spursCurrentLogo,
    teamLogoStyling: spursCurrentLogoStyling,
  },
  {
    name: "Joel Embiid",
    position: "C",
    year: "2022-23",
    team: "PHI",
    fullTeamName: philadelphiaSeventySixers,
    teamColor: sixersPrimary,
    teamColor2: sixersSecondary,
    teamColor3: sixersThird,
    cardColor: BLUE,
    pts75: 47.4,
    ts: +8.2,
    reb75: 14.5,
    ast75: 5.9,
    stk75: 3.8,
    tov75: 4.9,
    bpm: 9.2,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
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
        icon: <GiWreckingBall />,
        color: "hof",
        explanation: "Contact Finisher",
      },
      {
        icon: <ImEarth />,
        color: "hof",
        explanation: "Offensive Gravity",
      },
      {
        icon: <ImMagnet />,
        color: "gold",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaAnchor />,
        color: "gold",
        explanation: "Defensive Anchor",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
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
    // Headshot
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/embiijo01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://external-preview.redd.it/haynes-sixers-star-joel-embiid-is-in-new-york-for-united-v0-tolp6ol-8191QK5xE0FOqocPu0BUcAOesukZ-EpC0W8.jpg?auto=webp&s=4540b4d439b92053ffdc58628336964bc5d0fa31",
    teamLogoSrc: sixersCurrentLogo,
    teamLogoStyling: sixersCurrentLogoStyling,
  },
  {
    name: "Jayson Tatum",
    position: "SF",
    year: "2022-23",
    team: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: "emerald",
    pts75: 39.7,
    ts: +1.2,
    reb75: 11.6,
    ast75: 6.1,
    stk75: 2.3,
    tov75: 3.8,
    bpm: 5.5,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <FaWifi />,
        color: "gold",
        explanation: "Limitless Range",
      },
      {
        icon: <ImDribbble />,
        color: "gold",
        explanation: "Houdini Handles",
      },
      {
        icon: <RiHandCoinLine />,
        color: "silver",
        explanation: "Dime Dropper",
      },
      {
        icon: <RiTeamFill />,
        color: "gold",
        explanation: "Switchable Specialist",
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
    // Headshot
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/tatumja01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://pbs.twimg.com/media/FRndGZFX0AENjtL.jpg:large",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "John Stockton",
    position: "PG",
    year: "1989-90",
    team: "UTA",
    fullTeamName: utahJazz,
    teamColor: jazzPrimary,
    teamColor2: jazzSecondary,
    teamColor3: jazzThird,
    cardColor: PURPLE,
    pts75: 23.0,
    ts: +9.2,
    reb75: 3.5,
    ast75: 19.4,
    stk75: 3.8,
    tov75: 4.7,
    bpm: 8.9,
    badges: [
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
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
        color: "gold",
        explanation: "Houdini Handles",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "hof",
        explanation: "Pick Pocket/Interceptor",
      },
      {
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <ImBug />,
        color: "gold",
        explanation: "Defensive Pest",
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
    // Headshot
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/stockjo01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i.pinimg.com/736x/9b/55/b2/9b55b204284da3a859dc9b3df24c193f.jpg",
    teamLogoSrc: jazzCurrentLogo,
    teamLogoStyling: jazzCurrentLogoStyling,
  },
  {
    name: "Bill Walton",
    position: "C",
    year: "1977-78",
    team: "POR",
    fullTeamName: portlandTrailblazers,
    teamColor: trailblazersPrimary,
    teamColor2: trailblazersSecondary,
    teamColor3: trailblazersThird,
    cardColor: RED,
    pts75: 26.2,
    ts: +3.9,
    reb75: 18.3,
    ast75: 7.0,
    stk75: 4.9,
    tov75: 4.9,
    bpm: 8.1,
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
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
            {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
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
    // Headshot
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/waltobi01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://media.gq.com/photos/5f6a1464568fd2aedb01831c/master/pass/GettyImages-450442872.jpg",
    teamLogoSrc: trailblazersCurrentLogo,
    teamLogoStyling: trailblazersCurrentLogoStyling,
  },
  {
    name: "Dolph Schayes",
    position: "PF",
    year: "1957-58",
    team: "PHI",
    fullTeamName: philadelphiaSeventySixers,
    teamColor: sixersPrimary,
    teamColor2: sixersSecondary,
    teamColor3: sixersThird,
    cardColor: BLUE,
    pts75: 23.1,
    ts: +3.0,
    reb75: 13.1,
    ast75: 2.9,
    stk75: "NaN",
    tov75: "NaN",
    bpm: "NaN",
    badges: [
      {
        icon: <ImTarget />,
        color: "hof",
        explanation: "Deadeye Shooter",
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
        icon: <FaTools />,
        color: "gold",
        explanation: "Post Move Technician",
      },
      {
        icon: <FaWifi />,
        color: "gold",
        explanation: "Limitless Range",
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
      {
        icon: <FaLock />,
        color: "gold",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/schaydo01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://m.media-amazon.com/images/I/61kzvTJuvTL._AC_UF894,1000_QL80_.jpg",
    teamLogoSrc: sixersCurrentLogo,
    teamLogoStyling: sixersCurrentLogoStyling,
  },
  {
    name: "Jimmy Butler",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Paul Arizin",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Dennis Rodman",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Dave Cowens",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Kyrie Irving",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Blake Griffin",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Yao Ming",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Walt Frazier",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Dominique Wilkins",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Luka Dončić",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Sidney Moncrief",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Paul Pierce",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Ben Wallace",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Dikembe Mutombo",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Kevin Love",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Damian Lillard",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Donovan Mitchell",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Andrei Kirilenko",
    position: "SF",
    year: "2003-04",
    team: "UTA",
    fullTeamName: utahJazz,
    teamColor: jazzPrimary,
    teamColor2: jazzSecondary,
    teamColor3: jazzThird,
    cardColor: PURPLE,
    pts75: 0.0,
    ts: +2.6,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: jazzCurrentLogo,
    teamLogoStyling: jazzCurrentLogoStyling,
  },
  {
    name: "Chris Webber",
    position: "PF",
    year: "2000-01",
    team: "SAC",
    fullTeamName: sacramentoKings,
    teamColor: kingsPrimary,
    teamColor2: kingsSecondary,
    teamColor3: kingsThird,
    cardColor: PURPLE,
    pts75: 0.0,
    ts: +1.1,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Tony Parker",
    position: "PG",
    year: "2012-13",
    team: "SAS",
    fullTeamName: sanAntonioSpurs,
    teamColor: spursPrimary,
    teamColor2: spursSecondary,
    teamColor3: spursThird,
    cardColor: WHITE,
    pts75: 0.0,
    ts: +4.9,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: spursCurrentLogo,
    teamLogoStyling: spursCurrentLogoStyling,
  },
  {
    name: "Bill Sharman",
    position: "SG",
    year: "1957-58",
    team: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 20.6,
    ts: +6.0,
    reb75: 3.4,
    ast75: 3.1,
    stk75: "NaN",
    tov75: "NaN",
    bpm: "NaN",
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Amar'e Stoudemire",
    position: "PF",
    year: "2007-08",
    team: "PHX",
    fullTeamName: phoenixSuns,
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: PURPLE,
    pts75: 0.0,
    ts: +11.3,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: sunsCurrentLogo,
    teamLogoStyling: sunsCurrentLogoStyling,
  },
  {
    name: "Bob McAdoo",
    position: "C",
    year: "1974-75",
    team: "BUF",
    fullTeamName: buffaloBraves,
    teamColor: bravesAltPrimary,
    teamColor2: bravesAltSecondary,
    teamColor3: bravesAltThird,
    cardColor: BLUE,
    pts75: 0.0,
    ts: +4.7,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic Finisher",
      },
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <FaTools />,
        color: "gold",
        explanation: "Post Move Technician",
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
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
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
    // Headshot
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/mcadobo01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://e00-xlk-ue-marca.uecdn.es/uploads/2024/07/30/16123400592407.jpeg",
    teamLogoSrc: clippersCurrentLogo,
    teamLogoStyling: clippersCurrentLogoStyling,
  },
  {
    name: "Shawn Marion",
    position: "SF",
    year: "2005-06",
    team: "PHX",
    fullTeamName: phoenixSuns,
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: PURPLE,
    pts75: 0.0,
    ts: +4.5,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: sunsCurrentLogo,
    teamLogoStyling: sunsCurrentLogoStyling,
  },
  {
    name: "David Thompson",
    position: "SG",
    year: "1977-78",
    team: "DEN",
    fullTeamName: denverNuggets,
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    teamColor3: nuggetsThird,
    cardColor: BLUE,
    pts75: 0.0,
    ts: +5.4,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: nuggetsCurrentLogo,
    teamLogoStyling: nuggetsCurrentLogoStyling,
  },
  {
    name: "Gary Payton",
    position: "PG",
    year: "1999-00",
    team: "SEA",
    fullTeamName: seattleSupersonics,
    teamColor: supersonicsPrimary,
    teamColor2: supersonicsSecondary,
    teamColor3: supersonicsThird,
    cardColor: GREEN,
    pts75: 0.0,
    ts: +2.1,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: supersonicsLogo,
    teamLogoStyling: supersonicsLogoStyling,
  },
  {
    name: "Wes Unseld",
    position: "C",
    year: "1968-69",
    team: "WAS",
    fullTeamName: washingtonWizards,
    teamColor: wizardsPrimary,
    teamColor2: wizardsSecondary,
    teamColor3: wizardsThird,
    cardColor: BLUE,
    pts75: 0.0,
    ts: -0.7,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/unselwe01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
  {
    name: "Shawn Kemp",
    position: "PF",
    year: "1995-96",
    team: "SEA",
    fullTeamName: seattleSupersonics,
    teamColor: supersonicsPrimary,
    teamColor2: supersonicsSecondary,
    teamColor3: supersonicsThird,
    cardColor: GREEN,
    pts75: 0.0,
    ts: +8.9,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: supersonicsLogo,
    teamLogoStyling: supersonicsLogoStyling,
  },
  {
    name: "Shai Gilgeous-Alexander",
    position: "PG",
    year: "2024-25",
    team: "OKC",
    fullTeamName: oklahomaCityThunder,
    teamColor: thunderPrimary,
    teamColor2: thunderSecondary,
    teamColor3: thunderThird,
    cardColor: BLUE,
    pts75: 0.0,
    ts: +6.4,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: thunderCurrentLogo,
    teamLogoStyling: thunderCurrentLogoStyling,
  },
  {
    name: "Brandon Roy",
    position: "SG",
    year: "2008-09",
    team: "POR",
    fullTeamName: portlandTrailblazers,
    teamColor: trailblazersPrimary,
    teamColor2: trailblazersSecondary,
    teamColor3: trailblazersThird,
    cardColor: RED,
    pts75: 0.0,
    ts: +3.8,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: trailblazersCurrentLogo,
    teamLogoStyling: trailblazersCurrentLogoStyling,
  },
  {
    name: "Paul George",
    position: "SF",
    year: "2018-19",
    team: "OKC",
    fullTeamName: oklahomaCityThunder,
    teamColor: thunderPrimary,
    teamColor2: thunderSecondary,
    teamColor3: thunderThird,
    cardColor: BLUE,
    pts75: 0.0,
    ts: +2.9,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: thunderCurrentLogo,
    teamLogoStyling: thunderCurrentLogoStyling,
  },
  {
    name: "Penny Hardaway",
    position: "PG",
    year: "1995-96",
    team: "ORL",
    fullTeamName: orlandoMagic,
    teamColor: magicPrimary,
    teamColor2: magicSecondary,
    teamColor3: magicThird,
    cardColor: BLUE,
    pts75: 0.0,
    ts: +7.9,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: magicCurrentLogo,
    teamLogoStyling: magicCurrentLogoStyling,
  },
  {
    name: "NEW PLAYER",
    position: "",
    year: "0000-00",
    team: "ABV",
    fullTeamName: "***",
    teamColor: "***",
    teamColor2: "***",
    teamColor3: "***",
    cardColor: "***",
    pts75: 0.0,
    ts: +0,
    reb75: 0.0,
    ast75: 0.0,
    stk75: 0.0,
    tov75: 0.0,
    bpm: 0.0,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "bronze",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "bronze",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaTools />,
        color: "bronze",
        explanation: "Post Move Technician",
      },
      {
        icon: <ImMagnet />,
        color: "bronze",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "bronze",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "bronze",
        explanation: "Defensive Anchor",
      },
      {
        icon: <RiTeamFill />,
        color: "bronze",
        explanation: "Switchable Specialist",
      },
      {
        icon: <FaLock />,
        color: "bronze",
        explanation: "Lockdown Post Defender",
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
    // Headshot
    plyrPictureSrc: "",
    // PlayerCard
    plyrCardPictureSrc: "",
    teamLogoSrc: "***",
    teamLogoStyling: "***",
  },
];

const modalData = [
  {
    value: "Pts",
    info: "Points Per 75 Possessions",
  },
  {
    value: "rTS%",
    info: "Relative True Shooting Percentage",
  },
  {
    value: "Reb",
    info: "Rebounds Per 75 Possessions",
  },
  {
    value: "Ast",
    info: "Assists Per 75 Possessions",
  },
  {
    value: "Stk",
    info: "Steals and Blocks Per 75 Possessions",
  },
  {
    value: "Tov",
    info: "Turnovers Per 75 Possessions",
  },
  {
    value: "BPM",
    info: "Box Plus Minus",
  },
];

const offBadgesData = [
  {
    value: <ImTarget />,
    info: "Dead Eye Shooter",
  },
  {
    value: <MdOutlineSportsKabaddi />,
    info: "Tough Shot Maker",
  },
  {
    value: <MdSportsHandball />,
    info: "Lob/Putback/Dunk Master",
  },
  {
    value: <FaWifi />,
    info: "Limitless Range",
  },
  {
    value: <FaHatWizard />,
    info: "Middy Magician",
  },
  {
    value: <GiWhistle />,
    info: "Foul Drawer",
  },
  {
    value: <GiBodyBalance />,
    info: "Acrobatic Finisher",
  },
  {
    value: <GiWreckingBall />,
    info: "Contact Finisher",
  },
  {
    value: <FaTools />,
    info: "Post Move Technician",
  },
];

const defBadgesData = [
  {
    value: <FaLock />,
    info: "Lockdown Post Defender",
  },
  {
    value: <GiHandcuffs />,
    info: "Perimeter Handcuffs",
  },
  {
    value: <ImBug />,
    info: "Defensive Pest",
  },
  {
    value: <SiAdblock />,
    info: "Shot Block Artist",
  },
  {
    value: <RiTeamFill />,
    info: "Switchable Specialist",
  },
  {
    value: <FaAnchor />,
    info: "Defensive Anchor",
  },
  {
    value: <GiMonsterGrasp />,
    info: "Pick Pocket/Interceptor",
  },
  {
    value: <GiBrain />,
    info: "High IQ Defender",
  },
  {
    value: <GiEmbrassedEnergy />,
    info: "High Energy Defender",
  },
];

const otherBadgesData = [
  {
    value: <TbEngine />,
    info: "Offensive Engine",
  },
  {
    value: <RiHandCoinLine />,
    info: "Dime Dropper",
  },
  {
    value: <ImEarth />,
    info: "Offensive Gravity",
  },
  {
    value: <ImDribbble />,
    info: "Houdini Handles",
  },
  {
    value: <ImMagnet />,
    info: "Rebound Magent",
  },
];

const showModalList = modalData.map((option) => {
  return (
    <div key={option.value} className="flex flex-row mb-5">
      <div className="font-bold underline mr-2">{option.value}:</div>
      <div>{option.info}</div>
    </div>
  );
});

const showOffBadges = offBadgesData.map((option) => {
  return (
    <div key={option.info} className="flex flex-row">
      <div className="mb-3 mr-3 rounded p-1 bg-gray-300">{option.value}</div>
      <div>{option.info}</div>
    </div>
  );
});

const showDefBadges = defBadgesData.map((option) => {
  return (
    <div key={option.info} className="flex flex-row">
      <div className="mb-3 mr-3 rounded p-1 bg-gray-300">{option.value}</div>
      <div>{option.info}</div>
    </div>
  );
});

const showOtherBadges = otherBadgesData.map((option) => {
  return (
    <div key={option.info} className="flex flex-row">
      <div className="mb-3 mr-3 rounded p-1 bg-gray-300">{option.value}</div>
      <div>{option.info}</div>
    </div>
  );
});

export const showAllBadgeInfo = (
  <div className="flex flex-col text-xs lg:flex-row">
    <div className="flex flex-col">{showModalList}</div>
    <div className="ml-10">{showOffBadges}</div>
    <div className="ml-10">{showDefBadges}</div>
    <div className="ml-10">
      <div className="mb-5">{showOtherBadges}</div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="mb-1.5 mr-3 rounded px-2 bg-purple-600">H</div>
          <div>Hall of Fame</div>
        </div>
        <div className="flex flex-row">
          <div className="mb-1.5 mr-3 rounded px-2 bg-yellow-300">G</div>
          <div>Gold</div>
        </div>
        <div className="flex flex-row">
          <div className="mb-1.5 mr-3 rounded px-2 bg-gray-300">S</div>
          <div>Silver</div>
        </div>
        <div className="flex flex-row">
          <div className="mb-1.5 mr-3 rounded px-2 bg-yellow-600">B</div>
          <div>Bronze</div>
        </div>
      </div>
    </div>
  </div>
);

// *****************************************************************
// *****************************************************************
// *****************************************************************

const offensiveBadges = [
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
    icon: <MdSportsHandball />,
    color: "hof",
    explanation: "Lob/Putback/Dunk Master",
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
    icon: <GiWhistle />,
    color: "hof",
    explanation: "Foul Drawer",
  },
  {
    icon: <GiBodyBalance />,
    color: "bronze",
    explanation: "Acrobatic Finisher",
  },
  {
    icon: <GiWreckingBall />,
    color: "gold",
    explanation: "Contact Finisher",
  },
  {
    icon: <FaTools />,
    color: "gold",
    explanation: "Post Move Technician",
  },
];

// *****************************************************************

const playmakingBadges = [
  {
    icon: <TbEngine />,
    color: "gold",
    explanation: "Offensive Engine",
  },
  {
    icon: <RiHandCoinLine />,
    color: "gold",
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
];

// *****************************************************************

const defensiveBadges = [
  {
    icon: <FaLock />,
    color: "gold",
    explanation: "Lockdown Post Defender",
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
  {
    icon: <SiAdblock />,
    color: "gold",
    explanation: "Shot Block Artist",
  },
  {
    icon: <RiTeamFill />,
    color: "gold",
    explanation: "Switchable Specialist",
  },
  {
    icon: <FaAnchor />,
    color: "gold",
    explanation: "Defensive Anchor",
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
  {
    icon: <GiEmbrassedEnergy />,
    color: "gold",
    explanation: "High Energy Defender",
  },
];

// *****************************************************************

const reboundingBadges = [
  {
    icon: <ImMagnet />,
    color: "gold",
    explanation: "Rebound Magnet",
  },
];
