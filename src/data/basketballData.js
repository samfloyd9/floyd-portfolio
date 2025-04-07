// Imports for Shooting/Scoring Badges
import { ImTarget } from "react-icons/im"; // Deadeye Shooter
import { MdOutlineSportsKabaddi } from "react-icons/md"; // Tough Shot Maker
import { MdSportsHandball } from "react-icons/md"; // Lob/Putback/Dunk Master
import { FaWifi } from "react-icons/fa"; // Limitless 3-Pt Range
import { FaHatWizard } from "react-icons/fa"; // Middy Magician
import { GiWhistle } from "react-icons/gi"; // Foul Drawer
import { GiBodyBalance } from "react-icons/gi"; // Acrobatic/Finesse Finisher
import { GiWreckingBall } from "react-icons/gi"; // Contact Finisher
import { FaTools } from "react-icons/fa"; // Post Move Technician

// Imports for Passing/Playmaking Badges
import { TbEngine } from "react-icons/tb"; // Offensive Engine
import { RiHandCoinLine } from "react-icons/ri"; // Dime Dropper
import { ImEarth } from "react-icons/im"; // Off-Ball Gravity
import { ImDribbble } from "react-icons/im"; // Houdini Handles

// Imports for Defensive Badges
import { FaLock } from "react-icons/fa"; // Lockdown Post Defender
import { GiHandcuffs } from "react-icons/gi"; // Perimeter Handcuffs
import { ImBug } from "react-icons/im"; // Defensive Pest
import { SiAdblock } from "react-icons/si"; // Shot Block Artist
import { RiTeamFill } from "react-icons/ri"; // Switchable Specialsit
import { FaAnchor } from "react-icons/fa"; // Defensive Anchor
import { GiMonsterGrasp } from "react-icons/gi"; // Pick Pocket/Interceptor
import { GiBrain } from "react-icons/gi"; // High IQ Defender
import { GiEmbrassedEnergy } from "react-icons/gi"; // High Energy Defender

// Rebounding Badge
import { ImMagnet } from "react-icons/im"; // Rebound Magnet

// Card Border Colors
const RED = "ruby";
const GREEN = "emerald";
const BLUE = "sapphire";
const WHITE = "diamond";
const PURPLE = "amethyst";
const YELLOW = "canary";
const ORANGE = "citrine";
const LIGHT_BLUE = "aqua";

// --------------------- LAKERS ---------------------- //
const lakersPrimary = "bg-purple-700";
const lakersSecondary = "text-yellow-400";
const lakersThird = "white";
const lakersCurrentLogo =
  "https://cdn.iconscout.com/icon/free/png-256/free-los-angeles-lakers-logo-icon-download-in-svg-png-gif-file-formats--nba-basketball-pack-logos-icons-1593200.png?f=webp&w=256";
const lakersCurrentLogoStyling = "h-14 -top-1 left-0";
const losAngelesLakers = "Los Angeles Lakers";
const minneapolisLakers = "Minneapolis Lakers";
const lakersThrowbackLogo = "https://loodibee.com/wp-content/uploads/minneapolis-lakers-1948-1960.png";
const lakersThrowbackLogoStyling = "h-16 -top-1 -left-1";
const minneapolisPrimary = "bg-blue-400";
const minneapolisSecondary = "text-white";
const minneapolisThird = "yellow-400";
// --------------------- SUNS ---------------------- //
const sunsPrimary = "bg-orange-600";
const sunsSecondary = "text-purple-900";
const sunsThird = "white";
const sunsCurrentLogo =
  "https://logodownload.org/wp-content/uploads/2021/07/phoenix-suns-logo-1.png";
const sunsCurrentLogoStyling = "h-12 top-0.5 -left-1";
const phoenixSuns = "Phoenix Suns";

const sunsThrowbackLogo =
  "https://seeklogo.com/images/P/phoenix-suns-1968-1992-logo-7E6A64DE29-seeklogo.com.png";
const sunsThrowbackLogoStyling = "h-12 top-0.5 left-1.5";

const sunsAltLogo =
  "https://loodibee.com/wp-content/uploads/phoenix-suns-1992-2000.png";
const sunsAltLogoStyling = "h-16 top-0.5 -left-1.5";

const sunsAltThrowbackLogo =
  "https://logos-world.net/wp-content/uploads/2020/05/Phoenix-Suns-Emblem.png";
const sunsAltThrowbackLogoStyling = "h-12 top-0.5 -left-3";

// const sunsTeamLogo =
//   "https://static.wikia.nocookie.net/sports-logos5931/images/0/06/Phoenix-suns_1969-1992_a.png/revision/latest?cb=20170618121847";
// const sunsTeamLogoStyling = "h-12 top-0.5 -left-1.5";

// --------------------- WARRIORS ---------------------- //
const warriorsPrimary = "bg-blue-600";
const warriorsSecondary = "text-yellow-300";
const warriorsThird = "white";
const warriorsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612744/2022/06/gsw-logo-1920.svg";
const warriorsCurrentLogoStyling = "h-16 -top-1.5 -left-2";
const goldenStateWarriors = "Golden State Warriors";
const philadelphiaWarriors = "Philadelphia Warriors"
const warriorsThrowbackLogo = "https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1705418084/ideas-and-advice-prod/en-us/Cb02u6k4eyzy3zwkxmivf37hj-1/Cb02u6k4eyzy3zwkxmivf37hj-1.png?_i=AA";
const warriorsThrowbackLogoStyling = "h-16 -top-1.5 -left-2";

const warriorsAltLogo = "https://1000logos.net/wp-content/uploads/2018/03/Golden-State-Warriors-Logo-1997.png";
const warriorsAltLogoStyling = "h-14 top-0 -left-6";

const warriorsOldSchoolLogo = "https://i1.wp.com/www.retroseasons.com/retroimages/0-logo-KGOLW-1963.gif";
const warriorsOldSchoolLogoStyling = "h-12 top-1 left-0";

const warriorsAltThrowbackLogo = "https://loodibee.com/wp-content/uploads/san-francisco-warriors-1969-1971.png";
const warriorsAltThrowbackLogoStyling = "h-16 -top-1.5 -left-2";
// --------------------- SUNS ---------------------- //
const spursPrimary = "bg-black";
const spursSecondary = "text-gray-300";
const spursThird = "white";
const spursCurrentLogo =
  "https://seekvectors.com/files/download/San%20Antonio%20Spurs%20Logo-01.png";
const spursCurrentLogoStyling = "h-16 -top-2 -left-1.5";
const sanAntonioSpurs = "San Antonio Spurs";
const spursThrowbackLogo = "https://1000logos.net/wp-content/uploads/2018/01/San-Antonio-Spurs-Logo-1989-700x394.png";
const spursThrowbackLogoStyling = "h-7 top-2 left-1.5";

// --------------------- SUNS ---------------------- //
const timberwolvesPrimary = "bg-black";
const timberwolvesSecondary = "text-green-300";
const timberwolvesThird = "blue-500";
const timberwolvesCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/05/Minnesota-Timberwolves-Logo-2017-Present.png";
const timberwolvesCurrentLogoStyling = "h-12 top-0.5 -left-4";
const minnesotaTimberwolves = "Minnesota Timberwolves";
const timberwolvesThrowbackLogo = "https://images.squarespace-cdn.com/content/v1/5e8b9cb09666a61f4584fa8f/1589520318300-Q2JQB48T39PB4R5RVNKD/MinnesotaTimberwolves_LogoDesign3.png";
const timberwolvesThrowbackLogoStyling = "h-12 top-0 left-0";

// --------------------- JAZZ ---------------------- //
const jazzPrimary = "bg-purple-700";
const jazzSecondary = "text-cyan-300";
const jazzThird = "green-700";
const jazzCurrentLogo =
  "https://i1.wp.com/www.retroseasons.com/retroimages/Utah_Jazz_logo.png";
const jazzCurrentLogoStyling = "h-14 -top-1.5 left-1";
const utahJazz = "Utah Jazz";
const newOrleansJazz = "New Orleans Jazz";

const jazzAltLogo = "https://i.namu.wiki/i/vZVwdb2rjDHHUKTFBNWvUT8UvKPkhDne6emshp8pJm44K4duBqOvjFP_4UMgaKvIQJdKhlTku_KSw8Rn2oF-GA.svg";
const jazzAltLogoStyling = "h-10 top-0.5 -left-0.5";

const jazzAltThrowbackLogo = "https://content.sportslogos.net/logos/6/234/full/utah_jazz_logo_primary_19973688.png";
const jazzAltThrowbackLogoStyling = "h-10 top-0.5 -left-0.5";

const jazzThrowbackLogo = "https://logos-world.net/wp-content/uploads/2020/05/Utah-Jazz-Logo-1980-1996.png";
const jazzThrowbackLogoStyling = "h-10 top-0.5 -left-0.5";
// --------------------- TRAIL BLAZERS ---------------------- //
const trailblazersPrimary = "bg-red-600";
const trailblazersSecondary = "text-black";
const trailblazersThird = "white-400";
const trailblazersCurrentLogo =
  "https://i.pinimg.com/originals/7d/07/ea/7d07eaa72e74a2def63540ac7d55ba0f.png";
const trailblazersCurrentLogoStyling = "h-11 top-1 left-1";
const portlandTrailblazers = "Portland Trailblazers";

const trailblazersThrowbackLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Portland-Trail-Blazers-Logo-1970_01.png/1200px-Portland-Trail-Blazers-Logo-1970_01.png";
const trailblazersThrowbackLogoStyling = "h-[72px] top-0 left-1";

const trailblazersAltThrowbackLogo = "https://upload.wikimedia.org/wikipedia/sco/thumb/7/74/Portland_Trail_Blazers.svg/640px-Portland_Trail_Blazers.svg.png";
const trailblazersAltThrowbackLogoStyling = "h-12 top-1 left-0";

// --------------------- GRIZZLIES ---------------------- //
const grizzliesPrimary = "bg-blue-800";
const grizzliesSecondary = "text-blue-300";
const grizzliesThird = "yellow-500";
const grizzliesCurrentLogo =
  "https://cdn.iconscout.com/icon/free/png-256/free-memphis-grizzlies-logo-icon-download-in-svg-png-gif-file-formats--nba-basketball-game-sport-ball-pack-logos-icons-1593220.png?f=webp&w=256";
const grizzliesCurrentLogoStyling = "h-14 top-0.5 -left-1.5";
const memphisGrizzlies = "Memphis Grizzlies";
const vancouverGrizzlies = "Vancouver Grizzlies";

const grizzliesThrowbackLogo = "https://1000logos.net/wp-content/uploads/2018/06/Vancouver-Grizzlies-Logo-2001.png";
const grizzliesThrowbackLogoStyling = "h-10 top-1 -left-2";

const grizzliesAltThrowbackLogo = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Vancouver_Grizzlies_logo.svg/1200px-Vancouver_Grizzlies_logo.svg.png";
const grizzliesAltThrowbackLogoStyling = "h-10 top-0.5 -left-1.5";

// --------------------- THUNDER ---------------------- //
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
const supersonicsLogoStyling = "h-12 top-0.5 -left-4";

const seattleSupersonics = "Seattle Supersonics";

const supersonicsAltLogo = "https://1000logos.net/wp-content/uploads/2018/06/Oklahoma-City-Thunder-Logo-1995-500x333.png";
const supersonicsAltLogoStyling = "h-16 -top-1 -left-5";
const supersonicsAltPrimary = "bg-green-900";
const supersonicsAltSecondary = "text-white";
const supersonicsAltThird = "red";


const supersonicsThrowbackLogo = "https://1000logos.net/wp-content/uploads/2018/06/Oklahoma-City-Thunder-Logo-1975-500x333.png";
const supersonicsThrowbackLogoStyling = "h-16 -top-1.5 -left-4";

// --------------------- MAVERICKS ---------------------- //
const mavericksPrimary = "bg-blue-600";
const mavericksSecondary = "text-gray-300";
const mavericksThird = "blue-800";
const mavericksCurrentLogo =
  "https://www.mavs.com/wp-content/themes/mavs/images/logo.svg";
const mavericksCurrentLogoStyling = "h-11 top-1 left-1";
const dallasMavericks = "Dallas Mavericks";

const mavericksThrowbackLogo =
  "https://i1.wp.com/www.retroseasons.com/retroimages/0-logo-KDALM-1981.gif";
const mavericksThrowbackLogoStyling = "h-20 top-0 left-0.5";

// --------------------- ROCKETS ---------------------- //
const rocketsPrimary = "bg-red-600";
const rocketsSecondary = "text-yellow-300";
const rocketsThird = "white";
const rocketsCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-houston-rockets-logo-2020.png";
const rocketsCurrentLogoStyling = "h-14 -top-0.5 left-0.5";
const houstonRockets = "Houston Rockets";

const rocketsThrowbackLogo = "https://loodibee.com/wp-content/uploads/houston-rockets-1995-2003.png";
const rocketsThrowbackLogoStyling = "h-[72px] -top-2 -left-1";

const rocketsAltThrowbackLogo = "https://upload.wikimedia.org/wikipedia/fr/thumb/0/09/Houston_Rockets_logo_1972.png/244px-Houston_Rockets_logo_1972.png";
const rocketsAltThrowbackLogoStyling = "h-12 top-0.5 left-0.5";

const rocketsAltLogo = "https://seeklogo.com/images/H/houston-rockets-logo-1AD80DE2AF-seeklogo.com.png";
const rocketsAltLogoStyling = "h-14 top-0 left-1";

