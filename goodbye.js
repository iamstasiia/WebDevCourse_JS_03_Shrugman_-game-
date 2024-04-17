import colors from "colors";
import { userName, questionCounter } from "./constants.js";
import { seeYouSoon } from "./pictures.js";

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
