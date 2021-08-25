<footer id="footer" class="mt-5">
  <div class="container-fluid footer__container">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 d-flex justify-content-center align-self-center">
          <div class="d-block">
            <img class="d-inline-block me-3" src="<?php echo get_template_directory_uri() ?>/assets/img/logos/escudo_blanco.svg" alt="Logo gob.pe">
            <img class="d-inline-block" src="<?php echo get_template_directory_uri() ?>/assets/img/logos/gobpe_blanco.svg" alt="Logo gob.pe">
          </div>
        </div>
        <div class="col-12 col-md-4 my-5 d-flex justify-content-center align-self-center">
          <?php
          wp_nav_menu(
            array(
              'theme_location' => 'footer_menu',
              'menu_class' => 'nav text-center text-md-start nav-pills flex-column',
              'container_class' => 'footer__nav-container'
            )
          );
          ?>
        </div>
        <div class="col-12 col-md-4 align-self-center text-center text-md-end">
          <figure class="footer__secondary-logo">
            <img class="mx-auto" src="<?php echo get_template_directory_uri() ?>/assets/img/logos/mtpe-logo.svg" alt="">
          </figure>
          <h4 class="footer__company-name">DIRECCIÓN DE SEGURIDAD SOCIAL Y MIGRACIÓN LABORAL</h4>
          <p class="footer__contact-line">Av. Salaverry N° 655 piso 6 - Jesús María - Lima</p>
          <p class="footer__contact-line">Teléfono: 6306000 anexo 6005 - anexo 6007 - anexo 6039</p>
        </div>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer() ?>
</body>

</html>