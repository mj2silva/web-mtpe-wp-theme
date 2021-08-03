<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <?php wp_head() ?>
</head>

<body>
  <header id="header" class="header">
    <div class="container-fluid header__container">
      <div class="row align-items-center">
        <div class="col-2 header__logo">
          <img src="<?php echo get_template_directory_uri() ?>/assets/img/logos/logo_primario.svg" alt="Logo gob.pe">
        </div>
        <div class="col-4 offset-md-6 mb-3">
          <form class="searchbar__form" action="#action">
            <div class="input-group md-3">
              <span class="input-group-text searchbar__icon" id="basic-addon1">
                <img src="<?php echo get_template_directory_uri() ?>/assets/img/icons/search_black_24dp.svg">
              </span>
              <label for="search" class="visually-hidden">Buscar</label>
              <input class="form-control searchbar__input" name="search" type="search" placeholder="Buscar en DSSML" />
            </div>
          </form>
        </div>
      </div>
      <div>
        <?php
        wp_nav_menu(
          array(
            'theme_location' => 'top_menu',
            'menu_class' => 'nav nav-pills nav-justified',
            'container_class' => 'header__nav-container'
          )
        );
        ?>
      </div>
    </div>
  </header>