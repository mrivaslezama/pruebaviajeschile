// Esta función sirve para opacar el backgrond del navbar
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-primary" );
});

// Esta función sirve para opacar el background del menú desplegable al apretar el botón hamburguesa
$("#btn-nav").click(function(){
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-primary" );
});

// Esta función sirve para hacer desaparecer la bienvenida del contacto 
// y aparecer el formulario de contacto
$("#btn-comenzar").click(function(){
    $("#pre-formulario").removeClass( "d-flex" ).addClass( "d-none" );
    $("#formulario").removeClass( "d-none" ).addClass( "d-flex" );
});

// Disponibilizar Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Smooth scroll quienes somos
    $("#somos").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });

    //Smooth scroll Destacados
    $("#featured").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });

    //Smooth scroll contactos
    $("#qFormulario").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();