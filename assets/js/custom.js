// // Este es un archivo inicial, debe ser borrado o modificado
// console.log("Archivo inicial");

jQuery(function ($) {
  $('#frm-filtros-noticias').submit(function(e) {
    e.preventDefault();
    // var frm = $(this).data();
    
    // console.log(frm);
    const categoria = $('#categoria').val();
    console.log(categoria);
    $.ajax({
      url: wp.ajaxurl,
      method: 'POST',
      data: {
        'action': 'wpFiltroNoticias',
        'categoria': categoria,
      },
      beforeSend: function() {
        $('#contenedor-noticias').html(
          '<div class="spinner-container"><div class="spinner"></div></div>'
        );
      },
      success: function(data) {
        console.log(data);
        if(data !=0 ){
          let html ="";
          data.forEach(item => {
            html += `<div class="newsCard container-fluid container--gray py-4 my-3">
            <div class="newsCard__header">
              <span class="newsCard__type">Orientación, trámites y servicios</span>
              <span class="newsCard__timestamp">28 de julio de 2021 - 5:53 a.m.</span>
            </div>
            <div class="newsCard__body">
              <a href="" class="newsCard__title mt-3">
                ${item.title}
              </a>
              <p class="newsCard__description">
                ${item.excerpt}
              </p>
            </div>
            <div class="newsCard__footer">
              <a href="" class="newsCard__button">
                Ver más
                <span class="dashicons dashicons-arrow-right-alt2"></span>
              </a>
            </div>
          </div>`;
          $('#contenedor-noticias').html(html);
          });
        }
        else {
          $('#contenedor-noticias').html(
            'No se encontraron resultados...'
          );
        }
      },
      error: function(error) {
        $('#contenedor-noticias').html(
          'No se encontraron resultados...'
        );
      }
    });
  });
  $('#btnPrint').click(function () {
    var a = document.getElementsByClassName('printing-area');
    a.print();
  });
  $('#btnSave').click(function () {
    alert('Presiona Ctrl+D para guardar esta página.');
  });
});


(function () {
  const navMenuElements = document.getElementsByClassName('header__nav-link');
  const currentLocation = window.location.href;
  console.log(currentLocation);
  [...navMenuElements].forEach((element) => {
    if (element.href === currentLocation) {
      element.parentElement.classList.add('header__nav--active');
    } else {
      element.parentElement.classList.remove('header__nav--active');
    }
  })
})();