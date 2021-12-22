import createElement from "./createElement.js";
import { $arenas } from "./utils.js";
const createReloadButton = () => {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $reloadB = createElement('button', 'button');
    $reloadB.innerText = 'Restart';
    $reloadWrap.appendChild($reloadB);
    $arenas.appendChild($reloadWrap)
    $reloadB.addEventListener('click', function(){
      window.location.reload();       
    }); 
    return $reloadWrap;
}
export default createReloadButton;