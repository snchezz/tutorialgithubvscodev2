(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Copia
function installGit() {
  var copyText = document.getElementById("installGit");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  M.toast({html: 'Comando copiado: ' + copyText.value})
}

function versionGit() {
  var copyText = document.getElementById("versionGit");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  M.toast({html: 'Comando copiado: ' + copyText.value})
}

function configurarGit() {
  var copyText = document.getElementById("configurarGit");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  M.toast({html: 'Comando copiado: ' + copyText.value})
}
  
function comprobarGit() {
  var copyText = document.getElementById("comprobarGit");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  M.toast({html: 'Comando copiado: ' + copyText.value})
}

$(document).ready(function() {
  $('.toc-wrapper').pushpin({
    offset: 150
  });
  $('.scrollspy').scrollSpy();
});