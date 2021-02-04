
//click event listener for start game button that initializes new game,
//and clears out older game if exists before starting new one.
let game;

document.getElementById('btn__reset').addEventListener('click', (e) => {
game = new Game;
if (!game.gameOver() || game.checkForWin()){
     //clears out lis from previous activePhrase
     let ul = document.getElementById('phrase').firstElementChild;
     let lis = []
     for (let i = 0; i < ul.children.length; i++){
        lis.push(ul.children[i])
     }
     lis.forEach(li => ul.removeChild(li));
     //sets each key back to 'key' CSS class so they are reset
     let keyrows = document.querySelectorAll('.keyrow')
     let keys = []
     for (let i = 0; i < keyrows.length; i++){
       for (let j = 0; j < keyrows[i].children.length; j++){
         keys.push(keyrows[i].children[j]);
       }
     }
     keys.forEach(key => key.className = 'key');
     keys.forEach(key => key.disabled = false);
     //resets all heart images to liveHeart
     game.missed = 0;
     let lives = document.getElementsByTagName('img');
     for (let i = 0; i < lives.length; i++){
       lives[i].src = "images/liveHeart.png"
     }

   game.startGame();
   console.log('second game');
 } else {
     game = new Game;
     game.startGame();
     console.log('first game not cleared')
 }
});

//click and keyup event listeners that call handleInteraction method when interacting
//w game. keyup event first has to compile all keys to ensure the button pressed on
//keyboard matches the one on the event.

window.addEventListener('keyup', e => {
  let keyrows = document.querySelectorAll('.keyrow')
  let keys = []
  for (let i = 0; i < keyrows.length; i++){
    for (let j = 0; j < keyrows[i].children.length; j++){
      keys.push(keyrows[i].children[j]);
    }
  }
  for (let i = 0; i < keys.length; i++){
    if (e.key === keys[i].textContent){
      game.handleInteraction(keys[i]);
      console.log(keys[i])
    }
    }
  });

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', e => {
  game.handleInteraction(key)
  console.log(key)
    })
});
