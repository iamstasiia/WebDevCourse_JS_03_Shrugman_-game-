import { question } from "readline-sync";
import colors from "colors";
import { schrugman } from "./constants.js";

export function greet() {
    console.clear();
    console.log("\n\t    Welcome Guest!".blue.bold);
    console.log(schrugman.join("").yellow);
    const userName = question(
        "Shrugman".blue.bold +
            " will be happy to meet you.".blue +
            "\n\tWhat is ".blue +
            "your name?".blue.bold.underline +
            " >>> ".blue,
    );

    return userName.length === 0 ? "Guest" : userName;
}
