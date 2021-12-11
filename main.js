const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
    player: 1,
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["weapon1"],
    attack: function() {
        console.log(`${player1.name} fight`)
    },
};
const player2 = {
    player: 2,
    name: "Sub-zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["weapon2"],
    attack: function() {
        console.log(`${player2.name} fight`)
    },
};

const createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) { $tag.classList.add(className); }
    
    return $tag;
};

const createPlayer = (playerName) => {
    const $player = createElement("div", `player${playerName.player}`);
    const $progressbar = createElement("div", "progressbar");
    const $character = createElement("div", "character");
    const $life = createElement("div", "life");
    const $name = createElement("div", "name");
    const $img = createElement("img");

    $life.style.width = `${playerName.hp}%`;
    $name.innerText = playerName.name;
    $img.src = playerName.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    return $player;
};

const changeHp = (player) => {
    const $playerLife = document.querySelector(".player" + player.player + " .life");
    const randomDamage = 2 * Math.ceil(Math.random() * 10);
    player.hp -= randomDamage;
    $playerLife.style.width = `${player.hp}%`;

    if (player.hp < 0) { 
        $arenas.appendChild(playerLose(player.name));
        $playerLife.style.width = 0 + '%';
         $randomButton.disabled = true;
 } 
  
 //
};

const playerLose = (name) => {
    const $looseTitle = createElement("div", "loseTitle");
    const winner = player2.hp > player1.hp ? player2.name : player1.name;
    $looseTitle.innerText = `${winner} won`;
    return $looseTitle;
};

$randomButton.addEventListener("click", function() {
    console.log("####: Click Random");
    changeHp(player1);
    changeHp(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));