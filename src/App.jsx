import Header from "./components/1. Header/Header";
import { useState } from "react";
import PlayersToggle from "./components/2. PlayersToggle/PlayersToggle";
import Footer from "./components/5. Footer/Footer";
import Newsletter from "./components/4. Newsletter/Newsletter";

function App() {
  // Coin Count
  const [coin, setCoin] = useState(0);
  function newCoin() {
    setCoin(coin + 1200000);
  }
  // Selected Players
  const [selected, setSelected] = useState([])
  const handleSelected = (player) => {
    const isExist = selected.find(select=> select.id == player.id);
    const isAffordable = (player.price_usd <= coin);
    if(selected.length < 6 && !isExist && isAffordable) {
      let newSelected = [...selected, player];
      setSelected(newSelected);
      console.log('added')
    }else if (selected.length == 6) {
      console.log('6 players added already')
    } else if (isExist) {
      console.log('the player already exists')
    } else if (!isAffordable) {
      console.log('too high, click claim again')
    }
    else {
      console.log('i donno')
    }
  }
  // deselected players
  const [isSold, setIsSold] = useState(false);
  const handleDeselected = (player) => {
      let newSelected = selected.filter(deselect=> deselect.id != player.id);
      const isExist = newSelected.find(select=> select.id == player.id);
      setSelected(newSelected);
      if(isExist) {
        setIsSold(!isSold);
      }
    console.log(newSelected);
  }

  return (
    <>
    <div className="max-w-11/12 mx-auto">
    <Header coin ={coin} newCoin={newCoin}></Header>
    <PlayersToggle isSold = {isSold} setIsSold ={setIsSold} handleDeselected ={handleDeselected} handleSelected ={handleSelected} selected = {selected} coin={coin} setCoin={setCoin}></PlayersToggle>
    </div>
    <Newsletter></Newsletter>
    <Footer></Footer>
    </>
  )
}

export default App
