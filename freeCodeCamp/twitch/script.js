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


//makeAjax(`https://api.twitch.tv/kraken/streams/`, users,(res) => {
//     res.forEach((userObj) => {
//         // console.log(userObj)
//         // create blank object to put all user data
//         var userData = {}
//
//         // get user name in url
//         let user = userObj._links.self
//         // seperate to get username alone
//         let userName = getUserName(user)
//         // push to blank object
//         userData['username'] = userName
//
//         // check if useronline
//         if(userObj.stream != null){
//             userData['online'] = true;
//         } else {
//             userData['online'] = false
//         }
//
//         // get user live feed
//         if(userObj.stream != null){
//             let feed = userObj.stream.channel.url
//             userData['feed'] = feed;
//         } else {
//             userData['feed'] = "offline";
//         }
//         if(userObj.stream != null){
//             let game = userObj.stream.channel.game
//             userData['game'] = game;
//         } else {
//             userData['feed'] = null;
//         }
//         if(userObj.stream != null){
//             let logo = userObj.stream.channel.logo
//             userData['logo'] = logo;
//         } else  {
//             userData['logo'] = "offline"
//         }
//
//         console.log(userData)
//         var html = makeHTML(userData)
//         displayResults(html,"#results")
//
//     })
// })
// function getUserName(str){
//     str = str.match(/([^/]*)$/)[1]
//     return str
// }

makeAjax(`https://api.twitch.tv/kraken/channels/`, users,(res) => {
        res.forEach((userObj) => {

            // get user name in url
            let user = userObj.displayName
            // seperate to get username alone
            console.log(user)

            // check if useronline
            // if(userObj.stream != null){
            //     userData['online'] = true;
            // } else {
            //     userData['online'] = false
            // }

            // get user live feed
            let userFeed = userObj.url
            console.log(userFeed);
            let userLogo = userObj.logo
            console.log(userLogo)
        })


})

function displayResults(html,domNode){
    // make id a selectable node
    var domNode = document.querySelector(domNode);
    // select container
    var div = document.querySelectorAll('.results-container');
    //
    if(div != null){
        // since first is null
        div.forEach(i => i.classList.add('show'))
    }
    // insertAdjacentHTML new api works - innerHTML does not
    domNode.insertAdjacentHTML('beforeend',html);
}
function makeHTML(inputObj){
    console.log(inputObj.logo)
    // var input = input[attr]
      return `
      <div class="results-container hidden">
      <li class="title node">${inputObj.username}</li>
      <a class="feed online" href=${inputObj.feed}>feed</a>
      <img class="logo online offline" src=${inputObj.logo}>
      </div>
      `
}









// Old ajax function
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
