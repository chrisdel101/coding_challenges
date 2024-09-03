function abbreviation(a, b) {
  let j = 0
  let backTracking = false
  let storedChar
  let pIndexi = 0
  let pIndexj = 0
  for (var i = 0; i < a.length; i++) {
    console.log('current a', a[i], i)
    console.log('current b', b[j], j)
    console.log('storedChar',storedChar)
    // if(i=== 130) return
    // b has ended
    if (isUpperCase(a[i])) {
      // console.log('current a', a[i])
      // both are equal upper case
      if (a[i] === b[j]) {
        console.log('a[i] upper match', a[i], b[j])
        j++
        // not equal upper case
      } else {
          // combine after
        // console.log('a[i] no upper match', a[i], b[j])
        // console.log('AA', a[i])
        // console.log('AA', a[i]?.toLowerCase())
        // console.log('DD', storedChar)
        // console.log('DD', storedChar)
        // console.log('BB', a[i] === storedChar?.toUpperCase())        
        // console.log('BB', a[i] === storedChar?.toLowerCase())        
        if (
            a[i] === storedChar?.toUpperCase() ||
            a[i] === storedChar?.toLowerCase()) {
          // reset i & j to previous
          console.log('Unequal. Store char', storedChar)
          console.log('pIndexi set', pIndexi)
          console.log('pIndexj set', pIndexj)
        
          i = pIndexi - 1
          j = pIndexj
          backTracking = true
          console.log('BACKTRACK')
        //   console.log('i here', i)
        //   console.log('j here', j)
          
        //   return "STOP"
        } else {
          if (!b[j]) {
            console.log('b is undefined')
            if (isUpperCase(a[i]) === storedChar) {
              console.log('backTrack to fix is b undefined')
              i = pIndexi
              j = pIndexj
              backTracking = true
            //   a[i] = null
            } else {
                 // b has ended but A is capital
                console.log('a[i] uppper not matched: break', a[i], b[j])
                return 'NO'
            }
          } else {
            // b has ended but A is capital
            console.log('a[i] uppper not matched: break', a[i], b[j])
            return 'NO'
          }
        }
      }
    } else {
      //a not capital - try a capitallize
      if (b[j] === a[i]?.toUpperCase()) {
        console.log('a[i] lower match', a[i], b[j])
        if (storedChar === a[i] && backTracking) {
          console.log('backtracking - match skipped', storedChar)
        //   a[i] = null
        // stored reset
          storedChar = undefined
          backTracking = false
        } else {    
          console.log('make a[i] upppercase')
          pIndexi = i
          pIndexj = j
        //   stored set
          storedChar = a[i]
          j++
          console.log('pIndexi set', pIndexi)
          console.log('pIndexj set', pIndexj)
        }

        //  b is not equal to a uppercase
      } else {
        // if (
        //     a[i] === storedChar?.toUpperCase() ||
        //     a[i] === storedChar?.toLowerCase()) {
        //   console.log('no match but backtrack', pIndexi, pIndexj, storedChar)
        //   i = pIndexi
        //   j = pIndexj
        //   backTracking = true
        // } else {
          console.log('a[i] discared', a[i], b[j])
        //   a[i] = null
        // }
      }
    }
    console.log('')

  }
  if (j === b.length) {
    return 'YES'
  } else {
    console.log(b.length)
    console.log(j)
    return 'NO'
  }
}
function isUpperCase(str) {
  return str === str?.toUpperCase()
}
function isLowerCase(str) {
  return str === str?.toLowerCase()
}
// console.log(abbreviation('BFZZVHdQYHQEMNEFFRFJTQmNWHFVXRXlGTFNBqWQmyOWYWSTDSTMJRYHjBNTEWADLgHVgGIRGKFQSeCXNFNaIFAXOiQORUDROaNoJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMvSTGEQCYAJSFvbqivjuqvuzafvwwifnrlcxgbjmigkms', 'BFZZVHQYHQEMNEFFRFJTQNWHFVXRXGTFNBWQOWYWSTDSTMJRYHBNTEWADLHVGIRGKFQSCXNFNIFAXOQORUDRONJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMSTGEQCYAJSF')) // YES
// console.log(abbreviation('hHhAhhcahhacaccacccahhch', 'HAHHCHAACCC'))
console.log(abbreviation('hHhAhhcahhacaccacccahhchhcHcahaahhchhhchaachcaCchhchcaccccchhhcaahhhhcaacchccCaahhaahachhacaahhaachhhaaaCalhhchaccaAahHcchcazhachhhaaahaahhaacchAahccacahahhcHhccahaachAchahacaahcahacaahcahacaHhccccaahaahacaachcchhahhacchahhhaahcacacachhahchcaAhhcaahchHhhaacHcacahaccccaaahacCHhChchhhahhchcahaaCccccahhcaachhhacaaahcaaaccccaacaaHachaahcchaahhchhhcahahahhcaachhchacahhahahahAahaAcchahaahcaaaaahhChacahcacachacahcchHcaahchhcahaachnachhhhcachchahhhacHhCcaHhhhcaCccccaaahcahacahchahcaachcchaachahhhhhhhhcahhacacCcchahccaaaaaHhhccaAaaaCchahhccaahhacaccchhcahhcahaahhgacahcahhchcaaAccchahhhaahhccaaHcchaccacahHahChachhcaaacAhacacaacacchhchchacchchcacchachacaahachccchhhaccahcacchaccaahaaaccccccaaaaaaaHhcahcchmcHchcchaaahaccchaaachchHahcaccaaccahcacacahAhaacaacaccaccaaacahhhcacAhaCchcaacCcccachhchchcchhchahchchahchchhchcacaachahhccacachaAhaaachchhchchchhaachahaahahachhaaaccacahhcacchhhaaachaaacAahhcachchachhhcacchacaaChCahhhccahChaachhcahacchanaaacchhhccacacchcahccchAcahacaaachhacchachccaaHacaacAhahcCh', 'HAHHCHAACCCAHCHHAHHAHCACCHCCHHCAAHHCACCCAHHHACAAHHHHCHHCAHHAHHAAAHAACAAHAHHCAHAHACHACHCHACACHAAHHAAAHCAHHACACAACHHHCHAHCAHCHHHAHAHACCAAAHCHHCHHCCAACCCCAACHACAACAAHACHCHAHHACCHCAHHHAAACHACAACHCACACAHHCCHAHACCCACCAACHCHHHCCCCCHCCAHHCAAHHAHHHHHHHAACCCCAHCCAAAAAHHHAAAACCAHHCAHACACCHHCHAHAHHCHAACHHHHHCCHCCAHAHCHCAAACCACCCCHACCACHHACHHACACHACCAACCCCAAAAHHAHCHHHCCAHCCHACHHAHCCACACCHAHAAACACCCCAHCCAHACCCCCCHCCHHCHHHHCHCHCAHHHACHAHAACCCAAAACHAACAAAHHAAHAAAHACHHCACHCCHCHAACHACACHHCCCCCAHCACHAAAHCHCAHACAAC')) // YES
// console.log(abbreviation('DINVMKSOfsVQByBnCWNKPRFRKMhFRSkNQRBVNTIKNBXRSXdADOSeNDcLWFCERZOLQjEZCEPKXPCYKCVKALNxBADQBFDQUpdqunpelxauyyrwtjpkwoxlrrqbjtxlkvkcajhpqhqeitafcsjxwtttzyhzvh', 'DINVMKSOVQBBCWNKPRFRKMFRSNQRBVNTIKNBXRSXADOSNDLWFCERZOLQEZCEPKXPCYKCVKALNBADQBFDQU')) // Yes
// console.log(abbreviation('MBQEVZPBjcbswirgrmkkfvfvcpiukuxlnxkkenqp', 'MBQEVZP')) // No
// console.log(
//   abbreviation(
//     'RDWPJPAMKGRIWAPBZSYWALDBLDOFLWIQPMPLEMCJXKAENTLVYMSJNRJAQQPWAGVcGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDDOFCYWBUCJGbvqlddfazmmohcewjg',
//     'RDPJPAMKGRIWAPBZSYWALDBLOFWIQPMPLEMCJXKAENTLVYMJNRJAQQPWAGVGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDOFCYWBUCJG'
//   )
// ) // No
// console.log(abbreviation('beFgH', 'EFG')) 
// console.log(abbreviation('daBcd', 'ABC')) // Yes
// console.log(abbreviation('KXzQ', 'K')) // NO
// abbreviation('baba', 'abab')
