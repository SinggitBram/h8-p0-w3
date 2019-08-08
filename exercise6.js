function angkaPalindrome(num) {
    var palindromeFound = false
    
    num++
    
    while(palindromeFound === false) {
        var angkaBalik = ''
        var jadiString = String(num)
        for(var i=jadiString.length-1; i>=0; i--) {
            angkaBalik = angkaBalik + jadiString[i]
        }
        if(angkaBalik === jadiString) {
            return Number(angkaBalik)
        }
        else {
            num++
        }
                   
    }
}






console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
