const editPopup = document.querySelector('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation')
let userNameInput = document.querySelector('.popup__input_type_name');
let userOccupationInput = document.querySelector('.popup__input_type_job');
let formElement = document.querySelector('.popup__container');


function openPopup(){
userNameInput.value = profileName.textContent;
userOccupationInput.value = profileOccupation.textContent;
editPopup.classList.add('popup_opened')
};
editProfileButton.addEventListener('click', openPopup);
function closepopup(){
    editPopup.classList.remove('popup_opened')
};
closePopup.addEventListener('click', closepopup);
function handleFormSubmit (evt){
    evt.preventDefault();
profileName.textContent = userNameInput.value;
profileOccupation.textContent = userOccupationInput.value;
closepopup();    
}
formElement.addEventListener('submit', handleFormSubmit); 





















