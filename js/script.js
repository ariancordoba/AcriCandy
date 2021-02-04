import productos from "/js/productos.js";

let productsDiv = document.getElementById("productos");

renderProducts(productos);

function renderProducts({ productos }) {
  let html = `<div class="container-post"><div class="posts">`;
  productos.map((producto, i, error) => {
    html = html + productInfo(i, producto);
  });
  html = html + `</div></div>`;
  productsDiv.innerHTML = html;
}

function productInfo(i, product) {
  return `<div class="post">
  <div class="ctn-img">
      <img src="${product.img}" alt="">
  </div>
  <h2>${product.precio}</h2>
  <button class="btn btn-sm btn-dark btnDetalles" data-toggle="modal" data-target="#modal_${i}">Detalles</button>
  <div class="modal fade" id="modal_${i}" tabindex="-1" role="dialog" aria-labelledby="fm-modal-grid" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="">AcriCandy</h5>
                  <button class="close" data-dismiss="modal" aria-label="Cerrar">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>

              <div class="modal-body">
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-12 col-sm-6">
                          <img src="${product.img}" class="productImage" alt="">
                          <iframe width="510" height="315" src="${product.video}" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </div>
                          <div class="col-12 col-sm-6 informacion">
                              <p class="status">${product.estado}</p>
                              <h3 class="productTitle">${product.titulo}</h3>
                              <h3 class="priceModal">${product.precio}</h3>
                              <span class="cuotas">${product.cuotas}</span>
                              <a class="pagos" href="https://articulo.mercadolibre.com.ar/noindex/services/MLA689524676/payments?controlled=true" target="_BLANK">Ver los medios de pago</a>
                              <h4 class="envios"><i class="fas fa-truck"></i>  Envios gratis a todo el pais</h4>
                              <p class="status"> BURZACO, Buenos Aires</p>
                              <a class="costoEnvio" href="https://articulo.mercadolibre.com.ar/noindex/services/MLA689524676/shipping?controlled=true" target="_BLANK">Ver los costos de envio</a>
                              <p class="titleDescription">Descripción</p>
                              <p class="modalDescription">${product.descripcion}</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="modal-footer">
                  <a class="btn btn-success" target="_blank"  href="https://www.mercadolibre.com.ar/">Comprar en mercado libre</a>
                  <button class="btn btn-default" data-dismiss="modal">Cerrar</button>
              </div>
          </div>
      </div>
  </div>
  <h4 class="envioGratis">Envío gratis</h4>
  <p>${product.descripcion}</p>
  
  
  <a href="https://www.mercadolibre.com.ar/" class="btn btn-sm btn-success btnBuy" target="_BLANK">Comprar en Mercado Libre</a>
  <a href="https://www.tiendanube.com/" class="btn btn-sm btn-info btnBuy" target="_BLANK">Tienda Nube (15% Descuento)</a>
</div>`;
}
