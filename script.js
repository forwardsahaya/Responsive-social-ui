document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const rightSideButton = document.querySelector('.right-side-button');

    rightSideButton.addEventListener('click', function() {
      container.classList.toggle('rightSide');
    });
  });