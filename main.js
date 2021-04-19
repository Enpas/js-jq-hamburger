// creo il punto di partenza per il codice;
$(document).ready(function(){
  
  // prendo la fa-bars e gli applico il click, poi utilizzo questa funzione anonima per mostrare l'hamburger-menu in 1 secondo;
  $(".fa-bars").click(function(){
    $(".hamburger-menu").show(1000);
  });

  // prendo la classe "close" del tag "a" e gli applico il click, poi utilizzo questa funzione anonima per nascondere l'hamburger-menu in 1 secondo;
  $(".close").click(function(){
    $(".hamburger-menu").hide(1000);
  });

});