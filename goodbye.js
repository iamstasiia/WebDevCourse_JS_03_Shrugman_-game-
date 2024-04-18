import colors from "colors";
import {
    userName,
    questionCounter,
    moviesArray,
    usedMovies,
} from "./constants.js";
import { seeYouSoon } from "./pictures.js";

export function goodbye() {
    console.clear();
    console.log(
        "\nThank you ".blue.bold +
            userName.yellow.bold +
            " for your visit.".blue.bold,
    );

    if (questionCounter[0] >= 1) {
        console.log(
            "You answered ".blue +
                ` ${questionCounter[0]} `.yellow.bold.underline +
                " " +
                "of ".yellow +
                `${moviesArray.length + usedMovies.length}`.yellow +
                " questions".blue +
                " correctly.".yellow.bold,
        );
    }

    console.log(
        "       I hope you will play with me next time".blue.bold.italic +
            " 🤞🤞🤞\n",
    );
    console.log(seeYouSoon.join(""));
}
