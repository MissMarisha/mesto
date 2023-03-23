const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__button',
  errorMessageSelector: '.form__text-error_type_',
  inputErrorClass: 'form__input_error',
  textErrorClass: 'form__text-error_visible'
};

const showError = (input, {errorMessageSelector, textErrorClass, inputErrorClass}) => {
  const errorMessage = document.querySelector(`${errorMessageSelector}${input.name}`);
  errorMessage.textContent = input.validationMessage;
  errorMessage.classList.add(textErrorClass);
  input.classList.add(inputErrorClass);
};

const hideError = (input, {errorMessageSelector, textErrorClass, inputErrorClass}) => {
  const errorMessage = document.querySelector(`${errorMessageSelector}${input.name}`);
  errorMessage.textContent = '';
  errorMessage.classList.remove(textErrorClass);
  input.classList.remove(inputErrorClass);
};

const enableSubmitButton = (submitButton) => {
  submitButton.disabled = false;
};

const disableSubmitButton = (submitButton) => {
  submitButton.disabled = true;
};

const toggleButtonState = (submitButton, inputList) => {
    submitButton.disabled = invalidInput(inputList)
  };
const inputValid = (input, config) => {
    input.validity.valid ? hideError(input, config) : showError(input, config)
  };
  
  const invalidInput = inputList => {
    return Array.from(inputList).some(input => !input.validity.valid);
  };
  
  const setEventListener = (input, submitButton, inputList, config) => {
    input.addEventListener('input', event => {
      inputValid(event.target, config);
      toggleButtonState(submitButton, inputList);
    });
  };

const clearValidationErrors = (popup) => {
  popup.querySelectorAll('.form__input').forEach(popupInput => {
    hideError(popupInput, {
      errorMessageSelector: '.form__text-error_type_',
      inputErrorClass: 'form__input_error',
      textErrorClass: 'form__text-error_visible'
    });
  });
};

const enableValidation = config => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach(form => {
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputList.forEach(input => setEventListener(input, submitButton, inputList, config))
  });
};

enableValidation(validationConfig);