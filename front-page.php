<?php get_header(); ?>

<main class="container">

<section id="derechos-socio-laborales" class="container py-5 p-4" >
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
          if($derechos_laborales->have_posts())
          {
            while($derechos_laborales->have_posts())
            {
              $derechos_laborales->the_post();
              ?>
                <div class="col-4 d-flex">
                  <li class="list__element--link">
                    <a class="link text-center" href="<?php echo get_post_meta(get_the_ID(),'external_link', true); ?>">
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
        <button class="button button--secondary" style="justify-content: space-between;">
          Ver más derechos
          <svg class="ml-4 button__icon" xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26">
            <path fill="currentColor" d="M12.5.5l-2.203 2.203 8.719 8.735H0v3.125h19.016l-8.72 8.734L12.5 25.5 25 13z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

</main>

<?php get_footer(); ?>