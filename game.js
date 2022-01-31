import enemyAttack from './enemyAttack.js';
import playerAttack from './playerAttack.js';
import showResult from './showResult.js';
import generateLogs from './generateLogs.js';
import { $arenas, $formFight } from './utils.js';
import Player from './player.js';
import getRandom from './randomDamage.js'

let player1;
let player2;
export default class Game {
    constructor(props) {
        
    }
        
        getPlayers = async () => {
            const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
            return body;
        }

        getRandomPlayer = async () => {
            const data = fetch('https://reactmarathon-api.herokuapp.com/api/mk/player/choose').then(res => res.json());
            return data;
        }

        getAttack = async (playerHit, playerDefence) => {
            const body = await fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
              method: 'POST',
              body: JSON.stringify({
                  hit: playerHit,
                  defence: playerDefence,
              })
          });
          const result = await body.json();
          console.log(result);
          return result;
        }
        start = async () => {
            const players = await this.getPlayers();
            //const p1 = players[getRandom(players.length) - 1];
            //const p2 = players[getRandom(players.length) - 1];
            const p1 = await this.getRandomPlayer();
            const p2 = await this.getRandomPlayer();
            player1 = new Player({
                ...p1,
                player: 1,
                //rootSelector: 'arenas',
            });
            player2 = new Player({
                ...p2,
                player: 2,
                //rootSelector: 'arenas',
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
    //}
}
}