<?php
// Template name: Página de inicio
get_header();
$fields = get_fields();
?>
<div class="container-fluid p-0">
  <?php
  while (have_posts()) {
    the_post();
  ?>
    <div id="carouselExampleSlidesOnly" class="carousel slide presentation" data-bs-ride="carousel">
      <div class="d-none d-lg-block carousel-inner">
        <div class="carousel-item active">
          <div class="black-gradient"></div>
          <img src="<?php echo $fields['imagen_principal']; ?>" class="d-md-block w-100 presentation__image" alt="Imagen de portada">
          <div class="row px-0 carousel-caption d-flex px-2 presentation__field">
            <div class="container">
              <h1 class="h1 text-start"><?php echo $fields['titulo_principal']; ?></h1>
              <div class="presentation__content text-start">
                <?php echo $fields['mensaje_presentacion']; ?>
              </div>
              <div class="presentation__buttons-container text-start">
                <a href="/migrante/migracion-laboral" class="btn btn-primary presentation__button">Migración Laboral</a>
                <a href="/migrante/seguridad-social" class="btn btn-primary presentation__button">Seguridad Social</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-lg-none d-block row px-4 py-3 g-0">
        <div class="container">
          <h1><?php echo $fields['titulo_principal']; ?></h1>
          <div class="presentation__content text-start">
            <?php echo $fields['mensaje_presentacion']; ?>
          </div>
          <div class="presentation__buttons-container text-start">
            <a href="/migrante/migracion-laboral" class="btn btn-primary presentation__button">Migración Laboral</a>
            <a href="/migrante/seguridad-social" class="btn btn-primary presentation__button">Seguridad Social</a>
          </div>
        </div>
      </div>
    </div>
</div>
<?php
  }
?>
<?php the_content(); ?>
</div>
<?php get_footer(); ?>