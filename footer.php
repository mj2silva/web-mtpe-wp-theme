<footer id="footer">
  <div class="container-fluid footer__container">
    <div class="row">
      <div class="col-3 align-self-center">
        <div class="footer__logo">
          <img src="<?php echo get_template_directory_uri() ?>/assets/img/logos/logo_negro.svg" alt="Logo secundario gob.pe">
        </div>
      </div>
      <div class="col-4 align-self-center">
        <?php
        wp_nav_menu(
          array(
            'theme_location' => 'footer_menu',
            'menu_class' => 'nav nav-pills flex-column',
            'container_class' => 'footer__nav-container'
          )
        );
        ?>
      </div>
      <div class="col align-self-center">
        <div>Aquí el resto</div>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer() ?>
</body>

</html>