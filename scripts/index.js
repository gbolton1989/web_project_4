//Wrappers
const editProfileModalWindow = document.querySelector(".popup_edit-profile");
const addElementModalWindow = document.querySelector(".popup_add-element");
const imageModalWindow = document.querySelector(".popup_type_image");

//Open buttons
const editButton = document.querySelector(".profile__edit-button");
const addElementButton = document.querySelector(".profile__add-button");

//Close buttons
const modalCloseButton = editProfileModalWindow.querySelector(".popup__close");
const closeAddElementModal = addElementModalWindow.querySelector(".popup__close");
const closeImageModalWindow = imageModalWindow.querySelector(".popup__close");

const editForm = document.querySelector(".form");
const addElementForm = document.querySelector(".form__add-element");

//Profile
const nameInput = document.querySelector(".form__input_name");
const aboutInput = document.querySelector(".form__input_aboutme");
const profileName = document.querySelector(".profile__name");
const profileSubname = document.querySelector(".profile__title");

//Add form
const elementTitleInput = document.querySelector(".form__input_title");
const elementImageUrlInput = document.querySelector(".form__input_url");

const popupImage = imageModalWindow.querySelector(".popup__image");
const popupImageTitle = imageModalWindow.querySelector(".popup__image-title");


//function toggleModalWindow(modal){
//    modal.classList.toggle("popup_is-opened");
//}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.innerText = nameInput.value;
    profileSubname.innerText = aboutInput.value;
    toggleModalWindow(editProfileModalWindow);
}

editForm.addEventListener("submit", formSubmitHandler);
editButton.addEventListener("click", () => {
    if (!editProfileModalWindow.classList.contains("popup_is")) {
        nameInput.value = profileName.innerText;
        aboutInput.value = profileSubname.innerText;
    }
    toggleModalWindow(editProfileModalWindow);
})


modalCloseButton.addEventListener("click", () => {
    toggleModalWindow(editProfileModalWindow);
})

addElementButton.addEventListener("click", () => {
    toggleModalWindow(addElementModalWindow);
})

closeAddElementModal.addEventListener("click", () => {
    toggleModalWindow(addElementModalWindow);
})

closeImageModalWindow.addEventListener("click", () => {
    toggleModalWindow(imageModalWindow);
})


const initialCards = [
{
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
},
{
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
},
{
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
},
{
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
},
{
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
},
{
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
},
];

const elementTemplate = document.querySelector("#element-template").content.querySelector(".element");
const list = document.querySelector(".element__list");

initialCards.forEach((data) => {
    list.prepend(createElement(data.name, data.link));
});

addElementForm.addEventListener("submit", (event) => {
    event.preventDefault();
    list.prepend(createElement(elementTitleInput.value, elementImageUrlInput.value));
    toggleModalWindow(addElementModalWindow);
});


function createElement(title, imageLink) {

    const elementCard = elementTemplate.cloneNode(true);
    const elementImage = elementCard.querySelector(".element__image");
    const elementTitle = elementCard.querySelector(".element__place-title");
    const elementHeart = elementCard.querySelector(".element__heart");
    const elementDeleteButton = elementCard.querySelector(".element__delete");

    elementTitle.textContent = title;
    elementImage.src = imageLink;
    elementImage.alt = title;

    
    elementHeart.addEventListener("click", function(evt) {
        evt.target.classList.toggle("element__heart_active");
    })

    elementDeleteButton.addEventListener("click", function() {
        const listItem = elementDeleteButton.closest('.element');
        listItem.remove();
    })

    elementImage.addEventListener("click", () => {
        popupImage.src = imageLink;
        popupImage.alt = title;
        popupImageTitle.textContent = title;
        
        toggleModalWindow(imageModalWindow);                
    });


    return elementCard;
}

const ESC_KEY = 27;

const closeWithEsc = ({ keyCode }) => {
    if (keyCode === ESC_KEY) {
        const activeModal = document.querySelector(".popup_is-opened");
        toggleModalWindow(activeModal);
    }
}

const closeWithClick = ({ target }) => {
    if (target.classList.contains("popup__close") ||
        target.classList.contains("popup_is-opened")) {
        const activeModal = document.querySelector(".popup_is-opened");
        toggleModalWindow(activeModal);
    }
};

const toggleModalWindow = modal => {
    const isModalOpened = modal.classList.contains("popup_is-opened");


    modal.classList.toggle("popup_is-opened");

    if (isModalOpened) {
        document.removeEventListener('keydown', closeWithEsc);
        modal.removeEventListener('click', closeWithClick);

    } else {
        document.addEventListener('keydown', closeWithEsc);
        modal.addEventListener('click', closeWithClick);
    }
};