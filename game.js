import enemyAttack from './enemyAttack.js';
import playerAttack from './playerAttack.js';
import showResult from './showResult.js';
import generateLogs from './generateLogs.js';
import { $arenas, $formFight } from './utils.js';
import Player from './player.js';

export default class Game {
    constructor(props) {
        
    }
    start = () => {
        const player1 = new Player({
            player: 1,
            name: 'Scorpion',
            hp: 100,
            img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
            weapon: ['weapon1',],
        })
        const player2 = new Player({
            player: 2,
            name: 'Sub-zero',
            hp: 100,
            img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
            weapon: ['weapon2',],
        })

        $arenas.appendChild(player1.createPlayer());
        $arenas.appendChild(player2.createPlayer());

        generateLogs('start', player1, player2);

        $formFight.addEventListener('submit', function(e) {
            e.preventDefault();
            const {hit: hitEnemy, defence: defenceEnemy, value: valueEnemy} = enemyAttack();
            const {hit, defence, value} = playerAttack();
    
	        if (hitEnemy !== defence) {
		        player1.changeHp(valueEnemy);
		        player1.renderHp();
		        generateLogs('hit', player2, player1, valueEnemy);
	        } else {
		        generateLogs('defence', player2, player1);
	        }

	        if (hit !== defenceEnemy) {
		        player2.changeHp(value);
		        player2.renderHp();
		        generateLogs('hit', player1, player2, value);
	        } else {
		        generateLogs('defence', player1, player2);
            }

            showResult(player1, player2);
        });
    }
}