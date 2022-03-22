function cekPalindrom(text) {
  if (typeof text === "string") {
    let textLower = text.toLowerCase().split(" ").join(""); //lowercase->((memecah dengan spasi->menggabungkan tanpa spasi)menghilangkan semua spasi)
    let textreverse = textLower.split("").reverse().join(""); //memecah perhuruf->reverse->menggabungkan kembali

    // if (textLower === textreverse) {
    //   //cek kondisi
    //   return console.log(`text ${text} is Palindrom`);
    // } else {
    //   return console.log(`text ${text} not Palindrom`);
    // }
    textLower === textreverse ?
      //cek kondisi
      console.log(`text ${text} is Palindrom`) :
      console.log(`text ${text} not Palindrom`)
  } else {
    return console.log("input harus string");
  }
}

cekPalindrom("   K as U r Ru S aAK");
