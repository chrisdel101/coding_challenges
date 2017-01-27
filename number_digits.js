var counter = 0;
function numDig(number){
  while (number){
    number = Math.floor(number/10);
    counter++;
  }
  console.log(counter);
}
    // numDig(-1)

    numDig(300);
