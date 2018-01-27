
const users = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
const globalUserStreamData    = [];//online and username
const globalUserChannelData   = [];//all other info
const input  = document.querySelector("#search-input");
const all = document.querySelector("#all");
const online = document.querySelector("#online");
const offline = document.querySelector("#offline");

all.addEventListener('click', (e) => {
   var results = document.querySelectorAll('.results-container');
   // if nuber of divs is equal to number of user in response, do nothing
   if(results.length === globalUserChannelData.length){
     return
   } else {
     // remove old nodes
      results.forEach((domNode) => domNode.remove())
      // make html out of data
     let html = fillHTMLtemplate(globalUserChannelData);
     // // put html into display logic
     displayResults(html, "#results");
     addClassToElems(globalUserChannelData,".results-container","online","offline");
     addClassToElems(globalUserChannelData,".online-status","online","offline");
   }
})

online.addEventListener('click', () => {
    // filter out online uses
    var data = globalUserChannelData.filter((user) => {
      return user.online
    })
    // select all current divs, and remove them
    var results = document.querySelectorAll('.results-container')
    results.forEach((domNode) => domNode.remove());
      // make html out of online user data
    let html = fillHTMLtemplate(data);
    // template the html
    displayResults(html, "#results");
    // add css to results
    addClassToElems(data,".results-container","online","offline");
    addClassToElems(data,".online-status","online","offline");

})

offline.addEventListener('click', () => {
    var data = globalUserChannelData.filter((user) => {
      return !user.online
    })
    var results = document.querySelectorAll('.results-container');
    results.forEach((domNode) => domNode.remove());
    let html = fillHTMLtemplate(data);
    displayResults(html, "#results");
    addClassToElems(data,".results-container","","offline");
    addClassToElems(data,".online-status","online","offline");

})

// Steps
// make ajax call to find out if user is online- function should pass true or false
//make ajax call with userdata to get logo, url stream, and if account exists
//merge the arrays with displayLogic => now two arrays
// take all array data and dispay it
// have event listener, if change, delete all HTML and add new
//once blank add all again

makeAjax(`https://wind-bow.glitch.me/twitch-api/streams`, users,(res) => {
    makeStreamUsers(res);
 })

makeAjax(`https://wind-bow.glitch.me/twitch-api/channels`, users,(res) => {
    // callback calls the displayLogic inside itself
    setOnlineStatus(res,() => {});
 })

setTimeout (function(){
     let html = fillHTMLtemplate(globalUserChannelData);
     // // put html into display logic
     displayResults(html, "#results")
     addClassToElems(globalUserChannelData,".results-container","online", "offline");
     addClassToElems(globalUserChannelData,".online-status","online", "offline");
},1000)


function setOnlineStatus(obj,callback){
        // console.log(userObj)
        let tempUserStore = {}
        // check user is active
        if(obj.status != null){
            let userName = obj.display_name;
            let status = obj.status;
            let feed = obj.url;
            let logo = obj.logo;
            tempUserStore = {
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
        globalUserChannelData.push(tempUserStore);

        callback(displayLogic(globalUserStreamData,globalUserChannelData)
)
}

// adds classes to toggle colors
function addClassToElems(data_arr, domNodes, class1, class2){
    var domNodes = document.querySelectorAll(domNodes);
    data_arr.forEach((user, index) => {
        if(user.online === true){
          domNodes[index].classList.add(class1);
        } else {
          domNodes[index].classList.add(class2);

        }
    })
}
function makeStreamUsers(obj){
    var tempUserStore = {}
    let user = obj._links.self
    // seperate to get username alone
    let userName = getUserName(user);
    // push to blank object
    tempUserStore['username'] = userName

    // check if useronline
    if(obj.stream != null){
        tempUserStore['online'] = true;
    } else {
        tempUserStore['online'] = false
    }
    globalUserStreamData.push(tempUserStore);
}
// on call to /channel make userObj, and call array merge logic
// on call to /channel make res, and call array merge logic

function makeAjax(url, arr, callback){
  arr.forEach((i) => {
    fetch(`${url}/${i}`)
    .then(blob => blob.json ())
    .then(callback);
  });
}


// gets username out of url
function getUserName(str){
  str = str.match(/([^/]*)$/)[1];
  return str;
}

// checks each array for user and adds online status- leaving one main array
function displayLogic(streamArr, channelArr){
    // if((streamArr)
  // loop streams to check if online
  streamArr.forEach((stream) => {
    // console.log(stream.online)
    if(stream.online === true){
      // if online, add attr to channel data
      var sameUser = channelArr.find((val) => {
        // make toLowerCase, check for undefined
        if(val != undefined){
          return val.username.toLowerCase() == stream.username.toLowerCase();
        }
      })
      if(sameUser != undefined){
        sameUser['online'] = true;
      }
    } else {
      // if offline, add attr to channel data
      var sameUser = channelArr.find((val) => {
        if(val != undefined){
          return val.username.toLowerCase() === stream.username.toLowerCase();
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
    const regex = new RegExp(wordToMatch, 'gi');
    return user.username.match(regex) || user.feed.match(regex);
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
    results.forEach((domNode) => domNode.remove());
    var html = fillHTMLtemplate(arr)
    displayResults(html,"#results");
    addClassToElems(arr,".results-container","online","offline");
    addClassToElems(arr,".online-status","online","offline");


  } else {
    var matches = findMatches(input.value,arr);
    var results = document.querySelectorAll('.results-container');
    results.forEach((domNode) => domNode.remove());
    var html = fillHTMLtemplate(matches);
    var display = displayResults(html,"#results");
    addClassToElems(matches,".results-container","online","offline");
    addClassToElems(matches,".online-status","online","offline");
  }
}

input.addEventListener('keyup', () => {
    console.log(input.value)
    makeSearchHTML(globalUserChannelData);
})
input.addEventListener('input', () => {
    console.log(input.value)
    makeSearchHTML(globalUserChannelData);
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
}).join('');
  return markup
}
