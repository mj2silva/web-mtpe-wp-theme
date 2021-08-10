// Este es un archivo inicial, debe ser borrado o modificado
console.log("Archivo inicial");

jQuery(function ($) {
  $('#btnPrint').click(function() {
    var a = document.getElementsByClassName('printing-area');
    a.print();
  });
  $('#btnSave').click(function() {
    alert('Presiona Ctrl+D para guardar esta página.');
  });
});