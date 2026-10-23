let baseURL = "http://www.number-trivia.com";
let favNumber = 7;

//1. Make a request to the numbers API to get a fact about a number
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
});

//2. Gets data on multiple numbers with a single request.
let favNumbers = [7, 13, 16];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data);
});

//3. Uses the API to get 4 facts on a single number.
Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});