function angkaTerkecil(angka) {

    var terkecil = angka[0] ;

    for (var i=0; i<angka.length-1; i++) {
        if (angka[i] < terkecil) {
            terkecil = angka[i]
        }
    }
    return terkecil
}
console.log(angkaTerkecil([3,4,6,2,8,10,9]))