import { createForm } from './modules/form.js';
import { formValidation }from './modules/form-validation.js'
import './styles.css'

createForm();
document.addEventListener('DOMContentLoaded', () => {
    formValidation();
});