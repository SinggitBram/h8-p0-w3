function pasanganTerbesar(num) {

    var ubahJadiString = String(num)
    var akhir = Number(ubahJadiString[0])
    for (var i=0; i<ubahJadiString.length -1; i++){
            duaAngka = ubahJadiString[i] + ubahJadiString[i+1] 
            if (Number(duaAngka) > Number(akhir)){
                akhir = duaAngka
        } 
    }
    return akhir
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99