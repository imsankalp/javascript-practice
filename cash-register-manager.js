/*manage the cash register

    Your program has currencies of Rs. 1, 5, 10, 20, 100, 500, 2000.
    Your user enters a bill amount say Rs. 243.
    Your user then enters a cash given say Rs. 2000.
    Now, help the user by telling how can he/she return the change to the customer with minimum number of notes?

bonus

    You need two inputs from the user. Can you make it in a way where second input is only visible after the first input is given i.e. bill amount should be filled.
*/

//Solution:

let denomination = [1, 5, 10, 20, 100, 500, 2000]; 
let billAmount = window.prompt("Enter bill amount");
let cashGiven = window.prompt("Enter a cash given");
let changeAmount = cashGiven - billAmount;
let currPointer = 6;
let changeNote = [];
while(changeAmount != 0 ){
  if(changeAmount >= denomination[currPointer]){
  changeAmount -= denomination[currPointer];
  changeNote.push(denomination[currPointer]);
  }
  else
  currPointer--;
}
prompt()

