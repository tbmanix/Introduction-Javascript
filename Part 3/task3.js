// PROGRAM FIZZBUZZ
const fizzbuzz = (angka) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = [];
      if (typeof angka === "number") {
        for (i = 1; i <= angka; i++) {
          i % 3 === 0 && i % 5 === 0
            ? result.push("fizzbuzz")
            : i % 3 === 0
            ? result.push("fizz")
            : i % 5 === 0
            ? result.push("buzz")
            : result.push(i);
        }
        resolve(result);
      } else {
        reject(new Error("INPUT HARUS ANGKA !"));
      }
    }, 2000);
  });
};

// then & catch
fizzbuzz(20) //menjalankan fungsi cekHariKerja
  .then((result) => console.log(result)) //mengambil data cek dengan then
  .catch((error) => console.log(error)); //mengambil data error

// PROGRAM REVERSETEXT
const reverseText = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof text === "string") {
        let result = text.split("").reverse().join("");
        resolve(result);
      } else reject(new Error("INPUT HARUS STRING !"));
    }, 4000);
  });
};

// try & catch
async function cetak() {
  // buat function async
  try {
    // menjalankan proses bila benar
    const text = "javascript";
    const result = await reverseText(text); // mengambil result dari function reverseText dengan menggunakan await agar tidak pending
    console.log(result); // menampilkan result
  } catch (error) {
    // jika ada yang tidak sesuai keinginan
    console.log(error); // menampilkan error
  }
}
cetak();

// reverseText(34)
// .then((result) => console.log(result))
// .catch((error) => console.log(error))
