function solution(A){
    //sort
    A = A.sort(function(a,b) { return a - b; });

    for (var i = 1; i < A.length; i++) {
        let sum = A[i] - A[i -1]
        // console.log(sum)
        if(A[i] - A[i -1] != 1)
            return 0
        }
         return 1

    }
    // -fails on double of the same
    // -fails on single



// --giveN solution---------
// function solution(A) {
//     let checkNum = []
//     for (let i = 1; i <= A.length; i++) {
//         console.log(checkNum[i])
//     }
//     for(a of A){
//         console.log(checkNum[a])
//     }
//     for (let i = 1; i <= A.length; i++) {
//         if (checkNum[i]){
//             return 0
//         }
//     }
//     return 1
// }

solution([2,3,4,4,6])


// Cannot get to pass
// function solution(arr){
// 	if(arr.length === 1){
// 		return arr[0]
// 	}
// 	if(arr.length === 0){
// 		return 1
// 	}
// 	arr = arr.sort((a, b) => {
// 		return a - b
// 	})
// // 	console.log(arr)
//
// 	let intervals = []
//     for(var i = arr.length -1; i >= 0; i--){
//     // 	console.log(i)
//         let current = arr[i]
//     // console.log('current', current)
//         let previous = arr[i -1]
//     // console.log('previous', previous)
//         if(!current || !previous){
// //         stop it from hitting the undefined at the end
//             continue
//         }
// // 		make array of intervals
//         let interval = current - previous
//         intervals.push(interval)
//     }
// // 	make it face the right way
// 	intervals = intervals.reverse()
// 	let gap
// 	let bottomGapIndex
// 	let solidInterval
// // 	console.log('intervals', intervals)
// 	for(let j = 0; j < intervals.length; j++){
//
// 		if(intervals[j] === intervals[j+1]){
// 			solidInterval = intervals[j]
// 		console.log('solid', solidInterval)
// 		}
// // 		console.log('j', intervals[j])
// // 		console.log('j +1', intervals[j+1])
// 		if(intervals[j] !== intervals[j+1]){
//
// // 			console.log('NOT', intervals[j+1])
// // 			size of the gap
// 			gap = intervals[j+1]
// // 			console.log('gap inner', gap )
// // 			val at the bottom index of the gap
// 			bottomGapIndex = intervals.indexOf(gap)
// 			break
// 		}
//
// 	}
// 	if(!gap){
// // 		no gap
// 		return 1
// 	}
// // 	console.log('TG', bottomGapIndex)
// 	let bottomVal = arr[bottomGapIndex]
// 	let topVal = arr[bottomGapIndex +1]
// 	let missing = topVal - solidInterval
// 	return missing
//
// }
