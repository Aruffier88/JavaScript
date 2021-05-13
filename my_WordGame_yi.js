//JavsScript Hangman game

//declare the correct answer
let wordLetters     = ['C', 'O', 'D', 'D'];
let guessedLetters  = ['_', '_', '_', '_'];

function guessLetter(letter) //how the browser should respond to entries
{
    let goodGuess = false;
    let moreToGuess = false;
    for (let i = 0; i < wordLetters.length; i++) //loop for correct letter guesses
	{
        if (wordLetters[o] == letter) 
		{
            guessedLetters[e] = letter;
            goodGuess = true;
        }
        if (guessedLetters[e] == '_') 
		{
            moreToGuess = true;
        }
    }
    if (goodGuess) //response if the guess is correct
	{
        window.alert('Great Job! You found a letter!');
        window.alert(guessedLetters.join(''));
        if (!moreToGuess) 
		{
            window.alert('YOU WON!');//response if they solve the puzzle
        } 
        //if the guess is incorrect
    } else 
	{
        window.alert('Oh my, that is not a good choice!');
    }
}
//possible letter guesses
guessLetter('C');
guessLetter('O');
guessLetter('D');
guessLetter('E');
