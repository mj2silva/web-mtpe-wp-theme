<?php
//Template Name: Página de derechos
?>

<?php get_header(); ?>

<?php
$args = array(
  'post_type' => 'derecho',
  'post_per_page' => 13,
  'orderby' => 'date',
  'order' => 'ASC',
  'post_status' => 'publish',
);
$derechos = new WP_Query($args);
?>

<?php
$enlaces_relacionados = array(
  array(
    'title' => 'Los Derechos Laborales de los Trabajadores Migrantes',
    'link' => './'
  ),
  array(
    'title' => 'Proceso Migratorio Laboral',
    'link' => home_url() . '/migracion-laboral/proceso-migratorio-laboral/'
  )
);
?>

<main class="container mt-8">
  <!-- <h1>Derechos</h1> -->
  <div class="row">
    <div id="postArea" class="printing-area col-md-8">
      <div class="mb-4 mt-4 ps-2 border-gob-start">
        <a class="link--secondary-template link--secondary-regular" href="<?php echo home_url() ?>">Dirección de Seguridad Social y Migración Laboral</a>
      </div>
      <h1 class="my-3">
        Derechos Laborales
      </h1>
      <?php
      if ($derechos->have_posts()) {
        while ($derechos->have_posts()) {
          $derechos->the_post();
      ?>
          <ul class="list-container">
            <li class="list py-1">
              <p class="list-item">
                <span class="list__title"><?php the_title(); ?>: </span>
                <span class="list__text"><?php echo get_the_content(); ?></span>
              </p>
            </li>
          </ul>
      <?php
        }
      }
      ?>
      <div>
        <h6 class="h6" style="font-size: 0.9rem; color: grey">
          [3] Para conocer la equivalencia de la Remuneración Mínima Vital, se recomienda la conversión a
          la moneda norteamericana, según el cambio del día.
        </h6>
      </div>
    </div>
    <div class="col-md-4">
      <aside class="my-5 utils no-print social-utils">
        <div class="container-fluid">
          <h5>Enlaces relacionados</h5>
          <div class="relatedLinks-container pt-1 pb-3">
            <?php foreach ($enlaces_relacionados as $enlace) {
            ?>
              <div class="row">
                <a class="link--secondary-template my-2" href="<?php echo $enlace['link'] ?>"><?php echo $enlace['title'] ?></a>
              </div>
            <?php
            }
            ?>
          </div>
        </div>
        <div class="row pt-4 mx-auto">
          <?php get_template_part('template-parts/content', 'options') ?>
        </div>
      </aside>
    </div>
  </div>
</main>

<script>
  jQuery(function($) {
    $('btnShare').click(function() {
      $('.ss-btn-share').html('<div>gaaa</div>');
    });
  });
</script>

<?php get_footer(); ?>