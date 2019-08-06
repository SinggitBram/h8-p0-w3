function pasanganTerbesar(num) {

var numString = String(num)

var numSplit = numString.split('')

var numSort = numSplit.sort(function(value1, value2) { return Number(value1) < Number(value2) })

var numBesar = numSort[0]

var numDua = numSplit[numBesar]
return numDua


}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99