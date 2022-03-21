function divideAndSort(num) {
  if (typeof num === "number") {
    let result = num
      .toString() //mengubah kestring
      .split("0") //memecah ke array
      .map((obj) => {
        //mapping
        return obj.split("").sort().join(""); //memecah lagi->sorting->gabungkan
      })
      .join(""); //gabungkan

    return +result; //ubah jadi number
  }
}

console.log(divideAndSort(5956560159466056));
