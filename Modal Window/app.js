'use strict'
const hiddenClass = 'hidden';

const modalDisplayButtons = document.getElementsByClassName('show-modal');
const closeModal = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


function toggleHiddenClass(){
    modal.classList.toggle(hiddenClass);
    overlay.classList.toggle(hiddenClass);
}

for(let button of modalDisplayButtons){
    button.addEventListener('click', toggleHiddenClass)
}

overlay.addEventListener('click',toggleHiddenClass)

closeModal.addEventListener('click', toggleHiddenClass)

// Handling escape key event
document.addEventListener('keydown',function(event){
//    console.log(event);
   if(event.key === 'Escape' && !modal.classList.contains('hidden')) toggleHiddenClass();
})
