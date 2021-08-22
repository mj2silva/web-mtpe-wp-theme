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
<section id="derechos-socio-laborales" class="container py-5 p-4">
  <div class="py-4">
    <h2>Conoce los Derechos Socio Laborales de los Trabajadores Migrantes</h2>
    <p class="h5">
      Los trabajadores migrantes del Régimen Laboral de la Actividad Privada tienen entre sus principales derechos socio laborales los siguientes:
    </p>
    <div class="container container--gray">
      <ul class="row py-4">
        <?php
        $args = array(
          'post_type' => 'derecho',
          'post_per_page' => -1,
          'order' => 'ASC',
          'orderby' => 'title'
        );
        $derechos_laborales = new WP_Query($args);
        if ($derechos_laborales->have_posts()) {
          while ($derechos_laborales->have_posts()) {
            $derechos_laborales->the_post();
        ?>
            <div class="col-4 d-flex">
              <li class="list__element--link">
                <a class="link text-center" href="<?php echo get_post_meta(get_the_ID(), 'external_link', true); ?>">
                  <span class="link__text"><?php the_title(); ?></span>
                  <span class="dashicons dashicons-external"></span>
                </a>
              </li>
            </div>
        <?php
          }
        }
        ?>
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
</div>
<?php get_footer(); ?>