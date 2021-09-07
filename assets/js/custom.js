jQuery(function ($) {
  $('.buscador-noticias').submit(function (e) {
    e.preventDefault();
    let esBuscadorGeneral = false;
    let tipoFiltro = null;
    let palabraClave = null;
    let categoria = null;
    let fechaDesde = null;
    let fechaHasta = null;
    if ($(this).attr('id') === 'frm-buscar-noticias') {
      palabraClave = $('#buscador').val();
      tipoFiltro = 'noticia';
    }
    else if ($(this).attr('id') === 'frm-search-bar') {
      palabraClave = $('#palabra-clave').val();
      tipoFiltro = ['noticia', 'derecho'];;
      esBuscadorGeneral = true;
    }
    else if ($(this).attr('id') === 'frm-filtros-noticias') {
      console.log($(this).attr('id'));
      palabraClave = $('#palabra-clave').val();
      tipoFiltro = ['noticia'];
      categoria = $('#categoria').val();
      fechaDesde = $('#fecha_desde').val();
      fechaHasta = $('#fecha_hasta').val();
      if (fechaDesde && fechaHasta) {
        console.log(fechaDesde);
        fechaDesde = fechaDesde.split('/');
        fechaDesde = new Date(`${fechaDesde[1]}/${fechaDesde[0]}/${fechaDesde[2]}`);
        fechaDesde = fechaDesde.getFullYear() + "-" + (fechaDesde.getMonth() + 1) + "-" + fechaDesde.getDate();
        fechaHasta = fechaHasta.split('/');
        fechaHasta = new Date(`${fechaHasta[1]}/${fechaHasta[0]}/${fechaHasta[2]}`);
        fechaHasta = fechaHasta.getFullYear() + "-" + (fechaHasta.getMonth() + 1) + "-" + fechaHasta.getDate();
      }
      else {
        fechaHasta = null;
        fechaDesde = null;
      }
    }
    $.ajax({
      url: wp.ajaxurl,
      method: 'POST',
      data: {
        'action': 'wpFiltroNoticias',
        'tipo-filtro': tipoFiltro,
        'palabra-clave': palabraClave,
        'fecha-desde': fechaDesde,
        'fecha-hasta': fechaHasta,
        'categoria': categoria,
      },
      beforeSend: function () {
        $('#contenedor-noticias').html(
          '<div class="spinner-container"><div class="spinner"></div></div>'
        );
      },
      success: function (data) {
        if (data != 0) {
          let html = "";
          data.forEach(item => {
            console.log(item);
            html += `<div class="newsCard container-fluid container--gray py-4 my-3">
            <div class="newsCard__header">
              <span class="newsCard__type">${item.type?.map(cat => cat.cat_name).join(', ') || ''}</span>
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
            if (esBuscadorGeneral) {
              $('#postArea').html(html);
            }
            else {
              $('#contenedor-noticias').html(html);
            }
          });
        }
        else {
          $('#contenedor-noticias').html(
            '<div class="no-results">No se encontraron resultados...</div>'
          );
        }
      },
      error: function (error) {
        $('#contenedor-noticias').html(
          'No se encontraron resultados...'
        );
      }
    });
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