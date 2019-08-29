(() => {

  /**
   * PEQUEÑO PROGRAMA PARA HACER UN SCROLL SPY, ES DECIR, UNA FORMA
   * PARA QUE LOS BOTONES DE NAVEGACIÓN EN FIXED VAYAN ACTIVÁNDOSE
   * CONFORME SE VAYA NAVEGANDO POR LA PÁGINA DE MANERA VERTICAL.
   * LA IDEA ES QUE EN CUANTO LA PANTALLA LLEGUE A UNA SECCIÓN CON UN ID SIMILAR
   * AL #ID QUE SE ENCUENTRA EN EL HREF DE LOS BOTONES DE NAVEGACIÓN,
   * AL BOTÓN SE LE AÑADA UNA CLASE ACTIVO.
   * @author Fernando Magrosoto <@fmagrosoto>
   * @copyright Junio 5, 2019
   */


  // Primero, ponemos en un array todas las secciones a donde queramos llegar por
  // medio de la navegación en FIXED.
  const lasSecciones = document.querySelectorAll(".secciones");

  // Al recorrer el array anterior, se popula este array vacío con el ID y su posición.
  let secciones = {};

  // Recorremos las Secciones y populamos un array con el ID y la posición de cada sección.
  [].forEach.call(lasSecciones, function (item) {
    secciones[item.id] = item.offsetTop - 120;
  });

  // Al navegar verticalmente por la página se va ejecutando el siguiente script
  window.onscroll = function () {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i in secciones) {
      if (secciones[i] <= scrollPosition) {
        // Si la posición de la sección en turno entra al viewport, entonces...
        quitarEstilos();
        document.querySelector('a[href*=' + i + ']').classList.add('activo');
      }
    }
  };

  /**
   * QUITAR CLASE ACTIVO EN LOS ELEMENTOS DEL MENÚ DE NAVEGACIÓN
   */
  function quitarEstilos() {
    let botones = document.querySelectorAll('.navegacion-flex a');
    [].forEach.call(botones, item => {
      item.classList.remove('activo');
    });
  }

  /**
   * SMOOTH SCROLL CON JQUERY
   * Script para animar el desplazamiento de página.
   */
  $('.navegacion-flex a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 120
    }, 2000);
  });

})();
