// GUESS THAT NUMBER
// Message to be used throughout the file/project
const enterNumText = `Please enter a number greater than zero`;

// For restarting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

// For storing the number to be guessed
let randomNum;

// For storing the number of attempts that the user has left
let attempts;

// For storing the user's guess
let guess;

// For storing user's response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`);

// Game restarts as long as restartGame has value of true
while (restartGame){
    // Asks user to enter a number to set the upper bound for the random number that will be created (AKA Number to be guessed).
    rangeNum = prompt(`Please enter a maximum number for the range:`);
  
    // Using parseInt to attempt to convert the user's response into a number value (NOTE: The value returned from a prompt is a string value. Also, if the value cannot be converted then the value returned will be NaN (Not A Number))
    rangeNum = parseInt(rangeNum);
    
  // Verifies the user's entry for the range number is a number greater than zero (NOTE: NaN has a default boolean value of false. Also, all numbers, positive and negative, have a default boolean value of true, except for zero which has a default boolean value of false.) 
  while (!rangeNum || rangeNum < 1){
    rangeNum = prompt(enterNumText);
    rangeNum = parseInt(rangeNum);
  }
  // Creates the random number (AKA Number to be guessed by the user) using the range number entered by the user
  randomNum = Math.floor(Math.random() * rangeNum) + 1;


  break;
