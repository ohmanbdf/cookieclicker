let no = 0;
let count = document.querySelector('h2');;
function update() {count.textContent = no;}
function add() {if (no == 1){let answer = confirm('Continue Clicking?'); if (answer == true){game.classList.add('hidden'); hi.classList.remove('hidden')} else{game.classList.add('hidden'); h.classList.remove('hidden')}}else{no++; update()}}
