function findSolution(target){
  function find(start, history){
    if (start == target){
      return history;
    } else if (start > history) {
      return null;
    } else {
      return
      find(start + 5, "(" + history + " + 5)") ||
      find(start * 3, "(" + history + " * 3)");
    }
  }
  console.log(find(1, "1"))
}
