<?php 
//Template Name: Página de publicación
?>
<?php get_header(); ?>

<?php 
  $enlaces_relacionados = array(
    array(
      'title' => 'Los Derechos Laborales de los Trabajadores Migrantes',
      'link' => '#'
    ),
    array(
      'title' => 'Proceso Migratorio Laboral',
      'link' => '#'
    )
  );
?>

<main class="container mt-8">
  <!-- <h1>Derechos</h1> -->
  <div class="row">
    <div id="postArea" class="printing-area col-md-8">
      <div class="mb-4 mt-4 ps-2 border-gob-start">
        <a class="link--secondary link--secondary-regular" href="">Dirección de Seguridad Social y Migración Laboral</a>
      </div>
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
    <div class="col-md-4">
      <aside class="my-5 utils no-print social-utils">
        <div class="container-fluid">
          <h5>Enlaces relacionados</h5>
          <div class="relatedLinks-container pt-1 pb-3">
            <?php foreach ($enlaces_relacionados as $enlace) {
              ?>
                <div class="row">
                  <a class="link--secondary my-2" href="<?php echo $enlace['link'] ?>"><?php echo $enlace['title'] ?></a>
                </div>
              <?php
            }
            ?>
          </div>
        </div>
        <div class="row pt-4 mx-auto">
          <div class="col-4 d-flex justify-content-center">
            <button id="btnPrint" class="btn-utils">
              <span class="icon-utils icon--gob-44 material-icons">print</span>
              <span>Imprimir</span>
            </button>
          </div>
          <div class="col-4 d-flex justify-content-center">
            <button type="button" id="btnShare" onclick="javascript:window.print()" class="btn-utils">
              <span class="icon-utils icon--gob-44 material-icons">share</span>
              <span>Compartir</span>
            </button>
          </div>
          <div class="col-4 d-flex justify-content-center">
            <button type="button" id="btnSave" class="btn-utils">
              <span class="icon-utils icon--gob-44 material-icons">bookmark_border</span>
              <span>Guardar</span>
            </button>
          </div>
        </div>
        <!-- <div class="row pt-2 mx-auto">
          <div class="col-xs-6 col-sm-3 col-md-4 action js-print center" id="social-focus">
            <a href="8031-tipos-de-estado-del-ruc">
              <div class="social-utils__icon">
                <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2">
                  <g clip-path="url(#clip0)">
                    <path id="border_focus" d="M13 9V3H27V9" fill="white"></path>
                    <path id="border_focus" d="M13 9V3H27V9" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10"></path>
                    <path d="M12.1792 26.0954H2.33203V8.40137H36.6676V26.0954H26.8204" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10"></path>
                    <path id="change_focus" d="M32.1329 13.7483C32.7808 13.7483 33.299 13.2392 33.299 12.6027C33.299 11.9662 32.7808 11.457 32.1329 11.457C31.4851 11.457 30.9668 11.9662 30.9668 12.6027C30.9668 13.2392 31.4851 13.7483 32.1329 13.7483Z" fill="#26292E"></path>
                    <path id="border_focus" d="M26.9505 16.4209H12.1797V30.9325H26.9505V16.4209Z" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10"></path>
                    <path id="change_focus" d="M16 21H23" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10"></path>
                    <path id="change_focus" d="M16 26H23" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="39" height="32.8421" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto hidden mb-2">
                  <path d="M11.4641 25H2V6H35V25H27" fill="#26292E"></path>
                  <path d="M11.4641 25H2V6H35V25H27H11.4641Z" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10"></path>
                  <path d="M32.1661 11.33C32.814 11.33 33.3322 10.8122 33.3322 10.165C33.3322 9.51778 32.814 9 32.1661 9C31.5183 9 31 9.51778 31 10.165C31 10.8122 31.5183 11.33 32.1661 11.33Z" fill="white"></path>
                  <rect x="12" width="13" height="3" fill="#26292E"></rect>
                  <rect x="10" y="14" width="17" height="17" fill="white"></rect>
                  <rect x="12" y="16" width="13" height="13" fill="#26292E"></rect>
                  <path d="M15.0605 20H22.0605" stroke="white" stroke-width="2.3" stroke-miterlimit="10"></path>
                  <path d="M15.0605 24.8369H22.0605" stroke="white" stroke-width="2.3" stroke-miterlimit="10"></path>
                </svg>
              </div>
              <span class="social-utils__icon-description">
                Imprimir
              </span>
            </a>
          </div>
          <div class="action col-xs-6 col-sm-3 col-sm-offset-3 col-md-4 col-md-offset-0 center" id="social-focus">
            <a aria-controls="social-utils-control" aria-expanded="false" class="js-share" data-contents="Si tienes número de RUC, debes verificar que se encuentre siempre en estado activo, ya que esta situación te permite realizar tus actividades con normalidad.Existen seis (6) tipos de estados de RUC:Activo: estás realizando actividades comerciales.Suspensión temporal: comunicas la suspensión de tus actividades comerciales. Puede estar suspendida hasta 12 meses calendarios consecutivos. En este caso, puedes reiniciar tus actividades en cualquier momento dentro de los 12 meses con tu usuario y clave SOL; si trascurrido el plazo, no reinicias tus actividades, puedes solicitar la baja definitiva de tu RUC.Baja provisional: solicitas la baja de inscripción del RUC y se encuentra en etapa de evaluación por parte de Sunat.Baja definitiva: Sunat ya aprobó tu baja definitiva de inscripción en el RUC.Baja provisional de oficio: es cuando Sunat presume que tu empresa podría haber dejado de realizar actividades comerciales.Baja definitiva de oficio: es cuando Sunat presume que tu empresa ha dejado de realizar actividades comerciales.  Consulta de RUCObtener Clave SOLSacar RUC - Persona Natural Si deseas conocer el estado de tu RUC, accede al servicio. " data-title="Tipos de estado del RUC" data-url="https://www.gob.pe/es/p/8031" href="#">
              <div class="social-utils__icon">
                <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto share-svg mb-2">
                  <path d="M8.08594 13.7586L20.1549 7" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M19.431 23.2934L8.44824 17.0176" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M4.94875 18.8278C6.75909 18.8278 8.20737 17.3795 8.20737 15.5692C8.20737 13.7588 6.75909 12.3105 4.94875 12.3105C3.1384 12.3105 1.69013 13.7588 1.69013 15.5692C1.56944 17.3795 3.1384 18.8278 4.94875 18.8278Z" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"></path>
                  <path d="M23.0516 27.7585C24.8619 27.7585 26.3102 26.3102 26.3102 24.4998C26.3102 22.6895 24.8619 21.2412 23.0516 21.2412C21.2412 21.2412 19.793 22.6895 19.793 24.4998C19.793 26.3102 21.2412 27.7585 23.0516 27.7585Z" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"></path>
                  <path d="M23.0516 8.08658C24.8619 8.08658 26.3102 6.6383 26.3102 4.82796C26.3102 3.01761 24.8619 1.56934 23.0516 1.56934C21.2412 1.56934 19.793 3.01761 19.793 4.82796C19.793 6.6383 21.2412 8.08658 23.0516 8.08658Z" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"></path>
                </svg>
              </div>
              <span class="social-utils__icon-description">
                Compartir
              </span>
            </a>
            <div class="row social-utils__share-content" style="display: none;">
              <div class="col-xs-6 col-sm-3 col-sm-offset-3 col-md-4 col-md-offset-0 center">
                <ul class="social-utils__share-icons mb-0" id="social-utils-control">
                  <li>
                    <a class="social-utils__social-icon social-utils__social-icon--facebook fb track-ga-click" data-origin="share-fb" href="https://www.facebook.com/sharer/sharer.php?u=https://www.gob.pe/8031-tipos-de-estado-del-ruc" rel="noreferrer" target="_blank">
                      <i aria-hidden="true" class="icon-facebook"></i>
                      <span class="social-utils__medium">
                        Facebook
                      </span>
                    </a>
                  </li>
                  <li>
                    <a class="social-utils__social-icon social-utils__social-icon--twitter tw track-ga-click" data-origin="share-tw" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.gob.pe%2Fes%2Fp%2F8031&amp;text=Tipos%20de%20estado%20del%20RUC%20%23GobPe" rel="noreferrer" target="_blank">
                      <i aria-hidden="true" class="icon-twitter"></i>
                      <span class="social-utils__medium">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a class="social-utils__social-icon social-utils__social-icon--whatsapp wp track-ga-click" data-origin="share-wp" href="https://wa.me/?text=Tipos%20de%20estado%20del%20RUC%20Si%20tienes%20n%C3%BAmero%20de%20RUC%2C%20debes%20verificar%20que%20se%20encuentre%20siempre%20en%20estado%20a...%20https%3A%2F%2Fwww.gob.pe%2Fes%2Fp%2F8031" rel="noreferrer" target="_blank">
                      <i aria-hidden="true" class="icon-whatsapp"></i>
                      <span class="social-utils__medium">Whatsapp</span>
                    </a>
                  </li>
                  <li>
                    <a class="social-utils__social-icon social-utils__social-icon--email" data-origin="share-send" href="mailto:?subject=Tipos de estado del RUC&amp;body=Hola! te comparto esta página: https%3A%2F%2Fwww.gob.pe%2F8031-tipos-de-estado-del-ruc">
                      <i aria-hidden="true" class="icon-mail"></i>
                      <span class="social-utils__medium">Email</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 action bookmark center" id="social-focus" style="display: block;">
            <a href="8031-tipos-de-estado-del-ruc" rel="sidebar">
              <div class="social-utils__icon">
                <svg width="22" height="31" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto bookmark-svg  mb-2">
                  <path d="M20 28.04L11 20L2 28.04V2H20V28.04Z" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="9.99856"></path>
                  <path class="change_plus" d="M10.8789 7.63965V14.4796" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10"></path>
                  <path class="change_plus" d="M7.64062 11.1201H14.3606" stroke="#26292E" stroke-width="2.3" stroke-miterlimit="10"></path>
                </svg>
              </div>
              <span class="social-utils__icon-description">
                Guardar
              </span>
            </a>
          </div>
        </div> -->
      </aside>
    </div>
  </div>
</main>

<?php get_footer(); ?>