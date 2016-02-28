$( document ).ready(function() {
    //cerrar diálogo
    $( ".close span" ).on( "click", function( event ) {
        event.preventDefault();
        $(".quote").hide();
    });
});
