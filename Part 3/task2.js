const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

// const showMonth =
// const showMonth = (err, result) =>{ // mengcallback
//     setTimeout(() => {
//         if (!err) { // kondisi jika tidak error
//             // console.log(result)
//             result.map((item) => { //mapping array result
//                 console.log(item)
//             })
//         }else{ // kondisi jika error
//             return console.log(err)
//         }
//     }, 1000)
// }
// getMonth(showMonth)

getMonth((err, result) => {
  // mengcallback
  if (!err) {
    // kondisi jika tidak error
    // console.log(result)
    result.map((item) => {
      //mapping array result
      console.log(item); //tampil data
    });
  } else {
    // kondisi jika error
    return console.log(err);
  }
});
