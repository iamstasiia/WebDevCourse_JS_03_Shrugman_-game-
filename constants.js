import { greet } from "./index.js";

export const userName = greet();

export const questionCounter = [0];

export const moviesArray = [
    {
        title: "Interstellar",
        year: "2014",
        description:
            "A group of explorers set out into space to find a new home for humanity when Earth becomes uninhabitable.",
        deutsch:
            "Eine Gruppe von Forschern macht sich auf den Weg ins All, um ein neues Zuhause für die Menschheit zu finden, als die Erde unbewohnbar wird.",
        characters: [
            "Matthew McConaughey",
            "Jessica Chastain",
            "Anne Hathaway",
        ],
    },
    {
        title: "The Great Gatsby",
        year: "2013",
        description:
            "An adaptation of the classic American novel about a mysterious billionaire, his lavish parties, and his love affair with an old acquaintance.",
        deutsch:
            "Eine Adaption des klassischen amerikanischen Romans über einen mysteriösen Milliardär, seine prunkvollen Partys und seine Liebesaffäre mit einer alten Bekannten.",
        characters: ["Leonardo DiCaprio", "Carey Mulligan", "Tobey Maguire"],
    },
    {
        title: "The Dark Knight",
        year: "2008",
        description:
            "The Dark Knight confronts a sinister Joker in a dangerous battle for Gotham's fate.",
        deutsch:
            "Der Dunkle Ritter trifft auf einen finsteren Joker in einem gefährlichen Kampf um Gothams Schicksal.",
        characters: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    },
];

class NewMovie {
    constructor(title, year, description, deutsch, characters) {
        this.title = title;
        this.year = year;
        this.description = description;
        this.deutsch = deutsch;
        this.characters = characters;
    }
}

moviesArray.push(
    new NewMovie(
        "The Matrix",
        "1999",
        "A programmer discovers that his reality is a simulation, and he becomes the key to the fight for humanity's freedom.",
        "Ein Programmierer entdeckt, dass seine Realität eine Simulation ist, und er wird zum Schlüssel im Kampf um die Freiheit der Menschheit.",
        ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    ),
);

moviesArray.push(
    new NewMovie(
        "Pirates of the Caribbean",
        "2003",
        "An eccentric captain searches for the legendary treasure, encountering betrayal and adventure.",
        "Ein exzentrischer Kapitän sucht nach dem legendären Schatz und trifft auf Verrat und Abenteuer.",
        ["Johnny Depp", "Keira Knightley", "Orlando Bloom"],
    ),
);

moviesArray.push(
    new NewMovie(
        "Sherlock Holmes",
        "2009",
        "Renowned super-detective solves a complex crime in Victorian London.",
        "Der berühmte Superspürer löst in viktorianischem London einen komplexen Kriminalfall.",
        ["Robert Downey Jr.", "Jude Law", "Rachel McAdams"],
    ),
);

export const usedMovies = [];

export const likeIcon = "👍";
export const boxIcon = "🎁";
export const questionIcon = "❓";

export const userStatusBox = statusBox();

export function statusBox() {
    const array = moviesArray.map((obj) => boxIcon);
    array.unshift(questionIcon);
    array.pop();
    return array;
}
