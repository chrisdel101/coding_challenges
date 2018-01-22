
const users = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
const globalUserStreamData    = [];//online and username
const globalUserChannelData   = [];//all other info
const input = document.querySelector("#search-input");
const all = document.querySelector("#all");
const online = document.querySelector("#online");
const offline = document.querySelector("#offline");

all.addEventListener('click', () => {
   var results = document.querySelectorAll('.results-container')
   // if nuber of divs is equal to number of user in response, do nothing
   if(results.length === globalUserChannelData.length){
     return
   } else {
     // remove old nodes
      results.forEach((domNode) => domNode.remove())
      // make html out of data
     let html = fillHTMLtemplate(globalUserChannelData)
     // // put html into display logic
     displayResults(html, "#results")
     addClassToElems(globalUserChannelData,".results-container","online","offline")
   }

})

online.addEventListener('click', () => {
    // filter out online uses
    var data = globalUserChannelData.filter((user) => {
      return user.online
    })
    // select all current divs, and remove them
    var results = document.querySelectorAll('.results-container')
    results.forEach((domNode) => domNode.remove())
      // make html out of online user data
    let html = fillHTMLtemplate(data);
    // template the html
    displayResults(html, "#results")
    // add css to results
    addClassToElems(data,".results-container","online")
})

offline.addEventListener('click', () => {
    var data = globalUserChannelData.filter((user) => {
      return !user.online
    })
    var results = document.querySelectorAll('.results-container')
    results.forEach((domNode) => domNode.remove())
    let html = fillHTMLtemplate(data);
    displayResults(html, "#results")
    addClassToElems(data,".results-container","","offline")
})


// make ajax call to find out if user is online- function should pass true or false
//make ajax call with userdata to get logo, url stream, and if account exists
//merge the arrays with displayLogic => now two arrays
// take all array data and dispay it
// have event listener, if change, delete all HTML and add new
//once blank add all again

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
    // var html = fillHTMLtemplate(userData)
    // displayResults(html,"#results")

    globalUserStreamData.push(userData)
  })
})

makeAjax(`https://api.twitch.tv/kraken/channels/`, users,(res) => {

  // callback does not return a value here
  setOnlineStatus(res,() => {
    // make html out of user data
    let html = fillHTMLtemplate(globalUserChannelData)
    // // put html into display logic
    displayResults(html, "#results")

    addClassToElems(globalUserChannelData,".results-container","online", "offline");
    addClassToElems(globalUserChannelData,".online-status","online", "offline");

    // select all classes in nodelist
    // loop through json
    // globalUserChannelData.forEach((user,index) => {
    //   // if true, use index to set that one to addclass
    //   if(user.online === true){
    //     onlineStatus[index].classList.add('online');
    //   } else {
    //     onlineStatus[index].classList.add('offline');
    //   }
    //   if(user.online === true){
    //     resultsContainers[index].classList.add('online')
    //   } else {
    //     resultsContainers[index].classList.add('offline')
    //
    //   }
    //
    // })
  })

})
// adds classes to toggle colors
function addClassToElems(data_arr, domNodes, class1, class2){
    var domNodes = document.querySelectorAll(domNodes);
    data_arr.forEach((user, index) => {
        if(user.online === true){
          domNodes[index].classList.add(class1)
        } else {
          domNodes[index].classList.add(class2)

        }
    })
}
// on call to /channel make userObj, and call array merge logic
function setOnlineStatus(response,callback){
  response.forEach((userObj) => {
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
    } else {
      // stop if value is null
      return
    }
    // push to global array
    globalUserChannelData.push(userData)
  })
  // settimeout before calling running displayLogic
  setTimeout(function(){
    callback(displayLogic(globalUserChannelData))
  },0010)
}
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


// gets username out of url
function getUserName(str){
  str = str.match(/([^/]*)$/)[1]
  return str
}

// checks each array for user and adds online status- leaving one main array
function displayLogic(){
  // loop streams to check if online
  globalUserStreamData.forEach((stream) => {
    // console.log(stream.online)
    if(stream.online === true){
      // if online, add attr to channel data
      var sameUser = globalUserChannelData.find((val) => {
        // make toLowerCase, check for undefined
        if(val != undefined){
          return val.username.toLowerCase() == stream.username.toLowerCase()
        }
      })
      if(sameUser != undefined){
        sameUser['online'] = true;
      }
    } else {
      // if offline, add attr to channel data
      var sameUser = globalUserChannelData.find((val) => {
        if(val != undefined){
          return val.username.toLowerCase() === stream.username.toLowerCase()
        }
      })
      if(sameUser != undefined){
        sameUser['online'] = false;

      }
    }
  })

}

function  findMatches(wordToMatch,users){
  return users.filter(user => {
    // make regex with word, global, case insenstive
    const regex = new RegExp(wordToMatch, 'gi')
    return user.username.match(regex) || user.feed.match(regex)
  })
}
// takes block of html and appends to css id
function displayResults(html,domNode){
  // make id a selectable node
  var domNode = document.querySelector(domNode);

  // insertAdjacentHTML new api works - innerHTML does not- before end is part of api
  domNode.insertAdjacentHTML('beforeend',html);

}
function makeSearchHTML(arr){
  // if input is empty, display all
  if(input.value == ""){
    var results = document.querySelectorAll('.results-container')
    results.forEach((domNode) => domNode.remove())
    var html = fillHTMLtemplate(arr)
    displayResults(html,"#results")
    addClassToElems(arr,".results-container","online","offline")
    addClassToElems(arr,".online-status","online","offline")


  } else {
    var matches = findMatches(input.value,arr)
    var results = document.querySelectorAll('.results-container')
    results.forEach((domNode) => domNode.remove())
    var html = fillHTMLtemplate(matches)
    var display = displayResults(html,"#results")
    addClassToElems(matches,".results-container","online","offline")
    addClassToElems(matches,".online-status","online","offline")

  }

}
// function addClassToElems(data_arr, domNodes, class1, class2){

input.addEventListener('keyup', () => {
    console.log(input.value)
    makeSearchHTML(globalUserChannelData)
})
input.addEventListener('input', () => {
    console.log(input.value)
    makeSearchHTML(globalUserChannelData)
})


function fillHTMLtemplate(arr){
  var markup = arr.map((user) => {
    // console.log(user.username)
    return `
    <div class="results-container">
    <li class="list-item title feed"><a href=${user.feed}>${user.username}</a></li>
    <li class="list-item online-status"></li>
    <li class="list-item"><img class="logo" src=${user.logo}></li>
    </div>
    `
  }).join('')
  return markup
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
