function groupAnimals(animals) {
    animals.sort()
    let hasil = [[animals[0]]]

    for (let i = 1; i < animals.length; i++) {
        let val = false
        for (let j = 0; j < hasil.length; j++) {
            if (animals[i][0] === hasil[j][0][0]) {
                hasil[j].push(animals[i])
                val = true
            }
        }
        if (val === false) {
            hasil.push([animals[i]])
        }
    }
    return hasil
}

  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



// console.log(kelompokkanAngka([1, 1, 3, 3, 4, 7, 7, 7]))

// function kelompokkanAngka(angka){

//     var hasil = []
//     for(var i=0; i<angka.length; i++) {
//         if (hasil.length === 0) {
//             hasil.push([]);
//             hasil[0].push(angka[0])
//         }
//         if (hasil[hasil.length-1][0] !== angka[i]) {
//             hasil.push([]);
//             hasil[hasil.length-1].push(angka[i])    
//         }
//         else if (hasil[hasil.length-1][0] === angka[i]){
//             hasil[hasil.length-1].push(angka[i])
//         }        
//     }
//     return hasil
// }

