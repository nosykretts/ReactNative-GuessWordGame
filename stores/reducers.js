const initialState = {
  words : ['jakarta', 'singapore', 'tokyo', 'seoul', 'london', 'california'],
  realWord: '',
  puzzle: '',
  turnsLeft: 5,
  charsUsed: [],
  gameStatus: ''
}

const reducers =  (state = initialState, action) => {
 const {words, realWord, puzzle, turnsLeft, charsUsed} = state
 switch (action.type){
   case 'NEW_GAME' :
      return {
        ...initialState,
        ...generateGame(words)
      }
   case 'ADD_GUESS' :
     const {guess} = action.payload
     return {
       ...state,
       turnsLeft: realWord.indexOf(guess) >= 0 ? turnsLeft : turnsLeft -1,
       charsUsed: [
         ...charsUsed,
         action.payload.guess
       ],
       gameStatus: realWord.indexOf(guess) >= 0 ? 'Good Guess' : 'Bad Guess',
       puzzle: puzzle.split('').map((c, i) => {
         return realWord[i] === guess ? guess : c
       }).join('')
     }
   default :
     return state
 }
}

function generateGame(words){
  const realWord = words[Math.floor(Math.random() * words.length) + 1]
  const alpha  = 'abcdefghijklmnopqrstuvwxyz'
  let count = 0
  const puzzle = realWord.split('').map(c => {
    const rand = Math.floor(Math.random() * 50) + 1
    const char = alpha[rand]
    if(char && count  < 3) {
      count++
      return '_'
    }else{
      return c
    }
  }).join('')

  return {
    realWord,
    puzzle
  }
}


export default reducers