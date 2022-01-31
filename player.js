import getRandom from './randomDamage.js';
import createElement from './createElement.js';

export default class Player {
    constructor(props) {
        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.weapon = props.weapon;
    }
    changeHp = damage => {
        this.hp -= getRandom(damage);
        if (this.hp <= 0) {
            this.hp = 0;
        }
    }
    elHp = () => {
        const $playerLife = document.querySelector(`.player${this.player} .life`);
        return $playerLife;
    }
    renderHp = () => {
        const $playerLife = this.elHp();
        $playerLife.style.width = `${this.hp}%`;
    }
    attack = () => {
        console.log(`${this.name} fight`);
    }
    createPlayer = (player) => {
        const $player = createElement('div', `player${this.player}`);
        const $progressbar = createElement('div', 'progressbar');
        const $character = createElement('div', 'character');
        const $life = createElement('div', 'life');
        const $name = createElement('div', 'name');
        const $img = createElement('img');
    
        $life.style.width = `${this.hp}%`;
        $name.innerText = this.name;
        $img.src = this.img;
    
        $player.appendChild($progressbar);
        $player.appendChild($character);
        $progressbar.appendChild($life);
        $progressbar.appendChild($name);
        $character.appendChild($img);
        return $player;
    }
}