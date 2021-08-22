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
</main>

<?php get_footer(); ?>