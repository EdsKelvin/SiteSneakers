var audioPlayer = document.getElementById("audioPlayer");

// Função para reproduzir ou pausar a música
function playPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

// Adicionando os eventos de clique para os botões
document.getElementById("playPauseButton").addEventListener("click", playPause);
