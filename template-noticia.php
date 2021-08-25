<?php 
//Template Name: Página de noticias
?>
<?php get_header(); ?>

<?php 
  $categorias = get_terms(['taxonomy' =>'categoria-noticias', 'hide_empty' => false]);
?>

<?php
    $args = array(
      'post_type' => 'noticia',
      'post_per_page' => -1,
      'order' => 'ASC',
      'orderby' => 'title'
    );
    $noticias = new WP_Query($args);
?>

<main class="container mt-8">  
  <!-- <h1>Derechos</h1> -->
  <script>
    console.log(<?= json_encode($categorias); ?>);
  </script>
  <div class="row">
    <div class="col-md-4">
      <aside class="my-2 utils no-print social-utils">
        <h1>Noticias</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion__button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <span class="dashicons dashicons-filter"></span>
                Filtros de búsqueda
              </button>
            </h2>
          </div>
        </div>
        <div id="flush-collapseOne" class="accordion-collapse collapse accordion-responsive" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
            <form action="">
              <div class="container">
                <div class="form-group pb-4">
                  <label class="fw-bold mb-2" for="">Filtros de búsqueda</label>
                  <input class="input" type="text" placeholder="Palabra clave">
                </div>
              </div>
              <div class="container-fluid container--gray py-4">
                <div class="input-daterange form-group pb-4" id="datepicker">
                  <label class="fw-bold mb-2" for="">Fecha de publicación</label>
                  <div class="row">
                    <div class="col-5">
                      <input type="text" class="form-control input" placeholder="Desde" name="start" />
                    </div>
                    <div class="col-1">
                      <span class="input-group-addon">-</span>
                    </div>
                    <div class="col-5">
                      <input type="text" class="form-control input" placeholder="Hasta" name="end" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="fw-bold mb-2" for="">Categorías</label>
                    <?php
                      if(count($categorias) > 0) 
                      {
                        ?>
                          <select class="select" aria-placeholder="Tipo de categorías" name="" id="">
                            <option hidden selected>Tipo de categorías</option>
                            <?php 
                              foreach ($categorias as $categoria) {
                                ?>
                                  <option value="">
                                    <?php echo $categoria->name  ?>
                                  </option>
                                <?php
                              }
                            ?>
                          </select>
                        <?php
                      }
                      else {
                        ?>
                          <select disabled class="select" aria-placeholder="Tipo de categorías" name="" id="">
                            <option hidden selected>No disponible</option>
                          </select>
                        <?php
                      }
                    ?>
                </div>
              </div>
              <div class="container py-3">
                <input class="button button--primary button--full" type="submit" value="Mostrar resultados">
              </div>
            </form>
          </div>
        </div>
      </aside>
    </div>
    <div class="col-md-8">
      <div class="container-fluid pt-5 pb-3">
        <form class="searchbar__form" action="#action">
          <div class="input-group input-group-lg md-3">
            <div class="searchbar__icon--minimalist" id="basic-addon1">
              <span class="dashicons dashicons-search"></span>
              <!-- <img src="<?php echo get_template_directory_uri() ?>/assets/img/icons/search_black_24dp.svg"> -->
            </div>
            <label for="search" class="visually-hidden">Buscar</label>
            <input class="searchbar__input--minimalist" name="search" type="search" placeholder="Buscar en DSSML" />
          </div>
        </form>
      </div>
      <div class="container-fluid">
        <?php 
          if ($noticias->have_posts()) {
            while ($noticias->have_posts()) {
              $noticias->the_post();
          ?>
            <div class="newsCard container-fluid container--gray py-4 my-3">
              <div class="newsCard__header">
                <span class="newsCard__type">Orientación, trámites y servicios</span>
                <span class="newsCard__timestamp">28 de julio de 2021 - 5:53 a.m.</span>
              </div>
              <div class="newsCard__body">
                <a href="" class="newsCard__title mt-3">
                  <?php the_title(); ?>
                </a>
                <p class="newsCard__description">
                  <?php the_excerpt(); ?>
                </p>
              </div>
              <div class="newsCard__footer">
                <a href="" class="newsCard__button">
                  Ver más
                  <span class="dashicons dashicons-arrow-right-alt2"></span>
                </a>
              </div>
            </div>
              <!-- <div class="col-4 d-flex">
                <li class="list__element--link">
                  <a class="link text-center" href="<?php echo get_post_meta(get_the_ID(), 'external_link', true); ?>">
                    <span class="link__text"></span>
                    <span class="dashicons dashicons-external"></span>
                  </a>
                </li>
              </div> -->
          <?php
            }
          }
        ?>
      </div>
      <?php
        if (have_posts()) {
          while (have_posts()) {
            the_post();
        ?>
          <?php the_content(); ?>
        <?php
          }
        }
      ?>
    </div>
  </div>
  <script>
    jQuery(function ($) {
      $('#datepicker').datepicker({
        format: "dd/mm",
        orientation: "bottom auto",
        autoclose: true,
        todayHighlight: true,
        toggleActive: true
      });
    });
  </script>
</main>


<?php get_footer(); ?>