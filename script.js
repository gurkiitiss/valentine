const noBtn = document.querySelector('.no');

noBtn.addEventListener('mouseover', () => {
  noBtn.style.position = 'absolute';
  noBtn.style.left = Math.random() * 80 + 'vw';
  noBtn.style.top = Math.random() * 80 + 'vh';
});

document.querySelector('.yes').addEventListener('click', () => {
  window.location.href = "yes.html";
});
