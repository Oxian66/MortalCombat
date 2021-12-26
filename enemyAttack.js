import getRandom from "./randomDamage.js";
export const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
export const ATTACK = ['head', 'body', 'foot'];

const enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];
    
    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
}
export default enemyAttack;