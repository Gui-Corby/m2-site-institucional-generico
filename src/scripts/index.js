function handleModal() {
    const firstButton = document.querySelector('#first__button-show-message');
    const secondButton = document.querySelector('#second__button-show-message');

    const modalContainer = document.querySelector('#modalController')

    firstButton.addEventListener('click', () => {
        modalContainer.showModal();
    });

    secondButton.addEventListener('click', () => {
        modalContainer.showModal();
    })

    closeModal()
}

function closeModal() {
    const button = document.querySelector('.modal__close');
    const modalContainer = document.querySelector('#modalController');

    button.addEventListener('click', () => {
        modalContainer.close();
    })
}


handleModal();