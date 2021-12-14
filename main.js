const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");
//onst $reloadButton = document.querySelector(".reloadWrap .button")

const player1 = {
    player: 1,
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["weapon1"],
    attack: function() {
        console.log(`${this.name} fight`)
    },
    changeHp: changeHp,
    elHp: elHp,
    renderHp: renderHp,
};
const player2 = {
    player: 2,
    name: "Sub-zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["weapon2"],
    attack: function() {
        console.log(`${this.name} fight`)
    },
    changeHp: changeHp,
    elHp: elHp,
    renderHp: renderHp,
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) { $tag.classList.add(className); }
    
    return $tag;
};

function createPlayer(playerName) {
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

function changeHp(damage) {
    this.hp -= randomDamage(damage);
    if (this.hp <= 0) { this.hp = 0; }  
}

function elHp() {
    const $playerLife = document.querySelector(".player" + this.player + " .life");
    return $playerLife;
}

function renderHp() {
    const $playerLife = this.elHp();
    $playerLife.style.width = `${this.hp}%`;
}

function randomDamage(damage) {
    return Math.ceil(Math.random() * damage);
};

function playerWins(name) {
    const $looseTitle = createElement("div", "loseTitle");
    if (name) {
        $looseTitle.innerText = `${name} win`;
    } else {
        $looseTitle.innerText = 'drawn';
    } 
    return $looseTitle;
};

function createReloadButton() {
    const $reloadWrap = createElement("div", 'reloadWrap');
    const $reloadB = createElement("button", "button");
    $reloadB.innerText = "Restart";
    $reloadWrap.appendChild($reloadB);
    $reloadB.addEventListener("click", function(){
      console.log("####: Click Restart");
      window.location.reload();       
    }); 
    return $reloadWrap;
}

$randomButton.addEventListener("click", function() {
    console.log("####: Click Random");
    player1.changeHp(randomDamage(20));
    player2.changeHp(randomDamage(20));
    player1.renderHp();
    player2.renderHp();
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        $arenas.appendChild(createReloadButton());
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
    }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));