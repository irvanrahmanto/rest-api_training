<!-- UBAH OBJECT KE JSON -->

<?php 

    // $mahasiswa = [
    //     [
    //         "nama" => "irvan",
    //         "nim" => "1301164062",
    //         "email" => "irvan.rahmanto123@gmail.com"
    //     ],
    //     [
    //         "nama" => "irvan",
    //         "nim" => "1301164062",
    //         "email" => "irvan.rahmanto123@gmail.com"
    //     ]
    // ];

    // var_dump($mahasiswa);

    $dbh = new PDO(
                    'mysql:host=localhost;dbname=phpdasar',
                    'root', 
                    ''
                    );

    $db = $dbh->prepare('SELECT * FROM mahasiswa');
    $db->execute();
    $mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($mahasiswa);
    echo $data;
?>