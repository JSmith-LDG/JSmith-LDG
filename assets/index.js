const modalSlidesContainer = document.querySelector(".modal-slides-container");
const modalWidth = 300;

let modalPage = 0;



const nextPage = () => {
  modalPage++;
  modalSlidesContainer.style.margin = `0px 0px 0px -${modalWidth * modalPage}px`;
};

const previousPage = () => {
  modalPage--;
  modalSlidesContainer.style.margin = `0px 0px 0px -${modalWidth * modalPage}px`;
};