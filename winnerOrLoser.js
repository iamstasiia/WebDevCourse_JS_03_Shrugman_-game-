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
        if (moviesArray.length === 1) {
            console.log(
                "\n\n    👇 But I have one more question for you 👇".blue,
            );
        } else {
            console.log(
                `\n\n    👇 But I have ${moviesArray.length} more questions for you 👇`,
            );
        }

        return keyInYN("\n\t Shall we continue? >>> ".bold.underline)
            ? schrugmanGame()
            : goodbye();
    }
}

export function loser() {
    console.clear();
    console.log(schrugman.join("").bgBlue);
    console.log(
        "             I'm sorry, but you lost.           ".bgBlack.bold,
    );
    let tryAgain = keyInYN(
        "\n\n\t Want to try again? >>> ".yellow.bold.underline,
    );
    if (tryAgain) {
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
