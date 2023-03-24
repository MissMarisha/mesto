const generalPopups = document.querySelectorAll('.popup');

const closePopupButton = document.querySelector('.popup__close-button');
const profilePopup = document.querySelector('.popup-profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const profileForm = document.querySelector('.form');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const userNameInput = document.querySelector('.form__input_type_name');
const userOccupationInput = document.querySelector('.form__input_type_job');

const cardPopup = document.querySelector('.popup-card');
const formCard = cardPopup.querySelector('.form');
const cardAddButton = document.querySelector('.profile__add-button');
const closeCardButton = document.querySelector('.popup-card__close-button');
const submitCardButton = formCard.querySelector('.popup__save-button')
const cardsContainer = document.querySelector('.elements');
const cardItem = document.querySelector('.element');
const cardTemplate = document.querySelector('#element__template');
cardAddButton.addEventListener('click', openCreateCard);

const popupImage = document.querySelector('.popup-image');
const popupImagePhoto = popupImage.querySelector('.popup-image__photo');
const popupImageCaption = popupImage.querySelector('.popup-image__occupation');

const setEventListenerEscape = event => {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

const openPopup = popup => {
  document.addEventListener('keyup', setEventListenerEscape);
  popup.classList.add('popup_opened');
}
const closePopup = popup => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', setEventListenerEscape);
  }
  
function openPopupProfile () {
  openPopup(profilePopup);
  userNameInput.value = profileName.textContent;     
  userOccupationInput.value = profileOccupation.textContent;  
}

function openPopupImage(){
  openPopup(popupImage)
}

function handleFormSubmit (evt){
    evt.preventDefault();
profileName.textContent = userNameInput.value;
profileOccupation.textContent = userOccupationInput.value;
closePopup(profilePopup);    
}
close
profileForm.addEventListener('submit', handleFormSubmit); 
editProfileButton.addEventListener('click', openPopupProfile);

const renderPhotoPopup = card => {
  const { name, link } = card || {};
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
  popupImageCaption.textContent = name;
  openPopupImage();
}
 
const likesCards = card => {
  card.classList.toggle('element__like_type_active');
}

const deleteCards = element => {
  element.remove();
}

const createCard = (card) => {
  const newCard = cardTemplate.cloneNode(true).content.querySelector('.element');
  const cardTitle = newCard.querySelector('.element__text'); 
  cardTitle.textContent = card.name;
 const cardImage = newCard.querySelector('.element__img');
 cardImage.src = card.link
 cardImage.alt = card.name

 newCard.querySelector('.element__like').addEventListener('click', event => {
  likesCards(event.target);
});

newCard.querySelector('.element__delete-button').addEventListener('click', event => {
  deleteCards(event.target.closest('.element'));
});

cardImage.addEventListener('click', () => {
  renderPhotoPopup(card);
  });
  return newCard;
}

initialCards.forEach(function (card) {     
  cardsContainer.prepend(createCard(card));
}); 

function openCreateCard () {
  openPopup(cardPopup);
  formCard.reset();
  disableSubmitButton(submitCardButton);;
}

const handleFormSubmitCard = event => {
  event.preventDefault();
  const cardValue = {
      name: formCard['card-name'].value,
      link: formCard['card-link'].value
    };
    
  cardsContainer.prepend(createCard(cardValue));
  closePopup(cardPopup);
  };

  generalPopups.forEach(popup => {
    popup.addEventListener('click', event => {
      if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-button')) {
        closePopup(popup);
      }
    })
  });
  formCard.addEventListener('submit', handleFormSubmitCard);
  

  





 





















 











 



















