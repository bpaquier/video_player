const video = document.querySelector('.player__video');
const play = document.querySelector('.controler__play');
const pause = document.querySelector('.play__pause');
const start = document.querySelector('.play__start');

play.addEventListener('click', () => {
  video.paused ? video.play() : video.pause();
  pause.classList.toggle('is-visible');
  start.classList.toggle('is-visible');
});

video.addEventListener('ended', () => {
  video.currentTime = 0;
  pause.classList.remove('is-visible');
  start.classList.add('is-visible');
});
