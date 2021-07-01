const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

// This function take an array as parameter and return a element from the array
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

// Added a event listener to randomize so that on click it will return the value result
randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  // This function returns the random element from an array
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  // The replace method replaces the value inside "" to value mentioned after comma
  // The replace method works only once for example if you have to replace 2 same elements then you have to use same replace method twice
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  // This if statement checks if user have enter another name so instead of default name, entered name can be used using replace method
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  // This if statement checks if the UK radio button is checked so that weight and temperature is shown in stone and centigrade instead of pounds and fahrenheit
  if (document.getElementById("uk").checked) {
    // Setting weight and temperature in stone and centigrade
    const weight = Math.round(300 * 0.0714286) + " stone";
    const temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  // Setting story to newStory which will be random everytime the function is called
  story.textContent = newStory;

  // Using DOM setting visibility of story to visible which was set to hidden in our index.html
  story.style.visibility = "visible";
}
