// // Este es un archivo inicial, debe ser borrado o modificado
// console.log("Archivo inicial");

jQuery(function ($) {
  $('.buscador-noticias').submit(function(e) {
    e.preventDefault();
    let palabraClave = null;
    let categoria = null;
    let fechaDesde = null;
    let fechaHasta = null;
    console.log($(this).attr('id'));
    // var frm = $(this).data();
    if($(this).attr('id') === 'frm-buscar-noticias'){
      palabraClave = $('#buscador').val();
    }
    else{
      palabraClave = $('#palabra-clave').val();
      categoria = $('#categoria').val();
      fechaDesde = $('#fecha_desde').val();
      fechaHasta = $('#fecha_hasta').val();
      if(fechaDesde && fechaHasta){
        console.log(fechaDesde);
        fechaDesde = fechaDesde.split('/');
        // fechaDesde = `${fechaDesde[2]}-${fechaDesde[1]}-${fechaDesde[0]}`;
        fechaDesde = new Date(`${fechaDesde[1]}/${fechaDesde[0]}/${fechaDesde[2]}`);
        fechaDesde = fechaDesde.getFullYear() + "-" + (fechaDesde.getMonth() + 1) + "-" + fechaDesde.getDate();
        fechaHasta = fechaHasta.split('/');
        // fechaHasta = `${fechaHasta[2]}-${fechaHasta[1]}-${fechaHasta[0]}`;
        fechaHasta = new Date(`${fechaHasta[1]}/${fechaHasta[0]}/${fechaHasta[2]}`);
        fechaHasta = fechaHasta.getFullYear() + "-" + (fechaHasta.getMonth() + 1) + "-" + fechaHasta.getDate();
      }
      else {
        fechaHasta = null;
        fechaDesde = null;
      }
    }
    console.log(fechaDesde);
    console.log(fechaHasta);
    $.ajax({
      url: wp.ajaxurl,
      method: 'POST',
      data: {
        'action': 'wpFiltroNoticias',
        'palabra-clave': palabraClave,
        'fecha-desde': fechaDesde,
        'fecha-hasta': fechaHasta,
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
              <span class="newsCard__timestamp">${item.date} - ${item.time}</span>
            </div>
            <div class="newsCard__body">
              <a href="${item.link}" class="newsCard__title mt-3">
                ${item.title}
              </a>
              <p class="newsCard__description">
                ${item.excerpt}
              </p>
            </div>
            <div class="newsCard__footer">
              <a href="${item.link}" class="newsCard__button">
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
            '<div class="no-results">No se encontraron resultados...</div>'
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