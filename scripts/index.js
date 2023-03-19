const newCard = document.querySelector('#element__template');
const closePopupButton = document.querySelector('.popup__close-button');
const profilePopup = document.querySelector('.popup-profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const profileForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const userNameInput = document.querySelector('.popup__input_type_name');
const userOccupationInput = document.querySelector('.popup__input_type_job');
const cardPopup = document.querySelector('.popup-card');
const cardForm = document.querySelector('.popup__form_card');
const addCardButton = document.querySelector('.profile__add-button');
const closeCardButton = document.querySelector('.popup-card__close-button');
const cardsContainer = document.querySelector('.elements');
const cardItem = document.querySelector('.element');
const cardTemplate = document.querySelector('#element__template').content;
addCardButton.addEventListener('click', openCreateCard);
closeCardButton.addEventListener('click', closeCreateCard);
const popupImage = document.querySelector('.popup-image');
const popupImagePhoto = popupImage.querySelector('.popup-image__photo');
const closePopupImageButton = popupImage.querySelector('.popup__close-button');
const popupImageCaption = popupImage.querySelector('.popup-image__occupation');
closePopupImageButton.addEventListener('click', closePopupImage);

function openPopup(popup){
  popup.classList.add('popup_opened');
  };
  
  function closePopup(popup){
  popup.classList.remove('popup_opened')
  };
  
function openPopupProfile () {
  openPopup(profilePopup);
  userNameInput.value = profileName.textContent;     
  userOccupationInput.value = profileOccupation.textContent;  
}

function closePopupProfile () {
  closePopup(profilePopup);
}
closePopupButton.addEventListener('click', closePopupProfile);
function openPopupImage(){
  openPopup(popupImage)
}

function handleFormSubmit (evt){
    evt.preventDefault();
profileName.textContent = userNameInput.value;
profileOccupation.textContent = userOccupationInput.value;
closePopup(profilePopup);    
}
profileForm.addEventListener('submit', handleFormSubmit); 
editProfileButton.addEventListener('click', openPopupProfile);


const renderPhotoPopup = card => {
  const { name, link } = card || {};
  popupImagePhoto.src = link;
  popupImagePhoto.alt = name;
  popupImageCaption.textContent = name;
  openPopupImage();
}
function closePopupImage () {
  closePopup(popupImage);
}

 
const likesCards = card => {
  card.classList.toggle('element__like_type_active');
}

const deleteCards = element => {
  element.remove();
}


const createCard = (card) => {
  const newCard = document.querySelector('#element__template').content.cloneNode(true);
  const cardElement = newCard.querySelector('.element');
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
  cardForm.reset();
}
function closeCreateCard () {
  closePopup(cardPopup);
}
const handleFormSubmitCard = event => {
  event.preventDefault();
  const cardValue = {
      name: formCard['card-name'].value,
      link: formCard['card-link'].value
    
    };
  cardsContainer.prepend(createCard(cardValue));
  closePopup(cardPopup);
  }
  cardForm.addEventListener('submit', handleFormSubmitCard);




  

 








//   const newCard = document.querySelector('#element__template');
// const closePopupButton = document.querySelector('.popup__close-button');
// const profilePopup = document.querySelector('.popup-profile');
// const editProfileButton = document.querySelector('.profile__edit-button');
// const profileForm = document.querySelector('.popup__form');
// const profileName = document.querySelector('.profile__name');
// const profileOccupation = document.querySelector('.profile__occupation');
// const userNameInput = document.querySelector('.popup__input_type_name');
// const userOccupationInput = document.querySelector('.popup__input_type_job');
// const cardPopup = document.querySelector('.popup-card');
// const cardForm = document.querySelector('.popup__form_card');
// const addCardButton = document.querySelector('.profile__add-button');
// const closeCardButton = document.querySelector('.popup-card__close-button');
// const cardsContainer = document.querySelector('.elements');
// const cardItem = document.querySelector('.element');
// const cardTemplate = document.querySelector('#element__template').content;
// addCardButton.addEventListener('click', openCreateCard);
// closeCardButton.addEventListener('click', closeCreateCard);
// const popupImage = document.querySelector('.popup-image');
// const popupImagePhoto = popupImage.querySelector('.popup-image__photo');
// const closePopupImageButton = popupImage.querySelector('.popup__close-button');
// const popupImageCaption = popupImage.querySelector('.popup-image__occupation');
// closePopupImageButton.addEventListener('click', closePopupImage);

// function openPopup(popup){
//   popup.classList.add('popup_opened');
//   };
  
//   function closePopup(popup){
//   popup.classList.remove('popup_opened')
//   };
  
// function openPopupProfile () {
//   openPopup(profilePopup);
//   userNameInput.value = profileName.textContent;     
//   userOccupationInput.value = profileOccupation.textContent;  
// }

// function closePopupProfile () {
//   closePopup(profilePopup);
// }
// closePopupButton.addEventListener('click', closePopupProfile);
// function openPopupImage(){
//   openPopup(popupImage)
// }

// function handleFormSubmit (evt){
//     evt.preventDefault();
// profileName.textContent = userNameInput.value;
// profileOccupation.textContent = userOccupationInput.value;
// closePopup(profilePopup);    
// }
// profileForm.addEventListener('submit', handleFormSubmit); 
// editProfileButton.addEventListener('click', openPopupProfile);


// const renderPhotoPopup = card => {
//   const { name, link } = card || {};
//   popupImagePhoto.src = link;
//   popupImagePhoto.alt = name;
//   popupImageCaption.textContent = name;
//   openPopupImage();
// }
// function closePopupImage () {
//   closePopup(popupImage);
// }

 
// const likesCards = card => {
//   card.classList.toggle('element__like_type_active');
// }

// const deleteCards = element => {
//   element.remove();
// }


// const createCard = (card) => {
//   const newCard = document.querySelector('#element__template').cloneNode(true);
//   const cardElement = newCard.querySelector('.element');
//   const cardTitle = newCard.querySelector('.element__text'); 
//   cardTitle.textContent = card.name;
//  const cardImage = newCard.querySelector('.element__img');
//  cardImage.src = card.link
//  cardImage.alt = card.name

//  newCard.querySelector('.element__like').addEventListener('click', event => {
//   likesCards(event.target);
// });

// newCard.querySelector('.element__delete-button').addEventListener('click', event => {
//   deleteCards(event.target.closest('.element'));
// });
// cardImage.addEventListener('click', () => {
//   renderPhotoPopup(card);
//   });
//   return newCard;
  
// }
// initialCards.forEach(function (card) {     
//   cardsContainer.prepend(createCard(card));
// }); 

// function openCreateCard () {
//   openPopup(cardPopup);
//   cardForm.reset();
// }
// function closeCreateCard () {
//   closePopup(cardPopup);
// }
// const handleFormSubmitCard = event => {
//   event.preventDefault();
//   const cardValue = {
//       name: formCard['card-name'].value,
//       link: formCard['card-link'].value
//     };
//   const card = createCard(cardValue);
//   closePopup(cardPopup);
//   }
//   cardForm.addEventListener('submit', handleFormSubmitCard);




  

 

 











 





















 











 



















