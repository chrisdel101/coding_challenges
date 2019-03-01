// var result = 0;
// function numDig(number){
//   while (number){
//   number = number/10
//   console.log(number);
//     result++
// }
// console.log(result)
// }
// numDig(435);
// ******************Seeing that counter works**************
// var array = [2, 2, 1, 0, 1];
// var counter = array[0];
// for(var i =0;i <= array.length;i++){
//   if(i < 5){
//      counter++
//
//   }
//   console.log(counter);
// }

// var prototypeType = typeof Object.prototype;
// console.log(prototypeType);
//
// // now let's examine it!
// var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
// console.log(hasOwn);

// var goose = 10
// var players = ["gary", "joe", "sam"]
//
// for (var i = 0;i < goose;i++){
//   console.log(players[i])
// }


// function lookUpProfile(firstName, prop){
// // Only change code below this line
//   for(var i = 0;i < contacts.length;i++){
//     if ((contacts[i].hasOwnProperty(firstName) && (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i].firstName && contacts[i].prop
//       } else if (!(contacts[i].hasOwnProperty(firstName)){
//        return "No such contact";
//      } else if (!(contacts[i].hasOwnProperty(prop)){
//        return "No such property"
//      }
//    }
//  }

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["Javascript", "Gaming", "Foxes"]
//     }
// ];

// (contacts[1].hasOwnProperty(firstName) && contacts[1].hasOwnProperty(prop))

// function lookUpProfile(firstName, prop){
//   for(var i = 0;i< contacts.length;i++){
//     var current_contact = contacts[i]
// if ((contacts[i].hasOwnProperty(firstName) && contacts[i].hasOwnProperty(prop)) {
//         console.log(true)
//      } else {
//        console.log(false)



//      return (contacts[i].firstName && contacts[i].prop)
//  } else if  (!(contacts[i].hasOwnProperty(firstName)) {
//     return "No such contact";
//  } else if (!(contacts[i].hasOwnProperty(prop)){
//         return "No such property"
//      }
//    }
// }


// Call & apply////////////////////////////
//
// Takes an object and binds it to a functions this param
// var speak = function(what){
//   console.log(this.better)
// }
//
// var saySomething =  {
//   normal:"not through",
//   better:"through!"
// }
//
// speak.call(saySomething); =>through
// speak.call(saySomething, saySomething.normal); = speak takes in what param => not through
//
//
// speak.apply(saySomething, ['apply takes an arary']) = > ''


// argumements param////////////////////////////

// allows function to take any number of arguments
//
// var plus = function(){
//   var sum = 0;
// // decremental for loop
//   for(var i = arguments.length -1; i >= 0;i--){
//     sum += arguments[i];
//     console.log(arguments[i])
//   }
//   return sum;
// }
//
// console.log(plus(2,2))


//closures////////////////////////////

// Inner function does not have dogName but grabs from outside one
// function myDog(){
//   var dogName = "Buddy"
//   console.log(`${dogName} says woof`)
//   function otherDog(){
//     console.log(`${dogName} says woof`)
//   }
//   otherDog();
// }
// myDog()

// function myDog(){
//   var dogName = 'Fido'
// }
//
// myDog();
// console.log(`${dogname} says woof`)

//modules////////////////////////////


// calling return with an object, inside a closed function


// these can be called in an html page like chris.speak
// var chris = (function(){
//
//   return {
//     speak:function(){
//       console.log('test')
//     }
//   }
// })();

//////////////REDUCE////////////////////////

