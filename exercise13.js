function targetTerdekat(arr) {
    // you can only write your code here!
    let posisio = arr.indexOf('o')
    let hasil = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'x') {
            hasil.push(Math.abs(i - posisio))
        }
    }
    if (hasil.length === 0) {
        return 0
    }
    return hasil.sort(function (a, b) {
        return a - b
    })[0]
}

  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2