// --------------------- CLIPPERS ---------------------- //
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
const bravesLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Buffalo_Braves_%28black_and_orange_varient%29_logo.svg/1200px-Buffalo_Braves_%28black_and_orange_varient%29_logo.svg.png";
const bravesLogoStyling = "h-14 top-1 left-1";
const buffaloBraves = "Buffalo Braves";

const bravesAltPrimary = "bg-blue-400";
const bravesAltSecondary = "text-white";
const bravesAltThird = "black";
const bravesAltLogo =
  "https://1000logos.net/wp-content/uploads/2018/06/Buffalo-Braves-Logo-500x313.png";
const bravesAltLogoStyling = "h-11 top-1 -left-5";
// --------------------- NUGGETS ---------------------- //
const nuggetsPrimary = "bg-blue-600";
const nuggetsSecondary = "text-yellow-300";
const nuggetsThird = "red-600";
const nuggetsCurrentLogo =
  "https://logodownload.org/wp-content/uploads/2021/07/denver-nuggets-logo.png";
const nuggetsCurrentLogoStyling = "h-10 top-1 left-1";
const denverNuggets = "Denver Nuggets";

const nuggetsThrowbackLogo = "https://images.seeklogo.com/logo-png/45/2/denver-nuggets-logo-png_seeklogo-459214.png";
const nuggetsThrowbackLogoStyling = "h-14 -top-1 left-0";

const nuggetsAltThrowbackLogo = "https://i1.wp.com/www.retroseasons.com/retroimages/0-logo-KDENN-1994.gif";
const nuggetsAltThrowbackLogoStyling = "h-12 top-0 left-1";

const nuggetsAltLogo = "https://content.sportslogos.net/logos/6/229/full/denver_nuggets_logo_primary_20044394.png";
const nuggetsAltLogoStyling = "h-8 top-1 left-1";

const nuggetsOldSchoolLogo = "https://lh3.googleusercontent.com/proxy/AWyP3I8bjz-CHZtFbG-SkyKfo0NClwYqMZTY5Kn98JjdsClL__siivhXRAyruK6f6at3_dZ4CEDSNR2qcOZ7oq6Fv93atijerw-qAH2dTW1CHxJztfP7KoPJ3KBzU9aXH2ARMPNuJQ";
const nuggetsOldSchoolLogoStyling = "h-10 top-1 left-1";

// --------------------- PELICANS ---------------------- //
const pelicansPrimary = "bg-blue-900";
const pelicansSecondary = "text-yellow-500";
const pelicansThird = "red-700";
const pelicansCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-new-orleans-pelicans-logo.png";
const pelicansCurrentLogoStyling = "h-14 -top-0.5 -left-1";
const newOrleansPelicans = "New Orleans Pelicans";
const newOrleansHornets = "New Orleans Hornets";

const pelicansThrowbackLogo = "https://basketballjerseyarchive.com/static/logos/vuXMJedmPFcUryi/new-orleans-pelicans-2008-2013-logo.png";
const pelicansThrowbackLogoStyling = "h-12 top-1 left-1";
const pelicansAltPrimary = "bg-blue-500";
const pelicansAltSecondary = "text-yellow-500";
const pelicansAltThird = "blue-800";
// --------------------- KINGS ---------------------- //
const kingsPrimary = "bg-purple-700";
const kingsSecondary = "text-white";
const kingsThird = "white";

const royalsPrimary = "bg-blue-800";
const royalsSecondary = "text-white";
const royalsThird = "red-500";

const kingsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612758/2022/04/Kings-Primary.svg";
const kingsCurrentLogoStyling = "h-11 top-0 left-1";
const sacramentoKings = "Sacramento Kings";
const cincinnatiRoyals = "Cincinnati Royals";
const kingsOldSchoolLogo = "https://logos-world.net/wp-content/uploads/2020/05/Cincinnati-Royals-Logo-1958-1971.png";
const kingsOldSchoolLogoStyling = "h-12 top-0 -left-5";

const kingsThrowbackLogo = "https://logos-world.net/wp-content/uploads/2020/05/Sacramento-Kings-Logo-1995-2016.png";
const kingsThrowbackLogoStyling = "h-14 -top-1 -left-7";

const kingsAltLogo = "https://www.statmuse.com/_image?href=https%3A%2F%2Fcdn.statmuse.com%2Fimg%2Fnba%2Fplayers%2Fold_nba_sac_1986_1994--wtq4da1g.png&w=250&h=250&f=webp";
const kingsAltLogoStyling = "h-11 top-0.5 left-1.5";

// --------------------- CELTICS ---------------------- //

const celticsPrimary = "bg-green-700";
const celticsSecondary = "text-white";
const celticsThird = "black";
const celticsCurrentLogo =
  "https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19759952.png";
const celticsCurrentLogoStyling = "h-11 top-1.5 left-1.5";
const bostonCeltics = "Boston Celtics";
const celticsThrowbackLogo = "https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19517260.png";
const celticsThrowbackLogoStyling = "h-11 top-1.5 left-1.5";
const celticsAltLogo = "https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19977628.png";
const celticsAltLogoStyling = "h-11 top-1.5 left-1.5";

// --------------------- PISTONS ---------------------- //
const pistonsPrimary = "bg-blue-600";
const pistonsSecondary = "text-red-500";
const pistonsThird = "white";
const pistonsCurrentLogo =
  "https://1000logos.net/wp-content/uploads/2017/08/Detroit-Pistons-logo.png";
const pistonsCurrentLogoStyling = "h-11 top-1.5 -left-3";
const detroitPistons = "Detroit Pistons";

const pistonsThrowbackLogo = "https://loodibee.com/wp-content/uploads/detroit-pistons-1957-1971.png";
const pistonsThrowbackLogoStyling = "h-16 -top-0.5 -left-0.5";

const pistonsAltThrowbackLogo = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Logo_of_the_Detroit_Pistons_%282005%E2%80%932017%29.png";
const pistonsAltThrowbackLogoStyling = "h-11 top-1 left-0";

const pistonsAltLogo = "https://content.sportslogos.net/logos/6/223/full/detroit_pistons_logo_primary_19976102.png";
const pistonsAltLogoStyling = "h-11 top-0.5 left-1";

// --------------------- 76ers ---------------------- //
const sixersPrimary = "bg-blue-600";
const sixersSecondary = "text-white";
const sixersThird = "red-500";

const sixersAltPrimary = "bg-black";
const sixersAltSecondary = "text-white";
const sixersAltThird = "red-500";

const sixersCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/05/Philadelphia-76ers-logo.png";
const sixersCurrentLogoStyling = "h-11 top-1 -left-3.5";
// const sixersCurrentLogoSize = "";
const philadelphiaSeventySixers = "Philadelphia 76ers";
const syracuseNationals = "Syracuse Nationals"

const nationalsPrimary = "bg-red-700";
const nationalsSecondary = "blue-700";
const nationalsThird = "white";

const sixersOldSchoolLogo = "https://loodibee.com/wp-content/uploads/syracuse-nationals-1949-1963.png";
const sixersOldSchoolLogoStyling = "h-16 -top-1 left-0";

const sixersAltLogo = "https://i1.wp.com/www.retroseasons.com/retroimages/0-logo-KPHI7-1998.gif";
const sixersAltLogoStyling = "h-14 top-1 left-1";

// --------------------- CAVALIERS ---------------------- //
const cavaliersPrimary = "bg-red-900";
const cavaliersSecondary = "text-white";
const cavaliersThird = "yellow-400";
// const cavaliersCurrentLogo = "";
// const cavaliersCurrentLogoStyling = "h-12 top-0 left-0";
const cavaliersThrowbackLogo =
  "https://content.sportslogos.net/logos/6/222/full/cleveland_cavaliers_logo_primary_20046125.png";
const cavaliersThrowbackLogoStyling = "h-8 top-1 -left-0";
const clevelandCavaliers = "Cleveland Cavaliers";

const cavaliersAltLogo = "https://1000logos.net/wp-content/uploads/2017/08/CAVS-Logo-1983.png";
const cavaliersAltLogoStyling = "h-8 top-1 left-2";
const cavaliersThrowbackPrimary = "bg-blue-700";
const cavaliersThrowbackSecondary = "text-orange-600";
const cavaliersThrowbackThird = "white";

const cavaliersOldSchoolLogo = "https://1000logos.net/wp-content/uploads/2017/08/CAVS-Logo-1970.png";
const cavaliersOldSchoolLogoStyling = "h-8 -top-1 left-2";

const cavaliersCurrentLogo = "https://1000logos.net/wp-content/uploads/2017/08/CAVS-Logo-2017.png";
const cavaliersCurrentLogoStyling = "h-16 -top-1 -left-8";
// --------------------- HORNETS ---------------------- //
const hornetsPrimary = "bg-cyan-400";
const hornetsSecondary = "text-blue-700";
const hornetsThird = "purple-700";
const hornetsThrowbackLogo =
  "https://content.sportslogos.net/logos/6/256/full/charlotte_hornets_logo_primary_19896932.png";
const hornetsThrowbackLogoStyling = "h-14 top-1 left-1";
const charlotteHornets = "Charlotte Hornets";
// const newOrleansHornets = "New Orleans Hornets";
const hornetsCurrentLogo = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/1200px-Charlotte_Hornets_%282014%29.svg.png";
const hornetsCurrentLogoStyling = "h-12 top-1 left-1";

const cougarsLogo = "https://sportsteamhistory.com/wp-content/uploads/2020/03/carolina_cougars_1971-1974.png";
const cougarsLogoStyling = "h-12 top-1 left-1";

const cougarsPrimary = "bg-green-600";
const cougarsSecondary = "text-white";
const cougarsThird = "blue-600";

// --------------------- MAGIC ---------------------- //
const magicPrimary = "bg-blue-600";
const magicSecondary = "text-white";
const magicThird = "black";
const orlandoMagic = "Orlando Magic";
const magicCurrentLogo =
  "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20017625.png";
const magicCurrentLogoStyling = "h-11 top-1 left-1";

const magicThrowbackLogo = "https://static.cdnlogo.com/logos/o/33/orlando-magic.png";
const magicThrowbackLogoStyling = "h-20 -top-3 -left-1.5";

// --------------------- HAWKS ---------------------- //
const hawksPrimary = "bg-red-600";
const hawksSecondary = "text-yellow-300";
const hawksThird = "white";
const hawksCurrentLogo =
  "https://logos-world.net/wp-content/uploads/2020/07/Atlanta-Hawks-Logo.png";
const hawksCurrentLogoStyling = "h-11 top-1 -left-3";
const atlantaHawks = "Atlanta Hawks";
const stLouisHawks = "St. Louis Hawks"

const hawksAltLogo = "https://i1.wp.com/www.retroseasons.com/retroimages/0-logo-KATLH-2008.gif";
const hawksAltLogoStyling = "h-16 -top-1 left-0";

const hawksAltThrowbackLogo = "https://content.sportslogos.net/logos/6/220/full/atlanta_hawks_logo_primary_19712182.png";
const hawksAltThrowbackLogoStyling = "h-11 top-1 -left-0.5";

const hawksThrowbackLogo = "https://www.ajc.com/resizer/ywbYPp1GRuBc-aWgZKwCBPGp4Gw=/arc-anglerfish-arc2-prod-ajc/public/4GLQOGNQ6JBENE64BRXBXPBKJM.png";
const hawksThrowbackLogoStyling = "h-11 top-1 -left-0.5";

const hawksOldSchoolLogo = "https://lh6.googleusercontent.com/proxy/sTiz0hf1xB4Fw0drm0cceGTEKJ267OA4X_ILnkaghRvoASHKolrwdoydJx1mgqIteCoudBZdbLvY7GE9GBo_3qtt6VS1XjL4G3ojdGvGhdv2Yhk79Ph-sYqmCzGpTo8fRtV_FefIIQ";
const hawksOldSchoolLogoStyling = "h-12 top-1 left-0.5";
// --------------------- HEAT ---------------------- //
const heatPrimary = "bg-black";
const heatSecondary = "text-red-500";
const heatThird = "white";
const heatCurrentLogo =
  "https://logodownload.org/wp-content/uploads/2019/06/miami-heat-logo-3.png";
const heatCurrentLogoStyling = "h-14 top-1 left-2";
const miamiHeat = "Miami Heat";
const heatThrowbackLogo = "https://seeklogo.com/images/M/miami-heat-1988-1999-logo-51CCA09C8B-seeklogo.com.png";
const heatThrowbackLogoStyling = "h-14 top-1 left-2";
// --------------------- RAPTORS ---------------------- //
const raptorsPrimary = "bg-red-600";
const raptorsSecondary = "text-white";
const raptorsThird = "black";
const raptorsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612761/2021/09/Toronto-Raptors.svg";
const raptorsCurrentLogoStyling = "h-12 top-0 left-0";
const torontoRaptors = "Toronto Raptors";

const raptorsAltLogo = "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/800px-Toronto_Raptors_logo.svg.png";
const raptorsAltLogoStyling = "h-12 top-0 left-0";

const raptorsThrowbackLogo = "https://logos-world.net/wp-content/uploads/2020/05/Toronto-Raptors-Logo-1996-2008.png";
const raptorsThrowbackLogoStyling = "h-12 top-0 -left-2.5";

const raptorsAltThrowbackLogo = "https://www.buffalorising.com/wp-content/uploads/2020/10/Toronto-Raptors-emblem.png";
const raptorsAltThrowbackLogoStyling = "h-12 top-0 -left-2.5";

