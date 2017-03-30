var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true,  age: 65, uid: 216  },
  { id: 5, username: "E", active: true,  age: 80, uid: 18   },
  { id: 6, username: "E", active: true,  age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
];

// Sort the people by 'uid'

var getPeoplesUid = _.sortBy(people, function(byUid) {return byUid.uid});
console.log(getPeoplesUid);


// Group the random words by the lower case version of their first letter

var randomisedByfirstLowerCaseLetter = (words, function(word) {
  return word[0].toLowerCase();
});
console.log(randomisedByfirstLowerCaseLetter);

// Check to see if all the words have more than 3 characters

var wordsLength = _.every(words, function(word) {
  return word.length > 3;
});
console.log(wordsLength);

// Check if some words are over twenty characters long

var wordsLongestWord = _.some(words, function(word) {
  return word.length > 20;
});
console.log(wordsLongestWord);

// Get an array of all of the uids in people

var allPeopleUid = _.pluck(people, "uid");
console.log(allPeopleUid)

// Find the person with the highest uid

var highestUid = _.max(people, "uid");
console.log(highestUid);

// Return an object that says how many even numbers and how many odd numbers there are in numbers

var OddEvenNums = _.countBy(numbers, function(number) {
  return number % 2 === 0 ? "even" : "odd";
})
console.log(OddEvenNums);

// Get three random numbers out of numbers

var getThreeNums = _.sample(numbers, 3);
console.log(getThreeNums);
