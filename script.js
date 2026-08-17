const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const getCatBtn = document.querySelector("#getCat");
const catImge = document.querySelector("#catImage");

const getCats = async() => {
  let response = await fetch(url);
  let data = await response.json();
  catImge.src = data[1].url;
  // console.log(data[1].url);
}


getCatBtn.addEventListener("click", getCats);
