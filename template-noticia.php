<?php 
//Template Name: Página de noticias
?>
<?php get_header(); ?>

<main class="container mt-8">  
  <!-- <h1>Derechos</h1> -->
  <div class="row">
    <div class="col-md-4">
      <aside class="my-5 utils no-print social-utils">
        <form action="">
          <div class="form-group">
            <label class="text-bold" for="">Filtros de búsqueda</label>
            <input class="input" type="text" placeholder="Palabra clave">
          </div>
          <div class="container-fluid container--gray">
            <div class="input-daterange form-group" id="datepicker">
              <label for="">Fecha de publicación</label>
              <div class="row">
                <div class="col-4">
                  <input type="text" class="form-control input" placeholder="Desde" name="start" />
                </div>
                <div class="col-1">
                  <span class="input-group-addon">-</span>
                </div>
                <div class="col-4">
                  <input type="text" class="form-control input" placeholder="Hasta" name="end" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </aside>
    </div>
    <div id="postArea" class="printing-area col-md-8">
      <?php
        if (have_posts()) {
          while (have_posts()) {
            the_post();
        ?>
          <h1 class="my-3">
            Es una <?php the_title() ?>
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