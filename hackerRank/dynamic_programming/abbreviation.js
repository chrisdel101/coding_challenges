function abbreviation(a, b){
    let j = 0
    for (let i = 0; i < a.length; i++) {    
        console.log('current a', a[i], i) 
        console.log('current b', b[j], j)  
        if(!isUpperCase(a[i])){
            // console.log('current a', a[i])  
            // both are lower case
            if(a[i] === b[j]){
                console.log('a[i] lower match', a[i], b[j])
                j++
            } else {
                // b[i] is capital
                // check if making a[i] upper matches
                if(a[i].toUpperCase() === b[j]){
                    // check if next item would not fail - then capitalize 
                    if(a[i+1] === b[j+1]) {
                        console.log('a[i] match capitalized', a[i], b[j])
                        j++
                    } else {
                        // - then drop a[i]
                        console.log('a[i] match dropped. No match', a[i], b[j])
                        a[i] = null
                        // return
                    }
                } else {
                    console.log('a[i] not matched', a[i], b[j])
                    a[i] = null
                }
            }
        } else {
            // both are upper case
            if(a[i] === b[j]){
                console.log('a[i] upper match', a[i], b[j])
                j++
            } else {
            //  b is lower and A is upper - no match
                console.log('a[i] uppper not matched: break', a[i], b[j])
                return 'NO'
            }
        }
    }
    if(j === b.length) {
        return 'YES'
    } else {
        return 'NO'
    }
}
function isUpperCase(str){
    return str === str.toUpperCase()
}
// console.log(abbreviation('BFZZVHdQYHQEMNEFFRFJTQmNWHFVXRXlGTFNBqWQmyOWYWSTDSTMJRYHjBNTEWADLgHVgGIRGKFQSeCXNFNaIFAXOiQORUDROaNoJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMvSTGEQCYAJSFvbqivjuqvuzafvwwifnrlcxgbjmigkms', 'BFZZVHQYHQEMNEFFRFJTQNWHFVXRXGTFNBWQOWYWSTDSTMJRYHBNTEWADLHVGIRGKFQSCXNFNIFAXOQORUDRONJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMSTGEQCYAJSF')) // No
// console.log(abbreviation('DINVMKSOfsVQByBnCWNKPRFRKMhFRSkNQRBVNTIKNBXRSXdADOSeNDcLWFCERZOLQjEZCEPKXPCYKCVKALNxBADQBFDQUpdqunpelxauyyrwtjpkwoxlrrqbjtxlkvkcajhpqhqeitafcsjxwtttzyhzvh', 'DINVMKSOVQBBCWNKPRFRKMFRSNQRBVNTIKNBXRSXADOSNDLWFCERZOLQEZCEPKXPCYKCVKALNBADQBFDQU')) // Yes
// console.log(abbreviation('MBQEVZPBjcbswirgrmkkfvfvcpiukuxlnxkkenqp', 'MBQEVZP')) // No
// console.log(abbreviation('RDWPJPAMKGRIWAPBZSYWALDBLDOFLWIQPMPLEMCJXKAENTLVYMSJNRJAQQPWAGVcGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDDOFCYWBUCJGbvqlddfazmmohcewjg', 'RDPJPAMKGRIWAPBZSYWALDBLOFWIQPMPLEMCJXKAENTLVYMJNRJAQQPWAGVGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDOFCYWBUCJG'))  // No
console.log(abbreviation('daBcd', 'ABC')) // No
// console.log(abbreviation('KXzQ', 'K')) // NO
// abbreviation('baba', 'abab')