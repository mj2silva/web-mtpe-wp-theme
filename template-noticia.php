<?php 
//Template Name: Página de noticias
?>
<?php get_header(); ?>

<?php 
  $categorias = get_terms(['taxonomy' =>'categoria-noticias', 'hide_empty' => false]);
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
            <!-- <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div> -->
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
    <div id="postArea" class="printing-area col-md-8">
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