  // Write a function that takes an array of objects with `age` and `name` properties e.g.
  //
  // var people =[{ age: 30, name: "Peter" }, { age: 34, name: "Jon" }, { age: 30, name: "Catherine" }]
  // q
  // and returns an object mapping from `age` to an array of corresponding `names`, e.g.
  //
  // { "30": ["Peter", "Catherine"], "34": ["Jon"] }
  //
  //   var object1 = {};
  //    for (var i = 0;i < people.length;i++){
  //      var obj = people[i]
  //      console.log(object1[obj.age] = obj.name)
  //    }
  //
  //    object1 += people[i]
  //    console.log(object1);
   }

// array of objects
// each has key value
// move each key to a single object
// move its corresponding value to be with it

// check if object.value is within new blank object
// if it is not, put in there, to.string

// var people =[{ age: 30, name: "Peter" }, { age: 34, name: "Jon" }, { age: 30, name: "Catherine" }]
//
// var mapNamesToAges = function (arrayOfObjects) {
//   var answer = {}
//
//   arrayOfObjects.forEach(function (object) {
//     if (!(object["age"] in answer)){
//       answer[object["age"]] = []
//     }
//    answer[object["age"]].push(object["name"])
//   })
//
//   console.log(answer);
// }
//
//   mapNamesToAges(people)
//
//
//   var arr = {}
//
//   for (var i = 0;i < people.lengthl;i++){
//
//   }

// function movePeople(myObj){
// var object1 = {};
//
// for (var i = 0; i < myObj.length; i++) {
//   var index = myObj[i].value
//   console.log(index)
//   if (object1[index]) {
//     if (typeof object1[index] === 'string') {
//       // change from string to array of strings
//       object1[index] = [object1[index], myObj[i].key]
//     } else {
//       // add to the array
//       object1[index].push(myObj[i].key)
//     }
//   } else {
//     object1[index] = myObj[i].key
//   }
//   }
// movePeople([{ age: 30, name: "Peter" }, { age: 34, name: "Jon" }, { age: 30, name: "Catherine" }])

function movePeople2(arr){
  var object1 = {};
  for (var i = 0;i < arr.length;i++){
    var index = arr[i].value
    console.log(index)
  }
}
movePeople2([{ age: 30, name: "Peter" }, { age: 34, name: "Jon" }, { age: 30, name: "Catherine" }]);
