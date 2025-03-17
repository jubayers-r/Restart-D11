import { useEffect, useState } from "react";
import Player from "../3.1 Player/Player";
import Selected from "../3.2 Selected/Selected";
const PlayersToggle = ({handleDeselected, handleSelected, selected, coin, setCoin}) => {
    const [toggle, setToggle] = useState(true);
    const [players, setPlayers] = useState([]);
    useEffect(() => {
    fetch("../../../../public/players.json")
    .then((res) => res.json())
    .then((data) => setPlayers(data));
    }, []);
    return (
        <>
        <div className="flex justify-between place-items-center py-5 sm:py-9 lg:py-12">
        <h1 className="sm:text-2xl sm:font-bold font-semibold text-lg">{toggle ? 'Available Players' : `Selected Players (${selected.length}/6)`}</h1>
        <div className="border border-gray-300 rounded-xl">
        <h1
          onClick={() => setToggle(true)}
          className={`px-5 sm:px-7 py-3 rounded-l-xl btn ${
            toggle ? "bg-[#E7FE29]" : ""
          }`}
        >
          Available
          {}
        </h1>
        <h1
          onClick={() => setToggle(!toggle)}
          className={`px-5 sm:px-7 py-3 rounded-r-xl btn ${
            !toggle ? "bg-[#E7FE29]" : ""
          }`}
        >
          Selected
        </h1>
      </div>
        </div>
        <div className="col-span-4">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-10">
      { toggle ?  players.map((player , index) => <Player key ={index} player={player} handleSelected ={handleSelected} coin ={coin} setCoin={setCoin}></Player>) : selected.map((player, index) => <Selected key ={index} selected = {player} handleDeselected = {handleDeselected}></Selected>) }
      </div>
      { !toggle ? <button onClick={() => setToggle(!toggle)} className="my-5 btn bg-[#E7FE29] xl:p-6.5 md:p-4 p-2 ring-1 ring-gray-400 border-white xl:border-8 border-4 rounded-2xl md:font-bold lg:text-xl md:text-lg">Add More Players</button> : "" }
      </div>
        </>
    );
};

export default PlayersToggle;