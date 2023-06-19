const img = document.querySelector("img"); // selects img html tag
const form = document.querySelector("form"); // selects form in html

form.addEventListener("submit", function(event){ // listens for submit button click
    event.preventDefault(); 
       let randomNumber = Math.floor(Math.random() * 18) + 1; // generates a number upto 18
        img.src = `./images/${randomNumber}.jpeg`; // changes the image
    console.log("img")
});



