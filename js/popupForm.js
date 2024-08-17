const setError = (id, text, inputSelector) => {
  const DOMError = document.getElementById(id);
  if (DOMError) {
    DOMError.textContent = text;
  }

  if (inputSelector) {
    const inputElement = document.querySelector(inputSelector);
    if (inputElement) {
      inputElement.classList.add('error-border');
    }
  }
};

const removeError = (id, inputSelector) => {
  const DOMError = document.getElementById(id);
  if (DOMError) {
    DOMError.textContent = '';
  }

  if (inputSelector) {
    const inputElement = document.querySelector(inputSelector);
    if (inputElement) {
      inputElement.classList.remove('error-border');
    }
  }
};

const popupForm = () => {
  const DOMForm = document.getElementById('js-popup-form');

  if (!DOMForm) return;

  DOMForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    // Name
    const firstName = form.get('name');
    const nameInput = DOMForm.querySelector('input[name="name"]');

    if (!firstName) {
      setError('js-name-error', 'This field is required', 'input[name="name"]');
      return;
    }
    if (firstName.length < 2) {
      setError(
        'js-name-error',
        'First Name must be at least 2 characters',
        'input[name="name"]'
      );
      return;
    }
    removeError('js-name-error', 'input[name="name"]');

    // Phone Number
    const phoneNumber = form.get('phone');
    const phoneInput = DOMForm.querySelector('input[name="phone"]');

    if (!phoneNumber) {
      setError(
        'js-phone-error',
        'This field is required',
        'input[name="phone"]'
      );
      return;
    }
    removeError('js-phone-error', 'input[name="phone"]');

    // Clear the form
    DOMForm.reset();

    // Display a message about the successful sending of data
    alert('Data successfully sent!');
  });
};

export default popupForm;
