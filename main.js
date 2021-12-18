const player1 = {
    player: 1,
    name: "Scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["weapon1"],
    attack,
    changeHp,
    elHp,
    renderHp,
};
const player2 = {
    player: 2,
    name: "Sub-zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["weapon2"],
    attack,
    changeHp,
    elHp,
    renderHp,
};

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");
const $formFight = document.querySelector('.control');

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

function attack() {
    console.log(`${this.name} fight`);
}

function changeHp(damage) {
    this.hp -= randomDamage(damage); 
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
    $arenas.appendChild($reloadWrap)
    $reloadB.addEventListener("click", function(){
      console.log("####: Click Restart");
      window.location.reload();       
    }); 
    return $reloadWrap;
}

/*$randomButton.addEventListener("click", function() {
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
}); */

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
    const hit = ATTACK[randomDamage(3) - 1];
    const defence = ATTACK[randomDamage(3) - 1];
    
    return {
        value: randomDamage(HIT[hit]),
        hit,
        defence,
    }
}

    $formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const attack = {};
    for (const item of $formFight) {
       
        if (item.checked && item.name === 'hit') {
            attack.value = randomDamage(HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence') {
            attack.value = randomDamage(HIT[item.value]);
        }
        item.checked = false;

        if (attack.hit !== enemy.defence && attack.hit !== enemy.hit) {
           player1.changeHp(randomDamage(enemy.value));
           player2.changeHp(randomDamage(Math.abs(enemy.value - attack.value)));
           player1.renderHp(enemy.value);
           player2.renderHp(Math.abs(enemy.value - attack.value));
        } else {
           player1.changeHp(randomDamage(0));
           player2.changeHp(randomDamage(0));
           player1.renderHp(0);
           player2.renderHp(0);
        }
    }
    console.log('####:a', attack)
    console.log('####:e', enemy)
    //
        
        
        if (player1.hp === 0 || player2.hp === 0) {
            $randomButton.disabled = true;
            createReloadButton();
        }
    
        if (player1.hp === 0 && player1.hp < player2.hp) {
            $arenas.appendChild(playerWins(player2.name));
        } else if (player2.hp === 0 && player2.hp < player1.hp) {
            $arenas.appendChild(playerWins(player1.name));
        } else if (player1.hp === 0 && player2.hp === 0) {
            $arenas.appendChild(playerWins());
        }
    
});