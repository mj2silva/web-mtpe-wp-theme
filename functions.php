<?php

// Urls de librerías externas
$bootstrap_css_uri = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
$font_uri = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap';
$popper_js_uri = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js';
$bootstrap_js_uri = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js';
$material_icons_uri = 'https://fonts.googleapis.com/icon?family=Material+Icons';

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
  global $bootstrap_css_uri, $font_uri, $popper_js_uri, $bootstrap_js_uri, $material_icons_uri;
  wp_register_style('bootstrap', $bootstrap_css_uri, '', '5.0.2', 'all');
  wp_register_style('montserrat', $font_uri, '', '1.0', 'all');
  wp_register_style('material-icons', $material_icons_uri, '', '1.0', 'all');
  wp_enqueue_style('bootstrap-datepicker-css', get_template_directory_uri() . '/libs/datepicker/css/bootstrap-datepicker.standalone.css', '', '1.0', 'all');
  $rand = rand(0, 99999999999999);
  wp_enqueue_style('styles', get_stylesheet_uri(), array('bootstrap', 'montserrat', 'material-icons'), $rand, 'all');

  wp_register_script('popper', $popper_js_uri, '', '2.9.2', true);
  wp_enqueue_script('bootstraps', $bootstrap_js_uri, array('jquery', 'popper'), '5.0.2', true);
  wp_enqueue_script('custom', get_template_directory_uri() . '/assets/js/custom.js', '', '1.0', true);
  wp_enqueue_script('bootstrap-datepicker-js', get_template_directory_uri() . '/libs/datepicker/js/bootstrap-datepicker.min.js', '', '1.0', true);
  wp_enqueue_script('bootstrap-datepicker-locale', get_template_directory_uri() . '/libs/datepicker/locales/bootstrap-datepicker.es.min.js', '', '1.0', true);
  wp_enqueue_script('custom', get_template_directory_uri() . '/assets/js/custom.js', '', '1.0', true);
  wp_localize_script('custom', 'wp', array(
    'ajaxurl' => admin_url('admin-ajax.php')
  ));
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

//Post Type: Derechos Socio Laborales
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
    'show_in_rest' => true
  );
  register_post_type('derecho', $args);
}

add_action('init', 'derechos_laborales_type');

//Post Type: Noticias
function noticias_type()
{
  $labels = array(
    'name' => 'Noticias',
    'singular_name' => 'Noticia',
    'menu_name' => 'Noticias'
  );
  $supports = array(
    'title', 'editor', 'custom-fields'
  );
  $args = array(
    'label' => "Noticias",
    'description' => 'Noticias',
    'labels' => $labels,
    'supports' => $supports,
    'public' => true,
    'show_in_menu' => true,
    'menu_position' => 5,
    'menu_icon' => 'dashicons-media-spreadsheet',
    'can_export' => true,
    'publicly_queryable' => true,
    'rewrite' => false,
    'show_in_rest' => true
  );
  register_post_type('noticia', $args);
}

add_action('init', 'noticias_type');

//Taxonomía Categoría de Noticias

add_action('init', 'pgRegisterNewsTax');

function pgRegisterNewsTax()
{
  $labels = array(
    'name' => 'Categoría de Noticias',
    'singular_name' => 'Categoría de Noticia'
  );
  $args = array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_in_nav_menu' => true,
    'show_admin_column' => true,
    'rewrite' => array('slug' => 'categoria-noticias')
  );
  register_taxonomy('categoria-noticias', array('noticia'), $args);
}

add_action('init', 'pgRegisterBlock');

add_action("wp_ajax_nopriv_wpFiltroNoticias", "wpFiltroNoticias");
add_action("wp_ajax_wpFiltroNoticias", "wpFiltroNoticias");

