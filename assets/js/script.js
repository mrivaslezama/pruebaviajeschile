// Función para cambiar clases del navbar
function cambiarClasesNavbar() {
    $("#navbar").removeClass("bg-transparent").addClass("bg-primary");
 }
 
 // Evento de scroll para cambiar clases del navbar
 $(window).scroll(function(event){
    cambiarClasesNavbar();
 });
 
 // Evento de clic en el botón para cambiar clases del navbar
 $("#btn-nav").click(function(){
    cambiarClasesNavbar();
 });
 
 // Evento de clic en el botón para mostrar/ocultar formulario de contacto
 $("#btn-comenzar").click(function(){
    $("#pre-formulario, #formulario").toggle();
 });
 
 // Función para smooth scroll
 function smoothScrollTo(hash) {
    if (hash !== "") {
       $('html, body').animate({
          scrollTop: $(hash).offset().top
       }, 1800, function () {
          window.location.hash = hash;
       });
    }
 }
 
 // Eventos de clic para smooth scroll a diferentes secciones
 $("#somos, #destacados, #formulario").on('click', function (event) {
    smoothScrollTo(this.hash);
    event.preventDefault();
 });
 
 // Inicialización de Tooltips (si se utiliza Bootstrap)
 // Asegúrate de incluir correctamente los scripts de Bootstrap antes de esto.
 $('[data-bs-toggle="tooltip"]').tooltip();
 
