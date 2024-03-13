// created a function that would intake the prompt
const order = (flavorsOrder) => {
  // had to declare an empty object so that we can put the input in it
  let finalOrder = {};
  // made a for loop to run throught the prompt
  for(let i = 0; i < flavorsOrder.length; i++){
    // this will declare the individual answers as inputFlavors
    const inputFlavor = flavorsOrder[i];
    // this if statement will recognize if the same value was entered in the prompt. this took me a ton of trial and error/googling to figure out lol
    if(finalOrder[inputFlavor]){
      // this adds a tally to the flavor every time it was entered in prompt
      finalOrder[inputFlavor]++;
    } 
    // this will make it so that if the flavor is entered only one time it is 1
    else {
      finalOrder[inputFlavor] = 1;
    }
  }
  // this returns the new object with its contents
  return finalOrder
}