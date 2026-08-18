const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const getCatBtn = document.querySelector("#getCat");
const catImge = document.querySelector("#catImage");
const loader = document.querySelector("#loader");






//! get cats from API
const getCats = async () => {
  //& Disable button while loading
  getCatBtn.disabled = true;
  //& show loader
  loader.style.display = "block";


  let response = await fetch(url);
  let data = await response.json();
  // console.log(data[1].url);
  // Wait until image is actually loaded
  catImge.src = data[1].url;

  catImge.onload = () => {

    loader.style.display = "none";
    getCatBtn.disabled = false;
  };
  // Enable button

}

//! use promise chain
// function getCats() {
//   fetch(url).then((response) => {
//     return response.json();
//   }).then((data) =>
//     catImge.src = data[1].url
//   ).catch((error) => {
//     console.log(error);
//   })
// }


getCatBtn.addEventListener("click", getCats);
