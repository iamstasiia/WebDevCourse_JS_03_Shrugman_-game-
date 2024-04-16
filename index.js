import { question, keyInYN } from "readline-sync";
import colors from "colors";
import { schrugman, smallMan, userName } from "./constants.js";
import { schrugmanGame, goodbye } from "./gamebody.js";

export function greet() {
    console.clear();
    console.log("\n\t\tWelcome Guest!".blue.bold);
    console.log(schrugman.join("").yellow);

    let userName = question(
        "\tShrugman".white.bold +
            " will be happy to meet you.".white +
            "\n\t     What is ".blue +
            "your name?".blue.bold.underline +
            " >>> ".blue,
    );
    return userName.length === 0
        ? "Guest"
        : userName[0].toUpperCase() + userName.slice(1).toLowerCase();
}

function firstRun() {
    console.clear();
    console.log(
        "\n\tGreetings to you ".blue.bold +
            userName.yellow.bold +
            " again!".blue.bold,
    );
    console.log(
        "\nLet's play! The rules are very simple.\nYou have a hidden title of a popular movie that you\nhave to guess one letter at a time before Shrugman\ngoes into color.",
    );
    console.log("\n\t\t" + smallMan.join("").rainbow.bold + "\n");
    console.log("Each correct guess leaves it gray, ");

    console.log("\n\t\t" + smallMan.join("").gray.dim + "\n");
    console.log("and an incorrect guess makes one symbol colored.");

    console.log(
        "\n " +
            smallMan.join("").slice(0, 1).rainbow.bold +
            smallMan.join("").slice(1).gray.dim +
            "     " +
            smallMan.join("").slice(0, 2).rainbow.bold +
            smallMan.join("").slice(2).gray.dim +
            "     " +
            smallMan.join("").slice(0, 3).rainbow.bold +
            smallMan.join("").slice(3).gray.dim,
    );
    console.log("\n\n\t\tGood luck!".yellow.bold);

    if (keyInYN("\n\n\tShall we begin? ".bold)) {
        return schrugmanGame();
    } else {
        return goodbye();
    }
}

firstRun();
