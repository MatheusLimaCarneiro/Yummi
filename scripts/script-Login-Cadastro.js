const openModalButton = document.querySelector("#ja-tem-conta");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})




const openModalButtonc = document.querySelector("#cadastrar");
const closeModalButtonc = document.querySelector("#close-modalc");
const modalc = document.querySelector("#modalc");
const fadec = document.querySelector("#fadec");

const toggleModalc = () => {
    [modalc, fadec].forEach((el) => el.classList.toggle("hide"));
}

[openModalButtonc, closeModalButtonc, fadec].forEach((el) => {
    el.addEventListener("click", () => toggleModalc());
})