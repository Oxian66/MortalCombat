import getRandom from "./randomDamage.js";
import { $formFight } from "./utils.js";
import { HIT } from "./enemyAttack.js";
const playerAttack = () => {
    const attack = {};

    for (const item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence') {
            attack.value = getRandom(HIT[item.value]);
        }
        item.checked = false;
    }
 
    return attack;
}
export default playerAttack;