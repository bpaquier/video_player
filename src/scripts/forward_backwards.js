const video = document.querySelector('.player__video');
const scrollBackwards = document.querySelector('.scroll_backwards');
const scrollForwards = document.querySelector('.scroll_forwards');

scrollBackwards.addEventListener('click', () => {
  if (video.currentTime >= 3) {
    video.currentTime -= 3;
  } else {
    video.currentTime = 0;
  }
});

scrollForwards.addEventListener('click', () => {
  if (video.currentTime <= video.duration - 3) {
    video.currentTime += 3;
  } else {
    video.currentTime = video.duration;
  }
});
