/*
*variables globales
*/
var idHeart = 0;
var idThumbUp = 0;
var idThumbDown = 0;
var idTrash = 0;

$(document).ready(function(){
/*
*verificando que haya contenido en textarea
*/
  $('#comment').keyup(function(){
    if($('#comment').val()!==""){
      $('#share').removeAttr('disabled')
    }else{
      $('#share').attr('disabled', 'true');
    }
  });

/*
*función al hacer click a botón de compartir
*/
  $('#share').click(function(){
    var comentario = $('#comment').val();
    $('#comment').val("");
    $('#share').attr('disabled', 'true');
    $("#nuevaPub").append("<div class='contComment'>" + comentario + "<div id='icons'><i id='heart_" + idHeart +
      "' class='fas fa-heart'></i><i id='thumbUp_" + idThumbUp +
      "' class='fas fa-thumbs-up'></i><i id='thumbDown_" + idThumbDown + "' class='fas fa-thumbs-down'></i><a id='basura'><i id='trash_'" + idTrash +
      "' class='fas fa-trash-alt'></i></a></div></div>");
/*
*funciónes para dar colores a íconos al hacer click
*/
    var idCora = idHeart;
    
    $("#heart_" + idHeart).click(function(){
      $(this).toggleClass('red');
      $("#thumbUp_" + idCora).removeClass('green');
      $("#thumbDown_" + idCora).removeClass('gray');
    });
    var idUp = idThumbUp;
    $("#thumbUp_" + idThumbUp).click(function(){
      $(this).toggleClass('green');
      $("#heart_" + idUp).removeClass('red');
      $("#thumbDown_" + idUp).removeClass('gray');
    });
    var idDown = idThumbDown;
    $("#thumbDown_" + idThumbDown).click(function(){
      $(this).toggleClass('gray');
      $("#heart_" + idDown).removeClass('red');
      $("#thumbUp_" + idDown).removeClass('green');
    });
    idHeart++;
    idThumbDown++;
    idThumbUp++;
  });

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