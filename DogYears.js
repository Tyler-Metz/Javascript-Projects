// My Name
let myName = 'Tyler'

// My Age In Dog Years
let myAgeInDogYears = 0

// Later Years
let laterYears = 0

// Adult Age
let myAge = 24;

// Child Age
let earlyYears = 2;

// Subtracting 2 from myAge and reassigning it to laterYears.
// After subtracting by 2, multiply laterYears by 4.
// Combining earlyYears and laterYears makes myAgeInDogYears.
function mathAge() {
    earlyYears *= 10.5
    laterYears = myAge - 2
    laterYears *= 4
    myAgeInDogYears = earlyYears + laterYears
  return [earlyYears, laterYears, myAgeInDogYears]
}

mathAge()

// Returned a string with all lowercase letters using a built in method.
myName = myName.toLowerCase()

console.log(myAge, earlyYears, laterYears, myAgeInDogYears)

// Using String Interpolation, stringed 3 variables together in a sentence.
console.log('My name is ' + myName + '. I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.')