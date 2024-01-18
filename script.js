let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const playGame = (userChoice) => {

};

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener('click', () =>{
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});