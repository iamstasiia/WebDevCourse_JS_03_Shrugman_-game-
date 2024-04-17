import { keyInYN } from "readline-sync";
import colors from "colors";
import {
    userName,
    questionCounter,
    moviesArray,
    usedMovies,
    userStatusBox,
    statusBox,
} from "./constants.js";
import { schrugman, likesTruckload, seeYouSoon } from "./pictures.js";
import { schrugmanGame } from "./gamebody.js";
import { goodbye } from "./goodbye.js";

export function winner() {
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
