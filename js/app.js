

//initalizes new game object upon page load.
let game = new Game;

//click event listener that calls handleInteraction method, and clears out changes
//caused by interacting w game, before starting new game.
document.getElementById('btn__reset').addEventListener('click', (e) => {
  if (game.missed === 5 || game.checkforWin()){
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
     //resets all heart images to liveHeart
     let lives = document.getElementsByTagName('img');
     for (let i = 0; i < lives.length; i++){
       lives[i].src = "images/liveHeart.png"
     }
     game.startGame();
 } else {
   game.startGame();
 }
});

//click and keyup event listeners that call handleInteraction method when interacting
//w game. 

window.addEventListener('keyup', e => {
  let ul = document.getElementById('phrase').firstElementChild;
  let lis = []
  for (let i = 0; i < ul.children.length; i++){
     lis.push(ul.children[i])
  }
  for (let i = 0; i < lis.length; i++){
    if (e.key === lis[i].textContent){
      game.handleInteraction(e)
      console.log(e.key)
    }
  }
});

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', e => {
      //console.log(e.target);
      game.handleInteraction(e)
    })
});
