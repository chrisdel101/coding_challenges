class StackStore {
    tokenStack
    operatorStack
    constructor(){
        this.tokenStack = []
        this.operatorStack = []
    }
}
const parser = (commaSepLexemeArr) => {
    try{
        const OPERATORS = {
            MUTLI: '*', 
            DIVIDE: '/', 
            ADD: '+', 
            SUBRACT: '-'
        }
        const KEYWORDS = ['AND', 'OR', 'NOT', 'BETWEEN', 'IS NOT NULL', 'NULL', 'LIKE', 'NOT LIKE', 'POWER', 'ON']
         
        const tokenStack = []
        const operatorStack = []
        const parenStack = []
        for (let i = 0; i < commaSepLexemeArr.length; i++) {
            const current = commaSepLexemeArr[i]
            // 3 cases: nested (()), (condition), IN(1,2,3) 
            if(current === '('){
                // add to stack
                parenStack.unshift(current)
                
            } else if(current === ')'){
                // check opening brackets match existing
                if(parenStack[0] !== '(')
                    throw Error("Unmatched closing bracket")
                else {
                    // remove from parenStack
                    parenStack.shift()
                }
            } else if(OPERATORS.ADD === current || OPERATORS.SUBRACT === current){
                // for +/- apply to next value
                
                // // check next value isntoken in stack
                // if(!tokenStack.length)
                //     throw Error(`Invalid operator ${current}`)
                operatorStack.unshift(current)
            } else if(current === OPERATORS.MUTLI || current === OPERATORS.DIVIDE) {
                operatorStack.unshift(current)
            } else {
                tokenStack.unshift(current)
            }
            
        }
        // parens stack must be empty
        if(parenStack.length)
            throw Error("Unmatched opening bracket")
    } catch(e){
        console.error("Catch",e)
    }
}
const wordAndParts = /\w+(?:\.\w+)*/.source
const OnSplitRegex = new RegExp(String.raw`${wordAndParts}|(=|>=|<=|<>|>|<|!=|\)|\(|\*|\/|\+|\-|\'.*?\'|\,)`, 'gi')
const commaSepLexemeArr = "(a.id = b.id OR (a.x<>b.x) OR (a.y + 2 <= POWER(2,2)))".match(OnSplitRegex)
const commaSepLexemeArr1 = "(a.id = b.id OR (a.x<>b.x) OR (a.y + 2 <= POWER(2,2)))".match(OnSplitRegex)
const commaSepLexemeArr2 = "-2 * 2 * (6 + 4) / 2".match(OnSplitRegex)
parser(commaSepLexemeArr2)

module.exports = { parser }