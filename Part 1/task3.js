const printSegitiga = 5


if(isNaN(printSegitiga)){
    console.log("Data Harus Number")
}else{
    for(let i=printSegitiga; i>=1; i--){
        // segitiga = segitiga + i
        // console.log(segitiga)
        let segitiga = ""
        for(let j=1; j<=i; j++){
            segitiga = segitiga + j
        }
        // segitiga =  segitiga + "\n"
        console.log(segitiga)
    }
    
}

