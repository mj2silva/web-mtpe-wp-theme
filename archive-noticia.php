<?php
//Template Name: Página de noticias
?>
<?php get_header(); ?>

<?php
$categorias = get_terms(['taxonomy' => 'categoria-noticias', 'hide_empty' => false]);
?>

<?php
$args = array(
  'post_type' => 'noticia',
  'post_per_page' => get_option('posts_per_page', 6),
  'order' => 'DESC',
  'orderby' => 'date',
  'post_status' => 'publish'
);
$noticias = new WP_Query($args);
?>

<main class="container mt-8">
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
            <form id="frm-filtros-noticias" class="buscador-noticias" name="frm-filtros-noticias" method="post" action="">
              <div class="container">
                <div class="form-group pb-4">
                  <label class="fw-bold mb-2" for="">Filtros de búsqueda</label>
                  <input class="input" name="palabra-clave" type="text" placeholder="Palabra clave" id="palabra-clave">
                </div>
              </div>
              <div class="container-fluid container--gray py-4">
                <div class="input-daterange form-group pb-4" id="datepicker">
                  <label class="fw-bold mb-2" for="">Fecha de publicación</label>
                  <div class="row">
                    <div class="col-5">
                      <input autocomplete="off" type="text" class="form-control input" placeholder="Desde" name="fecha_desde" id="fecha_desde" />
                    </div>
                    <div class="col-1">
                      <span class="input-group-addon">-</span>
                    </div>
                    <div class="col-5">
                      <input autocomplete="off" type="text" class="form-control input" placeholder="Hasta" name="fecha_hasta" id="fecha_hasta" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="fw-bold mb-2" for="">Categorías</label>
                  <?php
                  if (count($categorias) > 0) {
                  ?>
                    <select class="select" aria-placeholder="Tipo de categorías" name="categoria" id="categoria">
                      <option value="" hidden selected>Tipo de categorías</option>
                      <?php
                      foreach ($categorias as $categoria) {
                      ?>
                        <option value="<?php echo $categoria->slug  ?>">
                          <?php echo $categoria->name  ?>
                        </option>
                      <?php
                      }
                      ?>
                    </select>
                  <?php
                  } else {
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
        <form class="buscador-noticias searchbar__form" id="frm-buscar-noticias">
          <div class="input-group input-group-lg md-3">
            <button class="border-0 searchbar__icon--minimalist" id="basic-addon1" type="submit">
              <span class="material-icons">search</span>
            </button>
            <label for="search" class="visually-hidden">Buscar</label>
            <input class="searchbar__input--minimalist" id="buscador" name="buscador" type="search" placeholder="Buscar en DSSML" />
          </div>
        </form>
      </div>
      <div class="container-fluid" id="contenedor-noticias">
        <?php
        // var_dump($noticias);
        function map_categories($cat)
        {
          return $cat->name;
        }
        if ($noticias->have_posts()) {
          while ($noticias->have_posts()) {
            $noticias->the_post();
            $categorias_noticia = get_the_terms($noticias->ID, 'categoria-noticias');

        ?>
            <div class="newsCard container-fluid container--gray py-4 my-3">
              <div class="newsCard__header">
                <span class="newsCard__type">
                  <?php echo (implode(', ', array_map('map_categories', $categorias_noticia)))  ?>
                </span>
                <span class="newsCard__timestamp">
                  <?php echo get_the_date(); ?> - <?php the_time('g:i a'); ?>
                </span>
              </div>
              <div class="newsCard__body">
                <a href="<?php echo get_the_permalink() ?>" class="newsCard__title mt-3">
                  <?php the_title(); ?>
                </a>
                <p class="newsCard__description">
                  <?php the_excerpt(); ?>
                </p>
              </div>
              <div class="newsCard__footer">
                <a href="<?php echo get_the_permalink() ?>" class="newsCard__button">
                  Ver más
                  <span class="dashicons dashicons-arrow-right-alt2"></span>
                </a>
              </div>
            </div>
        <?php
          }
        }
        ?>
      </div>
    </div>
  </div>
  <?php wpbeginner_numeric_posts_nav(); ?>
  <script>
    jQuery(function($) {
      $('#datepicker').datepicker({
        format: "dd/mm/yy",
        language: "es",
        orientation: "bottom auto",
        autoclose: true,
        todayHighlight: true,
        toggleActive: true
      });
    });
  </script>
</main>


<?php get_footer(); ?>