// EXAMPLE ONE- Adding up numbers
//
// // Need a reducer function and an intital value
// var data = [20,13,54];
//
// // starts with 0, and adds item to the accumulator each time
// var reducer = function(accumulator, item){
//   return accumulator + item;
// }
//
// var initialValue = 0;
//
// var total = data.reduce(reducer, initialValue)
// console.log(total)
//
// EXAMPLE TWO- combing instances of items together
//
// In this case we need a blank object; for object we need tally[vote], for number accumulator we can use tally.vote
//
// var votes = ["angular", "angular", "angular", "react", "react", "ember", "vanilla"];
//
// var initialValue = {};
//
// var reducer = function(tally, vote) {
// 	if (!tally[vote]) {
// 		tally[vote] = 1;
// 	} else {
// 		tally[vote] = tally[vote] + 1;
// 	}
// 	return tally;
// }
// var result = votes.reduce(reducer, initialValue);
//
// console.log(result);
//
// FILTER///////////////////////////

// function listInStock(res){
//   var inStock = data.filter(function(item){
//       return item.avail === "In Stock;"
//     });
//   res.end(JSON.stringify(inStock))
// }
//
// var data = "blah blah"
// listInStock("text")
//
// function listInStock(res) {
// 	var inStock = data.filter(function(item){
// 	return item.avail === "In stock";
// 	});
//   res.end(JSON.stringify(inStock));
//
// }


// PROMISES///////////////////////////

// var d = new Promise((resolve, reject) => {
// Basic true of false to get back success/error
//   // if (true){//success
//   if (false) {//error
//     resolve('hello world')
//   } else {
//     reject('rejected')
//   }
// });

// 2 second delat before the promise will fire- setTimeout()
//   setTimeout(() => {
//     // if ( true){//success
//     if (false) {//error
//       resolve('hello world')
//     } else {
//       reject('rejected')
//     }
//   }, 2000);
// });

// error can be passed into the .then()
// d.then((data) => console.log('success: ', data), (error) => { console.error("new error msg")
// });

// error can be passed into thte .then
// d.catch((error) => console.error('error: ', error));

// both commands can be chained
// d.then((data) => console.log('success: ', data).catch((error) => console.error('error: ', error))

// CONACT ALL- takes in a nested array
// To loop through nexted arrays with a single method

// var arrs = [
// [{
//     price:2938,
//     symbol:"xyz"
//   },
//   {
//     price:4200,
//     symbol:"zyx"
//   }],
// [{
//     price:2938,
//     symbol:"abd"
//   },
//   {
//     price:4200,
//     symbol:"cba"
//   }]
// ]

//
// Array.prototype.concatAll = function(){
// 	let results = []
// 	this.forEach(function(subarray){
// 	   subarray.forEach(function(item){
// 	      results.push(item)
//       });
//     })
// return results
// }
//
// var flatten = arrs.concatAll();
//
// console.log(flatten)

// -----------ADDING ARRAYS------
// to start over at the beginning we need slice, then flatten, then sum

// var args = [1,2,3]
// var total = []
// for(var i = 0;i < args.length;i++){
//   var current = args.slice(0,i +1)
//   total.push(current)
// }
// console.log(total)
// let names = [1, 2, 2, 5, 6, 4, 4, 1, 1, 2, 2]
//
// var countedNums = names.reduce(function(allNums, num) {
// 	if (num in allNums) {
// 		allNums[num]++;
// 	} else {
// 		allNums[num] = 1;
// 	}
// 	return allNums;
// }, {});
// console.log(countedNums)

// let tuples = [ [ 1 ], [ 1, 2 ], [ 1, 2, 2 ], [ 2 ], [ 2, 2 ], [ 2 ] ]
//
// for (var i = 0; i < tuples.length; i++) {
//     let staticVal = tuples[i]
//     let j = 0
//     console.log('j', j)
//     while(j < tuples.length){
//         console.log('inner', tuples[j])
//         j++
//     }
//     console.log('reset')
// }

