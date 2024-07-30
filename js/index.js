/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine stampa in console nomecognomecolorepreferito21 
*/

// Analyzing phase
/*
1.Retrieve the element of interest from the DOM
2.Create a constant variable (string) to save '21'
3.Ask the user for the firstName and save the answer in a const variable
4.Ask the user for the lastName and save the answer in a const variable
5.Ask the user for the favoriteColor and save the answer in a const variable
6.Print to the console this result: firstNamelastNamefavoriteColor21
7.Bonus: Insert the result in DOM element.
*/

// --- Preparation phase

// Retrieve the p element
const resultElement = document.getElementById("password");
console.log(resultElement);
// Create const variable for '21'
const twentyOne = "21";

// ---- Data collection phase

// Ask the user for the firstName
const firstName = prompt("Your First Name please?", "orsol");
console.log(firstName);
// Ask the user for the firstName
const lastName = prompt("Your Last Name please?", "filaj");
console.log(lastName);
// Ask the user for the favoriteColor
const favoriteColor = prompt("Your Last Name please?", "lightblue");
console.log(favoriteColor);

// ---- Processing phase

// Generate the new password
const newPassword = firstName + lastName + favoriteColor + twentyOne;

// Print to the console newPassword
console.log(newPassword);

//BONUS. Insert the newPassword in DOM elemnt
resultElement.innerText = newPassword;
