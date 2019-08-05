

function palindrome(kata) {
    var pengulangan = ''
    var hasil = ''
    for (i = kata.length-1; i >= 0; i--) 
    {
    pengulangan = pengulangan + kata[i]
    }     
    if (pengulangan === kata) {
        hasil = true
    }     
        else {hasil = false
        }
    return hasil
    }


console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false