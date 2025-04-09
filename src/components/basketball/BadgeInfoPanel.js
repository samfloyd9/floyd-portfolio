import { useState } from "react";
import { ImTarget, ImEarth, ImDribbble, ImMagnet } from "react-icons/im";
import { MdOutlineSportsKabaddi, MdSportsHandball } from "react-icons/md";
import { FaWifi, FaHatWizard, FaTools, FaLock, FaAnchor } from "react-icons/fa";
import {
  GiWhistle,
  GiBodyBalance,
  GiWreckingBall,
  GiHandcuffs,
  GiMonsterGrasp,
  GiBrain,
  GiEmbrassedEnergy,
} from "react-icons/gi";
import { SiAdblock } from "react-icons/si";
import { RiTeamFill, RiHandCoinLine } from "react-icons/ri";
import { TbEngine } from "react-icons/tb";

// Accordion-like section for each badge category
const CollapsibleSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left font-semibold bg-gray-100 px-3 py-2 rounded hover:bg-gray-200"
      >
        {isOpen ? "▼" : "▶"} {title}
      </button>
      {isOpen && (
        <div className="mt-2 space-y-2 px-2">
          {items.map((badge, idx) => (
            <div key={idx} className="flex flex-row items-start">
              <div className="mr-2 bg-gray-300 rounded p-1">{badge.icon}</div>
              <div className="text-sm">
                <span className="font-bold">{badge.explanation}:</span>{" "}
                {badge.description}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Badge definitions and example descriptions
const offensiveBadges = [
  {
    icon: <ImTarget />,
    explanation: "Deadeye Shooter",
    description:
      "Elite at converting open/contested shots, especially from mid and long range. Ex. Miller, Thompson, Korver",
  },
  {
    icon: <MdOutlineSportsKabaddi />,
    explanation: "Tough Shot Maker",
    description:
      "Specialist in hitting tough fadeaways, stepbacks, or shots with heavy defense, late in the game or shot clock. Ex. Kobe, West",
  },
  {
    icon: <MdSportsHandball />,
    explanation: "Lob/Putback/Dunk Master",
    description: "High-level finisher above the rim with elite verticality, power, creativity, and frequency. Ex. Griffin, Kemp",
  },
  {
    icon: <FaWifi />,
    explanation: "Limitless Range",
    description:
      "Exceptional deep-range shooter, including logo threes. Relative to era. Ex: Curry, Lillard, Bird, Maravich.",
  },
  {
    icon: <FaHatWizard />,
    explanation: "Middy Magician",
    description:
      "Deadly from midrange. Excellent footwork, balance, and elevation with frequency and efficiency factored Ex. Nowitzki, Durant",
  },
  {
    icon: <GiWhistle />,
    explanation: "Foul Drawer",
    description: "Consistently gets to the line via contact and savvy moves. Ex. Shaq, Harden, Embiid",
  },
  {
    icon: <GiBodyBalance />,
    explanation: "Acrobatic Finisher",
    description: "Known for body control and creative finishes around rim. Ex. Kyrie, Jordan, Iverson",
  },
  {
    icon: <GiWreckingBall />,
    explanation: "Contact Finisher",
    description: "Excels at converting through physicality and contact. Ex. LeBron, Giannis, Zion",
  },
  {
    icon: <FaTools />,
    explanation: "Post Move Technician",
    description: "Footwork, fakes, spins, hooks, fades dominant low-post scoring skillset. Ex. Hakeem, McHale",
  },
];

const playmakingBadges = [
  {
    icon: <TbEngine />,
    explanation: "Offensive Engine",
    description: "Initiates and sustains the offense at a high level through playmaking and creating. Ex. Magic, Nash",
  },
  {
    icon: <RiHandCoinLine />,
    explanation: "Dime Dropper",
    description: "Skilled passer, makes advanced reads to generate assists. Ex. Bird, Jokic, Kidd",
  },
  {
    icon: <ImEarth />,
    explanation: "Off-Ball Gravity",
    description: "Draws attention away from ball-handler just by moving. Ex. RIP Hamilton, Miller, Curry, Shaq",
  },
  {
    icon: <ImDribbble />,
    explanation: "Houdini Handles",
    description:
      "Crafty, elusive with dribble. Ex: Kyrie, AI, Tim Hardaway, Cousy.",
  },
];

const defensiveBadges = [
  {
    icon: <FaLock />,
    explanation: "Lockdown Post Defender",
    description:
      "Strong low-block stopper. Uses size, positioning, and strength. Ex. Thurmond, Duncan, Robinson",
  },
  {
    icon: <GiHandcuffs />,
    explanation: "Perimeter Handcuffs",
    description:
      "Suffocates ball-handlers. Elite lateral quickness and instincts. Ex. Moncrief, Pippen, Leonard",
  },
  {
    icon: <SiAdblock />,
    explanation: "Shot Block Artist",
    description: "Protects the rim with elite timing and length. Ex. Chamberlain, Mutombo, Eaton",
  },
  {
    icon: <RiTeamFill />,
    explanation: "Switchable Specialist",
    description: "Can guard multiple positions. Versatile and mobile. Ex. LeBron, Kirilenko, Garnett",
  },
  {
    icon: <FaAnchor />,
    explanation: "Defensive Anchor",
    description:
      "The glue of a team defense. Communicates, rotates, and leads. Ex. Ben Wallace, Russell, Gobert",
  },
  {
    icon: <GiMonsterGrasp />,
    explanation: "Pick Pocket/Interceptor",
    description: "Generates turnovers through steals, deflections, and jumps. Ex. Jordan, Stockton, Chris Paul",
  },
  {
    icon: <GiBrain />,
    explanation: "High IQ Defender",
    description: "Elite off-ball reads, anticipation, and rotations. Ex. Draymond, Duncan, Olajuwon",
  },
  {
    icon: <GiEmbrassedEnergy />,
    explanation: "High Energy Defender",
    description: "Hustle plays, relentless effort on closeouts and contests. Ex. Rodman, Garnett, Bobby Jones",
  },
];

const reboundingBadges = [
  {
    icon: <ImMagnet />,
    explanation: "Rebound Magnet",
    description: "Excellent positioning and timing for boards on both ends. Ex. Chamberlain, Moses Malone, Barkley",
  },
];

const statInfo = [
  { label: "Pts", info: "Points Per 75 Possessions" },
  { label: "rTS%", info: "Relative True Shooting %" },
  { label: "Reb", info: "Rebounds Per 75 Possessions" },
  { label: "Ast", info: "Assists Per 75 Possessions" },
  { label: "Stk", info: "Steals + Blocks Per 75" },
  { label: "Tov", info: "Turnovers Per 75 Possessions" },
  { label: "BPM", info: "Box Plus/Minus" },
];

const badgeColorInfo = [
  {
    label: "L",
    color: "bg-rose-500 text-white",
    name: "Legendary",
    description: "Generational or GOAT-level mastery of this skill (Top 15 All-Time)",
  },
  {
    label: "H",
    color: "bg-purple-600 text-white",
    name: "Hall of Fame",
    description: "Hall of Fame caliber skill — iconic and dominant (Top 50 All-Time)",
  },
  {
    label: "G",
    color: "bg-yellow-300 text-black",
    name: "Gold",
    description: "All-NBA caliber skill - highly reliable with elite impact",
  },
  {
    label: "S",
    color: "bg-gray-300 text-black",
    name: "Silver",
    description: "All-Star level skill — consistant and impactful",
  },
  {
    label: "B",
    color: "bg-yellow-600 text-white",
    name: "Bronze",
    description: "Solid Starter-level skill — solid and valuable",
  },
];

const badgeColorRender = badgeColorInfo.map((tier) => (
  <div key={tier.label} className="flex items-center mb-1">
    {/* Badge label with color */}
    <div className={`rounded px-2 py-0.5 mr-2 text-xs ${tier.color}`}>
      {tier.label}
    </div>

    {/* Tier name and description */}
    <div className="text-sm">
      <span className="font-semibold">{tier.name}: </span>
      {tier.description}
    </div>
  </div>
));

// Main export to use inside Modal
export function BadgeInfoPanel() {
  return (
    <div className="max-h-[75vh] overflow-y-auto px-3 py-4 text-sm">
      <div className="mb-4">
        <h2 className="font-bold text-md underline mb-2">Stat Definitions:</h2>
        {statInfo.map((stat) => (
          <div key={stat.label} className="mb-1 flex flex-row">
            <div className="font-bold w-16">{stat.label}:</div>
            <div>{stat.info}</div>
          </div>
        ))}
      </div>

      <CollapsibleSection title="Offensive Badges" items={offensiveBadges} />
      <CollapsibleSection title="Playmaking Badges" items={playmakingBadges} />
      <CollapsibleSection title="Defensive Badges" items={defensiveBadges} />
      <CollapsibleSection title="Rebounding Badges" items={reboundingBadges} />

      {/* Badge Tier Legend Section */}
      <div className="mt-6">
        <h2 className="font-bold text-md underline mb-2">Badge Tiers:</h2>

        {/* Tier mapping */}
        {badgeColorRender}
      </div>
    </div>
  );
}

export default BadgeInfoPanel;
