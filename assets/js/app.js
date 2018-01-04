var idHeart = 0;
var idThumbUp = 0;
var idThumbDown = 0;

$(document).ready(function(){
/*
*función al hacer click a botón de compartir
*/
  $('#share').click(function(){
    var comentario = $('#comment').val();
    $('#comment').val("");
    $("#nuevaPub").append("<div class='contComment'>" + comentario + "<div id='icons'><i id='heart_" + idHeart +
      "' class='fas fa-heart'></i><i id='thumbUp_" + idThumbUp +
      "' class='fas fa-thumbs-up'></i><i id='thumbDown_" + idThumbDown + "' class='fas fa-thumbs-down'></i></div></div>");
/*
*funciónes para dar colores a íconos al hacer click
*/
    $("#heart_" + idHeart).click(function(){
      $(this).toggleClass('red');
      $("#thumbUp_" + (idHeart-1)).removeClass('green');
      $("#thumbDown_" + (idHeart-1)).removeClass('gray');
    });

    $("#thumbUp_" + idThumbUp).click(function(){
      $(this).toggleClass('green');
      $("#heart_" + (idThumbUp-1)).removeClass('red');
      $("#thumbDown_" + (idThumbUp-1)).removeClass('gray');
    });
    $("#thumbDown_" + idThumbDown).click(function(){
      $(this).toggleClass('gray');
      $("#heart_" + (idThumbDown-1)).removeClass('red');
      $("#thumbUp_" + (idThumbDown-1)).removeClass('green');
    });
    idHeart++;
    idThumbDown++;
    idThumbUp++;
  })


  /*$("[data-toggle=tooltip]").tooltip();*/




/*
Funcion Password Login 
*/
function showPassword() {
    
    var key_attr = $('#key').attr('type');
    
    if(key_attr != 'text') {
        
        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');
        
    } else {
        
        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');
        
    }
    
}

});