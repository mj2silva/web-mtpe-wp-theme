<?php

// Urls de librerías externas
$bootstrap_css_uri = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
$font_uri = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap';
$popper_js_uri = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js';
$bootstrap_js_uri = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js';

function init_template()
{
  add_theme_support('post-tumbnails');
  add_theme_support('title-tag');

  register_nav_menus(
    array(
      'top_menu' => 'Menú principal',
      'footer_menu' => 'Links del footer'
    )
  );
}

add_action('after_setup_theme', 'init_template');

function assets()
{
  global $bootstrap_css_uri, $font_uri, $popper_js_uri, $bootstrap_js_uri;
  wp_register_style('bootstrap', $bootstrap_css_uri, '', '5.0.2', 'all');
  wp_register_style('montserrat', $font_uri, '', '1.0', 'all');
  wp_enqueue_style('styles', get_stylesheet_uri(), array('bootstrap', 'montserrat'), '1.0', 'all');

  wp_register_script('popper', $popper_js_uri, '', '2.9.2', true);
  wp_enqueue_script('bootstraps', $bootstrap_js_uri, array('jquery', 'popper'), '5.0.2', true);
  wp_enqueue_script('custom', get_template_directory_uri() . '/assets/js/custom.js', '', '1.0', true);
}

add_action('wp_enqueue_scripts', 'assets');

function atg_menu_classes($classes, $item, $args)
{
  // Clases correspondientes al menú de navegación del header
  $header_nav_item_class = 'nav-item header__nav-item';
  $header_nav_item_with_sub_item_class = 'nav-item dropdown header__nav-item';
  $header_nav_sub_item_class = 'dropdown-item header__nav-item header__nav-item--sub';

  if ($args->menu->name == 'Main menu') {
    if (in_array('menu-item-has-children', $classes)) {
      $classes[] = $header_nav_item_with_sub_item_class;
    } else if ($item->menu_item_parent > 0) {
      $classes[] = $header_nav_sub_item_class;
    } else {
      $classes[] = $header_nav_item_class;
    }
  }
  if ($args->menu->name == 'Links del footer') {
    $classes[] = 'nav-item footer__nav-item';
  }
  return $classes;
}

add_filter('nav_menu_css_class', 'atg_menu_classes', 10, 3);

// Verifica si el item está en el menú principal y agrega las clases css faltantes
function add_specific_menu_location_atts($atts, $item, $args)
{
  if ($args->menu->name == 'Main menu') {
    if ($item->menu_item_parent > 0) {
      $atts['class'] = 'nav-link header__nav-link';
    } else if (in_array('menu-item-has-children', $item->classes)) {
      // Se agregan los atributos necesarios para que el elemento funcione como un dropdown
      $atts['class'] = 'nav-link dropdown-toggle header__nav-link';
      $atts['role'] = 'button';
      $atts['data-toggle'] = 'dropdown';
      $atts['data-bs-toggle'] = "dropdown";
    } else {
      $atts['class'] = 'nav-link header__nav-link';
    }
  }
  if ($args->menu->name == 'Links del footer') {
    $atts['class'] = 'nav-link footer__nav-link';
  }
  return $atts;
}
add_filter('nav_menu_link_attributes', 'add_specific_menu_location_atts', 10, 3);

function my_nav_menu_submenu_css_class($classes)
{
  $classes[] = 'dropdown-menu header__dropdown-menu';
  return $classes;
}
add_filter('nav_menu_submenu_css_class', 'my_nav_menu_submenu_css_class');

//Derechos Socio Laborales
function derechos_laborales_type()
{
  $labels = array(
    'name' => 'Derechos Socio Laborales',
    'singular_name' => 'Derecho Socio Laboral',
    'menu_name' => 'Derechos Socio Laborales'
  );
  $supports = array(
    'title', 'editor', 'custom-fields'
  );
  $args = array(
    'label' => "Derechos Socio Laborales",
    'description' => 'Derechos Socio Laborales de los Trabajadores Migrantes',
    'labels' => $labels,
    'supports' => $supports,
    'public' => true,
    'show_in_menu' => true,
    'menu_position' => 5,
    'menu_icon' => 'dashicons-editor-ul',
    'can_export' => true,
    'publicly_queryable' => true,
    'rewrite' => true,
    'show_in_rest' => false
  );
  register_post_type('derecho', $args);
}

add_action('init', 'derechos_laborales_type');