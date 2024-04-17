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

    let randomIndex = Math.floor(Math.random() * moviesArray.length);
    let randomMovie = moviesArray[randomIndex];
    usedMovies.push(randomMovie);
    moviesArray.splice(randomIndex, 1);
    let { title, year, description, deutsch, characters } = randomMovie;
    let hiddenTitle = [];
    for (let i = 0; i < title.length; i++) {
        if (title[i] === " ") {
            hiddenTitle.push(" ");
        } else if (title[i] === "'") {
            hiddenTitle.push("'");
        } else {
            hiddenTitle.push("_".bold);
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
                "\n\nAuf Deutsch:\n\t".blue.bold +
                deutsch.bold +
                "\n\nYear of release: ".blue.bold +
                year.yellow,
        );

        console.log(`\n    ${hiddenTitle.join("")}\n`);
        console.log(
            "    " +
                userSmallMan.join("").rainbow.bold +
                userHiddenMan.join("").gray.dim,
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

        if (userSmallMan.length === 10 && hiddenTitle.includes("_".bold)) {
            run = false;
            questionCounter[0]--;
            loser();
        } else if (
            userSmallMan.length < 10 &&
            !hiddenTitle.includes("_".bold)
        ) {
            run = false;
            userStatusBox.unshift(likeIcon);
            userStatusBox.pop();
            winner();
        }
    }
}
