

// def duck_duck_goose(players, goose){
//
// }

// var players = (["a","b", "c","d"]);
// var goose  = 3;
//
// for(var i = 0;i <= goose;i++){
// console.log(i)
//   for (var k = 0; k)
//   if (k >= players.length){
//     k = 0;
//     console.log(k);
//     k++;
//   }
// }

// i will continue to loop as long as goose if valid
// k will continue to the end of the length and then reset to zero and start again.
// function duck_duck_goose(players, goose){
//   var arr = []
//   var player_counter = 0;
//   var goose_counter = 0;
//   for (current_val = 0; current < goose; current_val++){
//     player_counter++
//     arr.push()
//     if (player_counter > players){
//       player_counter = 0
//     }
//   }
// }

// function duck_duck_goose(players, goose){
//  var i = 0
//   while (i >= goose){
//     var answer = players.map(function(current_player){
//       console.log(current_player)
//     })
//     console.log(i)
//     i++
//   }
// }

// function duck_duck_goose(players, goose){
//   for (var i = 0; i <= goose; i++) {
//     console.log(i)
//     for (var j = 0; j < players.length; j++) {
//       // if (j <= players.length){
//       console.log(players[j])
//         j = 0
//
//       // }
//     }
//   }
// }
//
// console.log(duck_duck_goose(["gary", "joe", "sam", "sara", "tony"],7))
//
//
//
// goose.times do |i|
// #   puts players[i % players.length]
// # end


// var goose = 8;
// var players = ["gary", "joe", "sam", "sara", "tony"];

////////best workin array version//////
function duck_duck_goose(players,goose){
  var arr = [];
  var goose_index = 0;
  var player_index = 0;
  while(goose){
    goose--
    arr.push(players[player_index])
    if (player_index >= players.length){
      player_index = 0
    }
    player_index++
    goose_index++
    // for (var i = 0; i < players.length; i++) {
    //   console.log(players[i])
    }
    return arr[arr.length-1].name
}
//
console.log(duck_duck_goose(["gary", "joe", "sam", "sara", "tony"],10))


 //
 // return (arr[arr.length-1][name))

// OBJECT VERSION


// function duck_duck_goose(players,goose){
//   var obj = {}
//   var goose_index = 0;
//   var player_index = 0;
//   while(goose){
//     goose--
//     if (player_index >= players.length){
//     //       player_index = 0
//     }
//     console.log(players[players_index])
//     }
//     }
//     player_index++
//     goose_index++
//     // for (var i = 0; i < players.length; i++) {
//     //   console.log(players[i])
//
//     }

console.log(duck_duck_goose
([{ name:"gary"},{name:"joe"},{name: "sam"}, {name:"sara"},{name:"tony"}],10))

//
// var tempData = {};
// for ( var index in data ) {
//   if ( data[index].Status == "Valid" ) {
//     tempData[index] = data;
//   }
//  }
// data = tempData;
