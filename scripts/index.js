const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector('.popup__close');
const form = document.querySelector('.form');
const modal = document.querySelector(".popup");
const nameInput = document.querySelector('.form__input_name');
const aboutInput = document.querySelector('.form__input_aboutme');
const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__title');
const submitButton = document.querySelector(".popup__submit-button"); 





form.addEventListener("submit",(event)=>{
    event.preventDefault();

profileName.textContent = nameInput.value;
profileSubname.textContent = aboutInput.value;

toggleModal()

})

function toggleModal(){
    modal.classList.toggle("popup_opened");
}

editButton.addEventListener("click", toggleModal)

closeButton.addEventListener("click", toggleModal)