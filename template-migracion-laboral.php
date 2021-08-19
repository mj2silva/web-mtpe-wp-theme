<?php
// Template name: Página de migración laboral
get_header();
$fields = get_fields();
?>
<div class="container-fluid p-0">
  <?php
  while (have_posts()) {
    the_post();
  ?>
    <div id="carouselExampleSlidesOnly" class="carousel slide presentation" data-bs-ride="carousel">
      <div class="d-none d-md-block carousel-inner">
        <div class="carousel-item active">
          <img src="<?php echo $fields['imagen_principal']; ?>" class="d-md-block w-100 presentation__image" alt="Imagen de portada">
          <div class="row px-0 presentation__field carousel-caption d-block">
            <div class="container">
              <h1><?php echo $fields['titulo_principal']; ?></h1>
              <div class="presentation__content text-start">
                <?php echo $fields['mensaje_presentacion']; ?>
              </div>
              <div class="presentation__buttons-container text-start">
                <a href="" class="btn btn-primary presentation__button">Migración laboral</a>
                <a href="" class="btn btn-primary presentation__button">Seguridad social</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-md-none d-block row px-4 py-3">
        <div class="container">
          <h1><?php echo $fields['titulo_principal']; ?></h1>
          <div class="presentation__content text-start">
            <?php echo $fields['mensaje_presentacion']; ?>
          </div>
          <div class="presentation__buttons-container text-start">
            <a href="" class="btn btn-primary presentation__button">Migración laboral</a>
            <a href="" class="btn btn-primary presentation__button">Seguridad social</a>
          </div>
        </div>
      </div>
    </div>
</div>
<?php
  }
?>
<div class="container">
  <?php the_content(); ?>
</div>
</div>
<?php get_footer(); ?>