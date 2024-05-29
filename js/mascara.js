$(document).ready(function() {
    mascaraObloqueo();
});

function mascaraObloqueo() {
    $.blockUI({
        //AQUI SOLOCA CAMBIA LA IMG Y COLOCA EL ORDEN DE TUS CARPETAS PARA QUE FUNCIONE BIEN
        message:' <img src="../img/CorazonOsvaldo.gif" class="img-fluid" width="300" height="300">',
        css: {
            border: 'none',
            // padding: '15px', 
            backgroundColor: 'rgba(138,221,45,0)',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            // opacity: .5, 
            color: '#FFFFFF '
        }
    });

    setTimeout($.unblockUI, 1000);
    
}

document.addEventListener("DOMContentLoaded", () =>{
    let altura = document.getElementById('menu').offsetTop;
    window.addEventListener("scroll", () => {
        if (window.scrollY  > altura) {
           document.getElementById('menu').classList.add('menu-fixed');
        } else {
           document.getElementById('menu').classList.remove('menu-fixed');
        }
    });

});