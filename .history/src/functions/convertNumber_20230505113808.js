export const convertNumber = (number) => {
  console.log(number, "P{P{");
  const numberWithCommas = number.toLocaleString();
  var arr = numberWithCommas.split(",");
  console.log(arr, "P{{{{}}")
  if (arr.length === 5) {
    //Trillions
    return arr[0] + "." + arr[1].slice(0, 2) + "T";
  } else if (arr.length === 4) {
    //Billions
    console.log(arr, );
    return arr[0] + "." + arr[1].slice(0, 2) + "B";
  } else if (arr.length === 3) {
    // Millions
    return arr[0] + "." + arr[1].slice(0, 2) + "M";
  } else if (arr.length === 2) {
    // Thousands
    return arr[0] + "." + arr[1].slice(0, 2) + "K";
  } else {
    // Hundreds
    return number.toLocaleString();
  }
};
