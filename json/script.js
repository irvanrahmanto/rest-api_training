// 1.  UBAH OBJECT KE JSON

// let mahasiswa = {
//     nama : "irvan",
//     nim : "1301164062",
//     email : "irvan.rahmanto123@gmail.com"
// }

// ini print biasa di inspect -> console nya
// console.log(mahasiswa);

//  ini cara merubah object menjadi JSON nya
// akses nya sama di inspect -> console
// console.log(JSON.stringify(mahasiswa));

// 2.  UBAH JSON KE OBJECT, menggunakan teknik vanilla ajax atau ajax murni

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
        // ini print ubah biasa dari object json
        // let mahasiswa = this.responseText;

        // ini print ubah dari json ke object
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

// 3.  UBAH JSON KE OBJECT, menggunakan teknik JQUERY

$.getJSON('coba.json', function(data){
    console.log(data);
});
