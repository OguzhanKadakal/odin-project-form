export function formValidation() {
  const form = document.querySelector('form');
  const email = document.querySelector('#email');
  const emailError = document.querySelector('.email-error');
  const country = document.querySelector('#country');
  const countryError = document.querySelector('.country-error');
  const postal = document.querySelector('#postal-code');
  const postalError = document.querySelector('.postal-error');
  const password = document.querySelector('#password');
  const passwordError = document.querySelector('.password-error');
  const confirmPassword = document.querySelector('#confirm-password');
  const confirmPasswordError = document.querySelector('.confirmPassword-error');

  email.addEventListener('change', () => {
    if (email.validity.valueMissing) {
      emailError.textContent = 'Email is required.';
    } else if (email.validity.typeMismatch || email.validity.patternMismatch) {
      emailError.textContent = 'Please enter a valid email address.';
    } else {
      emailError.textContent = '';
    }
  });

  country.addEventListener('change', () => {
    if (country.validity.valueMissing) {
      countryError.textContent = 'Country is required.';
    } else if (country.value.length < 2) {
      countryError.textContent = 'Country name is too short.';
    } else if (country.value.length > 56) {
      countryError.textContent = 'Country name is too long.';
    } else {
      countryError.textContent = '';
    }
  });

  postal.addEventListener('change', () => {
    if (postal.validity.valueMissing) {
      postalError.textContent = 'Postal code is required.';
    } else if (postal.validity.patternMismatch) {
      postalError.textContent = 'Invalid postal code format.';
    } else if (postal.value.length < 3) {
      postalError.textContent = 'Postal code is too short.';
    } else if (postal.value.length > 10) {
      postalError.textContent = 'Postal code is too long.';
    } else {
      postalError.textContent = '';
    }
  });

  password.addEventListener('change', () => {
    if (password.validity.valueMissing) {
      passwordError.textContent = 'Password is required.';
    } else if (password.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters.';
    } else if (password.value.length > 128) {
      passwordError.textContent = 'Password is too long.';
    } else if (password.validity.patternMismatch) {
      passwordError.textContent = 'Password must contain at least one letter and one number.';
    } else {
      passwordError.textContent = '';
    }
    confirmPassword.dispatchEvent(new Event('change'));
  });

  confirmPassword.addEventListener('change', () => {
    if (confirmPassword.validity.valueMissing) {
      confirmPasswordError.textContent = 'Please confirm your password.';
    } else if (confirmPassword.value !== password.value) {
      confirmPasswordError.textContent = 'Passwords do not match.';
    } else {
      confirmPasswordError.textContent = '';
    }
  });

  form.addEventListener('submit', (e) => {
    if (
      !email.validity.valid ||
      !country.validity.valid ||
      !postal.validity.valid ||
      !password.validity.valid ||
      !confirmPassword.validity.valid
    ) {
      e.preventDefault();
    }
  });
}
