const video = document.querySelector('.player__video');
const controler = document.querySelector('.controler');
const progressbarContainer = document.querySelector('.progress-bar');
const progressBar = document.querySelector('.progress-bar__bar');
const timeProgression = document.querySelector('.progress-bar__time');

video.addEventListener('timeupdate', () => {
  let progressRate = (video.currentTime * 100) / video.duration;
  progressBar.style.width = progressRate + '%';
});

document
  .querySelector('.progress-bar__clickable')
  .addEventListener('click', (e) => {
    let clickPosition =
      ((e.clientX - (progressbarContainer.offsetLeft + controler.offsetLeft)) *
        100) /
      progressbarContainer.offsetWidth;
    progressBar.style.width = clickPosition + '%';
    video.currentTime = (video.duration * clickPosition) / 100;
  });

progressbarContainer.addEventListener('mousemove', (e) => {
  let mousePosition =
    e.clientX - (progressbarContainer.offsetLeft + controler.offsetLeft);
  timeProgression.style.left = mousePosition + 'px';

  let effectiveTimeProgression = Math.floor(
    (video.duration * mousePosition) / progressbarContainer.offsetWidth
  );

  timeProgression.innerHTML = setTime(effectiveTimeProgression);
});

const setTime = (time) => {
  let minutes;
  let seconds;
  if (time < 60) {
    seconds = time >= 10 ? time.toString() : `0${time.toString()}`;
    minutes = '00';
  } else if (time >= 60) {
    let calculMinutes = Math.floor(time / 60);
    let calculSeconds = time - 60 * calculMinutes;
    seconds =
      calculSeconds >= 10
        ? calculSeconds.toString()
        : `0${calculSeconds.toString()}`;
    minutes =
      calculMinutes >= 10
        ? calculMinutes.toString()
        : `0${calculMinutes.toString()}`;
  }
  return `${minutes} : ${seconds}`;
};
