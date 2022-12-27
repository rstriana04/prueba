<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dateBirth = $_POST['dateBirth'];
    if (empty($dateBirth)) {
        echo "Por favor complete el formulario";
    } else {
        $bday = new DateTime($dateBirth);
        $today = new Datetime(date('m.d.y'));
        $diff = $today->diff($bday);
        echo ' Su edad es: %d años, %d meses, %d dias', $diff->y, $diff->m, $diff->d
    }
}
?>