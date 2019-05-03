<!-- UBAH JSON KE OBJECT -->

<?php   

    $data = file_get_contents('coba.json');

    // Kalau pakai true merubah nya menjadi array
    $mahasiswa = json_decode($data, true);

    // kalau tidak pakai true berarti object
    // $mahasiswa = json_decode($data);

    var_dump($mahasiswa);
    echo $mahasiswa[0]["pembimbing"]["pembinging1"];

?>