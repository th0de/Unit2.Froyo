////////////////////////////////////////////////////////////////////////////////
//    A visitor receives a prompt upon opening the website to enter a         //
//  list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla, //
//  strawberry,coffee,coffee. When they view the browser console,             //
//  they observe a table listing how many of each flavor they have ordered.   // 
//  In this case, they will be able to observe that they have ordered three   //
//    vanilla, two coffee, and one strawberry froyo.                          //
////////////////////////////////////////////////////////////////////////////////

// FUll PSUEDOCODE
// create a function that gives a prompt upon open
// let that prompt take from an array 
// let the array include vanilla, strawberry and coffee
// creat an input/submission box
// let that submission box be listed
// let the list be seperated by comas
// let the list be 3 paramaters (or comas) long
// create a return function for input of the submission box
// let this return be a table 
// let the table display the return of the users input
// link this function to the parameters of the first function. 



// create a function that gives a prompt upon open

const froyoFlavorbox = prompt ("Enter what list of Froyo flavors you would like!");

//create an array of 3 froyo flavors, vanilla, strawberry and coffeee

//const froyoFlavors = [`vanilla`, `strawberry`, `coffee`,];

const order = (froyoOrder) => {

  
  let finalOrder = {};
  
  for (let i = 0; i < froyoOrder.length; i++){
  
    const inputFlavor= froyoOrder [i];
  
    if(finalOrder[inputFlavor]){
      finalOrder[inputFlavor] ++}
  
      else { 
        finalOrder[inputFlavor] = 1;
    } 
  }
  return  finalOrder
}

console.table(order(flavorSelect));