// --------------------- PACERS ---------------------- //
const pacersPrimary = "bg-blue-700";
const pacersSecondary = "text-yellow-400";
const pacersThird = "white";
const pacersCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-indiana-pacers-logo.png";
const pacersCurrentLogoStyling = "h-14 top-0 left-0";
const indianaPacers = "Indiana Pacers";

const pacersThrowbackLogo = "https://loodibee.com/wp-content/uploads/indiana-pacers-1967-1976.png";
const pacersThrowbackLogoStyling = "h-16 -top-1 -left-1.5";

const pacersAltThrowbackLogo = "https://a.espncdn.com/guid/547fc042-3e02-4795-9637-9ab84322b625/logos/primary_logo_on_primary_color.png";
const pacersAltThrowbackLogoStyling = "h-12 top-0 left-0";
// --------------------- BUCKS ---------------------- //
const bucksPrimary = "bg-green-800";
const bucksSecondary = "text-yellow-500";
const bucksThird = "black";
const bucksCurrentLogo =
  "https://loodibee.com/wp-content/uploads/nba-milwaukee-bucks-logo.png";
const bucksCurrentLogoStyling = "h-14 top-0 left-0";
const milwaukeeBucks = "Milwuakee Bucks";

const bucksThrowbackLogo = "https://content.sportslogos.net/logos/6/225/full/milwaukee_bucks_logo_primary_19698490.png";
const bucksThrowbackLogoStyling = "h-14 top-0 -left-0.5";

const bucksAltThrowbackLogo = "https://content.sportslogos.net/logos/6/225/full/milwaukee_bucks_logo_primary_19946491.png";
const bucksAltThrowbackLogoStyling = "h-14 top-0.5 left-0";

const bucksAltLogo = "https://basketballjerseyarchive.com/static/logos/21ekAeEzhoJ2uqS/milwaukee-bucks-2006-2015-logo.png";
const bucksAltLogoStyling = "h-14 top-0.5 left-1";

// --------------------- KNICKS ---------------------- //
const knicksPrimary = "bg-blue-600";
const knicksSecondary = "text-orange-600";
const knicksThird = "white";
const knicksCurrentLogo =
  "https://content.sportslogos.net/logos/6/216/full/new_york_knicks_logo_primary_19938358.png";
const knicksCurrentLogoStyling = "h-11 top-1 left-0";
const newYorkKnicks = "New York Knicks";

const knicksThrowbackLogo = "https://cdn.nba.com/teams/uploads/sites/1610612752/2024/07/1964.png?im=Resize=(480)";
const knicksThrowbackLogoStyling = "h-16 -top-1 -left-4";

const knicksAltThrowbackLogo = "https://cdn.nba.com/teams/uploads/sites/1610612752/2024/07/1983.png";
const knicksAltThrowbackLogoStyling = "h-16 -top-1 -left-4";

// --------------------- NETS ---------------------- //
const netsPrimary = "bg-black";
const netsSecondary = "text-gray-200";
const netsThird = "white";
const netsCurrentLogo =
  "https://cdn.nba.com/teams/uploads/sites/1610612751/2024/07/BKN_Primary.svg";
const netsCurrentLogoStyling = "h-11 top-0.5 left-0.5";
const brooklynNets = "Brooklyn Nets";

const newYorkNets = "New York Nets";
const netsAltPrimary = "bg-blue-900";
const netsAltSecondary = "text-white";
const netsAltThird = "red-500";
const newJerseyNets = "New Jersey Nets"

const netsThrowbackLogo = "https://loodibee.com/wp-content/uploads/new-jersey-nets-1978-1990.png";
const netsThrowbackLogoStyling = "h-14 -top-0.5 -left-0.5";

const netsAltThrowbackLogo = "https://loodibee.com/wp-content/uploads/new-jersey-nets-1990-1997-300x300.png";
const netsAltThrowbackLogoStyling = "h-14 top-0.5 left-0";

const netsAltLogo = "https://basketballjerseyarchive.com/static/logos/XGt9nHgoRMjWLGp/brooklyn-nets-1997-2012-logo.png";
const netsAltLogoStyling = "h-11 top-0.5 left-1";

const netsOldSchoolLogo = "https://lh3.googleusercontent.com/proxy/86tCgwFJyS_TdpohAvxjf_OqIN2VgWQA7wQ9wMNq96Th5E7clWay2eSciWi8SRVGOZDbmFDCL1F_V7DiQs5-uObv1A8W02iSzva749bZjkmBpXpy__6UFpY512q_xsc0wx3n18qJ32K_8UQ";
const netsOldSchoolLogoStyling = "h-11 top-0.5 left-0.5";
// --------------------- WIZARDS ---------------------- //
const wizardsPrimary = "bg-blue-700";
const wizardsSecondary = "text-red-500";
const wizardsThird = "white";
const wizardsCurrentLogo =
  // "https://1000logos.net/wp-content/uploads/2018/06/Baltimore-Bullets-Logo-1974-700x394.png";
"https://1000logos.net/wp-content/uploads/2018/05/Washington_Wizards_Logo.png";
const wizardsCurrentLogoStyling = "h-12 top-1 -left-3";

const wizardsThrowbackLogo = 'https://1000logos.net/wp-content/uploads/2018/06/Baltimore-Bullets-Logo-1974-700x394.png';
const wizardsThrowbackLogoStyling = 'h-10 top-0 left-0';

const wizardsAltLogo = 'https://i1.wp.com/www.retroseasons.com/retroimages/0-logo-KWASW-1998.gif';
const wizardsAltLogoStyling = 'h-14 top-0 left-0';

// const wizardsAltThrowbackLogo = 'https://i1.wp.com/www.retroseasons.com/retroimages/0-logo-KWASW-1998.gif';
// const wizardsAltThrowbackLogoStyling = 'h-10 top-0 left-0';

