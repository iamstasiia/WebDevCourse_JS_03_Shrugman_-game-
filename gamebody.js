import { question } from "readline-sync";
import colors from "colors";
import {
    questionCounter,
    moviesArray,
    usedMovies,
    userStatusBox,
    likeIcon,
} from "./constants.js";
import { smallMan } from "./pictures.js";
import { winner, loser } from "./winnerOrLoser.js";

export function schrugmanGame() {
    questionCounter[0]++;

    let userRandomMovie = randomMovie();
    let { title, year, description, deutsch, characters } = userRandomMovie;
    let userHiddenTitle = hiddenTitle(title);

    let userHiddenMan = [...smallMan];
    let userSmallMan = [];
    let wrongLetters = [];

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
                "\n\nAuf Deutsch:\n\t".blue.bold +
                deutsch.bold +
                "\n\nYear of release: ".blue.bold +
                year.yellow,
        );

        console.log(`\n    ${userHiddenTitle.join("")}\n`);
        console.log(
            "    " +
                userSmallMan.join("").rainbow.bold +
                userHiddenMan.join("").gray.dim +
                "    " +
                wrongLetters.join(" "),
        );

        if (userSmallMan.length >= 7) {
            console.log(
                "\n O_o".bgRed.bold +
                    ", you only have 3 attempts. Maybe this will help... "
                        .bgRed,
            );
            console.log(
                "\nLeading actors:\n\t".blue.bold +
                    characters.join(", ").italic,
            );
        }

        let answer = question(
            "\n Enter a letter ".bgYellow.black +
                " " +
                ">>>".rainbow.bold +
                "  ",
        );

        if (answer.length !== 0) {
            answer = answer.toLowerCase().split(" ").join("");

            if (title.toLowerCase().includes(answer)) {
                title.split("").forEach((letter, index) => {
                    if (answer.toLowerCase().includes(letter.toLowerCase())) {
                        userHiddenTitle[index] = letter;
                    }
                });
            } else {
                userSmallMan.push(userHiddenMan[0]);
                userHiddenMan.shift();
                wrongLetters.push(` ${answer[0]} `.red.bold.strikethrough);
            }
        }

        if (userSmallMan.length === 10 && userHiddenTitle.includes("_".bold)) {
            run = false;
            questionCounter[0]--;
            loser();
        } else if (
            userSmallMan.length < 10 &&
            !userHiddenTitle.includes("_".bold)
        ) {
            run = false;
            userStatusBox.unshift(likeIcon);
            userStatusBox.pop();
            winner();
        }
    }
}

function randomMovie() {
    let randomIndex = Math.floor(Math.random() * moviesArray.length);
    let randomMovie = moviesArray[randomIndex];
    usedMovies.push(randomMovie);
    moviesArray.splice(randomIndex, 1);
    return randomMovie;
}

function hiddenTitle(movieTitle) {
    let hiddenTitle = [];
    for (let i = 0; i < movieTitle.length; i++) {
        if (movieTitle[i] === " ") {
            hiddenTitle.push(" ");
        } else if (movieTitle[i] === "-") {
            hiddenTitle.push("-");
        } else if (movieTitle[i] === "'") {
            hiddenTitle.push("'");
        } else {
            hiddenTitle.push("_".bold);
        }
    }
    return hiddenTitle;
}
