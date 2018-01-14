
const users = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var globalUserStreamData    = [];//online and username
var globalUserChannelData   = [];//all other info

// make ajax call to find out if user is online- function should pass true or false
//make ajax call with userdata to get logo, url stream, and if account exists

makeAjax(`https://api.twitch.tv/kraken/streams/`, users,(res) => {
    res.forEach((userObj) => {
        var userData = {}
        // console.log(userObj)

        // get user name in url
        let user = userObj._links.self
        // seperate to get username alone
        let userName = getUserName(user)
        // push to blank object
        userData['username'] = userName

        // check if useronline
        if(userObj.stream != null){
            userData['online'] = true;
        } else {
            userData['online'] = false
        }

        // get user live feed
        // if(userObj.stream != null){
        //     let feed = userObj.stream.channel.url
        //     userData['feed'] = feed;
        // } else {
        //     userData['feed'] = "offline";
        // }
        // if(userObj.stream != null){
        //     let game = userObj.stream.channel.game
        //     userData['game'] = game;
        // } else {
        //     userData['feed'] = null;
        // }
        // if(userObj.stream != null){
        //     let logo = userObj.stream.channel.logo
        //     userData['logo'] = logo;
        // } else  {
        //     userData['logo'] = "offline"
        // }
        //
        // console.log(userData)
        // var html = makeHTML(userData)
        // displayResults(html,"#results")

        globalUserStreamData.push(userData)
    })
})

makeAjax(`https://api.twitch.tv/kraken/channels/`, users,(res) => {
        res.forEach((userObj) => {
            // console.log(userObj)
            let userData = {}
            // check user is active
            if(userObj.status != null){
                let userName = userObj.display_name;
                let status = userObj.status;
                let feed = userObj.url;
                let logo = userObj.logo;
                userData = {
                    'username':userName,
                    'status':status,
                    'feed': feed,
                    'logo':logo
                }
            }
            globalUserChannelData.push(userData)
        })


})
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
    // returns an array
    setTimeout(function(){
        callback(results)
    },1000)
}

function getUserName(str){
    str = str.match(/([^/]*)$/)[1]
    return str
}

function displayLogic(){
    // loop streams to check if online
    globalUserStreamData.forEach((stream) => {
        // console.log(stream.online)
        if(stream.online === true){
        // if online, add attr to channel data
            // var sameUser = globalUserChannelData.find((val) => {
            //     // make toLowerCase, check for undefined
            //     if(val != undefined){
            //         return val.username.toLowerCase() === stream.username.toLowerCase()
            //     }
            //     // check for undefined again
            //     if(sameUser != undefined){
            //         sameUser['online'] = true;
            //     }
            // })
        } else if(stream.online === false){
        // if offline, add attr to channel data
            var sameUser = globalUserChannelData.find((val) => {
                console.log(val)
                console.log(val.length)
                if(Object.keys(val).length === 0){
                    console.log(val)
                    // return val.username.toLowerCase() === stream.username.toLowerCase()
                    }
            })
            if(sameUser != undefined){
                sameUser['online'] = false;
            }
        }
    })

}


// takes block of html and appends to css id
function displayResults(html,domNode){
    // make id a selectable node
    var domNode = document.querySelector(domNode);
    // select container
    var div = document.querySelectorAll('.results-container');
    //
    // add class to all divs in block
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
