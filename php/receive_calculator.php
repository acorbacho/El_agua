<?php
//Variable que almacena la cantidad de miembros que se introducen en la calculadora.
$members = $_POST["members"];
//Variable que almacena la cantidad de litros que se introducen en la calculadora.
$liters = $_POST["liters"];
//Variable que almacena el consumo.
$consumn = 0;
//Variable que almacena la conclusión.
$conclusion  = "";

if (empty($members) || empty($liters)) {
  echo "Por favor, rellene todos los campos necesarios.";
} else {
  $consumn = $liters / $members;
  if ($consumn <= 100) {
    $conclusion = "El consumo es bajo";
  } else if ($consumn > 100 && $consumn <= 200) {
    $conclusion = "El consumo está dentro de lo normal";
  } else {
    $conclusion = "DERROCHADOR DE AGUA";
  }
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset='UTF-8' />
  <title>Calculadora de consumo</title>
  <link rel="icon" href="/assets/img/gota.png" />
  <link rel="stylesheet" type="text/css" href="/styles/style.css" media="screen" />
</head>

<body>
  <header class="main-header">
    <div class="container container--flex">
      <div class="logo-container column column--50">
        <h1 class="logo">El agua</h1>
      </div>
    </div>
  </header>
  <nav class="main-nav">
    <div class="container container-flex">
      <span class="icon-menu" id="btnmenu"></span>
      <ul class="menu" id="menu">
        <li class="menu__item"><a href="/index.html" class="menu__link">Inicio</a></li>
        <li class="menu__item"><a href="/about.html" class="menu__link">Sobre nosotros</a></li>
        <li class="menu__item"><a href="/gallery.html" class="menu__link">Galería</a></li>
        <li class="menu__item"><a href="/calculator.html" class="menu__link menu__link--select">Calculadora
            de consumo</a></li>
        <li class="menu__item"><a href="/contact.html" class="menu__link">Contacto</a></li>
      </ul>
    </div>
  </nav>
  <main class="main">
    <section class="group group--color">
      <div class="container">
        <h2 class="main__title">Calcula tu consumo</h2>
        <p class="main__txt">Calcula si estás consumiendo una cantidad de agua adecuada en tu hogar.</p>
      </div>
    </section>
    <section class="group contact">
      <div class="container container--flex">
        <form action="" method="POST" class="form column">
          <label for="" class="form__label">Miembros en la vivienda:</label>
          <input type="text" class="form__input-txt" name="members" id="members">
          <div class="form__alert"></div>
          <label for="" class="form__label">Litros consumidos el último mes:</label>
          <input type="text" class="form__input-txt" name="liters" id="liters">
          <div class="form__alert"></div>
          <button class="btn form__btn">Enviar</button>
        </form>
        <br>
      </div>
      <p class="calculator-conclusion">
        <?php echo $conclusion ?>
      <p>
    </section>
  </main>
  <footer class="main-footer">
    <div class="container container--flex">
      <div class="column column--33">
        <h2 class="column__title">Visítanos</h2>
        <p class="column__txt">Calle Vicente del Mar, 16</p>
      </div>
      <div class="column column--33">
        <h2 class="column__title">Contáctanos</h2>
        <p class="column__txt">999 999 999</p>
        <p class="column__txt">default@default.com</p>
      </div>
      <div class="column column--33">
        <h2 class="column__title">Síguenos en nuestras redes</h2>
        <p class="column__txt"><a href="https://www.facebook.com/" class="icon-facebook">Facebook</a></p>
        <p class="column__txt"><a href="https://twitter.com/home" class="icon-twitter">Twitter</a></p>
        <p class="column__txt"><a href="https://mail.google.com/mail/u/0/#inbox" class="icon-youtube">Youtube</a></p>
      </div>
    </div>
    <p class="copy">©2022</p>
  </footer>
  <script src="/scripts/form_validation_functions.js"></script>
  <script src="/scripts/calculator_send.js"></script>
</body>

</html>