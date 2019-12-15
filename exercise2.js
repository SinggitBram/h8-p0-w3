function balikString(kata) {
    let hasil = ''
    for (let i = kata.length - 1; i >= 0; i--) {
        hasil = hasil + kata[i]
    }
    return hasil
}
    console.log(balikString('hello world!'))
    
//"!dlrow olleh"