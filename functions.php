<?php

function init_template()
{
  add_theme_support('post-tumbnails');
  add_theme_support('title-tag');

  register_nav_menus(
    array(
      'top_menu' => 'Menú principal'
    )
  );
}

add_action('after_setup_theme', 'init_template');

function assets()
{
  wp_register_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', '', '5.0.2', 'all');
  wp_register_style('montserrat', 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap', '', '1.0', 'all');
  wp_enqueue_style('styles', get_stylesheet_uri(), array('bootstrap', 'montserrat'), '1.0', 'all');

  wp_enqueue_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', '', '5.0.2', true);
  wp_enqueue_script('custom', get_template_directory_uri() . '/assets/js/custom.js', '', '1.0', true);
}

add_action('wp_enqueue_scripts', 'assets');

function sidebar()
{
  register_sidebar(
    array(
      'name' => 'Footer',
      'id' => 'footer',
      'description' => 'Zona de Widgets para pie de página',
      'before_title' => '<p>',
      'after_title' => '</p>',
      'before_widget' => '<div id="%1$s" class="%2$s">',
      'after_widget' => '</div>'
    )
  );
}

add_action('widgets_init', 'sidebar');

function atg_menu_classes($classes, $item, $args)
{
  if ($args->menu->name == 'Main menu') {
    $classes[] = 'nav-item header__nav-item';
  }
  return $classes;
}

add_filter('nav_menu_css_class', 'atg_menu_classes', 10, 3);

// Verifica si el item está en el menú principal y agrega las clases css faltantes
function add_specific_menu_location_atts($atts, $item, $args)
{
  if ($args->menu->name == 'Main menu') {
    $atts['class'] = 'nav-link header__nav-link';
  }
  return $atts;
}
add_filter('nav_menu_link_attributes', 'add_specific_menu_location_atts', 10, 3);
