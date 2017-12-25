function validParentheses(parens){
    if(parens === undefined){
        return false
    } else if (parens === null){
        return false
    } else if (parens[0] === ")"){
        return false
    } else if (parens[parens.length -1] === "("){
        return false
    }
    let open = 0
    let close = 0
    for (var i = 0; i < parens.length; i++) {
        if(parens[i] === "("){
            open++
        }
        if(parens[i] === ")"){
            close++
        }
    }
    if(open === close){
        return true
    } else {
        return false
    }
}

console.log(validParentheses("())("))
// "((()))((()())())"  =>  True