// let counter = 0
//
// function arrIndex(arrs) {
// 	let indexOfLongest = arrs[arrs.length - 1].length - 1 - counter
// 	arrs.every(arr => arr.reverse())
// 	let k = 0
// 	while(k < 4) {
// 		console.log('IND', indexOfLongest)
// 		// console.log(arrs)
// 		// console.log('RUN')
// 		for(var i = arrs.length - 1; i >= 0; i--) {
// 			// console.log(i)
// 			let arrsIn = arrs.length - counter
//
// 			for(var j = arrs[i].length - 1; j >= arrs[i].length - 1; j--) {
// 				// console.log('arrsi', arrs[i])
// 				// console.log(' before j', arrs[j])
// 				if(arrs[i][indexOfLongest]) {
// 					let sliced = arrs[i].splice(arrs[j].length - 1, 1)
// 					console.log('sliced', sliced[0])
// 					break
// 				} else {
// 					console.log(arrs[i][j])
// 				}
// 			}
// 			counter++
// 		}
// 		indexOfLongest = indexOfLongest - 1
// 		k++
// 	}
// }
// console.log(arrIndex([
// 	[3],
// 	[7, 4],
// 	[2, 4, 6],
// 	[8, 5, 9, 3]
// ]))
function getAllIndexes(arrs) {
	let negativeDiff
	let postiveDiff
	let state = {
		activeRow: 0
	}
	let k = 0
	let store = []
	while(k < 6) {
		let tempArr = []
		for(var i = arrs.length - 1; i >= 0; i--) {
			if(Object.entries(state).length === 1) {
				for(var l = arrs.length - 1; l >= 0; l--) {
					state[`row${l}`] = {
						length: arrs[l].length,
						index: 0,
						name: `row${l}`
					}
				}
			}

			// create state object that persists
			// console.log(state[`row${i}`])
			// console.log(state[`row${i}`].index)
			// console.log(arrs[i][state[`row${i}`].index])
			// console.log('active', state.activeRow)
			if(i !== state.activeRow) {
				// console.log('i', i)
				// console.log('normal', arrs[i][state[`row${i}`].index])
				tempArr.push(arrs[i][state[`row${i}`].index])
				// if active
			} else if(i === state.activeRow) {
				// console.log('equal', state.activeRow)
				// console.log('active', `row${i}`)
				// // tempArr.push(arrs[i][state[`row${i}`].index])
				// console.log('curent', state[`row${i}`])
				// console.log('next', state[`row${i+1}`])
				// console.log('diff', ((state[`row${i}`].index) + (state[`row${i+1}`].index)))
				console.log('ROW', state[`row${i}`])
				// if is it end of row- but indexes do not work
				if(((state[`row${i}`].index) - (state[`row${i+1}`].index)) < -1 || ((state[`row${i}`].index) + (state[`row${i+1}`].index)) > 1) {
					console.log('no push. Just shift')
					state.activeRow++
					break
					// if is not end of row- but indexes do not work
				} else if(!arrs[i][state[`row${i}`].index + 1]) {
					// if next invalid push and then increase active row
					console.log('push and shift')
					tempArr.push(arrs[i][state[`row${i}`].index])
					state.activeRow++
					// if more than two ahead of next row

				} else {
					// console.log('curent', state[`row${i}`])
					// console.log('next', state[`row${i+1}`])
					// console.log('below', state[`row${i}`].index + state[`row${i+1}`].index)
					console.log('curent', state[`row${i}`])
					console.log('next', state[`row${i+1}`])
					tempArr.push(arrs[i][state[`row${i}`].index])

					state[`row${i}`].index++
				}
			}


			// if(i === state.activeRow && state[`row${i}`].index === state[`row${i}`].length - 1) {
			// 	console.log('fired')
			// 	state.activeRow++
			//
			// }
		}

		// console.log('Raised Index', state[`row${i}`].index)
		k++
		store.push(tempArr)
	}
	console.log(store)
	console.log(state)

}

getAllIndexes(

	[
		[3],
		[7, 4],
		[2, 4, 6],
		[8, 5, 9, 3],
		[5, 13, 10, 6, 8],
		// ]))
	]
)