const textarea = document.getElementById('texto');
const contador = document.getElementById('contador-caracteres');
const limiteMaximo = 100;
textarea.addEventListener('input', () => {
  const cantidad = textarea.value.length;
  contador.textContent = `${cantidad} / ${limiteMaximo}`;
  if (cantidad === limiteMaximo) {
    textarea.classList.add('limite-alcanzado');
  } else {
    textarea.classList.remove('limite-alcanzado');
  }
});