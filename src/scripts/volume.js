const video = document.querySelector('.player__video');
const volumeController = document.querySelector('.volume__controller input');
const volMute = document.querySelector('.volume__mute');
const volumeIndication = document.querySelector('.volume__indication');

let previousVolume;

video.volume = 0.5;
volumeController.value = 0.5;

const changeVolume = (e) => {
  video.volume = e.target.value;
  if (video.volume === 0) {
    volMute.classList.add('is-muted');
  } else {
    volMute.classList.remove('is-muted');
  }
  previousVolume = video.volume;
  volumeIndication.innerHTML = `${Math.round(video.volume * 100)}%`;
};

const muteVolume = () => {
  if (previousVolume === 0) {
    video.volume = 0.5;
    volumeController.value = 0.5;
  } else if (video.volume > 0) {
    video.volume = 0;
    volumeController.value = 0;
  } else {
    video.volume = previousVolume;
    volumeController.value = previousVolume;
  }
  volMute.classList.toggle('is-muted');
};

volumeController.addEventListener('mousemove', (e) => {
  changeVolume(e);
});
volumeController.addEventListener('click', (e) => {
  changeVolume(e);
});

volMute.addEventListener('click', muteVolume);
