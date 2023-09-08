const dart = document.querySelector('.dart');
const target = document.querySelector('.target');
const resultMessage = document.querySelector('.result-message');
const scoreDisplay = document.querySelector('.score');

document.querySelector('.throw-button').addEventListener('click', throwDart);

function throwDart() {
  const targetRect = target.getBoundingClientRect();
  const targetCenterX = targetRect.left + targetRect.width / 2;
  const targetCenterY = targetRect.top + targetRect.height / 2;

  const randomXPercentage = Math.random() * 100;
  const randomYPercentage = Math.random() * 100;

  const hitDistance = calculateDistance(targetCenterX, targetCenterY, randomXPercentage, randomYPercentage);

  let score = Math.round(Math.max(0, 100 - hitDistance)); 
  let message = `¡Acertaste y ganaste ${score} puntos!`;

  if (score === 0) {
    message = 'Fallaste por poco, inténtalo de nuevo.';
  }

  resultMessage.textContent = message;
  scoreDisplay.textContent = `Puntuación: ${score}`;

  dart.style.left = randomXPercentage + '%';
  dart.style.top = randomYPercentage + '%';
  dart.style.display = 'block';

}

function calculateDistance(x1, y1, x2, y2) {
  const dx = x1 - (target.getBoundingClientRect().left + target.getBoundingClientRect().width * (x2 / 100));
  const dy = y1 - (target.getBoundingClientRect().top + target.getBoundingClientRect().height * (y2 / 100));
  return Math.sqrt(dx * dx + dy * dy);
}
