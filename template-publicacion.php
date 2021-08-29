<?php 
//Template Name: Página de publicación
?>
<?php get_header(); ?>

<?php 
  $enlaces_relacionados = array(
    array(
      'title' => 'Los Derechos Laborales de los Trabajadores Migrantes',
      'link' => '#'
    ),
    array(
      'title' => 'Proceso Migratorio Laboral',
      'link' => '#'
    )
  );
?>

<main class="container mt-8">
  <!-- <h1>Derechos</h1> -->
  <div class="row">
    <div id="postArea" class="printing-area col-md-8">
      <div class="mb-4 mt-4 ps-2 border-gob-start">
        <a class="link--secondary link--secondary-regular" href="">Dirección de Seguridad Social y Migración Laboral</a>
      </div>
      <?php
        if (have_posts()) {
          while (have_posts()) {
            the_post();
        ?>
          <h1 class="my-3">
            <?php the_title() ?>
          </h1>
          <?php the_content(); ?>
        <?php
          }
        }
      ?>
    </div>
    <div class="col-md-4">
      <aside class="my-5 utils no-print social-utils">
        <div class="container-fluid">
          <h5>Enlaces relacionados</h5>
          <div class="relatedLinks-container pt-1 pb-3">
            <?php foreach ($enlaces_relacionados as $enlace) {
              ?>
                <div class="row">
                  <a class="link--secondary my-2" href="<?php echo $enlace['link'] ?>"><?php echo $enlace['title'] ?></a>
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
  jQuery(function ($) {
    $('btnShare').click(function() {
      $('.ss-btn-share').html('<div>gaaa</div>');
    });
  });
</script>

<?php get_footer(); ?>