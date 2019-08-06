function pasanganTerbesar(num) {

var numString = String(num)

var numSplit = numString.split('')

var numSort = numSplit.sort(function(value1, value2) { return Number(value1) < Number(value2) })

var numLama = 0

var numBaru = 0

for (i=0 ; i<=numSplit.length-1 ; i++) {

    var numSplit = numString.split('')

    if(numSplit[i] == numSort[0]) {
        numLama = numSplit[i] + numSplit[i+1]
        
        if(numBaru < numLama) {
            numBaru = numLama
        }
    }
}

return numBaru
}



console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99