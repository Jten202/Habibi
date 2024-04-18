document.addEventListener('click', function() {
    var audio = document.getElementById('audioPlayer');
    audio.src = "audio/BonitaAndresCabas.mp3";
    audio.load();
    audio.play();
  }, { once: true });
  