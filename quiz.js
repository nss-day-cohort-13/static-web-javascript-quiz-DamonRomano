//


// Create a tree function that should build a pine tree out of a character
// // in the Chrome dev tools console. It accepts a single object as an argument.
// // The object should have two key/value pairs.

// // A key that specifies the height of the pine tree.
// // The value for the height of the tree should be from user input in a
// //        <input type="text"> field in the DOM.
// // A key that specifies which character to use to build the pine tree.
// // The character to use should be from user input in a <input type="text">
// //       field in the DOM.
// // Once the user enters in a number, and a character, the user can either then
// //       just press the enter key (as long as the cursor is in one of the input fields),
//       or click a button that is labeled "Grow your tree" and the tree should be shown
//       in the console. This requires you to add an event listener to the button,
//       as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses
//       the enter key, or presses the button, then display an alert stating that
//       both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7,
//       and use the asterisk character.

//       *
//      ***
//     *****
//    *******
//   *********
// *************


//These are vars that grab the three interactables in the HTML.
var submit =  document.getElementById("submit");
var treeTall = document.getElementById("pineTreeHeight");
var treeKind = document.getElementById("pineTreeCharacter");
//This here is the var with the single object that, in turn, contains the two key/value pairs.
var pineTree = {
  //Set these values to empty strings because the values will be grabbed dynamically from the first two lines of the grabRows function.
  treeTall: "",
  treeKind: ""
}
var numChar = 1 //increment the wateveritis by 2 each line
var numSpaces = pineTree.treeTall - 1  //decrement empty spaces by 1 each line
//Those two, taken together, act as a kind of text-align: center that makes the rows
//line up and gives us the tree shape.

submit.addEventListener("click", grabRows)
treeTall.addEventListener("keydown", checkEnter)
treeKind.addEventListener("keydown", checkEnter)

//So, each key on a keyboard has an assigned " which " number.
//The "which" of the Enter/Return key is 13. Always.
//This func says, "Hey, listen for when which is exactly equivalent to 13,
//i.e.- when the Enter key is pressed, call the grabRows function."
function checkEnter(event) {
  if (event.which === 13) {
    grabRows();
  }
}

//This func starts by saying that, when we look the two keys in the object (above),
//what we really want are the values inside those keys.
function grabRows() {
  pineTree.treeTall = treeTall.value;
  pineTree.treeKind = treeKind.value;
//Now we'll have a conditional saying, if the value of either user-defined variable
//hasn't been entered, then pop up an alert box telling the user to fill both fields.
  if (pineTree.treeTall === "" || pineTree.treeKind === "") {
    alert ("FUCK YOU. ENter ALL THE FIELDS Douchez");
//...but in all other cases, i.e.- when all fields have been filled,
//then set the initial values of the characters and spaces
//and run the pineTree function.
  } else {
    numChar = 1;
    numSpaces = pineTree.treeTall - 1;
    showObject(pineTree);
  }
}

//This here is the "main" function. It has a for loop that starts by saying that
//we have an incrementer initially set to zero;
//as long as that incrementer has a value that is
//smaller than the value of the height (in rows) of the tree;
//increment (add to) the incrementer by one.
function showObject(pineTree) {
  for (var i = 0; i < pineTree.treeTall; i++){
    var dieTreezDie = ""
//Within that main for loop, there are two others. This first "sub-loop" introduces
//another incrementer, d, that increments (counts up) by one every time the loop runs,
//for as long as the incrementer has a value less than the number of spaces in the
//string, where each string is a line on the console display.
    for (var d = 0; d < numSpaces; d++){
      dieTreezDie = dieTreezDie + " ";
    }
//This second for "sub-loop" introduces a third incrementer, f, that decrements
//(counts down) the number of characters in each line ("string") by two every time
//through the loop.
    for (var f = 0; f < numChar; f++){
      dieTreezDie = dieTreezDie + pineTree.treeKind;
    }
//The net effect of those three loops is that, when the function runs,
//the big loop generates one row for each row in the tree the user wants.
//And in each subsequent row generated, the number of characters will grow by two
//and the number of spaces will decrease by one.

//Now, we console.log that, so that it will display to the console.
    console.log ( dieTreezDie );
    numSpaces = numSpaces - 1;
    numChar = numChar + 2;
//AFTER the loops run, we decrement the number of spaces by one
//and increment the number of characters by two.  Now the reason that we want these
//to go in after the console.log is that, if we list them AHEAD of the small loops,
//we'll end up with a display that cuts off parts of the tree; it won't be the right
//length because it won't start with the right value.  ...it will have decremented
//before the log.  Of course, if you list them before the big loop, it won't run at all.

  }
};






















8

