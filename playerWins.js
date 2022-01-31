import createElement from "./createElement.js";
const playerWins = name => {
    const $looseTitle = createElement('div', 'loseTitle');
    if (name) {
        $looseTitle.innerText = `${name} win`;
    } else {
        $looseTitle.innerText = 'drawn';
    } 
    return $looseTitle;
}
export default playerWins;