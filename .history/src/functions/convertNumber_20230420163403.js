export const convertNumber = (number) => {
    const numberWithComma = number.toLocaleString();
    var arr = numberWithComma.split(",");
    if (arr.length == 5) {
        return arr[0]+","+arr[1].slice(0,2)+""
    }
}