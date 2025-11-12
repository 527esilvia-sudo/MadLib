/* 
  Mad Lib Starter (Beginner JS)

  GOAL:
  - Ask the user for several words using prompt()
  - Save each answer in a variable (use let or const)
  - Build a story string using a template literal (backticks) with ${variableName}
  - Put the finished story into the page by setting innerHTML on the element with id "madlib-output"

  IMPORTANT:
  - Do NOT use if/else or any other advanced JS yet.
  - Only variables, prompt(), strings, and innerHTML.
  - Write your own prompts and story!
*/

// Display story on the page


/* 1) CREATE VARIABLES 
   - Make one variable per word you need (e.g., a noun, a verb, an adjective, a place, a number, etc.)
   - Use prompt() to ask the user for each word.
   - EXAMPLE CATEGORIES (choose your own): noun1, adjective1, verbPast, place, animal, food
   - Name variables clearly so you remember what each one is for.
*/

// let ________ = prompt("Ask the user for ________");
// let ________ = prompt("Ask the user for ________");
// (Add as many as your story needs)

/* 2) BUILD YOUR STORY STRING
   - Use a template literal: it starts and ends with backticks (the ` key).
   - Insert variables with ${variableName} in your sentence.
   - Keep it fun! Make sure your story uses ALL the variables you collected.
*/

// let story = `Write your story here using ${_____} and ${_____} etc.`;

/* 3) DISPLAY THE STORY ON THE PAGE
   - Select the element with id "madlib-output" using document.getElementById(...)
   - Set its .innerHTML to your story variable from Step 2.
   - Optional: include simple <strong> or <em> tags inside your story string for emphasis.
*/

// document.getElementById("madlib-output").innerHTML = /* your story variable */ ;

/* 4) OPTIONAL POLISH
   - Add a title or intro line at the top of your story (still using the same innerHTML).
   - Use <br> tags inside your story string to control line breaks if you want multiple lines.
   - Keep your variable names, prompts, and story grammar consistent.
*/

/* 5) RUBRIC REMINDER (quick checklist)
   - Prompts: You ask for all required words with clear messages.
   - Variables: You use let/const with meaningful names.
   - Template Literals: You use backticks and ${} correctly.
   - Display: The story shows up clearly in #madlib-output.
   - Bootstrap: Don’t remove the .row/.col structure in index.html.
   - Comments: Explain each step in your code.
   - GitHub: Commit often with clear messages; publish on GitHub Pages.
*/
let userYear = prompt("Type a year")
// Asks user for a year and inputs answer within story using string interpolation
let userName = prompt("What is your name?")
// Asks user for their name and inputs answer within story using string interpolation
let userCelebrity = prompt("Name a celebrity")
// Asks user for a celebrity and inputs answer within story using string interpolation
let userVerb = prompt("Type a verb")
// Asks user for a year and inputs answer within story using string interpolation
let userPlanet = prompt("Name a planet")
// Asks user for a year and inputs answer within story using string interpolation
let userNumber = prompt("Type a number")
// Asks user for a year and inputs answer within story using string interpolation
let userThing = prompt("Something fluffy and cute")
// Asks user for a year and inputs answer within story using string interpolation
let userAdjective = prompt("Type an adjective")
// Asks user for a year and inputs answer within story using string interpolation
let userAdjective2 = prompt("Type another adjective")
// Asks user for a year and inputs answer within story using string interpolation
let userAdjective3 = prompt("Type a third adjective")
// Asks user for a year and inputs answer within story using string interpolation
let userState = prompt("Type a state")
// Asks user for a year and inputs answer within story using string interpolation
let userShip = prompt("Type something you would name a robot")
// Asks user for a year and inputs answer within story using string interpolation
let userNumber2 = prompt("Type a number")
// Asks user for a year and inputs answer within story using string interpolation
let userJob = prompt ("Type an upstanding profession")
// Asks user for a year and inputs answer within story using string interpolation
let userNumber3 = prompt ("Type another number")
// Asks user for a year and inputs answer within story using string interpolation
let userAdjective4 = prompt ("Type an adjective")
// Asks user for a year and inputs answer within story using string interpolation

let story = `
On August 26, ${userYear}, ${userName} and ${userCelebrity} were the first to ${userVerb} on ${userPlanet}. 
It took ${userName} and ${userCelebrity} a long time to get there — ${userNumber} days — because there was a horde of ${userThing}s attacking them. 
When they arrived, they looked around and saw ${userThing}s everywhere and thought ${userPlanet} looked ${userAdjective}. 
" ${userName} then said${userAdjective2} step for man, one ${userAdjective3} leap for mankind," . 
Then ${userName} and ${userCelebrity} returned home to ${userState} on their spaceship, the ${userShip} 500. 
It took only ${userNumber2} days to get home, where ${userJob}s cheered for ${userNumber3} minutes. 
They were remembered for their ${userAdjective4} discoveries.
`;
document.getElementById("madlib-output").innerHTML = story;