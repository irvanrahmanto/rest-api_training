function tampilsemuamenu() {
    $.getJSON('data/pizza.json', function (data) { //ini maksudnya memanggil file json di folder tsb untuk kemudian gunakan fungsi function(data)
        // console.log(data);
        let menu = data.menu; //ini ibarat data["menu"] kalo di php
        // console.log(menu);

        $.each(menu, function (i, data) { //ini untuk semua menu, gunakan dan panggil fungsi function(i, data)
            // console.log(data);
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img class="card-img-top" src="img/pizza/' + data.gambar + '"><div class="card-body"><h5>' + data.nama + '"</h5><p class="card-text">' + data.deskripsi + '"</p><h5>Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Order now</a></div></div></div>');
        });
    });
}

tampilsemuamenu();

$('.nav-link').on('click', function () { // jquery tolong cariin class yg namanya nav-link ketika di klik jalanin fungsi ini
    $('.nav-link').removeClass('active'); //jquery tolong cari class nav-link terus hapus kelas active nya
    $(this).addClass('active'); // jquery tolong dikelas ini, tambahin kelas active nya

    let kategori = $(this).html(); // jquery tolong ambil html nya terus masukin ke dalem variable kategori

    $('h1').html(kategori); // jquery terus masukin h1 yg udh diambil nya ke dalem variable kategori

    if (kategori == 'All menu') {
        tampilsemuamenu();
        return;
    }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu; // maksud nya masukin data["menu"] ke variable menu
        let content = ''; // yang isi nya string kosong / '' masukin ke content

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) { //jika data["kategori"] = kategori yang ada di html maka jalankan 
                content += '<div class="col-md-4"><div class="card mb-3"><img class="card-img-top" src="img/pizza/' + data.gambar + '"><div class="card-body"><h5>' + data.nama + '"</h5><p class="card-text">' + data.deskripsi + '"</p><h5>Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Order now</a></div></div></div>'; // isi dari card html nya tambah dan looping untuk dimasukin ke dalam content
            }
        });

        $('#daftar-menu').html(content); //jquery cariin saya id dengan nama daftar menu, terus timpa isi nya dengan isi dari content
    });
});