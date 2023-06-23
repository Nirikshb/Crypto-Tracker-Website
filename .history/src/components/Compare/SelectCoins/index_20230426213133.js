import React, { useEffect } from 'react';
import {useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";
import { get100Coins } from '../../../functions/get100Coins';

function SelectCoins() {
    const [crypto1, setCrypto1] = useState("bitcoin");
        const [crypto2, setCrypto2] = useState("etherium");

    const styles = {
      height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a88c9",
            },
        },
    }
    
    const handleCoinChange = (event) => {
        setCrypto1(event.target.value);
    }
    useEffect(() => {
        getData(); 
    },[])
    
    async function getData() {
        const myCoins = await get100Coins(); 
    }
  return (
    <div>
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={handleCoinChange}
      >
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={90}>90 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}

export default SelectCoins