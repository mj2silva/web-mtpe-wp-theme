// Este es un archivo inicial, debe ser borrado o modificado
console.log("Archivo inicial");

jQuery(function ($) {
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
