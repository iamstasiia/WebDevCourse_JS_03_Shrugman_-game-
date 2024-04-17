import { greet } from "./index.js";

export const userName = greet();

export const questionCounter = [0];

export const moviesArray = [
    {
        title: "o", // Interstellar
        year: "2014",
        description:
            "A group of explorers set out into space to find a new home for humanity when Earth becomes uninhabitable.",
    },
    {
        title: "on", //Avatar
        year: "2009",
        description:
            "A science fiction epic adventure about an explorer who becomes embroiled in a conflict between humans and the indigenous people on an exotic planet.",
    },
    {
        title: "onl", //The Great Gatsby
        year: "2013",
        description:
            "An adaptation of the classic American novel about a mysterious billionaire, his lavish parties, and his love affair with an old acquaintance.",
    },
    {
        title: "onli", //The Dark Knight
        year: "2008",
        description:
            "The Dark Knight confronts a sinister Joker in a dangerous battle for Gotham's fate.",
    },
    {
        title: "online", //The Matrix
        year: "1999",
        description:
            "A programmer discovers that his reality is a simulation, and he becomes the key to the fight for humanity's freedom.",
    },
];

export const usedMovies = [];

export const likeIcon = "👍";
export const boxIcon = "🎁";
export const questionIcon = "❓"; //🤔❔

export const userStatusBox = statusBox();

export function statusBox() {
    const array = moviesArray.map((obj) => boxIcon);
    array.unshift(questionIcon);
    array.pop();
    return array;
}
