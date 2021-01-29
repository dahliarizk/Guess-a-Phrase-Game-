

let game;

document.getElementById('btn__reset').addEventListener('click', (e) => {
   game = new Game;
   game.startGame();
})

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', e => {
      console.log(e.target);
      game.handleInteraction(e)

  })
});
