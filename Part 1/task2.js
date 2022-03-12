const mtk = 78
const bahasaIndonesia = 90
const bahasaInggris = 90
const ipa = 90

    const validasiAngka = /^[0-9]+$/
    const jumPel = 4
    const jumNil = parseFloat(mtk)+parseFloat(bahasaIndonesia)+parseFloat(bahasaInggris)+parseFloat(ipa)
    const average = jumNil/jumPel

if(isNaN(average)){
    console.log("Data tidak boleh kosong")
}else{
    
    console.log(average)
    switch (true) {
    case average >= 90:
        console.log('A')
        break;
    case average >= 80:
        console.log('B')
        break;
    case average >= 70:
        console.log('C')
        break;
    case average >= 60:
        console.log('D')
        break;
    default:
        console.log('E')
        break;
    }
    console.log(average)
}



