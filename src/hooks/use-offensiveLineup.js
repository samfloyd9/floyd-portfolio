import { useState } from "react";

export default function useOffenseLineup() {
  const [quarterback, setQuarterback] = useState([{ template: "Select a QB" }]);
  const [runningback1, setRunningback1] = useState([{ template: "Select a RB" }]);
  const [runningback2, setRunningback2] = useState([{ template: "Select a RB" }]);
  const [fullBack, setFullBack] = useState([{ template: "Select a FB" }]);
  const [tightEnd1, setTightEnd1] = useState([{ template: "Select a TE" }]);
  const [tightEnd2, setTightEnd2] = useState([{ template: "Select a TE" }]);
  const [tightEnd3, setTightEnd3] = useState([{ template: "Select a TE" }]);
  const [reciever1, setReciever1] = useState([{ template: "Select a WR" }]);
  const [reciever2, setReciever2] = useState([{ template: "Select a WR" }]);
  const [reciever3, setReciever3] = useState([{ template: "Select a WR" }]);
  const [reciever4, setReciever4] = useState([{ template: "Select a WR" }]);
  const [offensiveLine, setOffensiveLine] = useState([
    { template: "Select a LT" },
    { template: "Select a LG" },
    { template: "Select a C" },
    { template: "Select a RG" },
    { template: "Select a RT" },
  ]);

  return {
    quarterback, setQuarterback,
    offensiveLine, setOffensiveLine,
    runningback1, setRunningback1,
    runningback2, setRunningback2,
    fullBack, setFullBack,
    tightEnd1, setTightEnd1,
    tightEnd2, setTightEnd2,
    tightEnd3, setTightEnd3,
    reciever1, setReciever1,
    reciever2, setReciever2,
    reciever3, setReciever3,
    reciever4, setReciever4
  };
}
