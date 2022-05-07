menuButton.addEventListener('click', function () {
  document.querySelector('body').classList.toggle('open-nav');

  if (menuButton.getAttribute('aria-expanded') == 'false') {
    menuButton.setAttribute('aria-expanded', true);
    menuButton.setAttribute('title', 'メニューを閉じる');
  }
  else {
    menuButton.setAttribute('aria-expanded', false);
    menuButton.setAttribute('title', 'メニューを開く');
  }
});
