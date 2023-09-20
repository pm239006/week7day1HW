console.log("priscilla")


//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/
let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."
  
let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]
console.log(dogNames)

    function findTheDogNames(string, dogNames) {
        let matchedName = null;
        for (let i = 0; i < dogNames.length; i++) {
          const dogName = dogNames[i];
          if (string.includes(dogName)) {
            matchedName = dogName;
            console.log("Matched " + matchedName);
          }
        }
      }
      findTheDogNames(dogString, dogNames);

    console.log(dogNames)
    // return "Matched ${dogName}"

    // else {
    //     console.log('No Matches')
    // }






    // function findDogNames(string, names) {
    //     let foundDog = false
    //     let foundCat = false
      
    //     for (let i = 0; i < names.length; i++) {
    //       if (string.includes(names[i])) {
    //         if (names[i] === "Sassy") {
    //           foundCat = true
    //         } else {
    //           foundDog = true
    //           console.log(`Matched ${names[i]}`)
    //         }
    //  




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/


// arr == ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

function replace(arr) {
    for (let i = 0; i < arr.length; i += 2) {
      console.log(arr.splice(i, 1, "even index"));
    }
    return(arr)
    };
 console.log(replace(arr));