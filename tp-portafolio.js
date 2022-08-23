const $portfolio = document.querySelector(".sec-portafolio-js");
const $modalImgPortfolio = document.querySelector(".img-modal-js");

$portfolio.addEventListener("click", (e)=> {	
  //console.log(e.target);
  //console.log(e.target.classList);
  if(e.target.classList.contains("img-btn-modal-js")) {
    //SRC
    let urlImg = e.target.attributes[0].nodeValue
    //add modal
    $modalImgPortfolio.src = urlImg
  }
})