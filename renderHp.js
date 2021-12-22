import elHp from "./elHp.js";
export default function renderHp() {
    const $playerLife = this.elHp();
    $playerLife.style.width = `${this.hp}%`;
}