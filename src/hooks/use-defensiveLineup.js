import { useState } from "react";

export default function useDefenseLineup() {
  const [leftDefensiveTackle, setLeftDefensiveTackle] = useState([{ template: "Select a LDT from the list" }]);
  const [noseTackle, setNoseTackle] = useState([{ template: "Select a NT from the list" }]);
  const [rightDefensiveTackle, setRightDefensiveTackle] = useState([{ template: "Select a RDT from the list" }]);

  const [leftDefensiveEnd, setLeftDefensiveEnd] = useState([{ template: "Select a LDE from the list" }]);
  const [rightDefensiveEnd, setRightDefensiveEnd] = useState([{ template: "Select a RDE from the list" }]);

  const [rightOutsideLinebacker, setRightOutsideLinebacker] = useState([{ template: "Select a ROLB from the list" }]);
  const [leftOutsideLinebacker, setLeftOutsideLinebacker] = useState([{ template: "Select a LOLB from the list" }]);

  const [middleLinebacker1, setMiddleLinebacker1] = useState([{ template: "Select a MLB from the list" }]);
  const [middleLinebacker2, setMiddleLinebacker2] = useState([{ template: "Select a MLB from the list" }]);

  const [freeSafety, setFreeSafety] = useState([{ template: "Select a FS from the list" }]);
  const [strongSafety, setStrongSafety] = useState([{ template: "Select a SS from the list" }]);

  const [cornerback1, setCornerback1] = useState([{ template: "Select a CB from the list" }]);
  const [cornerback2, setCornerback2] = useState([{ template: "Select a CB from the list" }]);
  const [cornerback3, setCornerback3] = useState([{ template: "Select a CB from the list" }]);
  const [cornerback4, setCornerback4] = useState([{ template: "Select a CB from the list" }]);

  return {
    noseTackle, setNoseTackle,
    leftDefensiveTackle, setLeftDefensiveTackle,
    rightDefensiveTackle, setRightDefensiveTackle,
    leftDefensiveEnd, setLeftDefensiveEnd,
    rightDefensiveEnd, setRightDefensiveEnd,
    rightOutsideLinebacker, setRightOutsideLinebacker,
    leftOutsideLinebacker, setLeftOutsideLinebacker,
    middleLinebacker1, setMiddleLinebacker1,
    middleLinebacker2, setMiddleLinebacker2,
    freeSafety, setFreeSafety,
    strongSafety, setStrongSafety,
    cornerback1, setCornerback1,
    cornerback2, setCornerback2,
    cornerback3, setCornerback3,
    cornerback4, setCornerback4,
  };
}
