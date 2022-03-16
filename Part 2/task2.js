const name = [
        'biAgail', 'Alexandra', 'Alison',
        'Amanda', 'Angela, ', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope']
function searchName(key, lim, callbackLimit){
    // VALIDASI
    if(typeof key === "string"  && typeof lim === "number"){
        if(lim === 0){
            return console.log("lim harus lebih dari 0")
        }else{
            // SEARCH WITH FILTER BY KEY
            let search =  name.filter((item) => {
            return item.toLowerCase().match(key.toLowerCase())});
            callbackLimit(lim, search)
        }
    } else{
        return console.log("KEY HARUS STRING & LIM HARUS ANGKA")
    }
}
searchName("AN", 3, (lim, search)=>{
    // TAMPIL SEARCH WITH LIMIT
    if(search.length === 0){
        return console.log("data pencarian kosong")
    }
    if(search.length>lim){
        search.length = lim
    }
    return console.log(search)
})