const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const bands2 = ['Plot in You', 'Devil Wears Prada', 'A', 'Norma Jean', 'B', 'Say Anything', 'Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'Skylit Drive', 'Anywhere But Here', 'C'];

// function sortArrays(arr1, arr2){
//     var arr3 = arr1.map((string) => {
//         arr2.map((word,i) => {
//             if(string.includes(word)){
//                 console.log('true')
//                 console.log(string)
//                 console.log(word)
//                 string = string.replace(/plot/i, "")
//             }
//         })
//     })
//     return arr3
// }

function stripFirstWord(str){
    var re = /^\b(a |the |an )\b/i
    str = str.replace(re, "");
    return str;
}

console.log(sortArrays(bands, bands2))

// function sortArrays(arr1, arr2 = []){
//  arr1.forEach((string) => {
//         arr2.forEach((string) => {
//             string = string + '111'
//         })
//         })
//         return arr1
}


function sortArrays(arr1, arr2=[]){
    for (var i = 0; i < arr1.length; i++) {
        for (var k = 0; k < arr2.length; k++) {
            arr1[i] = 'nothing'
        }
    }
    return arr1
}
