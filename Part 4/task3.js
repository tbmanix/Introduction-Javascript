function fazzFood(harga, voucher, jarak, pajak) {
  let potongan;
  let biayaAntar = 5000;
  let pajakRestoran;
  let subTotal;
  console.log(`Harga : ${harga}`);

  //POTONGAN
  if (voucher) {
    if (voucher === "FAZZFOOD50") {
      if (harga >= 50000) {
        potongan = harga * 0.5;
        if (potongan >= 50000) {
          potongan = 50000;
        } else {
          potongan;
        }
      } else {
        potongan = 0;
      }
    } else if (voucher === "DITRAKTIR60") {
      if (harga >= 25000) {
        potongan = harga * 0.6;
        if (potongan >= 30000) {
          potongan = 30000;
        } else {
          potongan;
        }
      } else {
        potongan = 0;
      }
    } else {
      console.log("kode voucher salah");
      potongan = 0;
    }
  } else {
    potongan = 0;
  }
  console.log(`Potongan : ${potongan}`);

  //ONGKIR
  if (jarak <= 2) {
    biayaAntar;
  } else {
    biayaAntar = 5000 + (jarak - 2) * 3000;
    // let biayaPer1km = 3000;
    // let i = 1;
    // do {
    //   i++;
    //   biayaAntar += biayaPer1km;
    // } while (i <= jarak - 2);
    // while (i <= jarak - 2) {
    // i++;
    // biayaAntar += biayaPer1km;
    // }
  }
  console.log(`Biaya Antar : ${biayaAntar}`);

  //PAJAK
  if (pajak) {
    pajakRestoran = harga * 0.05;
  } else {
    pajakRestoran = 0;
  }
  console.log(`Pajak : ${pajakRestoran}`);

  //SUBTOTAL
  subTotal = harga - potongan + biayaAntar + pajakRestoran;
  console.log(`SubTotal : ${subTotal}`);
}

fazzFood(75000, "FAZZFOOD50", 5, true);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// fazzFood(75000, "FAZZFOOD50", 2, true);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// fazzFood(25000, "FAZZFOOD50", 7, false);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// fazzFood(100000, "FAZZFOOD50", 1, true);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// fazzFood(75000, "DITRAKTIR60", 5, true);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// fazzFood(25000, "DITRAKTIR60", 5, true);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// fazzFood(100000, "DITRAKTIR60", 5, true);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~");
// fazzFood(45000, "DITRAKTIR60", 5, true);
