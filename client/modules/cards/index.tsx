import { useState } from "react";
import ReactTooltip from "react-tooltip";
import randomColor from "randomcolor";
// import format from "date-fns/format";

import { useContract } from "../../common/custom-hooks/use-contract";
import wavePortal from "../../../artifacts/contracts/WavePortal.sol/WavePortal.json";

import Info from "../../public/svgs/info.svg";

const Cards = () => {
  const [waves, setWaves] = useState([
    {
      message: "Hello Hello Otonge o",
      address: "2435678976543fgdhjhhggfg3546765",
      timestamp: "June 3rd, 2020",
      color: randomColor({ luminosity: "light" }),
    },
    {
      message: "Bam bam lala",
      address: "24356789756783fgdhjhhggfg3546765",
      timestamp: "July 30rd, 2020",
      color: randomColor({ luminosity: "light" }),
    },
  ]);

  return (
    <div
      className={`w-11/12 mx-auto grid mt-16 grid-cols-auto gap-4
`}
    >
      {waves.map((wave, index) => {
        return (
          <div
            key={index}
            className="p-3 rounded-md shadow-lg h-40 flex flex-col justify-between"
            style={{ backgroundColor: wave.color }}
          >
            <div className="overflow-y-scroll h-40">
              <p>{wave.message}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">
                {wave.timestamp}
                {/* {format(new Date(wave.timestamp.toString()), "MMM d, yyyy")} */}
              </p>
              <div>
                <p data-tip={"From: " + wave.address}>
                  <Info className="w-4 h-4" />
                </p>
                <ReactTooltip place="top" type="dark" effect="float" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
