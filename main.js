const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['weapon1'],
    attack,
    changeHp,
    elHp,
    renderHp,
};
const player2 = {
    player: 2,
    name: 'Sub-zero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['weapon2'],
    attack,
    changeHp,
    elHp,
    renderHp,
};

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) { $tag.classList.add(className); }
    
    return $tag;
};

function createPlayer(playerName) {
    const $player = createElement('div', `player${playerName.player}`);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function attack() {
    console.log(`${this.name} fight`);
}

function changeHp(damage) {
    this.hp -= randomDamage(damage); 
}

function elHp() {
    const $playerLife = document.querySelector('.player'+ this.player + ' .life');
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
    const $looseTitle = createElement('div', 'loseTitle');
    if (name) {
        $looseTitle.innerText = `${name} win`;
    } else {
        $looseTitle.innerText = 'drawn';
    } 
    return $looseTitle;
};

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $reloadB = createElement('button', 'button');
    $reloadB.innerText = 'Restart';
    $reloadWrap.appendChild($reloadB);
    $arenas.appendChild($reloadWrap)
    $reloadB.addEventListener('click', function(){
      window.location.reload();       
    }); 
    return $reloadWrap;
}

function enemyAttack() {
    const hit = ATTACK[randomDamage(3) - 1];
    const defence = ATTACK[randomDamage(3) - 1];
    
    return {
        value: randomDamage(HIT[hit]),
        hit,
        defence,
    }
}

function playerAttack () {
    const attack = {};
    generateLogs('start', player1, player2);
    for (const item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = randomDamage(HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence') {
            attack.value = randomDamage(HIT[item.value]);
        }
        item.checked = false;
    }
    return attack;
}

function showResult() {
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        createReloadButton();
    }
    
    if (player1.hp === 0 && player1.hp < player2.hp) {
         $arenas.appendChild(playerWins(player2.name));
         generateLogs('end', player2, player1);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name));
        generateLogs('end', player1, player2)
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWins());
        generateLogs('draw', player1, player2);
    }
}


function generateLogs(type, player1, player2) {
    let text = '';
    let el = '';
    const date = new Date();
    const normalize = (num) => (num.toString().length > 1 ? num : `0${num}`);
    const time = `${normalize(date.getHours())} : ${normalize(date.getMinutes())}`;
    const {start, end, hit, defence, draw} = logs;
    
    switch(type) {
        case 'start':
            text = start.replace('time', `${time}`).replace('[player1]', player1.name).replace('[player2]', player2.name);
            el = `<p>${text}</p>`;
            break;

        case 'hit':
                text = hit[randomDamage(hit.length - 1)].replace('time', `${time}`).replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
                el = `<p>${text} - ${player1.hp} ${player2.hp/100}</p>`;
            break;

        case 'defence':
            text = defence[randomDamage(defence.length - 1)].replace('time', `${time}`).replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name);
            el = `<p>${text} - ${player2.hp} ${player1.hp/100}</p>`;
            break;
        
        case 'end':
            text = end[randomDamage(end.length - 1)].replace('time', `${time}`).replace('[playerWins]', player2.name).replace('[playerLose]', player1.name);
            el = `<p>${text}</p>`;
            break;

        case 'draw':
            el = `<p>${draw}</p>`;
            break;

    }
    $chat.insertAdjacentHTML('afterbegin', el);
}

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();
    
    if (player.defence !== enemy.hit) {
        player1.changeHp(enemy.value);
        player1.renderHp();
        generateLogs('hit', player2, player1);
     }
     if (enemy.defence !== player.hit) {
        player2.changeHp(player.value);
        player2.renderHp();
        generateLogs('hit', player1, player2);
     }

     if (attack.hit === enemy.defence) {
		generateLogs('defence', player2, player1);
	}
	if (enemy.hit === attack.defence) {
		generateLogs('defence', player1, player2);
	}

	if (player1.hp === 0 && player2.hp > 0) {
		generateLogs('end', player1, player2);
	} else if (player1.hp > 0 && player2.hp === 0) {
		generateLogs('end', player1, player2);
	} else if (player1.hp === 0 && player2.hp === 0) {
		generateLogs('draw', player1, player2);
	}
    console.log('####:a', player)
    console.log('####:e', enemy)
    showResult();
});