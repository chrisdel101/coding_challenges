function lastChair(N) {
  let chairs = [];
  for (let i = 0; i < N; i++) {
    chairs.push("");
  }
  let currentChair = 0
  for (let i = 0; i <= N; i++) {
    // insert into currentChair
    chairs[currentChair] = i+1
    // check left and right of i - N-1 spots
    let right  = N - currentChair
    let left = N - right - currentChair 
    if(right > left){
        // start at farthest 
        for (let j = N; j >= N; j--) {
            // find furthest spot
            if(!chairs[j]) {
               currentChair = j
               break
            }
        }
    } else {

    }
  }
  
  console.log(chairs);
}

lastChair(10);
// 1 +N, N-5 N-3, N-7, N-
1, 10, 5, 7, 3, 8, 2, 4, 6, 9;

// let distance = 0;
//   let current = 0
//   let chairs  = []
//   for (let i = 0; i < N; i++) {
//     chairs.push({[i + 1]: ''})
//   }
//   for (let i = 0; i < N; i++) {

//   }
//   console.log(chairs);
