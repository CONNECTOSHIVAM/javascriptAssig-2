// function fetchDataFormAPI() {
//     const date = new Date();
//     console.log("Fetch data form API at:- ", date.toLocaleString());
// }
// const dataFatchInterval = setInterval(fetchDataFormAPI, 3000);

// setTimeout(function () {
//     clearInterval(dataFatchInterval);
//     console.log("Data fetch stopped after 15 second..");
// }, 15000)
function fetchDataFromAPI() {
    const date = new Date();
    console.log("Fetch data from API at:", date.toLocaleString());
}

const dataFetchInterval = setInterval(fetchDataFromAPI, 3000);

setTimeout(function () {
    clearInterval(dataFetchInterval);
    console.log("Data fetch stopped after 15 seconds.");
}, 15000);
