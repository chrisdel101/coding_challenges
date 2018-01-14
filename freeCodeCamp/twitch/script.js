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
    res.forEach((objs) => {
        console.log(objs)
        // get user name in url
        let user = objs._links.self
        // seperate to get username alone
        let userName = getUserName(user)
        var html = makeHTML(userName)
        displayResults(html,"#results")

    })
})
function getUserName(str){
    str = str.match(/([^/]*)$/)[1]
    return str
}

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
function makeHTML(input){
    // console.log(i[attr])
    // var input = input[attr]
      return `
      <div class="results-container hidden">
      <li class="title node">${input}</li>
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
