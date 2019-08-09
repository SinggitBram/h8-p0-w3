function groupAnimals(animals) {
    animals.sort()
    var urutanHewan = []
    for (var i=0 ; i<animals.length; i ++){
        if(urutanHewan.length === 0) {
            urutanHewan.push([]);
            urutanHewan[0].push(animals[0])
        }
        else if(urutanHewan[urutanHewan.length-1][0][0] !== animals[i][0]){
            urutanHewan.push([]);
            urutanHewan[urutanHewan.length-1].push(animals[i])
        }
        else if (urutanHewan[urutanHewan.length-1][0][0] === animals[i][0]){
            urutanHewan[urutanHewan.length-1].push(animals[i])
        }    
        
    }
    return urutanHewan
}
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



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

