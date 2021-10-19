<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/assets/datepicker/css/bootstrap-datepicker.standalone.css">
  <?php wp_head();
  $title = '';
  if (is_archive()) {
    $title = post_type_archive_title('', false);
  } else {
    $title = the_title('', '', false);
  }
  ?>
</head>

<body>
  <header id="header" class="sticky-top header">
    <div class="container-fluid header__top">
      <div class="container align-items-center header__container">
        <div class="row align-items-center">
          <div class="col-4 d-flex align-items-center col-md-4 col-lg-8 header__logo">
            <div class="d-inline-flex align-items-center h-100">
              <a href="<?php echo home_url() ?>">
                <img class="d-md-inline-block" src="<?php echo get_template_directory_uri() ?>/assets/img/logos/escudo_blanco.svg" alt="Logo gob.pe">
                <img class="d-none d-md-inline-block" src="<?php echo get_template_directory_uri() ?>/assets/img/logos/gobpe_blanco.svg" alt="Logo gob.pe">
              </a>
            </div>
            <div class="d-none d-lg-inline-flex flex-column justify-content-center header__title-container">
              <h5 class="header__title">Ministerio de Trabajo y Promoción del Empleo</h5>
              <h5 class="header__title">Dirección de Seguridad Social y Migración Laboral</h5>
            </div>
          </div>
          <?php
          if (get_the_title() != 'Noticias') {
          ?>
            <div class="col-8 col-md-6 offset-md-2 offset-lg-0 col-lg-4">
              <?php get_template_part('template-parts/content', 'searchbar') ?>
            </div>
            </form>
        </div>
      <?php
          }
      ?>
      </div>
    </div>
    </div>
    <div class="container-fluid header__bottom">


      <?php
      // var_dump(get_post_type_archive_link($post->post_type));
      $breadcrumb_parent = '';
      if (!is_archive()) {
        if ($post->post_parent) {
          $breadcrumb_parent = '<li class="header__breadcrumb-item breadcrumb-item active" aria-current="page">'
            . '<a href="' . get_the_permalink($post->post_parent) . '">'
            . get_the_title($post->post_parent)
            . '</a>'
            . '</li>';
        } else if ($post->post_type !== 'page') {
          $breadcrumb_parent = '<li class="header__breadcrumb-item breadcrumb-item active" aria-current="page">'
            . '<a href="' . get_post_type_archive_link($post->post_type) . '">'
            . get_post_type_object($post->post_type)->label
            . '</a>'
            . '</li>';
        }
      }
      // var_dump();
      if ($title === 'Inicio') {
        echo '';
      } else {
        echo '<div class="container py-3 align-items-center header__breadcrumb">
          <nav style="--bs-breadcrumb-divider: \' > \';" aria-label="breadcrumb">'
          . '<ol class="breadcrumb">'
          . '<li class="header__breadcrumb-item breadcrumb-item">'
          . '<a href="' . home_url() . '">'
          . 'Inicio'
          . '</a>'
          . '</li>'
          . $breadcrumb_parent
          . '<li class="header__breadcrumb-item breadcrumb-item active" aria-current="page">'
          . $title
          . '</li>'
          . '</ol>'
          . '</nav>'
          . '</div>';
      }
      ?>

    </div>
    <div class="container-fluid px-0">
      <nav class="navbar navbar-expand-lg navbar-light header__navbar">
        <div class="container header__nav-container">
          <a class="navbar-brand header__nav-brand" href="#"></a>
          <button class="navbar-toggler header__navbar-toggler px-0 container--gray m-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="mx-1">Menu</span>
            <span class="header__navbar-icon">+</span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <?php
            wp_nav_menu(
              array(
                'theme_location' => 'top_menu',
                'menu_class' => 'navbar-nav nav-pills nav-justified',
                'container_class' => 'header__nav-container'
              )
            );
            ?>
          </div>
        </div>
      </nav>
    </div>
  </header>