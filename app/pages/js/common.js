const container = document.querySelector('.faq');

container.addEventListener('click', (e) => {
  const target = e.target;
  const pair = target.parentNode;
  const selectedAnswer = pair.querySelectorAll('.answer');

  if (target.classList.contains('question')) {
    selectedAnswer.forEach((el) => {
      if (pair === el.parentNode) {
        el.classList.toggle('disabled');
      }
    });
  }
});

