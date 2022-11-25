<?php
//Variable que almacenará el nombre del usuario.
$name = $_POST["name"];
//Variable que almacenará el correo del usuario.
$email = $_POST["email"];
//Variable que almacenará el teléfono del usuario.
$phone = $_POST["phone"];
//Variable que almacenará el mensaje del usuario.
$txt = $_POST["txt"];

/**
 * Se validan los datos y se redirecciona a una página nueva si se pasa la validación.
 */
if (empty($name) || empty($email) || empty($txt)) {
  echo "Por favor, rellene todos los campos necesarios.";
} else {
  header('Location: /contact_redirect.html');
}
