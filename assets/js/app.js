$(document).ready(function(){

  $('#share').click(function(){
    var comentario= $('#comment').val();
    $('#comment').val("");
    $("#nuevaPub").append("<div class='contComment'>" + comentario + "</div>");



  })
  /*$("[data-toggle=tooltip]").tooltip();*/

    
});