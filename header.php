<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <?php wp_head() ?>
</head>

<body>
  <header id="header" class="sticky-top header">
    <div class="container-fluid header__top">
      <div class="container align-items-center header__container">
        <div class="row align-items-center">
          <div class="col-4 col-md-4 col-lg-8 header__logo">
            <div class="d-inline-block">
              <img class="d-md-inline-block" src="<?php echo get_template_directory_uri() ?>/assets/img/logos/escudo_blanco.svg" alt="Logo gob.pe">
              <img class="d-none d-md-inline-block" src="<?php echo get_template_directory_uri() ?>/assets/img/logos/gobpe_blanco.svg" alt="Logo gob.pe">
            </div>
            <h5 class="d-none d-lg-inline-block header__title">Dirección de seguridad social y migración laboral</h5>
          </div>
          <div class="col-8 col-md-6 offset-md-2 offset-lg-0 col-lg-4">
            <form class="searchbar__form" action="#action">
              <div class="input-group input-group-lg md-3">
                <span class="input-group-text searchbar__icon" id="basic-addon1">
                  <img src="<?php echo get_template_directory_uri() ?>/assets/img/icons/search_black_24dp.svg">
                </span>
                <label for="search" class="visually-hidden">Buscar</label>
                <input class="form-control searchbar__input" name="search" type="search" placeholder="Buscar en DSSML" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid header__bottom">
      <div class="container py-3 align-items-center header__breadcrumb">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="header__breadcrumb-item breadcrumb-item active" aria-current="page">Inicio</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container">
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