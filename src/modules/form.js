export function createForm() {
    const app = document.getElementById('app');

    const form = document.createElement('form');
    form.setAttribute('novalidate', '');

    // Email
    const emailDiv = document.createElement('div');
    emailDiv.className = "form-group";
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    emailInput.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$";
    emailInput.maxLength = 254;
    emailInput.placeholder = 'example@email.com';
    const emailError = document.createElement('span');
    emailError.className = 'email-error error';
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);
    emailDiv.appendChild(emailError);

    // Country
    const countryDiv = document.createElement('div');
    countryDiv.className = "form-group";
    const countryLabel = document.createElement('label');
    countryLabel.setAttribute('for', 'country');
    countryLabel.textContent = 'Country:';
    const countryInput = document.createElement('input');
    countryInput.type = 'text';
    countryInput.id = 'country';
    countryInput.name = 'country';
    countryInput.required = true;
    countryInput.minLength = 2;
    countryInput.maxLength = 56;
    countryInput.placeholder = 'Country name';
    countryInput.pattern = "^[A-Za-z .'-]+$";
    const countryError = document.createElement('span');
    countryError.className = 'country-error error';
    countryDiv.appendChild(countryLabel);
    countryDiv.appendChild(countryInput);
    countryDiv.appendChild(countryError);

    // Postal Code
    const postalDiv = document.createElement('div');
    postalDiv.className = "form-group";
    const postalLabel = document.createElement('label');
    postalLabel.setAttribute('for', 'postal-code');
    postalLabel.textContent = 'Postal Code:';
    const postalInput = document.createElement('input');
    postalInput.type = 'text';
    postalInput.id = 'postal-code';
    postalInput.name = 'postal-code';
    postalInput.required = true;
    postalInput.pattern = "^[A-Za-z0-9 \\-]{3,10}$";
    postalInput.minLength = 3;
    postalInput.maxLength = 10;
    postalInput.placeholder = 'e.g. 12345 or A1B 2C3';
    const postalError = document.createElement('span');
    postalError.className = 'postal-error error';
    postalDiv.appendChild(postalLabel);
    postalDiv.appendChild(postalInput);
    postalDiv.appendChild(postalError);

    // Password
    const passwordDiv = document.createElement('div');
    passwordDiv.className = "form-group";
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Password:';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.name = 'password';
    passwordInput.required = true;
    passwordInput.minLength = 8;
    passwordInput.maxLength = 128;
    passwordInput.pattern = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d!@#$%^&*()_+\\-=]{8,}$";
    passwordInput.placeholder = 'At least 8 characters';
    const passwordError = document.createElement('span');
    passwordError.className = 'password-error error';
    passwordDiv.appendChild(passwordLabel);
    passwordDiv.appendChild(passwordInput);
    passwordDiv.appendChild(passwordError);

    // Confirm Password
    const confirmPasswordDiv = document.createElement('div');
    confirmPasswordDiv.className = "form-group";
    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.setAttribute('for', 'confirm-password');
    confirmPasswordLabel.textContent = 'Confirm Password:';
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.id = 'confirm-password';
    confirmPasswordInput.name = 'confirm-password';
    confirmPasswordInput.required = true;
    confirmPasswordInput.minLength = 8;
    confirmPasswordInput.maxLength = 128;
    confirmPasswordInput.placeholder = 'Repeat your password';
    const confirmPasswordError = document.createElement('span');
    confirmPasswordError.className = 'confirmPassword-error error';
    confirmPasswordDiv.appendChild(confirmPasswordLabel);
    confirmPasswordDiv.appendChild(confirmPasswordInput);
    confirmPasswordDiv.appendChild(confirmPasswordError);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    form.appendChild(emailDiv);
    form.appendChild(countryDiv);
    form.appendChild(postalDiv);
    form.appendChild(passwordDiv);
    form.appendChild(confirmPasswordDiv);
    form.appendChild(submitButton);

    app.appendChild(form);
}
