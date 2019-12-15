function palindrome(kata) {
    let baru = ''
    for (let i = kata.length - 1; i >= 0; i--) {
        baru = baru + kata[i]
    }
    if (baru === kata) {
        return true
    }
    return false
}


console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false