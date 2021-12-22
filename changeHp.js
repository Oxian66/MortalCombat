import randomDamage from './randomDamage.js'
export default function changeHp(damage) {
    this.hp -= randomDamage(damage);
    if (this.hp <= 0) {
		this.hp = 0;
	}
}