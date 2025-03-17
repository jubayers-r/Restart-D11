import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const handleSuccess = () => {
  toast.success('Player added successfully!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
}
const handleInsufficientCoins = () => {
  toast.error('Insufficient coin! Claim more coin.', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
}
const handleSoldMessage = () => {
  toast.error('You cannot buy the same player twice. Select another player:)', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
}
const handlePlayerFull = () => {
  toast.error('Already 6 players are selected, you cannot select more than that:(', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
  });
}


const Player = ({ player, handleSelected, coin, setCoin, selected, isSold, setIsSold}) => {
  const { name, country, type_of_player, playing_style, price_usd, picture } =
    player;


    const isAffordable = (player.price_usd <=  coin);
    const newCoin =() =>{
      const isExist = selected.find(select=> select.id == player.id);
        if (isAffordable && (selected.length < 6 && !isExist)  ){
          setCoin(coin - price_usd)
        }
    }

    const combination = () => {
      setIsSold(!isSold); handleSelected(player); newCoin();
    }
    return (
      <div className="card bg-base-100 shadow-lg p-6 ">
      <figure className="h-[300px] max-w-[700px] rounded-2xl">
        <img src={picture} alt={name} className="w-full h-full object-cover" />
      </figure>
      <div></div>
      <div className="card-body">
        <div className="flex gap-2">
          <img
            src="https://img.icons8.com/?size=48&id=YRJN4lBDhzh8&format=png"
            alt="profile"
            className="h-7 w-7"
          />
          <h2 className="card-title">{name}</h2>
        </div>
        <div className="flex justify-between place-items-center pb-2">
          <div className="flex gap-2 justify-center">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/pulsar-line/48/flag.png"
              alt="flag"
            />
            <h3 className="text-black/70">{country}</h3>
          </div>
          <h1 className="text-black px-4 py-2 rounded-lg bg-gray-200">
            {type_of_player}
          </h1>
        </div>
        <hr className="text-black/10 pb-2" />
        <div className="grid gap-4">
          <h1 className="font-bold">Rating</h1>
          <div className="flex justify-between">
            {playing_style.map((style , index) => (
              <h1 key={index}> {style}</h1>
            ))}
          </div>
          <div className="flex justify-between place-items-center">
            <h1 className="font-semibold">Price: {price_usd}</h1>
            <button
              onClick={() => {
                combination();
                setTimeout(() => { isAffordable ? (!isSold ? ( (selected.length < 6) ? `${handleSuccess()}` : `${handlePlayerFull()}`) : `${handleSoldMessage()}`) :`${handleInsufficientCoins()}`
                    // Calling handleSuccess after combination runs
                }, 0); // Ensure handleSuccess runs asynchronously after combination
              }}
              className="btn bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
            Choose Player
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
