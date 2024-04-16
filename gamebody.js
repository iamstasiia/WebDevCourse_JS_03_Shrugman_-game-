import { keyInYN, question } from "readline-sync";
import colors from "colors";
import {
    smallMan,
    moviesArray,
    schrugman,
    userName,
    seeYouSoon,
    likesTruckload,
} from "./constants.js";

export function schrugmanGame() {
    const randomMovie =
        moviesArray[Math.floor(Math.random() * moviesArray.length)];
    const { title, year, description } = randomMovie;

    const hiddenTitle = [];
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
            "Description:\n".blue.bold +
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

        const answer = question(
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
            winner();
        }
    }
}

function loser() {
    console.clear();
    console.log(schrugman.join("").black);
    console.log("             I'm sorry, but you lost.           ".bgRed.bold);
    keyInYN("\n\n\tWant to try again? >>> ".bold) ? schrugmanGame() : goodbye();
}
//             I'm sorry, but you lost.           /
//           Congratulations! You won!!!          /
function winner() {
    console.clear();
    console.log(likesTruckload.join(""));
    console.log(
        "           Congratulations! You won!!!          ".bgYellow.black,
    );
    keyInYN("\n\n\tWant to try again? >>> ".bold) ? schrugmanGame() : goodbye();
}

export function goodbye() {
    console.clear();
    console.log(
        "\nThank you ".blue.bold +
            userName.yellow.bold +
            " for your visit.".blue.bold +
            "\n\tI hope you will play with me next time".blue.bold.italic +
            " 🤞🤞🤞\n",
    );
    console.log(seeYouSoon.join(""));
}
