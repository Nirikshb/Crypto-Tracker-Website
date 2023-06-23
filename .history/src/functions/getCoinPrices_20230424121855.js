import axios from "axios";
 
export const getCoinPrices = (id,days) => {
const price=axios
  .get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily
`
  )
  .then((response) => {
      console.log(response.data.prices);
      
  })
  .catch((error) => {
    console.log(error);
  });

}







   