const washingtonWizards = "Washington Wizards";
const washingtonBullets = "Washington Bullets";
// --------------------- BULLS ---------------------- //
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
    position: "SF",
    year: "2008-09",
    team: "CLE",
    franchise: "CLE",
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
        color: "goat",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiWreckingBall />,
        color: "goat",
        explanation: "Contact Finisher",
      },
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <TbEngine />,
        color: "goat",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "goat",
        explanation: "Dime Dropper",
      },
      {
        icon: <RiTeamFill />,
        color: "goat",
        explanation: "Switchable Specialist",
      },
      {
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
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
    position: "SG",
    year: "1987-88",
    team: "CHI",
    franchise: "CHI",
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
        color: "goat",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaHatWizard />,
        color: "goat",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "goat",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensiive Engine",
      },
      {
        icon: <GiHandcuffs />,
        color: "goat",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "goat",
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
    position: "C",
    year: "1971-72",
    team: "MIL",
    franchise: "MIL",
    fullTeamName: "Milwuakee Bucks",
    teamColor: bucksPrimary,
    teamColor2: bucksSecondary,
    teamColor3: bucksThird,
    cardColor: "emerald",
    pts75: 39.0,
    ts: +7.0,
    reb75: 18.6,
    ast75: 5.2,
    stk75: null,
    tov75: null,
    bpm: null,
    badges: [
      {
        icon: <FaTools />,
        color: "goat",
        explanation: "Post Move Technician",
      },
      {
        icon: <GiBodyBalance />,
        color: "goat",
        explanation: "Finesse Finisher",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "goat",
        explanation: "Unblockable Finisher",
      },
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <ImMagnet />,
        color: "goat",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "goat",
        explanation: "Shot Block Artist",
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
      teamLogoSrc: bucksThrowbackLogo,
      teamLogoStyling: bucksThrowbackLogoStyling,
  },
  {
    name: "Wilt Chamberlain",
    position: "C",
    year: "1966-67",
    team: "PHI",
    franchise: "PHI",
    fullTeamName: "Philadelphia 76ers",
    teamColor: sixersPrimary,
    teamColor2: sixersSecondary,
    teamColor3: sixersThird,
    cardColor: "sapphire",
    pts75: 19.3,
    ts: +14.9,
    reb75: 19.4,
    ast75: 6.2,
    stk75: null,
    tov75: null,
    bpm: null,
    badges: [
      {
        icon: <FaTools />,
        color: "goat",
        explanation: "Post Move Technician",
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
        icon: <RiHandCoinLine />,
        color: "hof",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImMagnet />,
        color: "goat",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "goat",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "goat",
        explanation: "Defensive Anchor",
      },
      {
        icon: <FaLock />,
        color: "goat",
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
    position: "PG",
    year: "2015-16",
    team: "GSW",
    franchise: "GSW",
    fullTeamName: goldenStateWarriors,
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: BLUE,
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
        color: "goat",
        explanation: "Deep Range Deadeye",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "goat",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <FaWifi />,
        color: "goat",
        explanation: "Limitless Range",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <ImEarth />,
        color: "goat",
        explanation: "Off-Ball Gravity",
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
    position: "PF",
    year: "2003-04",
    team: "MIN",
    franchise: "MIN",
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
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImMagnet />,
        color: "goat",
        explanation: "Rebound Magnet",
      },
      {
        icon: <FaAnchor />,
        color: "goat",
        explanation: "Defensive Anchor",
      },
      {
        icon: <GiBrain />,
        color: "goat",
        explanation: "High IQ Defender",
      },
      {
        icon: <GiEmbrassedEnergy />,
        color: "goat",
        explanation: "High Energy Defender",
      },
      {
        icon: <RiTeamFill />,
        color: "hof",
        explanation: "Switchable Specialist",
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
    teamLogoSrc: timberwolvesThrowbackLogo,
    teamLogoStyling: timberwolvesThrowbackLogoStyling,
  },
  {
    name: "Hakeem Olajuwon",
    position: "C",
    year: "1992-93",
    team: "HOU",
    franchise: "HOU",
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
        color: "goat",
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
        color: "goat",
        explanation: "Defensive Anchor",
      },
      {
        icon: <SiAdblock />,
        color: "goat",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaLock />,
        color: "goat",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
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
    teamLogoSrc: rocketsAltThrowbackLogo,
    teamLogoStyling: rocketsAltThrowbackLogoStyling,
  },
  {
    name: "Magic Johnson",
    position: "PG",
    year: "1986-87",
    team: "LAL",
    franchise: "LAL",
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
        explanation: "Acrobatic/Finesse Finisher",
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
    franchise: "BOS",
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
        color: "hof",
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
    franchise: "LAL",
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
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <ImEarth />,
        color: "hof",
        explanation: "Off-Ball Gravity",
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
    franchise: "SAS",
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
    teamLogoSrc: spursThrowbackLogo,
    teamLogoStyling: spursThrowbackLogoStyling,
  },
  {
    name: "Jerry West",
    position: "PG",
    year: "1964-65",
    team: "LAL",
    franchise: "LAL",
    fullTeamName: "Los Angeles Lakers",
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: "amethyst",
    pts75: 25.1,
    ts: +9.4,
    reb75: 4.9,
    ast75: 4.0,
    stk75: null,
    tov75: null,
    bpm: null,
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
    franchise: "LAL",
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
        explanation: "Off-Ball Gravity",
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
    franchise: "DAL",
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
        icon: <ImEarth />,
        color: "hof",
        explanation: "Off-Ball Gravity",
      },
      {
        icon: <TbEngine />,
        color: "gold",
        explanation: "Offensive Engine",
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
    franchise: "OKC",
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
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <ImDribbble />,
        color: "hof",
        explanation: "Houdini Handles",
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
    franchise: "BOS",
    fullTeamName: "Boston Celtics",
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: "emerald",
    pts75: 15.0,
    ts: -1.4,
    reb75: 24.7,
    ast75: 4.7,
    stk75: null,
    tov75: null,
    bpm: null,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImMagnet />,
        color: "goat",
        explanation: "Rebound Magnet",
      },
      {
        icon: <SiAdblock />,
        color: "goat",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaAnchor />,
        color: "goat",
        explanation: "Defensive Anchor",
      },
      {
        icon: <GiBrain />,
        color: "goat",
        explanation: "High IQ Defender",
      },
      {
        icon: <FaLock />,
        color: "goat",
        explanation: "Lockdown Post Defender",
      },
      {
        icon: <GiEmbrassedEnergy />,
        color: "goat",
        explanation: "High Energy Defender",
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
    franchise: "MIA",
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
        explanation: "Acrobatic/Finesse Finisher",
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
    team: "NYA",
    franchise: "BRK",
    fullTeamName: newYorkNets,
    teamColor: netsAltPrimary,
    teamColor2: netsAltSecondary,
    teamColor3: netsAltThird,
    cardColor: WHITE,
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
        explanation: "Acrobatic/Finesse Finisher",
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
    teamLogoSrc: netsOldSchoolLogo,
    teamLogoStyling: netsOldSchoolLogoStyling,
  },
  {
    name: "Oscar Robertson",
    position: "PG",
    year: "1963-64",
    team: "CIN",
    franchise: "SAC",
    fullTeamName: cincinnatiRoyals,
    teamColor: royalsPrimary,
    teamColor2: royalsSecondary,
    teamColor3: royalsThird,
    cardColor: BLUE,
    pts75: 25.4,
    ts: +9.8,
    reb75: 8,
    ast75: 8.9,
    stk75: null,
    tov75: null,
    bpm: null,
    badges: [
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
    teamLogoSrc: kingsOldSchoolLogo,
    teamLogoStyling: kingsOldSchoolLogoStyling,
  },
  {
    name: "Giannis Antetokounmpo",
    altName: "G. Antetokounmpo",
    position: "PF",
    year: "2019-20",
    team: "MIL",
    franchise: "MIL",
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
        explanation: "Off-Ball Gravity",
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
    franchise: "DEN",
    fullTeamName: denverNuggets,
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    teamColor3: nuggetsThird,
    cardColor: BLUE,
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
    team: "NOH",
    franchise: "NOP",
    fullTeamName: newOrleansHornets,
    teamColor: pelicansAltPrimary,
    teamColor2: pelicansAltSecondary,
    teamColor3: pelicansAltThird,
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
        explanation: "Acrobatic/Finesse Finisher",
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
    teamLogoSrc: pelicansThrowbackLogo,
    teamLogoStyling: pelicansThrowbackLogoStyling,
  },
  {
    name: "James Harden",
    position: "SG",
    year: "2018-19",
    team: "HOU",
    franchise: "HOU",
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
        explanation: "Acrobatic/Finesse Finisher",
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
        explanation: "Off-Ball Gravity",
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
    teamLogoSrc: rocketsAltLogo,
    teamLogoStyling: rocketsAltLogoStyling,
  },
  {
    name: "Kawhi Leonard",
    position: "SF",
    year: "2018-19",
    team: "TOR",
    franchise: "TOR",
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
    teamLogoSrc: raptorsAltThrowbackLogo,
    teamLogoStyling: raptorsAltThrowbackLogoStyling,
  },
  {
    name: "David Robinson",
    position: "C",
    year: "1994-95",
    team: "SAS",
    franchise: "SAS",
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
    franchise: "PHX",
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
        explanation: "Acrobatic/Finesse Finisher",
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
    teamLogoSrc: sunsAltLogo,
    teamLogoStyling: sunsAltLogoStyling,
  },
  {
    name: "Scottie Pippen",
    position: "SF",
    year: "1993-94",
    team: "CHI",
    franchise: "CHI",
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
    franchise: "PHX",
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
    franchise: "MEM",
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
    franchise: "ORL",
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
    teamLogoSrc: magicThrowbackLogo,
    teamLogoStyling: magicThrowbackLogoStyling,
  },
  {
    name: "Bob Pettit",
    position: "PF",
    year: "1957-58",
    team: "STL",
    franchise: "ATL",
    fullTeamName: stLouisHawks,
    teamColor: hawksPrimary,
    teamColor2: hawksSecondary,
    teamColor3: hawksThird,
    cardColor: RED,
    pts75: 21,
    ts: +2.1,
    reb75: 14.8,
    ast75: 2.6,
    stk75: null,
    tov75: null,
    bpm: null,
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
        color: "gold",
        explanation: "Limitless Range",
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
    teamLogoSrc: hawksOldSchoolLogo,
    teamLogoStyling: hawksOldSchoolLogoStyling,
  },
  {
    name: "Reggie Miller",
    position: "SG",
    year: "1993-94",
    team: "IND",
    franchise: "IND",
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
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <ImEarth />,
        color: "hof",
        explanation: "Off-Ball Gravity",
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
    teamLogoSrc: pacersAltThrowbackLogo,
    teamLogoStyling: pacersAltThrowbackLogoStyling,
  },
  {
    name: "Elvin Hayes",
    position: "PF",
    year: "1974-75",
    team: "WSB",
    franchise: "WAS",
    fullTeamName: washingtonBullets,
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
      teamLogoSrc: wizardsThrowbackLogo,
      teamLogoStyling: wizardsThrowbackLogoStyling,
  },
  {
    name: "Patrick Ewing",
    position: "C",
    year: "1992-93",
    team: "NYK",
    franchise: "NYK",
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
    teamLogoSrc: knicksAltThrowbackLogo,
    teamLogoStyling: knicksAltThrowbackLogoStyling,
  },
  {
    name: "Karl Malone",
    position: "PF",
    year: "1997-98",
    team: "UTA",
    franchise: "UTA",
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
    franchise: "DET",
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
        explanation: "Acrobatic/Finesse Finisher",
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
    franchise: "CHA",
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
    teamLogoSrc: hornetsThrowbackLogo,
    teamLogoStyling: hornetsThrowbackLogoStyling,
  },
  {
    name: "Clyde Drexler",
    position: "SG",
    year: "1991-92",
    team: "POR",
    franchise: "POR",
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
        explanation: "Acrobatic/Finesse Finisher",
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
    franchise: "SAS",
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
        explanation: "Acrobatic/Finesse Finisher",
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
    team: "MNL",
    franchise: "LAL",
    fullTeamName: minneapolisLakers,
    teamColor: minneapolisPrimary,
    teamColor2: minneapolisSecondary,
    teamColor3: minneapolisThird,
    cardColor: YELLOW,
    pts75: 29.9,
    ts: +8.1,
    reb75: 14.9,
    ast75: 3.3,
    stk75: null,
    tov75: null,
    bpm: null, // estimated 9.0
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
      // "https://i.pinimg.com/736x/58/98/d2/5898d23e3ca6c4a92a19c91d04dad504.jpg",
    teamLogoSrc: lakersThrowbackLogo,
    teamLogoStyling: lakersThrowbackLogoStyling,
  },
  {
    name: "Anthony Davis",
    position: "PF",
    year: "2017-18",
    team: "NOP",
    franchise: "NOP",
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
    franchise: "OKC",
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
    bpm: 11.1,
    badges: [
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
        icon: <MdSportsHandball />,
        color: "gold",
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
    franchise: "ORL",
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
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
    franchise: "LAL",
    fullTeamName: losAngelesLakers,
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: PURPLE,
    pts75: 30.6,
    ts: +1.3,
    reb75: 14.9,
    ast75: 3.7,
    stk75: null,
    tov75: null,
    bpm: null,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
    franchise: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 25.8,
    ts: +0.2,
    reb75: 8.0,
    ast75: 6.7,
    stk75: null,
    tov75: null,
    bpm: null,
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
        explanation: "Acrobatic/Finesse Finisher",
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
    franchise: "HOU",
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
    teamLogoSrc: rocketsAltThrowbackLogo,
    teamLogoStyling: rocketsAltThrowbackLogoStyling,
  },
  {
    name: "Artis Gilmore",
    position: "C",
    year: "1977-78",
    team: "CHI",
    franchise: "CHI",
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
    team: "NJN",
    franchise: "BRK",
    fullTeamName: newJerseyNets,
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
        explanation: "Acrobatic/Finesse Finisher",
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
    // teamLogoSrc: netsAltLogo,
    // teamLogoStyling: netsAltLogoStyling,
    teamLogoSrc: netsAltLogo,
    teamLogoStyling: netsAltLogoStyling,
  },
  {
    name: "Kevin McHale",
    position: "PF",
    year: "1986-87",
    team: "BOS",
    franchise: "BOS",
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
    team: "SEA",
    franchise: "OKC",
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
        explanation: "Off-Ball Gravity",
      },
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic/Finesse Finisher",
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
    franchise: "GSW",
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
        explanation: "Acrobatic/Finesse Finisher",
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
      "https://sportscollectorsdigest.com/uploads/MjA0MzY2ODE4MTU0OTE0ODkz/barry-free-throws-getty.jpg?format=auto&optimize=high&width=1920",
    teamLogoSrc: warriorsThrowbackLogo,
    teamLogoStyling: warriorsThrowbackLogoStyling,
  },
  {
    name: "Bob Cousy",
    position: "PG",
    year: "1956-57",
    team: "BOS",
    franchise: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 17.4,
    ts: +1.4,
    reb75: 4.1,
    ast75: 6.3,
    stk75: null,
    tov75: null,
    bpm: null,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic/Finesse Finisher",
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/cousybo01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i1.wp.com/www.retroseasons.com/retroimages/0-season-KBOSC-1956.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Manu Ginóbili",
    position: "SG",
    year: "2007-08",
    team: "SAS",
    franchise: "SAS",
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
        explanation: "Acrobatic/Finesse Finisher",
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
        color: "gold",
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/ginobma01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/236x/cf/81/dc/cf81dc4cda429b92b820d1e8e6f0f962.jpg",
    teamLogoSrc: spursCurrentLogo,
    teamLogoStyling: spursCurrentLogoStyling,
  },
  {
    name: "Joel Embiid",
    position: "C",
    year: "2022-23",
    team: "PHI",
    franchise: "PHI",
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
        explanation: "Off-Ball Gravity",
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/embiijo01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://external-preview.redd.it/haynes-sixers-star-joel-embiid-is-in-new-york-for-united-v0-tolp6ol-8191QK5xE0FOqocPu0BUcAOesukZ-EpC0W8.jpg?auto=webp&s=4540b4d439b92053ffdc58628336964bc5d0fa31",
    teamLogoSrc: sixersCurrentLogo,
    teamLogoStyling: sixersCurrentLogoStyling,
  },
  {
    name: "Jayson Tatum",
    position: "SF",
    year: "2022-23",
    team: "BOS",
    franchise: "BOS",
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
        explanation: "Acrobatic/Finesse Finisher",
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
        icon: <TbEngine />,
        color: "gold",
        explanation: "Offensive Engine",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/tatumja01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://pbs.twimg.com/media/FRndGZFX0AENjtL.jpg:large",
    teamLogoSrc: celticsAltLogo,
    teamLogoStyling: celticsAltLogoStyling,
  },
  {
    name: "John Stockton",
    position: "PG",
    year: "1989-90",
    team: "UTA",
    franchise: "UTA",
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
        explanation: "Acrobatic/Finesse Finisher",
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/stockjo01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/9b/55/b2/9b55b204284da3a859dc9b3df24c193f.jpg",
    teamLogoSrc: jazzCurrentLogo,
    teamLogoStyling: jazzCurrentLogoStyling,
  },
  {
    name: "Bill Walton",
    position: "C",
    year: "1977-78",
    team: "POR",
    franchise: "POR",
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/waltobi01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://media.gq.com/photos/5f6a1464568fd2aedb01831c/master/pass/GettyImages-450442872.jpg",
    teamLogoSrc: trailblazersThrowbackLogo,
    teamLogoStyling: trailblazersThrowbackLogoStyling,
  },
  {
    name: "Dolph Schayes",
    position: "PF",
    year: "1957-58",
    team: "SYR",
    franchise: "PHI",
    fullTeamName: syracuseNationals,
    teamColor: nationalsPrimary,
    teamColor2: nationalsSecondary,
    teamColor3: nationalsThird,
    cardColor: RED,
    pts75: 21.2,
    ts: +5.9,
    reb75: 12.1,
    ast75: 2.6,
    stk75: null,
    tov75: null,
    bpm: null,
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/schaydo01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://m.media-amazon.com/images/I/61kzvTJuvTL._AC_UF894,1000_QL80_.jpg",
    teamLogoSrc: sixersOldSchoolLogo,
    teamLogoStyling: sixersOldSchoolLogoStyling,
  },
  {
    name: "Jimmy Butler",
    position: "SG",
    year: "2022-23",
    team: "MIA",
    franchise: "MIA",
    fullTeamName: miamiHeat,
    teamColor: heatPrimary,
    teamColor2: heatSecondary,
    teamColor3: heatThird,
    cardColor: RED,
    pts75: 33.6,
    ts: +6.5,
    reb75: 8.6,
    ast75: 7.9,
    stk75: 3.2,
    tov75: 2.4,
    bpm: 8.7,
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
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
      },
      {
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
      {
        icon: <ImBug />,
        color: "hof",
        explanation: "Defensive Pest",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/butleji01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://images.khan.co.kr/article/2023/04/17/news-p.v1.20230417.9a9c35dcb2f04c008374fb2094ec7453_P1.jpg",
    teamLogoSrc: heatCurrentLogo,
    teamLogoStyling: heatCurrentLogoStyling,
  },
  {
    name: "Paul Arizin",
    position: "SF",
    year: "1956-57",
    team: "PHW",
    franchise: "GSW",
    fullTeamName: philadelphiaWarriors,
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: BLUE,
    pts75: 21.4,
    ts: +1.7,
    reb75: 5.8,
    ast75: 2.2,
    stk75: null,
    tov75: null,
    bpm: null,
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
        icon: <GiWhistle />,
        color: "hof",
        explanation: "Foul Drawer",
      },
      {
        icon: <ImTarget />,
        color: "gold",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <ImMagnet />,
        color: "silver",
        explanation: "Rebound Magnet",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/arizipa01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://prohoopshistory.wordpress.com/wp-content/uploads/2013/07/pitchin-paul.jpg",
    teamLogoSrc: warriorsOldSchoolLogo,
    teamLogoStyling: warriorsOldSchoolLogoStyling,
  },
  {
    name: "Dennis Rodman",
    position: "PF",
    year: "1991-92",
    team: "DET",
    franchise: "DET",
    fullTeamName: detroitPistons,
    teamColor: pistonsPrimary,
    teamColor2: pistonsSecondary,
    teamColor3: pistonsThird,
    cardColor: BLUE,
    pts75: 12.7,
    ts: +1.2,
    reb75: 24.3,
    ast75: 3.0,
    stk75: 2.2,
    tov75: 2.2,
    bpm: 2.8,
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
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
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
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
      {
        icon: <GiEmbrassedEnergy />,
        color: "hof",
        explanation: "High Energy Defender",
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/rodmade01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/94/a1/84/94a1842206fdb5757d4e339bf505f7dd.jpg",
    teamLogoSrc: pistonsAltLogo,
    teamLogoStyling: pistonsAltLogoStyling,
  },
  {
    name: "Dave Cowens",
    position: "C",
    year: "1972-73",
    team: "BOS",
    franchise: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 18.2,
    ts: +0.7,
    reb75: 14.4,
    ast75: 3.6,
    stk75: null,
    tov75: null,
    bpm: null,
    badges: [
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
        icon: <GiEmbrassedEnergy />,
        color: "hof",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/cowenda01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/236x/9b/54/5e/9b545e3e6dfda5bf2caf9ecb9a16ed3e.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Kyrie Irving",
    position: "PG",
    year: "2018-19",
    team: "BOS",
    franchise: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 34.9,
    ts: +3.0,
    reb75: 7.3,
    ast75: 10.1,
    stk75: 2.8,
    tov75: 3.3,
    bpm: 7.2,
    badges: [
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
        icon: <FaWifi />,
        color: "gold",
        explanation: "Limitless Range",
      },
      {
        icon: <ImDribbble />,
        color: "hof",
        explanation: "Houdini Handles",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/irvinky01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/21/16/87/21168711396837757d6a48ecc51074f7.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Blake Griffin",
    position: "PF",
    year: "2013-14",
    team: "LAC",
    franchise: "LAC",
    fullTeamName: losAngelesClippers,
    teamColor: clippersPrimary,
    teamColor2: clippersSecondary,
    teamColor3: clippersThird,
    cardColor: BLUE,
    pts75: 33.7,
    ts: +4.3,
    reb75: 13.2,
    ast75: 5.4,
    stk75: 2.5,
    tov75: 4.5,
    bpm: 4.7,
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
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic/Finesse Finisher",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/griffbl01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.hoopsrumors.com/files/2017/06/USATSI_10024850_168380616_lowres.jpg",
    teamLogoSrc: clippersCurrentLogo,
    teamLogoStyling: clippersCurrentLogoStyling,
  },
  {
    name: "Yao Ming",
    position: "C",
    year: "2006-07",
    team: "HOU",
    franchise: "HOU",
    fullTeamName: houstonRockets,
    teamColor: rocketsPrimary,
    teamColor2: rocketsSecondary,
    teamColor3: rocketsThird,
    cardColor: RED,
    pts75: 39.2,
    ts: +7.9,
    reb75: 14.7,
    ast75: 3.1,
    stk75: 3.7,
    tov75: 5.4,
    bpm: 5.0,
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/mingya01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://www.the-sun.com/wp-content/uploads/sites/6/2023/09/user-expressly-acknowledges-agrees-downloading-846995559.jpg?strip=all&w=640",
    teamLogoSrc: rocketsThrowbackLogo,
    teamLogoStyling: rocketsThrowbackLogoStyling,
  },
  {
    name: "Walt Frazier",
    position: "PG",
    year: "1971-72",
    team: "NYK",
    franchise: "NYK",
    fullTeamName: newYorkKnicks,
    teamColor: knicksPrimary,
    teamColor2: knicksSecondary,
    teamColor3: knicksThird,
    cardColor: BLUE,
    pts75: 21.5,
    ts: +5.7,
    reb75: 6.2,
    ast75: 5.3,
    stk75: null,
    tov75: null,
    bpm: null,
    badges: [
      {
        icon: <FaHatWizard />,
        color: "hof",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImDribbble />,
        color: "gold",
        explanation: "Houdini Handles",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/fraziwa01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/550x/f6/e2/a6/f6e2a60b132691efa1ce1735cf3fa332.jpg",
    teamLogoSrc: knicksCurrentLogo,
    teamLogoStyling: knicksCurrentLogoStyling,
  },
  {
    name: "Dominique Wilkins",
    position: "SF",
    year: "1985-86",
    team: "ATL",
    franchise: "ATL",
    fullTeamName: atlantaHawks,
    teamColor: hawksPrimary,
    teamColor2: hawksSecondary,
    teamColor3: hawksThird,
    cardColor: RED,
    pts75: 37.3,
    ts: +2.7,
    reb75: 9.7,
    ast75: 3.2,
    stk75: 3.0,
    tov75: 4.0,
    bpm: 4.2,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
        icon: <GiWhistle />,
        color: "gold",
        explanation: "Foul Drawer",
      },
      {
        icon: <ImMagnet />,
        color: "silver",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/wilkido01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://images.squarespace-cdn.com/content/v1/5361973ee4b0482b3e2dd960/7b212a6c-6cdd-40ac-b8ad-ad1b10e3f2f2/dominique+wilkins2.jpg",
    teamLogoSrc: hawksCurrentLogo,
    teamLogoStyling: hawksCurrentLogoStyling,
  },
  {
    name: "Luka Dončić",
    position: "PG",
    year: "2023-24",
    team: "DAL",
    franchise: "DAL",
    fullTeamName: dallasMavericks,
    teamColor: mavericksPrimary,
    teamColor2: mavericksSecondary,
    teamColor3: mavericksThird,
    cardColor: "sapphire",
    pts75: 43.3,
    ts: +2.9,
    reb75: 11.8,
    ast75: 12.5,
    stk75: 2.5,
    tov75: 5.2,
    bpm: 9.9,
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
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/doncilu01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://pbs.twimg.com/media/GCQOKSzaAAAQymR?format=jpg&name=4096x4096",
    teamLogoSrc: mavericksCurrentLogo,
    teamLogoStyling: mavericksCurrentLogoStyling,
  },
  {
    name: "Sidney Moncrief",
    position: "SG",
    year: "1982-83",
    team: "MIL",
    franchise: "MIL",
    fullTeamName: milwaukeeBucks,
    teamColor: bucksPrimary,
    teamColor2: bucksSecondary,
    teamColor3: bucksThird,
    cardColor: GREEN,
    pts75: 30.3,
    ts: +5.0,
    reb75: 7.7,
    ast75: 5.3,
    stk75: 2.4,
    tov75: 3.5,
    bpm: 5.1,
    badges: [
      {
        icon: <FaHatWizard />,
        color: "gold",
        explanation: "Middy Magician",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <RiHandCoinLine />,
        color: "silver",
        explanation: "Dime Dropper",
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
        color: "hof",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/moncrsi01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/45/ee/58/45ee58e0337b5948ef4044f3dfb8f0c6.jpg",
    teamLogoSrc: bucksThrowbackLogo,
    teamLogoStyling: bucksThrowbackLogoStyling,
  },
  {
    name: "Paul Pierce",
    position: "SF",
    year: "2007-08",
    team: "BOS",
    franchise: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 28.8,
    ts: +5.9,
    reb75: 7.5,
    ast75: 6.7,
    stk75: 2.6,
    tov75: 4.1,
    bpm: 4.8,
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
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <FaTools />,
        color: "gold",
        explanation: "Post Move Technician",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/piercpa01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/6b/d4/df/6bd4df567d5958cb7ab032e700d027de.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Ben Wallace",
    position: "C",
    year: "2001-02",
    team: "DET",
    franchise: "DET",
    fullTeamName: detroitPistons,
    teamColor: pistonsPrimary,
    teamColor2: pistonsSecondary,
    teamColor3: pistonsThird,
    cardColor: BLUE,
    pts75: 11.1,
    ts: +0.4,
    reb75: 19.0,
    ast75: 2.1,
    stk75: 7.6,
    tov75: 1.3,
    bpm: 4.4,
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
        icon: <FaLock />,
        color: "hof",
        explanation: "Lockdown Post Defender",
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
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/wallabe01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.amomama.com/f3335f5ef563d0433f5fc5b590d217a2.jpg",
    teamLogoSrc: pistonsCurrentLogo,
    teamLogoStyling: pistonsCurrentLogoStyling,
  },
  {
    name: "Dikembe Mutombo",
    position: "C",
    year: "1999-00",
    team: "ATL",
    franchise: "ATL",
    fullTeamName: atlantaHawks,
    teamColor: hawksPrimary,
    teamColor2: hawksSecondary,
    teamColor3: hawksThird,
    cardColor: RED,
    pts75: 16.5,
    ts: +9.5,
    reb75: 20.3,
    ast75: 1.8,
    stk75: 5.2,
    tov75: 3.1,
    bpm: 2.4,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <FaTools />,
        color: "silver",
        explanation: "Post Move Technician",
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
        color: "hof",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/mutomdi01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://andscape.com/wp-content/uploads/2017/07/gettyimages-123711959.jpg",
    teamLogoSrc: hawksCurrentLogo,
    teamLogoStyling: hawksCurrentLogoStyling,
  },
  {
    name: "Kevin Love",
    position: "PF",
    year: "2013-14",
    team: "MIN",
    franchise: "MIN",
    fullTeamName: minnesotaTimberwolves,
    teamColor: timberwolvesPrimary,
    teamColor2: timberwolvesSecondary,
    teamColor3: timberwolvesThird,
    cardColor: BLUE,
    pts75: 35.4,
    ts: +5.2,
    reb75: 17.0,
    ast75: 6.0,
    stk75: 1.6,
    tov75: 3.5,
    bpm: 8.9,
    badges: [
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
        icon: <ImTarget />,
        color: "gold",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <FaWifi />,
        color: "gold",
        explanation: "Limitless Range",
      },
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
      },
      {
        icon: <RiHandCoinLine />,
        color: "silver",
        explanation: "Dime Dropper",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/loveke01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/ea/7a/2f/ea7a2f427bd19640285381eb405b6187.jpg",
    teamLogoSrc: timberwolvesCurrentLogo,
    teamLogoStyling: timberwolvesCurrentLogoStyling,
  },
  {
    name: "Damian Lillard",
    position: "PG",
    year: "2023-24",
    team: "POR",
    franchise: "POR",
    fullTeamName: portlandTrailblazers,
    teamColor: trailblazersPrimary,
    teamColor2: trailblazersSecondary,
    teamColor3: trailblazersThird,
    cardColor: RED,
    pts75: 43.1,
    ts: +6.5,
    reb75: 6.4,
    ast75: 9.8,
    stk75: 1.8,
    tov75: 4.4,
    bpm: 7.1,
    badges: [
      {
        icon: <FaWifi />,
        color: "hof",
        explanation: "Limitless Range",
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
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <GiWhistle />,
        color: "gold",
        explanation: "Foul Drawer",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImDribbble />,
        color: "gold",
        explanation: "Houdini Handles",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/lillada01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://snworksceo.imgix.net/car/442ea261-51d5-42ec-a3f3-4d4e0f1daef7.sized-1000x1000.jpg?w=1000&dpr=2",
    teamLogoSrc: trailblazersCurrentLogo,
    teamLogoStyling: trailblazersCurrentLogoStyling,
  },
  {
    name: "Donovan Mitchell",
    position: "SG",
    year: "2022-23",
    team: "CLE",
    franchise: "CLE",
    fullTeamName: clevelandCavaliers,
    teamColor: cavaliersPrimary,
    teamColor2: cavaliersSecondary,
    teamColor3: cavaliersThird,
    cardColor: RED,
    pts75: 39.6,
    ts: +3.4,
    reb75: 6.0,
    ast75: 6.2,
    stk75: 2.6,
    tov75: 3.7,
    bpm: 6.3,
    badges: [
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
        icon: <FaWifi />,
        color: "gold",
        explanation: "Limitless Range",
      },
      {
        icon: <ImTarget />,
        color: "gold",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <RiHandCoinLine />,
        color: "gold",
        explanation: "Dime Dropper",
      },
      {
        icon: <ImDribbble />,
        color: "gold",
        explanation: "Houdini Handles",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mitchdo01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://pbs.twimg.com/media/FlhBwcpXwAEq1T-?format=jpg&name=4096x4096",
    teamLogoSrc: cavaliersCurrentLogo,
    teamLogoStyling: cavaliersCurrentLogoStyling,
  },
  {
    name: "Andrei Kirilenko",
    position: "SF",
    year: "2003-04",
    team: "UTA",
    franchise: "UTA",
    fullTeamName: utahJazz,
    teamColor: jazzPrimary,
    teamColor2: jazzSecondary,
    teamColor3: jazzThird,
    cardColor: PURPLE,
    pts75: 24.6,
    ts: +2.6,
    reb75: 12.0,
    ast75: 4.7,
    stk75: 7.0,
    tov75: 4.1,
    bpm: 7.9,
    badges: [
      {
        icon: <ImTarget />,
        color: "gold",
        explanation: "Deadeye Shooter",
      },
      {
        icon: <GiBodyBalance />,
        color: "gold",
        explanation: "Acrobatic/Finesse Finisher",
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
        icon: <SiAdblock />,
        color: "hof",
        explanation: "Shot Block Artist",
      },
      {
        icon: <RiTeamFill />,
        color: "hof",
        explanation: "Switchable Specialist",
      },
      {
        icon: <GiBrain />,
        color: "hof",
        explanation: "High IQ Defender",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "gold",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/kirilan01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.vox-cdn.com/uploads/chorus_image/image/72992054/78826535.0.jpg",
    teamLogoSrc: jazzCurrentLogo,
    teamLogoStyling: jazzCurrentLogoStyling,
  },
  {
    name: "Chris Webber",
    position: "PF",
    year: "2000-01",
    team: "SAC",
    franchise: "SAC",
    fullTeamName: sacramentoKings,
    teamColor: kingsPrimary,
    teamColor2: kingsSecondary,
    teamColor3: kingsThird,
    cardColor: PURPLE,
    pts75: 34.0,
    ts: -0.2,
    reb75: 13.9,
    ast75: 5.3,
    stk75: 3.8,
    tov75: 3.5,
    bpm: 5.5,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <FaTools />,
        color: "hof",
        explanation: "Post Move Technician",
      },
      {
        icon: <MdSportsHandball />,
        color: "gold",
        explanation: "Lob/Putback/Dunk Master",
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
        icon: <GiMonsterGrasp />,
        color: "gold",
        explanation: "Pick Pocket/Interceptor",
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/webbech01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://a.espncdn.com/photo/2020/0501/r694761_864x1296_2-3.jpg",
    teamLogoSrc: kingsThrowbackLogo,
    teamLogoStyling: kingsThrowbackLogoStyling,
  },
  {
    name: "Tony Parker",
    position: "PG",
    year: "2012-13",
    team: "SAS",
    franchise: "SAS",
    fullTeamName: sanAntonioSpurs,
    teamColor: spursPrimary,
    teamColor2: spursSecondary,
    teamColor3: spursThird,
    cardColor: WHITE,
    pts75: 31.4,
    ts: +4.4,
    reb75: 4.6,
    ast75: 11.7,
    stk75: 1.4,
    tov75: 4.0,
    bpm: 3.6,
    badges: [
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
        color: "gold",
        explanation: "Foul Drawer",
      },
      {
        icon: <ImTarget />,
        color: "gold",
        explanation: "Deadeye Shooter",
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
        icon: <ImDribbble />,
        color: "gold",
        explanation: "Houdini Handles",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/parketo01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.bleacherreport.net/images_root/slides/photos/000/659/178/106892070_original.jpg?1295796259",
    teamLogoSrc: spursCurrentLogo,
    teamLogoStyling: spursCurrentLogoStyling,
  },
  {
    name: "Bill Sharman",
    position: "SG",
    year: "1957-58",
    team: "BOS",
    franchise: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
    pts75: 17.4,
    ts: +3.6,
    reb75: 3.7,
    ast75: 2.1,
    stk75: null,
    tov75: null,
    bpm: null,
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
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiWhistle />,
        color: "silver",
        explanation: "Foul Drawer",
      },
      {
        icon: <GiBodyBalance />,
        color: "silver",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/sharmbi01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.bleacherreport.net/images_root/slides/photos/000/417/491/BillSharman_original.jpg?1285722888",
    teamLogoSrc: celticsThrowbackLogo,
    teamLogoStyling: celticsThrowbackLogoStyling,
  },
  {
    name: "Amar'e Stoudemire",
    position: "PF",
    year: "2007-08",
    team: "PHX",
    franchise: "PHX",
    fullTeamName: phoenixSuns,
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: PURPLE,
    pts75: 36.9,
    ts: +11.6,
    reb75: 13.3,
    ast75: 2.2,
    stk75: 4.2,
    tov75: 3.2,
    bpm: 4.8,
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
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/stoudam01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/originals/06/1f/41/061f41ef45f9e51aafb234f5333be14d.png",
    teamLogoSrc: sunsCurrentLogo,
    teamLogoStyling: sunsCurrentLogoStyling,
  },
  {
    name: "Bob McAdoo",
    position: "C",
    year: "1974-75",
    team: "BUF",
    franchise: "LAC",
    fullTeamName: buffaloBraves,
    teamColor: bravesAltPrimary,
    teamColor2: bravesAltSecondary,
    teamColor3: bravesAltThird,
    cardColor: BLUE,
    pts75: 35.6,
    ts: +4.7,
    reb75: 14.5,
    ast75: 2.3,
    stk75: 3.4,
    tov75: 3.5,
    bpm: 6.0,
    badges: [
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/mcadobo01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://e00-xlk-ue-marca.uecdn.es/uploads/2024/07/30/16123400592407.jpeg",
    teamLogoSrc: clippersCurrentLogo,
    teamLogoStyling: clippersCurrentLogoStyling,
  },
  {
    name: "Shawn Marion",
    position: "SF",
    year: "2005-06",
    team: "PHX",
    franchise: "PHX",
    fullTeamName: phoenixSuns,
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: PURPLE,
    pts75: 27.2,
    ts: +4.5,
    reb75: 14.7,
    ast75: 2.2,
    stk75: 4.6,
    tov75: 1.9,
    bpm: 4.8,
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
        icon: <RiTeamFill />,
        color: "hof",
        explanation: "Switchable Specialist",
      },
      {
        icon: <GiHandcuffs />,
        color: "hof",
        explanation: "Perimeter Handcuffs",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/mariosh01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.nba.com/teams/legacy/www.nba.com/suns/sites/suns/files/shawn_marion_retires_35.jpg",
    teamLogoSrc: sunsCurrentLogo,
    teamLogoStyling: sunsCurrentLogoStyling,
  },
  {
    name: "David Thompson",
    position: "SG",
    year: "1977-78",
    team: "DEN",
    franchise: "DEN",
    fullTeamName: denverNuggets,
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    teamColor3: nuggetsThird,
    cardColor: BLUE,
    pts75: 31.8,
    ts: +5.3,
    reb75: 5.7,
    ast75: 5.3,
    stk75: 2.7,
    tov75: 3.6,
    bpm: 4.8,
    badges: [
      {
        icon: <MdSportsHandball />,
        color: "hof",
        explanation: "Lob/Putback/Dunk Master",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
        icon: <MdOutlineSportsKabaddi />,
        color: "gold",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiWhistle />,
        color: "gold",
        explanation: "Foul Drawer",
      },
      {
        icon: <GiMonsterGrasp />,
        color: "bronze",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/thompda01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.nba.com/teams/legacy/www.nba.com/nuggets/sites/nuggets/files/89746925_10.jpg",
    teamLogoSrc: nuggetsThrowbackLogo,
    teamLogoStyling: nuggetsThrowbackLogoStyling,
  },
  {
    name: "Gary Payton",
    position: "PG",
    year: "1999-00",
    team: "SEA",
    franchise: "OKC",
    fullTeamName: seattleSupersonics,
    teamColor: supersonicsAltPrimary,
    teamColor2: supersonicsAltSecondary,
    teamColor3: supersonicsAltThird,
    cardColor: GREEN,
    pts75: 29.8,
    ts: +2.1,
    reb75: 7.9,
    ast75: 11.0,
    stk75: 2.6,
    tov75: 3.4,
    bpm: 6.4,
    badges: [
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
        color: "hof",
        explanation: "Pick Pocket/Interceptor",
      },
      {
        icon: <ImBug />,
        color: "hof",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/paytoga01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://komonews.com/resources/media2/original/full/1600/center/80/6a629ef3-d789-4f97-981d-732166f15da4-GettyImages2007517168.jpg",
    teamLogoSrc: supersonicsAltLogo,
    teamLogoStyling: supersonicsAltLogoStyling,
  },
  {
    name: "Wes Unseld",
    position: "C",
    year: "1975-76",
    team: "WSB",
    franchise: "WAS",
    fullTeamName: washingtonBullets,
    teamColor: wizardsPrimary,
    teamColor2: wizardsSecondary,
    teamColor3: wizardsThird,
    cardColor: BLUE,
    pts75: 11.8,
    ts: -0.7,
    reb75: 16.3,
    ast75: 6.4,
    stk75: 2.2,
    tov75: null,
    bpm: 4.4,
    badges: [
      {
        icon: <GiWreckingBall />,
        color: "gold",
        explanation: "Contact Finisher",
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
        color: "gold",
        explanation: "Lockdown Post Defender",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/unselwe01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://www.pilotonline.com/wp-content/uploads/migration/2020/09/03/7N5UIZG36BBR5IWN5R5SOJJ7QM.jpg?w=620",
    teamLogoSrc: wizardsThrowbackLogo,
    teamLogoStyling: wizardsThrowbackLogoStyling,
  },
  {
    name: "Shawn Kemp",
    position: "PF",
    year: "1995-96",
    team: "SEA",
    franchise: "OKC",
    fullTeamName: seattleSupersonics,
    teamColor: supersonicsPrimary,
    teamColor2: supersonicsSecondary,
    teamColor3: supersonicsThird,
    cardColor: GREEN,
    pts75: 30.1,
    ts: +8.9,
    reb75: 17.6,
    ast75: 3.3,
    stk75: 4.3,
    tov75: 6.1,
    bpm: 2.8,
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
        icon: <SiAdblock />,
        color: "gold",
        explanation: "Shot Block Artist",
      },
      {
        icon: <FaLock />,
        color: "gold",
        explanation: "Lockdown Post Defender",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/kempsh01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.bleacherreport.net/images_root/slides/photos/000/888/801/359833_original.jpg?1303740958",
    teamLogoSrc: supersonicsLogo,
    teamLogoStyling: supersonicsLogoStyling,
  },
  {
    name: "Shai Gilgeous-Alexander",
    altName: "S. Gilgeous-Alexander",
    position: "PG",
    year: "2024-25",
    team: "OKC",
    franchise: "OKC",
    fullTeamName: oklahomaCityThunder,
    teamColor: thunderPrimary,
    teamColor2: thunderSecondary,
    teamColor3: thunderThird,
    cardColor: BLUE,
    pts75: 46.0,
    ts: +6.4,
    reb75: 7.1,
    ast75: 8.8,
    stk75: 3.9,
    tov75: 3.5,
    bpm: 11.5,
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
        icon: <GiWhistle />,
        color: "hof",
        explanation: "Foul Drawer",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <TbEngine />,
        color: "hof",
        explanation: "Offensive Engine",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/gilgesh01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://cdn.britannica.com/66/263766-050-7878A695/Shai-Gilgeous-Alexander-handles-the-ball-during-the-second-half-against-the-Detroit-Pistons-October-30-2023.jpg",
    teamLogoSrc: thunderCurrentLogo,
    teamLogoStyling: thunderCurrentLogoStyling,
  },
  {
    name: "Brandon Roy",
    position: "SG",
    year: "2008-09",
    team: "POR",
    franchise: "POR",
    fullTeamName: portlandTrailblazers,
    teamColor: trailblazersPrimary,
    teamColor2: trailblazersSecondary,
    teamColor3: trailblazersThird,
    cardColor: RED,
    pts75: 33.7,
    ts: +3.8,
    reb75: 7.1,
    ast75: 7.6,
    stk75: 2.1,
    tov75: 2.9,
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
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <ImTarget />,
        color: "gold",
        explanation: "Deadeye Shooter",
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
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/roybr01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://render.fineartamerica.com/images/rendered/default/print/5.5/8/break/images/artworkimages/medium/3/brandon-roy-rocky-widner.jpg",
    teamLogoSrc: trailblazersAltThrowbackLogo,
    teamLogoStyling: trailblazersAltThrowbackLogoStyling,
  },
  {
    name: "Paul George",
    position: "SF",
    year: "2018-19",
    team: "OKC",
    franchise: "OKC",
    fullTeamName: oklahomaCityThunder,
    teamColor: thunderPrimary,
    teamColor2: thunderSecondary,
    teamColor3: thunderThird,
    cardColor: BLUE,
    pts75: 35.5,
    ts: +2.9,
    reb75: 10.3,
    ast75: 5.2,
    stk75: 3.4,
    tov75: 3.4,
    bpm: 7.2,
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
        explanation: "Acrobatic/Finesse Finisher",
      },
      {
        icon: <ImDribbble />,
        color: "gold",
        explanation: "Houdini Handles",
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
      "https://www.basketball-reference.com/req/202106291/images/headshots/georgpa01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/736x/3f/1d/6f/3f1d6fd0d4ce41ab60680333f5aaa68e.jpg",
    teamLogoSrc: thunderCurrentLogo,
    teamLogoStyling: thunderCurrentLogoStyling,
  },
  {
    name: "Penny Hardaway",
    position: "PG",
    year: "1995-96",
    team: "ORL",
    franchise: "ORL",
    fullTeamName: orlandoMagic,
    teamColor: magicPrimary,
    teamColor2: magicSecondary,
    teamColor3: magicThird,
    cardColor: BLUE,
    pts75: 30.9,
    ts: +7.9,
    reb75: 6.1,
    ast75: 10.1,
    stk75: 3.6,
    tov75: 4.0,
    bpm: 6.2,
    badges: [
      {
        icon: <MdOutlineSportsKabaddi />,
        color: "hof",
        explanation: "Tough Shot Maker",
      },
      {
        icon: <GiBodyBalance />,
        color: "hof",
        explanation: "Acrobatic/Finesse Finisher",
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
        color: "gold",
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
    // Headshot
    plyrPictureSrc:
      "https://www.basketball-reference.com/req/202106291/images/headshots/hardaan01.jpg",
    // PlayerCard
    plyrCardPictureSrc:
      "https://i.pinimg.com/474x/ab/f2/3f/abf23fc2d44154d46a8c5779dcc75ba1.jpg",
    teamLogoSrc: magicCurrentLogo,
    teamLogoStyling: magicCurrentLogoStyling,
  },
  {
    name: "Willis Reed",
    position: "C",
    year: "0000-00",
    team: "NYK",
    franchise: "NYK",
    fullTeamName: newYorkKnicks,
    teamColor: knicksPrimary,
    teamColor2: knicksSecondary,
    teamColor3: knicksThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/reedwi01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i.pinimg.com/736x/61/37/b1/6137b11b1d801df07fa840bc9c2f8e36.jpg",
    teamLogoSrc: knicksCurrentLogo,
    teamLogoStyling: knicksCurrentLogoStyling,
  },
  {
    name: "Peja Stojaković",
    position: "SF",
    year: "0000-00",
    team: "SAC",
    franchise: "SAC",
    fullTeamName: sacramentoKings,
    teamColor: kingsPrimary,
    teamColor2: kingsSecondary,
    teamColor3: kingsThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/stojape01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i.pinimg.com/736x/48/12/78/481278e38c3f66f4be8ca87eb3359cee.jpg",
    teamLogoSrc: kingsCurrentLogo,
    teamLogoStyling: kingsCurrentLogoStyling,
  },
  {
    name: "Kevin Johnson",
    position: "PG",
    year: "0000-00",
    team: "PHX",
    franchise: "PHX",
    fullTeamName: phoenixSuns,
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/johnske02.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://heavy.com/wp-content/uploads/2024/11/GettyImages-1921633603.jpg?quality=65&strip=all&w=385",
    teamLogoSrc: sunsCurrentLogo,
    teamLogoStyling: sunsCurrentLogoStyling,
  },
  {
    name: "Jerry Lucas",
    position: "PF",
    year: "0000-00",
    team: "CIN",
    franchise: "SAC",
    fullTeamName: cincinnatiRoyals,
    teamColor: kingsPrimary,
    teamColor2: kingsSecondary,
    teamColor3: kingsThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/lucasje01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://cdn.nba.com/manage/2022/02/GettyImages-98147478-scaled.jpg",
    // "https://render.fineartamerica.com/images/rendered/default/poster/6.5/8/break/images-medium/2-jerry-lucas-legendary-basketball-star-everett.jpg",
    teamLogoSrc: kingsOldSchoolLogo,
    teamLogoStyling: kingsOldSchoolLogoStyling,
  },
  {
    name: "Vince Carter",
    position: "SG",
    year: "0000-00",
    team: "TOR",
    franchise: "TOR",
    fullTeamName: torontoRaptors,
    teamColor: raptorsPrimary,
    teamColor2: raptorsSecondary,
    teamColor3: raptorsThird,
    cardColor: RED,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/cartevi01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://www.elitegamingleagues.com/wp-content/uploads/2024/08/image_4b09bc3e-432f-4282-a1d4-5e362cd95584_720x.webp",
    teamLogoSrc: raptorsThrowbackLogo,
    teamLogoStyling: raptorsThrowbackLogoStyling,
  },
  {
    name: "Grant Hill",
    position: "SF",
    year: "0000-00",
    team: "DET",
    franchise: "DET",
    fullTeamName: detroitPistons,
    teamColor: pistonsPrimary,
    teamColor2: pistonsSecondary,
    teamColor3: pistonsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/hillgr01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://townsquare.media/site/44/files/2023/11/attachment-GettyImages-1637346.jpg?w=630&q=75",
    teamLogoSrc: pistonsCurrentLogo,
    teamLogoStyling: pistonsCurrentLogoStyling,
  },
  {
    name: "Larry Nance",
    position: "PF",
    year: "0000-00",
    team: "PHX",
    franchise: "PHX",
    fullTeamName: phoenixSuns,
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/nancela01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://cdn.nba.com/teams/legacy/www.nba.com/suns/sites/suns/files/slam_dunk_84_03.jpg",
    teamLogoSrc: sunsCurrentLogo,
    teamLogoStyling: sunsCurrentLogoStyling,
  },
  {
    name: "Mark Price",
    position: "PG",
    year: "0000-00",
    team: "CLE",
    franchise: "CLE",
    fullTeamName: clevelandCavaliers,
    teamColor: cavaliersThrowbackPrimary,
    teamColor2: cavaliersThrowbackSecondary,
    teamColor3: cavaliersThrowbackThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/pricema01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i.pinimg.com/736x/f1/14/77/f11477566410c7cb376f29df2db4a653.jpg",
    teamLogoSrc: cavaliersAltLogo,
    teamLogoStyling: cavaliersAltLogoStyling,
  },
  {
    name: "Rudy Gobert",
    position: "C",
    year: "0000-00",
    team: "UTA",
    franchise: "UTA",
    fullTeamName: utahJazz,
    teamColor: jazzPrimary,
    teamColor2: jazzSecondary,
    teamColor3: jazzThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/goberru01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://cdn.amomama.com/0adbc0dd91111b8524fb9eee8068659a.jpeg",
    teamLogoSrc: jazzCurrentLogo,
    teamLogoStyling: jazzCurrentLogoStyling,
  },
  {
    name: "Chauncey Billups",
    position: "PG",
    year: "0000-00",
    team: "DET",
    franchise: "DET",
    fullTeamName: detroitPistons,
    teamColor: pistonsPrimary,
    teamColor2: pistonsSecondary,
    teamColor3: pistonsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/billuch01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://cdn.vox-cdn.com/uploads/chorus_image/image/38311270/20131105_kkt_ai5_151.0.jpg",
    teamLogoSrc: pistonsCurrentLogo,
    teamLogoStyling: pistonsCurrentLogoStyling,
  },
  {
    name: "Sam Jones",
    position: "SG",
    year: "0000-00",
    team: "BOS",
    franchise: "BOS",
    fullTeamName: bostonCeltics,
    teamColor: celticsPrimary,
    teamColor2: celticsSecondary,
    teamColor3: celticsThird,
    cardColor: GREEN,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/jonessa01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://goldenrankings.com/Basketball%20Pictures/NBA%20Finals/1960/sam-jones.jpg",
    teamLogoSrc: celticsCurrentLogo,
    teamLogoStyling: celticsCurrentLogoStyling,
  },
  {
    name: "Adrian Dantley",
    position: "SF",
    year: "0000-00",
    team: "UTA",
    franchise: "UTA",
    fullTeamName: utahJazz,
    teamColor: jazzPrimary,
    teamColor2: jazzSecondary,
    teamColor3: jazzThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/dantlad01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://cdn.nba.com/teams/uploads/sites/1610612762/2023/11/GettyImages-499320108.jpg",
    teamLogoSrc: jazzCurrentLogo,
    teamLogoStyling: jazzCurrentLogoStyling,
  },
  {
    name: "Bobby Jones",
    position: "PF",
    year: "1976-77",
    team: "DEN",
    franchise: "DEN",
    fullTeamName: denverNuggets,
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    teamColor3: nuggetsThird,
    cardColor: BLUE,
    pts75: 22.1,
    ts: +9.4,
    reb75: 12.1,
    ast75: 4.7,
    stk75: 6.2,
    tov75: 3.5,
    bpm: 7.0,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/jonesbo01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://media.gettyimages.com/id/499320452/photo/landover-md-bobby-jones-of-the-denver-nuggets-looks-on-against-the-washington-bullets-during.jpg?s=612x612&w=0&k=20&c=n_7Fkmcg-5Z2Yp4GOuG-KwDnQwlG0ijB0s3m4_aAKyI=",
    teamLogoSrc: nuggetsOldSchoolLogo,
    teamLogoStyling: nuggetsCurrentLogoStyling,
  },
  {
    name: "Tiny Archibald",
    position: "PG",
    year: "1972-73",
    team: "KCO",
    franchise: "SAC",
    fullTeamName: "Kansas City-Omaha Kings",
    teamColor: royalsPrimary,
    teamColor2: royalsSecondary,
    teamColor3: royalsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/architi01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i.pinimg.com/236x/82/15/68/821568b756b8b89457959856935020e1.jpg",
    teamLogoSrc: kingsAltLogo,
    teamLogoStyling: kingsAltLogoStyling,
  },
  {
    name: "Marc Gasol",
    position: "C",
    year: "0000-00",
    team: "MEM",
    franchise: "MEM",
    fullTeamName: memphisGrizzlies,
    teamColor: grizzliesPrimary,
    teamColor2: grizzliesSecondary,
    teamColor3: grizzliesThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/gasolma01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://pbs.twimg.com/media/GFNA0qxWUAAxdog.jpg",
    teamLogoSrc: grizzliesCurrentLogo,
    teamLogoStyling: grizzliesCurrentLogoStyling,
  },
  {
    name: "James Worthy",
    position: "SF",
    year: "0000-00",
    team: "LAL",
    franchise: "LAL",
    fullTeamName: losAngelesLakers,
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/worthja01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://media.gettyimages.com/id/1301565577/photo/james-worthy-small-forward-and-power-forward-for-the-los-angeles-lakers-prepares-to-shoot-a.jpg?s=612x612&w=0&k=20&c=okLC1CeD7z5ov6XdEdtuZz107GmNwdwsaWulwek9e9w=",
    teamLogoSrc: lakersCurrentLogo,
    teamLogoStyling: lakersCurrentLogoStyling,
  },
  {
    name: "Jeff Hornacek",
    position: "SG",
    year: "1991-92",
    team: "PHX",
    franchise: "PHX",
    fullTeamName: phoenixSuns,
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: PURPLE,
    pts75: 0.0,
    ts: +7.3,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/hornaje01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://media.gettyimages.com/id/533091524/photo/phoenix-suns-jeff-hornacek-in-action-vs-los-angeles-lakers-at-the-forum-inglewood-ca-credit.jpg?s=612x612&w=0&k=20&c=qmO9v7KeIjxUpnuWg8lgymljZY8QfBurs01HUmxf_8g=",
    teamLogoSrc: sunsAltLogo,
    teamLogoStyling: sunsAltLogoStyling,
  },
  {
    name: "Chris Mullin",
    position: "SF",
    year: "0000-00",
    team: "GSW",
    franchise: "GSW",
    fullTeamName: goldenStateWarriors,
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/mullich01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://a.espncdn.com/photo/2020/0501/r694836_864x1296_2-3.jpg",
    teamLogoSrc: warriorsThrowbackLogo,
    teamLogoStyling: warriorsThrowbackLogoStyling,
  },
  {
    name: "Dan Issel",
    position: "C",
    year: "0000-00",
    team: "DEN",
    franchise: "DEN",
    fullTeamName: denverNuggets,
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    teamColor3: nuggetsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/isselda01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://images.squarespace-cdn.com/content/v1/5361973ee4b0482b3e2dd960/00de6197-7388-4d95-bf8e-621d2696bf5e/dan+issel5.jpg",
    teamLogoSrc: nuggetsCurrentLogo,
    teamLogoStyling: nuggetsCurrentLogoStyling,
  },
  {
    name: "DeMar DeRozan",
    position: "SG",
    year: "2016-17",
    team: "TOR",
    franchise: "TOR",
    fullTeamName: torontoRaptors,
    teamColor: raptorsPrimary,
    teamColor2: raptorsSecondary,
    teamColor3: raptorsThird,
    cardColor: RED,
    pts75: 0.0,
    ts: +0.8,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/derozde01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://images.complex.com/complex/image/upload/v1723878217/sanity-new/gcd1isd5icolkmjwdagg.jpg-134288337.jpg",
    teamLogoSrc: raptorsCurrentLogo,
    teamLogoStyling: raptorsCurrentLogoStyling,
  },
  {
    name: "LaMarcus Aldridge",
    position: "PF",
    year: "0000-00",
    team: "POR",
    franchise: "POR",
    fullTeamName: portlandTrailblazers,
    teamColor: trailblazersPrimary,
    teamColor2: trailblazersSecondary,
    teamColor3: trailblazersThird,
    cardColor: RED,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/aldrila01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://cdn.nba.com/teams/legacy/www.nba.com/blazers/sites/blazers/files/legacy/photos/463404129.jpg",
    teamLogoSrc: trailblazersCurrentLogo,
    teamLogoStyling: trailblazersCurrentLogoStyling,
  },
  {
    name: "KiKi Vandeweghe",
    position: "SF",
    year: "1983-84",
    team: "DEN",
    franchise: "DEN",
    fullTeamName: denverNuggets,
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    teamColor3: nuggetsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/vandeki01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://pm1.aminoapps.com/7232/cbf061d720fe03b9f47225839532b63bc56e587dr1-346-500v2_00.jpg",
    teamLogoSrc: nuggetsCurrentLogo,
    teamLogoStyling: nuggetsCurrentLogoStyling,
  },
  {
    name: "Tim Hardaway",
    position: "PG",
    year: "1991-92",
    team: "GSW",
    franchise: "GSW",
    fullTeamName: goldenStateWarriors,
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/hardati01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://external-preview.redd.it/1xwrgmigjPFI8AZuzE7Nig_cwqAby5_T1PrWj2xiUKE.jpg?auto=webp&s=120e6cab6aeb632231129173a018cb8c318f8756",
    teamLogoSrc: warriorsThrowbackLogo,
    teamLogoStyling: warriorsThrowbackLogoStyling,
  },
  {
    name: "Billy Cunningham",
    position: "SF",
    year: "1972-73",
    team: "CAR",
    franchise: "CHA",
    fullTeamName: "Carolina Cougars (ABA)",
    teamColor: cougarsPrimary,
    teamColor2: cougarsSecondary,
    teamColor3: cougarsThird,
    cardColor: GREEN,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/cunnibi01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://from-way-downtown.com/wp-content/uploads/2021/11/img_1273.jpg?w=1568",
    teamLogoSrc: cougarsLogo,
    teamLogoStyling: cougarsLogoStyling,
  },
  {
    name: "Vern Mikkelsen",
    position: "PF",
    year: "0000-00",
    team: "LAL",
    franchise: "LAL",
    fullTeamName: losAngelesLakers,
    teamColor: lakersPrimary,
    teamColor2: lakersSecondary,
    teamColor3: lakersThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/mikkeve01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://images.findagrave.com/photos/2013/325/120671417_138514884678.jpg?size=photos250",
    teamLogoSrc: lakersCurrentLogo,
    teamLogoStyling: lakersCurrentLogoStyling,
  },
  {
    name: "Bob Lanier",
    position: "C",
    year: "0000-00",
    team: "DET",
    franchise: "DET",
    fullTeamName: detroitPistons,
    teamColor: pistonsPrimary,
    teamColor2: pistonsSecondary,
    teamColor3: pistonsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/laniebo01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://assets.sbnation.com/assets/961384/Bob_Lanier_72_home.jpg",
    teamLogoSrc: pistonsCurrentLogo,
    teamLogoStyling: pistonsCurrentLogoStyling,
  },
  {
    name: "Deron Williams",
    position: "PG",
    year: "0000-00",
    team: "UTA",
    franchise: "UTA",
    fullTeamName: utahJazz,
    teamColor: jazzPrimary,
    teamColor2: jazzSecondary,
    teamColor3: jazzThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/willide01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://lh3.googleusercontent.com/proxy/kf3zXwCIvoB6Opey34g6p1qp-flf4KqsVG5681OIROAoh9kH70GigiJJhdbPdTT7lkSk8SMOMwFImYF1JGjJ9NjTVHzOoX1GTQ",
    teamLogoSrc: jazzCurrentLogo,
    teamLogoStyling: jazzCurrentLogoStyling,
  },
  {
    name: "Lou Hudson",
    position: "SF",
    year: "0000-00",
    team: "ATL",
    franchise: "ATL",
    fullTeamName: atlantaHawks,
    teamColor: hawksPrimary,
    teamColor2: hawksSecondary,
    teamColor3: hawksThird,
    cardColor: RED,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/hudsolo01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i.redd.it/t55959ja9wob1.jpg",
    teamLogoSrc: hawksCurrentLogo,
    teamLogoStyling: hawksCurrentLogoStyling,
  },
  {
    name: "Neil Johnston",
    position: "C",
    year: "1954-55",
    team: "PHW",
    franchise: "GSW",
    fullTeamName: philadelphiaWarriors,
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/johnsne01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://miro.medium.com/v2/resize:fit:299/1*hmYRYZ9-VASSMLQurxeM4A.jpeg",
    teamLogoSrc: warriorsOldSchoolLogo,
    teamLogoStyling: warriorsOldSchoolLogoStyling,
  },
  {
    name: "Rasheed Wallace",
    position: "PF",
    year: "0000-00",
    team: "POR",
    franchise: "POR",
    fullTeamName: portlandTrailblazers,
    teamColor: trailblazersPrimary,
    teamColor2: trailblazersSecondary,
    teamColor3: trailblazersThird,
    cardColor: RED,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/wallara01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://media.gettyimages.com/id/1695394/photo/east-rutherford-nj-rasheed-wallace-of-the-portland-trail-blazers-smiles-during-the-nba-game.jpg?s=612x612&w=0&k=20&c=BuAps7M23GpeXG1dNyiImbiklULlLHKFfwdW0eCAnF4=",
    teamLogoSrc: trailblazersCurrentLogo,
    teamLogoStyling: trailblazersCurrentLogoStyling,
  },
  {
    name: "Paul Westphal",
    position: "SG",
    year: "0000-00",
    team: "PHX",
    franchise: "PHX",
    fullTeamName: phoenixSuns,
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/westppa01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://minutemedia-ressh.cloudinary.com/image/upload/v1695294154/shape/cover/sport/2bc71822d47a8b46fb36ae4d97a5554115c41ba394f58f390b3119b677dff1ff.jpg",
    teamLogoSrc: sunsThrowbackLogo,
    teamLogoStyling: sunsThrowbackLogoStyling,
  },
  {
    name: "Alex English",
    position: "SF",
    year: "0000-00",
    team: "DEN",
    franchise: "DEN",
    fullTeamName: denverNuggets,
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    teamColor3: nuggetsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/englial01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/denver-nuggets-alex-english-scott-cunningham.jpg",
    teamLogoSrc: nuggetsCurrentLogo,
    teamLogoStyling: nuggetsCurrentLogoStyling,
  },
  {
    name: "Kyle Lowry",
    position: "PG",
    year: "0000-00",
    team: "TOR",
    franchise: "TOR",
    fullTeamName: torontoRaptors,
    teamColor: raptorsPrimary,
    teamColor2: raptorsSecondary,
    teamColor3: raptorsThird,
    cardColor: RED,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/lowryky01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://cdn.hoopsrumors.com/files/2017/05/USATSI_10007349_168380616_lowres.jpg",
    teamLogoSrc: raptorsCurrentLogo,
    teamLogoStyling: raptorsCurrentLogoStyling,
  },
    {
    name: "Nate Thurmond",
    position: "C",
    year: "0000-00",
    team: "GSW",
    franchise: "GSW",
    fullTeamName: goldenStateWarriors,
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/thurmna01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/465782518_9061177107248115_675755627296593274_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=LaAd0GskMfMQ7kNvgEMhDpb&_nc_oc=Adm2mp05k5oW4sJv8YIt45A_7WmKkM7iv0ryXgbNc2K2tt9OSVlRme3e0t3-AotIKPVnxmDizLvbo56XxyFuaLFn&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=I_-DyJEVgP0SPnzCN8Av0A&oh=00_AYGeRCQmZo1pHvFq5Nr5kVKtpOj3aNBVuZjr3_OkI25EwQ&oe=67F47A14",
    teamLogoSrc: warriorsAltThrowbackLogo,
    teamLogoStyling: warriorsAltThrowbackLogoStyling,
  },
  {
    name: "Allen Iverson",
    position: "SG",
    year: "0000-00",
    team: "PHI",
    franchise: "PHI",
    fullTeamName: philadelphiaSeventySixers,
    teamColor: sixersAltPrimary,
    teamColor2: sixersAltSecondary,
    teamColor3: sixersAltThird,
    cardColor: RED,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/iversal01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i.pinimg.com/474x/3e/11/1d/3e111d226cdf794a9348178f26823c9c.jpg",
    teamLogoSrc: sixersAltLogo,
    teamLogoStyling: sixersAltLogoStyling,
  },
  {
    name: "Carmelo Anthony",
    position: "SF",
    year: "0000-00",
    team: "DEN",
    franchise: "DEN",
    fullTeamName: denverNuggets,
    teamColor: nuggetsPrimary,
    teamColor2: nuggetsSecondary,
    teamColor3: nuggetsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/anthoca01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://imageio.forbes.com/specials-images/imageserve/646b9b77976ffbea12b502f7/Denver-Nuggets-v-Los-Angeles-Lakers--Game-2/0x0.jpg?crop=1998,2996,x0,y0,safe&height=1066&width=711&fit=bounds",
    teamLogoSrc: nuggetsCurrentLogo,
    teamLogoStyling: nuggetsCurrentLogoStyling,
  },
  {
    name: "Dennis Johnson",
    position: "PG",
    year: "1981-82",
    team: "PHX",
    franchise: "PHX",
    fullTeamName: phoenixSuns,
    teamColor: sunsPrimary,
    teamColor2: sunsSecondary,
    teamColor3: sunsThird,
    cardColor: PURPLE,
    pts75: 26.3,
    ts: +0,
    reb75: 6.3,
    ast75: 8.0,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/johnsde01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://cdn.nba.com/teams/legacy/www.nba.com/suns/sites/suns/files/2s80s.jpg",
    teamLogoSrc: sunsThrowbackLogo,
    teamLogoStyling: sunsThrowbackLogoStyling,
  },
  {
    name: "Mark Eaton",
    position: "C",
    year: "0000-00",
    team: "UTA",
    franchise: "UTA",
    fullTeamName: utahJazz,
    teamColor: jazzPrimary,
    teamColor2: jazzSecondary,
    teamColor3: jazzThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/eatonma01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://people.com/thmb/L7Cp7PQ7YkSnqf4dt8vbUJalVHU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(678x19:680x21)/Mark-Eaton--0a4a4552eafe43e39dd975d1648d2329.jpg",
    teamLogoSrc: jazzCurrentLogo,
    teamLogoStyling: jazzCurrentLogoStyling,
  },
    {
    name: "Klay Thompson",
    position: "SG",
    year: "0000-00",
    team: "GSW",
    franchise: "GSW",
    fullTeamName: goldenStateWarriors,
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/thompkl01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://i.pinimg.com/474x/ce/84/38/ce843800d2b0dc28095cf7299c963567.jpg",
    teamLogoSrc: warriorsCurrentLogo,
    teamLogoStyling: warriorsCurrentLogoStyling,
  },
  {
    name: "Pete Maravich",
    position: "SG",
    year: "1976-77",
    team: "NOJ",
    franchise: "UTA",
    fullTeamName: newOrleansJazz,
    teamColor: jazzPrimary,
    teamColor2: jazzSecondary,
    teamColor3: jazzThird,
    cardColor: PURPLE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/maravpe01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://cdn.nba.com/teams/legacy/www.nba.com/magic/sites/magic/files/sg7_1.jpg",
    teamLogoSrc: jazzThrowbackLogo,
    teamLogoStyling: jazzThrowbackLogoStyling,
  },
      {
    name: "Draymond Green",
    position: "PF",
    year: "0000-00",
    team: "GSW",
    franchise: "GSW",
    fullTeamName: goldenStateWarriors,
    teamColor: warriorsPrimary,
    teamColor2: warriorsSecondary,
    teamColor3: warriorsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/greendr01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://www.usatoday.com/gcdn/presto/2019/10/02/USAT/0d38cd04-4bce-475b-8fd0-65210a6aa7ea-USP_NBA__Playoffs-Golden_State_Warriors_at_Portlan.JPG",
    teamLogoSrc: warriorsCurrentLogo,
    teamLogoStyling: warriorsCurrentLogoStyling,
  },
      {
    name: "Joe Dumars",
    position: "SG",
    year: "0000-00",
    team: "DET",
    franchise: "DET",
    fullTeamName: detroitPistons,
    teamColor: pistonsPrimary,
    teamColor2: pistonsSecondary,
    teamColor3: pistonsThird,
    cardColor: BLUE,
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
    plyrPictureSrc: "https://www.basketball-reference.com/req/202106291/images/headshots/dumarjo01.jpg",
    // PlayerCard
    plyrCardPictureSrc: "https://michigansportshof.org/mshof/wp-content/uploads/2019/01/joe-dumars.jpg",
    teamLogoSrc: pistonsCurrentLogo,
    teamLogoStyling: pistonsCurrentLogoStyling,
  },
  // {
  //   name: "NEW PLAYER",
  //   position: "",
  //   year: "0000-00",
  //   team: "ABV",
  //   franchise: "SAC",
  //   fullTeamName: "***",
  //   teamColor: "***",
  //   teamColor2: "***",
  //   teamColor3: "***",
  //   cardColor: "***",
  //   pts75: 0.0,
  //   ts: +0,
  //   reb75: 0.0,
  //   ast75: 0.0,
  //   stk75: 0.0,
  //   tov75: 0.0,
  //   bpm: 0.0,
  //   badges: [
  //     {
  //       icon: <MdSportsHandball />,
  //       color: "bronze",
  //       explanation: "Lob/Putback/Dunk Master",
  //     },
  //     {
  //       icon: <MdOutlineSportsKabaddi />,
  //       color: "bronze",
  //       explanation: "Tough Shot Maker",
  //     },
  //     {
  //       icon: <FaTools />,
  //       color: "bronze",
  //       explanation: "Post Move Technician",
  //     },
  //     {
  //       icon: <ImMagnet />,
  //       color: "bronze",
  //       explanation: "Rebound Magnet",
  //     },
  //     {
  //       icon: <SiAdblock />,
  //       color: "bronze",
  //       explanation: "Shot Block Artist",
  //     },
  //     {
  //       icon: <FaAnchor />,
  //       color: "bronze",
  //       explanation: "Defensive Anchor",
  //     },
  //     {
  //       icon: <RiTeamFill />,
  //       color: "bronze",
  //       explanation: "Switchable Specialist",
  //     },
  //     {
  //       icon: <FaLock />,
  //       color: "bronze",
  //       explanation: "Lockdown Post Defender",
  //     },
  //   ],
  //   teamScoring: 8.75,
  //   teamEfficiency: 5.5,
  //   teamSpacing: 7.5,
  //   teamFinishing: 9.75,
  //   teamPassing: 7.5,
  //   teamCreation: 7,
  //   teamOffRebounding: 5,
  //   //
  //   teamInteriorDef: 3,
  //   teamPerimeterDef: 8.5,
  //   teamSwitchability: 4.5,
  //   teamDefIntangibles: 7,
  //   teamDefPlaymaking: 7.75,
  //   teamDefRebounding: 7,
  //   //
  //   teamOffChemRating: 0,
  //   teamDefChemRating: 0.65,
  //   teamTotalChemRating: 0.65,
  //   teamOffImpact: 3.37,
  //   teamDefImpact: 0.5,
  //   teamTotalImpact: 3.9,
  //   // Headshot
  //   plyrPictureSrc: "",
  //   // PlayerCard
  //   plyrCardPictureSrc: "",
  //   teamLogoSrc: "***",
  //   teamLogoStyling: "***",
  // },
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
    info: "Acrobatic/Finesse Finisher",
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
    info: "Off-Ball Gravity",
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
        explanation: "Acrobatic/Finesse Finisher",
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
        explanation: "Off-Ball Gravity",
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