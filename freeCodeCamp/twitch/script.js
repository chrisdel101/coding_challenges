var users = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

function makeAjax(url, arr, callback){
    let results = [];
    arr.forEach((i) => {
        let myHeaders = new Headers();
        myHeaders.append('Client-ID','g8oo57hf3026alyweepj1ov6rg6p5q')
        let options = {
            method: 'GET',
            headers: myHeaders,
        }
        fetch(`${url}/${i}`,options)
        .then(blob => blob.json ())
        .then((data) => { results.push(data)})

    })
    setTimeout(function(){
        callback(results)
    },1000)
}


makeAjax(`https://api.twitch.tv/kraken/streams/`, users,(res) => {
        res.forEach((i) => console.log(i    ))
})

// })
// function makeAjax(url, callback){
//     let results = [];
//     let myHeaders = new Headers();
//     myHeaders.append('Client-ID','g8oo57hf3026alyweepj1ov6rg6p5q')
//     let options = {
//         method: 'GET',
//         headers: myHeaders,
//     }
//
//     users.forEach((user) => {
//         // console.log(user)
//         fetch(`https://api.twitch.tv/kraken/streams/${user}`,{
//             method: 'GET',
//             headers: {
//                 'CLIENT-ID':'g8oo57hf3026alyweepj1ov6rg6p5q'
//             }
//         })
//         .then(blob => blob.json ())
//         .then((data) => {
//             console.log(data)
//         })
//     })
    // setTimeout(function(){
    //     callback(results)
    // },1000)

// makeAjax('https://api.twitch.tv/kraken/channels/twitch',(res) => {
//     console.log(res)
// })
