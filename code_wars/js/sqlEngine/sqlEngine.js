// ?= lookahead - matches if followed by
// ?! - negative lookahead - matches if not followed by
// ?<= lookbehind - matches if preceded by
// ?: non-capturing group - match all instances

 // - any word if preceded by 'select' them 0+space word 0+space comma 0+space
  // any 0+space if followed by comma or 1+space 'from' no match after
// SELECT -> FROM /(?<=\bselect\s+(?:\w+(?:\.\w+)*\s*,\s*)*)\w+(?:\.\w+)*(?=\s*,|\s+from\b)/gi

 // - any word if preceded by 'from' 0+space word 0+space comma 0+space
  // any 0space+ if followed by comma or 1space+ 'join' or end of line $
// FROM -> JOIN /(?<=\bfrom\s+(?:\w+(?:\.\w+)*\s*,\s*)*)\w+(?:\.\w+)*(?=\s*,|\s+join\b|\s*$)/gi

// JOIN -> ON
// (?<=\join\s+(?:\w+(?:\.\w+)*\s*)*)\w+(?:\.\w+)*(?=\s*,|\s+on\b)
// ON -> as full string JOIN|WHERE
// (?<=\bon\s+((?!join\b)\S+\s+))((?!join\b)\S+|\s+)*
// ON -> JOIN|WHERE  
 // lookbehind - ON 0+space not join word+1 space+1
  // match - not join word+1
// - (?<=\bon\s+(?:(?!join\b)\S+\s+)*)(?!join\b)\S+
// ON full str  - (?<=\bon\s+(?:(?!(?:join|where)\b)\S+\s+)*)(?:(?!(?:join|where)\b)\S+|\s+)+
// ON split all chars /\w+(?:\.\w+)*|(=|>=|<=|<>|>|<|!=|\)|\(|\'.*?\'|\,)/</>
function SQLEngine(database) {
  const keyWords = {
    SELECT: 'SELECT', 
    FROM: 'FROM',
    JOIN: 'JOIN',
    ON: 'ON',
    WHERE: 'WHERE'
  }
  const keywordBndries = [
    keyWords.JOIN, keyWords.WHERE
  ]

  // word 0+ word parts like
  const wordAndParts = /\w+(?:\.\w+)*/.source
  // SElECT -> FROM args -  comma sep wordAndParts list, if preceded by 'select'
  const selectFromRegex = new RegExp(String.raw`(?<=\b${keyWords.SELECT}\s+(?:${wordAndParts}\s*,\s*)*)${wordAndParts}(?=\s*,|\s+${keyWords.SELECT}\b)`, 'gi')
  // FROM -> JOIN args - comma sep wordAndParts list, if preceded by 'from'
  const fromJoinRegex = new RegExp(
    String.raw`(?<=\b${keyWords.FROM}\s+(?:${wordAndParts}\s*,\s*)*)${wordAndParts}(?=\s*,|\s+${keyWords.JOIN}\b|\s*$)`,
    'gi',
  )
  // JOIN -> ON
  const joinOnRegex = new RegExp(
    String.raw`(?<=\b${keyWords.JOIN}\s+(?:${wordAndParts}\s*)*)${wordAndParts}(?=\s*,|\s+${keyWords.ON}\b)`,
    'gi',
  )
  const onAsStrArgsRegex = new RegExp(
    String.raw`(?<=\b${keyWords.ON}\s+(?:(?!(?:${keywordBndries.join('|')})\b)\S+\s+)*)(?:(?!(?:${keywordBndries.join('|')})\b)\S+|\s+)+`, 'gi'
  )
  // // ON -> to next JOIN as sep chars
  // // follwing ON word != join
  // const onSepArgsRegex = new RegExp(
  //   String.raw`(?<=\b\s+(?:(?!join\b)\S+\s+)*)(?!join\b)\S+`, 'gi'
  // )          
  // takes the args for a single ON and splits it
  const OnSplitRegex = new RegExp(String.raw`${wordAndParts}|(=|>=|<=|<>|>|<|!=|\)|\(|\'.*?\'|\,)`, 'gi')

  this.execute = function (query) {
    const selectArgs = query.match(selectFromRegex)
    console.log('select', selectArgs)
    const fronArgs = query.match(fromJoinRegex)
    console.log('fronArgs', fronArgs)
    const joinArgs = query.match(joinOnRegex)
    console.log('joinArgs', joinArgs)
    // const onSepArgs = query.match(onSepArgsRegex)
    // console.log('onSepArgs', onSepArgs)
    const onStrArgs = query.match(onAsStrArgsRegex)
    console.log('onStrArgs', onStrArgs)
    // split each onArg into sep arr
    const onSplitStrs = onStrArgs?.map(onFullStr => {
      return onFullStr?.match(OnSplitRegex)
    })
    console.log(onSplitStrs)
  }
} 
const movieDatabase = {
  movie: [
    { id: 1, name: 'Avatar', directorID: 1 },
    { id: 2, name: 'Titanic', directorID: 1 },
    { id: 3, name: 'Infamous', directorID: 2 },
    { id: 4, name: 'Skyfall', directorID: 3 },
    { id: 5, name: 'Aliens', directorID: 1 },
  ],
  actor: [
    { id: 1, name: 'Leonardo DiCaprio' },
    { id: 2, name: 'Sigourney Weaver' },
    { id: 3, name: 'Daniel Craig' },
  ],
  director: [
    { id: 1, name: 'James Cameron' },
    { id: 2, name: 'Douglas McGrath' },
    { id: 3, name: 'Sam Mendes' },
  ],
  actor_to_movie: [
    { movieID: 1, actorID: 2 },
    { movieID: 2, actorID: 1 },
    { movieID: 3, actorID: 2 },
    { movieID: 3, actorID: 3 },
    { movieID: 4, actorID: 3 },
    { movieID: 5, actorID: 2 },
  ],
}
const engine = new SQLEngine(movieDatabase)
// const test0 = engine.execute('SELECT avatar FROM movie')
// const test1 = engine.execute('SELECT avatar, goodmorningVietnam FROM movie')
// const test2 = engine.execute(
//   'SELECT Orders.OrderID, people, Customers.CustomerName, Orders.OrderDate FROM Orders, People.id JOIN Customers ON Orders.CustomerID=Customers.CustomerID JOIN Customers ON Orders.CustomerID=Customers.CustomerID',
// )
const test3 = engine.execute(
  "SELECT Orders.OrderID, people, Customers.CustomerName, Orders.OrderDate FROM Orders, People.id JOIN Customers ON (a.id = b.id OR a.x<>b.x)AND c.y!=3 AND(c.a<1 OR c.b>2) AND c.c<=4 AND c.d>=5 AND NOT c.e BETWEEN 1 AND 10 AND c.f NOT IN(1,2, 3) AND c.g IS NOT NULL AND c.h IS NULL AND LOWER(c.i) NOT LIKE 'a b%' AND c.j LIKE'x' JOIN people ON people.stars WHERE 1=1"
)
