const paragraph = document.getElementById("edit");
const edit_button = document.getElementById("edit-button");
const end_button = document.getElementById("end-editing");

edit_button.addEventListener("click", function() {
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
  
  // Exibir um alerta quando o botão de edição for clicado
  alert("Você iniciou a edição do parágrafo!");
});

end_button.addEventListener("click", function() {
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor;

  // Exibir um alerta quando o botão de finalizar edição for clicado
  alert("Você finalizou a edição do parágrafo!");
});