function wpFiltroNoticias() {
  $args = array(
    'post_type' => 'noticia',
    'posts_per_page' => -1,
    'order' => 'ASC',
    'orderby' => 'title'
  );
  if ($_POST['categoria']){
    $args['tax_query'] = array(
      array(
        'taxonomy' => 'categoria-noticias',
        'field' => 'slug',
        'terms' => $_POST['categoria']
      )
      );
  }
  $noticias = new WP_Query($args);
  if($noticias->have_posts()){
    $return = array();
    while($noticias->have_posts()){
      $noticias->the_post();
      $return[] = array(
        'title' => get_the_title(),
        'link' => get_the_permalink(),
        'excerpt' => get_the_excerpt(),
        'date' => get_the_date(),
        'time' => get_the_time('g:i a'),
      );
    }
    wp_send_json($return);
  }
}

//

function pgRegisterBlock()
{
  $assets = include_once get_template_directory() . '/blocks/build/index.asset.php';
  wp_register_script(
    'pg-block',
    get_template_directory_uri() . '/blocks/build/index.js',
    $assets['dependencies'],
    $assets['version'],
  );
  register_block_type(
    'mtpe/info-links',
    array(
      'editor_script' => 'pg-block',
    )
  );
  register_block_type(
    'mtpe/info-cards',
    array(
      'editor_script' => 'pg-block',
    )
  );
  register_block_type(
    'mtpe/info-assets',
    array(
      'editor_script' => 'pg-block',
    )
  );
  register_block_type(
    'mtpe/social-rights-widget',
    array(
      'editor_script' => 'pg-block',
      'render_callback' => 'mtpeRenderDynamicSocialRights'
    )
  );
}

function pgRenderDynamicBlock($attributes, $content)
{
  return '<h2>' . $attributes['content'] . '</h2>';
}

function mtpeRenderDynamicSocialRights($block_attributes, $content)
{
  $recent_posts = wp_get_recent_posts(array(
    'post_type' => 'derecho',
    'numberposts' => -1,
    'post_status' => 'publish',
  ));
  if (count($recent_posts) === 0) {
    return 'No posts';
  }
  $render =
    '
    <section id="derechos-socio-laborales" class="container py-5 p-4">
      <div class="py-4">
        <h2>Conoce los Derechos Socio Laborales de los Trabajadores Migrantes</h2>
        <p class="h5">
          Los trabajadores migrantes del Régimen Laboral de la Actividad Privada tienen entre sus principales derechos socio laborales los siguientes:
        </p>
      <div class="container my-3 container--gray">
        <ul class="row py-4">';
  foreach ($recent_posts as $post) {
    $post_id = $post['ID'];
    $render = $render . sprintf(
      '<div class="col-4 d-flex">
          <li class="list__element-item">
            <a class="link text-center" href="%1$s">
              <span class="link__text">%2$s</span>
              <span class="material-icons link__icon">open_in_new</span>
            </a>
          </li>
        </div>',
      esc_url(get_permalink($post_id)),
      esc_html(get_the_title($post_id))
    );
  }
  $render = $render . '
        </ul>
          </div>
      <div class="row">
        <div class="col d-flex flex-row-reverse">
          <a href="derechos-laborales" class="button button--secondary" style="justify-content: space-between;">
            Ver más derechos
            <svg class="ml-4 button__icon" xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26">
              <path fill="currentColor" d="M12.5.5l-2.203 2.203 8.719 8.735H0v3.125h19.016l-8.72 8.734L12.5 25.5 25 13z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
    ';
  return $render;
}

function misha_gutenberg_css()
{
  global $bootstrap_css_uri, $material_icons_uri;
  add_theme_support('editor-styles');
  add_editor_style('style.css');
  add_editor_style('editor-styles.css');
  add_editor_style($bootstrap_css_uri);
  add_editor_style($material_icons_uri);
}

add_action('after_setup_theme', 'misha_gutenberg_css');

/* add_filter('nav_menu_css_class', 'special_nav_class', 10, 2);

function special_nav_class($classes, $item)
{
  if (in_array('current-menu-item', $classes)) {
    $classes[] = 'active header__nav--active';
  }
  return $classes;
} */

