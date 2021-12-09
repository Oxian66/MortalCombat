const player1 = {
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["weapon1"],
    attack: function() {
        console.log(`${player1.name} fight`)
    },
};
const player2 = {
    name: "Sub-zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["weapon2"],
    attack: function() {
        console.log(`${player2.name} fight`)
    },
};
const createPlayer = () => {
    const $player1 = document.createElement("div");
    $player1.classList.add("player1");

    const $progressbar = document.createElement("div");
    $progressbar.classList.add("progressbar");

    const $character = document.createElement("div");
    $character.classList.add("character");

    const $life = document.createElement("div");
    $life.classList.add("life");
    $life.style.width = "100%";

    const $name = document.createElement("div");
    $name.classList.add("name");
    $name.innerText = "SCORPION";

    const $img = document.createElement("img");
    $img.src = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";

    $player1.appendChild("$progressbar");
    $player1.appendChild("$character");
    $progressbar.appendChild("$life");
    $progressbar.appendChild("$name");
    $character.appendChild("$img");
};

const $arenas = document.createElement("div");
const playerOne = createPlayer('player1', player1);
$arenas.appendChild("playerOne");
const playerTwo = createPlayer('$player1', player2);
$arenas.appendChild("playerTwo");