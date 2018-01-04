var idHeart = 0;
var idThumbUp = 0;
var idThumbDown = 0;

$(document).ready(function(){

  $('#share').click(function(){
    var comentario = $('#comment').val();
    $('#comment').val("");
    $("#nuevaPub").append("<div class='contComment'>" + comentario + "<div id='icons'><i id='heart_" + idHeart +
      "' class='fas fa-heart'></i><i id='thumbUp_" + idThumbUp +
      "' class='fas fa-thumbs-up'></i><i id='thumbDown_" + idThumbDown + "' class='fas fa-thumbs-down'></i></div></div>");
    $("#heart_"+idHeart).click(function(){
      $(this).toggleClass('red')
      });
    idHeart++;#5DD368
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