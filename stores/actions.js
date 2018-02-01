export const new_game = () => ({
  type: 'NEW_GAME'
})


export const add_guess = (guess) => ({
  type: 'ADD_GUESS',
  payload:{
    guess
  }
})