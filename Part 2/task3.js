seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]) // Output: [8, 14, 17]
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]) // Output: “Nilai akhir harus lebih besar dari nilai awal”
seleksiNilai(4, 17 , [2, 25, 4]) // Output: “Jumlah angka dalam dataArray harus lebih dari 5”
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]) // Output: “Nilai tidak ditemukan”
seleksiNilai(5, "j" , [2, 25, 4, 1, 30, 18]) // Output: nilai akhir&awal harus number
seleksiNilai(5, 7 , [2, 25, 4, 1, 30, "jk"])// Output: data array harus berisi number

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    // VALIDASI
    if(typeof nilaiAwal !== "number" || typeof nilaiAkhir !== "number"){
        return console.log("nilai akhir & niilai awal harus number")
    } else if(!dataArray.every(item => typeof item  === "number")){
        return console.log('dataArray harus berisi number')
    } else if(nilaiAwal>nilaiAkhir){
        return console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if(dataArray.length <= 5){
        return console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    } else {
        // MEMFILTER
        let hasil =  dataArray.filter((item) => {
        return item > nilaiAwal && item < nilaiAkhir
        });

        // TAMPIL KONDISI
        if (hasil.length === 0) { 
            return console.log("Nilai tidak ditemukan")
        } else{
            return console.log(hasil.sort((a, b) => a - b))
        }
    }
}