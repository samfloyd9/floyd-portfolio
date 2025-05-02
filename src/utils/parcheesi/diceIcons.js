import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";

export const getDieImg = (dieResult) => {
  switch (dieResult) {
    case 1: return <GiInvertedDice1 className="text-4xl" />;
    case 2: return <GiInvertedDice2 className="text-4xl" />;
    case 3: return <GiInvertedDice3 className="text-4xl" />;
    case 4: return <GiInvertedDice4 className="text-4xl" />;
    case 5: return <GiInvertedDice5 className="text-4xl" />;
    case 6: return <GiInvertedDice6 className="text-4xl" />;
    default: return null;
  }
};
