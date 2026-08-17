//! Asynchronous work

// console.log("1");
// console.log("2");

// function hello() {
//   console.log("Hello Js");
// }
// setTimeout(hello, 4000);

// console.log("3");
// console.log("4");

// function sum(a,b){
//   console.log(a+b);
// }

// function calculator(a,b, sumCallback){
//    sumCallback(a,b);
// }

// calculator(3,4,sum )

//! Promise

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success");
//       if(getNextData){
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// const getPromise = () => {
//  return new Promise((resolve,reject)=> {
//     console.log("I am a promise");
//    reject("Network error");
//   resolve("Get all the data");
//   });
// }

// let promise = getPromise();
// promise.then((result) => {
//   console.log("promise fulfilled",result)
// }).catch((error) => {
//   console.log("Prmois error",error);
// });


 function api(){
  return new Promise((resolve,reject)=>{
   setTimeout(() => {
    console.log("getting api data");
    resolve("success");
   }, 3000);
  });
}

(async function getWeatherData() {
  console.log("getting api 1  data");
  await api().then((ress)=> {
    console.log(ress);  
  });
  console.log("getting api 2  data");

  await api().then((ress)=> {
    console.log(ress);  
  });
})();

