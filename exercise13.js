function targetTerdekat(arr) {
    // you can only write your code here!
    
    var posisiO = arr.indexOf('o')
    var hasil = arr.length
    
    if (arr.indexOf('x') === -1) {
        return 0;
    }
    else {
        for (var i = 0; i < arr.length ; i++) {
            if (arr[i] === 'x') {
                var selisihOX = Math.abs(i - posisiO)
                if (selisihOX < hasil) {
                    hasil = selisihOX
                }
            }
        }
            
    }  
    return hasil
}





  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2