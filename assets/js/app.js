$(document).ready(function(){

  $('#share').click(function(){
    var comentario = $('#comment').val();
    $('#comment').val("");
    $("#nuevaPub").append("<div class='contComment'>" + comentario + "<div id='icons'><i class='fas fa-heart'></i><i class='fas fa-thumbs-up'></i><i class='fas fa-thumbs-down'></i></div></div>");
  })

  $(".heart").click(function(){
    
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