import createPlayer from './createPlayer.js';
import enemyAttack from './enemyAttack.js';
import playerAttack from './playerAttack.js';
import showResult from './showResult.js';
import generateLogs from './generateLogs.js';
import { $arenas, $formFight } from './utils.js';
import { player1, player2 } from './createPlayer.js'
import changeHp from './changeHp.js';
import renderHp from './renderHp.js';

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

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

    showResult();
});