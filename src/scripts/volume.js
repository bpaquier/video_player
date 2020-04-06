const video = document.querySelector('.player__video');
const volumeController = document.querySelector('.volume__controller input');
const volMute = document.querySelector('.volume__mute');

let previousVolume;

//video.volume = 0.5;

volumeController.addEventListener('mousemove', (e) => {
  video.volume = e.target.value;
  if (video.volume === 0) {
    volMute.classList.add('is-muted');
  } else {
    volMute.classList.remove('is-muted');
  }
  previousVolume = video.volume;
});

volMute.addEventListener('click', () => {
  if (previousVolume === 0) {
    video.volume = 0.5;
    volumeController.value = 0.5;
  } else if (video.volume > 0) {
    video.volume = 0;
  } else {
    video.volume = previousVolume;
    volumeController.value = previousVolume;
  }
  volMute.classList.toggle('is-muted');
});
