import { keyInYN, question } from "readline-sync";
import colors from "colors";
import {
    moviesArray,
    userName,
    questionCounter,
    usedMovies,
    userStatusBox,
    likeIcon,
    boxIcon,
    questionIcon,
    statusBox,
} from "./constants.js";
import { schrugman, smallMan, likesTruckload, seeYouSoon } from "./pictures.js";

export function schrugmanGame() {
    questionCounter[0]++;

    let randomIndex = Math.floor(Math.random() * moviesArray.length);
    let randomMovie = moviesArray[randomIndex];
    usedMovies.push(randomMovie);
    moviesArray.splice(randomIndex, 1);
    let { title, year, description } = randomMovie;
    let hiddenTitle = [];
    for (let i = 0; i < title.length; i++) {
        if (title[i] === " ") {
            hiddenTitle.push(" ");
        } else if (title[i] === "'") {
            hiddenTitle.push("'");
        } else {
            hiddenTitle.push("_");
        }
    }

    let userHiddenMan = [...smallMan];
    let userSmallMan = [];

    let run = true;
    while (run) {
        console.clear();
        console.log(
            `Question ${questionCounter[0]} of ${
                moviesArray.length + usedMovies.length
            }`.yellow.bold.underline +
                "   " +
                `${userStatusBox.join(" ")}\n`,
        );
        console.log(
            "Description:\n\t".blue.bold +
                description.italic +
                "\nYear of release: ".blue.bold +
                year.yellow,
        );
        console.log(`\n    ${hiddenTitle.join("")}\n`);
        console.log(
            "\t" +
                userSmallMan.join("").rainbow.bold +
                userHiddenMan.join("").gray.dim,
        );

        let answer = question(
            "\n Enter a letter ".bgYellow.black +
                " " +
                ">".bgCyan +
                ">".bgYellow +
                ">".bgGreen +
                " ",
        );

        if (answer.length !== 0) {
            if (
                answer.length !== 0 &&
                title.toLowerCase().includes(answer.toLowerCase())
            ) {
                title.split("").forEach((letter, index) => {
                    if (letter.toLowerCase() === answer[0].toLowerCase()) {
                        hiddenTitle[index] = letter;
                    }
                });
            } else {
                userSmallMan.push(userHiddenMan[0]);
                userHiddenMan.shift();
            }
        }

        if (userSmallMan.length === 10 && hiddenTitle.includes("_")) {
            run = false;
            loser();
        } else if (userSmallMan.length < 10 && !hiddenTitle.includes("_")) {
            run = false;
            userStatusBox.unshift(likeIcon);
            userStatusBox.pop();
            winner();
        }
    }
}

function winner() {
    console.clear();
    console.log(likesTruckload.join(""));
    console.log(
        "           Congratulations! You won!!!          ".bgYellow.black,
    );
    if (moviesArray.length === 0) {
        console.log(
            "\n\n                    You are a                   ".bold +
                "\n              !!! SUPER WINNER !!!              \n\n"
                    .bgYellow.black +
                `${userName}, `.blue.bold +
                "rest while I write you\n\t\tmore difficult questions 🤯😜\n"
                    .bold,
        );
        console.log(seeYouSoon.join(""));
    } else {
        return keyInYN("\n\n\tShall we continue? >>> ".bold)
            ? schrugmanGame()
            : goodbye();
    }
}

export function loser() {
    console.clear();
    console.log(schrugman.join("").black);
    console.log("             I'm sorry, but you lost.           ".bgRed.bold);
    let tryAgain = keyInYN("\n\n\tWant to try again? >>> ".bold);
    if (tryAgain && questionCounter[0] === 1) {
        questionCounter[0]--;
        moviesArray.push(usedMovies[0]);
        usedMovies.splice(0, 1);
        return schrugmanGame();
    } else if (tryAgain && questionCounter[0] > 1) {
        questionCounter[0] = 0;
        moviesArray.push(...usedMovies);
        usedMovies.length = 0;

        userStatusBox.length = 0;
        userStatusBox.push(...statusBox());

        return schrugmanGame();
    } else {
        return goodbye();
    }
}

export function goodbye() {
    console.clear();
    console.log(
        "\nThank you ".blue.bold +
            userName.yellow.bold +
            " for your visit.".blue.bold,
    );

    if (questionCounter[0] === 1) {
        console.log(
            "You answered".blue +
                " 1 question ".yellow.bold.underline +
                "correctly.".blue,
        );
    } else if (questionCounter[0] > 1) {
        console.log(
            "You answered ".blue +
                `${questionCounter[0]}`.yellow.bold.underline +
                " questions".yellow.bold.underline +
                " correctly".blue,
        );
    }

    console.log(
        "       I hope you will play with me next time".blue.bold.italic +
            " 🤞🤞🤞\n",
    );
    console.log(seeYouSoon.join(""));
}
