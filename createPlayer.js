import createElement from './createElement.js';
import attack from './attack.js';
import elHp from './elHp.js';
import changeHp from './changeHp.js';
import renderHp from './renderHp.js';

export const player1 = {
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
export const player2 = {
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

const createPlayer = (playerName) => {
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
export default createPlayer;