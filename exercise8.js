function pasanganTerbesar(num) {
    let pasangan = []
    let ubah = num.toString()
    for (let i = 0; i < ubah.length - 1; i++) {
        pasangan.push(ubah[i] + ubah[i + 1])
    }
    urut = pasangan.sort(function (a, b) {
        return b - a
    })
    return urut[0]
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99