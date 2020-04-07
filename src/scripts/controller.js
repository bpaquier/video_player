const controler = document.querySelector('.controler');

let position = {};
let isCursorInControler = false;
let disapear;

const controlerVisibility = (() => {
  const controlerDisapear = (time) => {
    disapear = setTimeout(() => {
      controler.classList.add('is-invisible');
    }, time);
  };

  controler.addEventListener('mouseleave', (e) => {
    if (!position.target) {
      isCursorInControler = false;
      controlerDisapear(5000);
    } else {
      isCursorInControler = true;
    }
  });

  controler.addEventListener('mouseenter', () => {
    isCursorInControler = true;
    clearTimeout(disapear);
  });
})();

const controlerDagAndDrop = (() => {
  controler.addEventListener('mousedown', (e) => {
    position.target = e.target;
    position.x = e.clientX - e.target.offsetLeft;
    position.y = e.clientY - e.currentTarget.offsetTop;
  });

  document.addEventListener('mouseup', () => {
    position = {};
  });

  document.addEventListener('mousemove', (e) => {
    if (position.target) {
      position.target.style.top = `${e.clientY - position.y}px`;
      position.target.style.left = `${e.clientX - position.x}px`;
    } else {
      controler.classList.remove('is-invisible');
    }
  });
})();
