var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(input) {

    input.splice(1,2, 'Roman Alamsyah Elsharawy' , 'Provinsi Bandar Lampung');
    input.splice(4,1, 'Pria', 'SMA Internasional Metro');

return input
}
console.log(dataHandling2(input))   






//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"] 
