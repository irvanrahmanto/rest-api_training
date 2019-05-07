function searchmovie() {
    $('#movie-list').html(''); // ini ketika diklik pencarian selanjut nya, data pencarian sebelum nya dihilangkan

    $.ajax({ // ini menggunakan fungsi langsung dari ajax, sama hal nya dengan $.getJSON tapi ini bisa dipisah2 parameternya jadi lebih mudah
        url: 'http://omdbapi.com', //ini alamat tujuan yg mau diambil
        type: 'get', // metode yang akan digunakan
        dataType: 'json', // tipe data kembalian yang mau kita ambil apa, bisa json, dsb
        data: { // ini parameter dari lanjutan url sebelum nya
            'apikey': 'dca61bcc', // code api dari akses web tsb
            's': $('#search-input').val() //s maksud nya search, jquery tolong cariin saya id yang nama nya #search-input lalu ambil value nya
        },
        success: function (result) { // kalau sukses maka jalankan sebuah function yang menerima parameter sebuah hasil, dgn variable result
            // console.log(result);
            if (result.Response == "True") { // kalau movie nya ada
                let movies = result.Search;

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="`+ data.Poster + `" alt="Card image cap">
                            <div class="card-body">
                                <h5>`+ data.Title + `</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year + `</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal"  data-id="`+ data.imdbID + `" >See detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });

                $('#search-input').val(''); // ini perintah jikalau setelah mencari data tsb nanti di input search box nya hilang

            } else { // kalau movie nya tidak ada
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center" > ` + result.Error + ` </h1>
                    </div>
                `)
            }
        }
    });
}

$('#search-button').on('click', function () { //jquery tolong saat tombol ber id search-button di klik, jalankan function

    searchmovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.which === 13) { // ini maksudnya ketika parameter e . keycode ===13 *alias tombol enter , maka
        searchmovie();
    }

}); // ini mejalankan fungsi ketika kita klik enter pas udah inputin data pada search box

//pada saat tombol see detail di klik
$('#movie-list').on('click', '.see-detail', function () {
    // console.log($(this).data('id'));

    $.ajax({
        url: 'http://ombdapi.com',
        dataType: 'json',
        type: 'get',
        data: {
            'apikey': 'dca61bcc',
            'i': $(this).data('id')
        },
        success: function (movie) {
            if (movie.Response === "True") {

                $('#modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="`+ movie.Poster + `" class="img-fluid" >
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+ movie.Title + `</h3></li>
                                    <li class="list-group-item">Released: `+ movie.Released + `</li>
                                    <li class="list-group-item">Genre: `+ movie.Genre + `</li>
                                    <li class="list-group-item">Director: `+ movie.Director + `</li>
                                    <li class="list-group-item">Actors: `+ movie.Actors + `</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
        }
    });

});