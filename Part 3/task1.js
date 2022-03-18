const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// const cetakHari = (cek) => new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log(cek)
//         resolve(cek)
//     }, 2000)
// })

// PROMISE
const day = "sabtu";
cekHariKerja(day) //menjalankan fungsi cekHariKerja
  .then((res) => console.log(res)) //mengambil data cek dengan then
  .catch((error) => console.log(error)); //mengambil data error

// ASYNC-AWAIT
async function cetak() {
  try {
    const day = "minggu";
    const cek = await cekHariKerja(day); //mengambil data cek dengan await agar tidak pending
    console.log(cek); //tampil data
  } catch (error) {
    console.log(error); //tampil error
  }
}
cetak();
