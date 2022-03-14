const mtk = 80, bahasaIndonesia = 90, bahasaInggris = 89, ipa = 69

//console.log(typeof mtk)

if(typeof mtk === "number" && typeof bahasaIndonesia === "number" && typeof bahasaInggris === "number" && typeof ipa === "number"){
    
    const jumPel = 4
    const jumNil= mtk + ipa + bahasaIndonesia + bahasaInggris
    const average = jumNil/jumPel

    console.log(`rata-rata ${average}`)

    switch (true) {
    case average >= 90:
        console.log(' Grade A')
        break;
    case average >= 80:
        console.log('Grade B')
        break;
    case average >= 70:
        console.log('Grade C')
        break;
    case average >= 60:
        console.log('Grade D')
        break;
    default:
        console.log('Grade E')
        break;
    }
}else{
    console.log("Data tidak boleh kosong dan harus berupa angka")
}
