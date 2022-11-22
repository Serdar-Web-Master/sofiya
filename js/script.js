import { a, b} from "./vars.js";
console.log(a,b);

const slider__line = document.querySelector('.slider__line');

const btn__vpered = document.querySelector('.btn__vpered');
const btn__nazad = document.querySelector('.btn__nazad');

btn__vpered.addEventListener("click",vpered);
btn__nazad.addEventListener("click",nazad)
let x = 0
function vpered () {
   if (x > -1600) {
      x -= 200
      slider__line.style.marginLeft = x + "px"
   }
  else {
   x = 0
   slider__line.style.marginLeft = x + "px"
  }
}

function nazad () {
   if (x<0) {
      x += 200;
      slider__line.style.marginLeft = x + "px"
   }
  
}