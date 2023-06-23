import React,{useState} from 'react'
import Header from '../components/Common/Header';
import SelectCoins from "../components/Compare/SelectCoins"
import SelectDays from "../components/Coin/SelectDays";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
const [crypto1Data, setCrypto1Data]=

  function handleDaysChange(event) {
    setDays(event.target.value)
  }


   const handleCoinChange = (event, isCoin2) => {
     if (isCoin2) {
       setCrypto2(event.target.value);
       console.log("crypto2 id", event.target.value);
     } else {
       setCrypto1(event.target.value);
       console.log("crypto1 id", event.target.value);
     }
   };
  return (
    <div>
      <Header />
      <div className="coins-day-flex">
        <SelectCoins
          crypto1={crypto1}
          setCrypto1={setCrypto1}
          crypto2={crypto2}
          setCrypto2={setCrypto2}
          handleCoinChange={handleCoinChange}
        />
        <SelectDays
          days={days}
          handleDaysChange={handleDaysChange}
          noPtag={true}
        />
      </div>
    </div>
  );
}

export default ComparePage