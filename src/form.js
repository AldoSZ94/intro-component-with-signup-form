// Elementos del DOM.
const form = document.querySelector('.form');
const formInputs = form.querySelectorAll('.form__input');

// Valida todos los inputs al enviar el formulario.
form.addEventListener('submit', (e) => {
  for (const input of formInputs) {
    // Actualiza el estado visual del input.
    actualizarEstadoGrupo(input, input.validity.valid);

    // Evita el envío si el input es inválido.
    if (!input.validity.valid) {
      e.preventDefault();
    }
  }
});

// Valida cada input mientras el usuario escribe.
for (const input of formInputs) {
  input.addEventListener('input', () => {
    actualizarEstadoGrupo(input, input.validity.valid);
  });
}

// Muestra u oculta errores según la validez del input.
function actualizarEstadoGrupo(input, isValid) {
  const grupo = input.parentElement;
  const errorIcon = grupo.querySelector('.form__error-icon');
  const errorMessage = grupo.querySelector('.form__error-text');

  // Oculta errores si el input es válido.
  errorIcon.hidden = isValid;
  errorMessage.hidden = isValid;
}
