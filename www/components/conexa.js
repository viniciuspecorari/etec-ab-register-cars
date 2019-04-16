// This is a JavaScript file



$(document).on('click', '#btncadastrar', function(){
  //pegando os parametros
  var parametros = {
      "marca":$('#marca').val,
      "modelo":$('#modelo').val,
      "ano":$('#ano').val,
      "cor":$('#cor').val,
      "valor":$('#valor').val,
  }

  $.ajax({
    type: "post",
    url: "https://cadastro-carros-3i2-onoilvp.c9users.io/cadastroCarro3i2.php"    
  })

});