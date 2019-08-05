


function balikString(kata) {
    var pengulangan = ''
    for (i = kata.length-1; i >= 0; i--) 
    {

    pengulangan = pengulangan + kata[i]
    }  
    
    return pengulangan  
}
    console.log(balikString('helloooo world!'))