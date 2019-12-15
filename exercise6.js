function angkaPalindrome(num) {
    let start = num + 1
    let val = false
    while (val === false) {
        if (palindrome(start.toString()) === true) {
            return start
        } else {
            start++
        }
    }
}

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

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
