console.log("~~~~~~~~~~~~~~~~~MATH~~~~~~~~~~~~~~~~~~~~")
// Math
//1. Math.round()
/* Membulatkan bilangan desimal ke bilangan bulat terdekat 
dengan kondisi dimana angka dibelakang koma lebih dari .4 maka dibulatkan menjadi angka didepan ditambah 1 
jika kurang dari .5 akan dibulatkan menjadi angka didepannya */
num = 5.5
console.log(Math.round(5.4))
console.log(Math.round(num))
//2. Math.max()
// mengambil data terbesar dari beberapa angka
// console.log(Math.max(1, 3, 10));
// console.log(Math.max(-1, -3, -2));
// const array1 = [9, 3, 2];
// console.log(Math.max(...array1));
console.log("~~~~~~~~~~~~~~~~ARRAY~~~~~~~~~~~~~~~~~~~~")
// Array
//3. Array.length
// mencari jumlah data didalam suatu array
// const numArray = [1,2,3,4,5,6];
// console.log(numArray.length);
//4. Array.push
// Menambahkan data baru didalam array diindex selanjutnya
// const numArray = [1,2,3,4,5,6]
// numArray.push(7,8)
// console.log(numArray)
//5. Array.fill()
// mengisi atau mengubah value dalam array sesuai keinginan
const numArray = [1,2,3,4,5,6];
console.log(numArray.fill(1,2,4)) // 3param dengan param1 nilai value yang akan diisi, param2 berisi index titik mulai, param3 batas berhenti mengisi
console.log(numArray.fill(1,2)) // 2param dengan param1 nilai value yang akan diisi, param2 birisi index titik mulai sampai index terakhir
console.log(numArray.fill(1)) // 1param dengan param berisin nilai value yang akan diisi dari index awal sampai terakhir
//6. Array.join()
// membuat string baru dengan menggabungkan isi dalam array
// const fruits = ['nanas', 'jambu', 'anggur']
// console.log(fruits.join('-')) //parameter menjadi penghubung antara indek pertama sampai terakhir
console.log("~~~~~~~~~~~~~~~~~STRING~~~~~~~~~~~~~~~~~~")
// String
//7. String.slice
// mengekstrak atau memotong string
const name = 'Tubagus Manix Hara'
console.log(name.slice(1,5)) //param1 titik mulai index untuk memotong, param2 sebagai titik index sebagai pemberhenti
//8. String.toLowerCase
// mengubah string menjadi huruf kecil semua
// console.log(name.toLowerCase())
//9. String.split()
// memecah string menjadi array dengan parameter sebagai patokannya
// console.log(name.split(" "))
//10. String.trim()
// menghapus spasi ujung kanan dan ujung kiri
// const name1 = '         Tubagus Manix Hara   '
// console.log(name1.trim())