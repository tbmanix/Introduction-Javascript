function reverseWords(text) {
  if (typeof text === "string") {
    //cek text harus string
    let result = text.split(" ").reverse().join(" "); //memecah kata dengan spasi sebagai pemisah->reverse->menggabungkan kembali kata dengan spasi
    return console.log(result);
  } else {
    return console.log("input harus string");
  }

  // if(text === ""){
  //   return ""
  // }else{
  //   return reverseWords(text.substr(1))+text[0]
  // }
}

reverseWords("Saya Belajar Javascript");
