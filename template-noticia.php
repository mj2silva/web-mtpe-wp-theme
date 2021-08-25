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
      <aside class="my-5 utils no-print social-utils">
        <h1>Noticias</h1>
        <div class="">
          <form action="">
            <div class="container py-4">
              <div class="form-group">
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
          </form>
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