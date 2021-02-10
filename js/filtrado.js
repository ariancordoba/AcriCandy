$(document).ready(function () {
  // AGREGANDO CLASE ACTIVE...
  $('.category_list .category_item[category="all"]').addClass("ct_item-active");

  $(".category_item").click(function () {
    var catProduct = $(this).attr("category");
    // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
    $(".category_item").removeClass("ct_item-active");
    $(this).addClass("ct_item-active");

    // OCULTANDO PRODUCTOS...
    $(".post").hide();

    // MOSTRANDO PRODUCTOS...
    $('.post[category="' + catProduct + '"]').show();
  });

  // MOSTRANDO TODOS LOS PRODUCTOS...
  $('.category_item[category="all"]').click(function () {
    $(".post").show();
  });
});
