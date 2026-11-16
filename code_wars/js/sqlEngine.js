// ?= lookahead - matches if followed by
// ?<= lookbehind - matches if precded by
// ?: non-capturing group - match all instances 
function SQLEngine(database){ 
  // word 0+ word parts like .
  const wordAndParts = /\w+(?:\.\w+)*/.source
  // any word if preceded by 'select' 0+space word 0+space comma 0+space
  // any 0+space if followed by comma or 1+space 'from' no match after
  const selectFromRegex = new RegExp(String.raw`(?<=\bselect\s+(?:${wordAndParts}\s*,\s*)*)${wordAndParts}(?=\s*,|\s+from\b)`, 'gi')
  // any word if preceded by 'from' 0+space word 0+space comma 0+space
  // any 0space+ if followed by comma or 1space+ 'join' or end of line $
  const FromJoinRegex = new RegExp(String.raw`(?<=\bfrom\s+(?:${wordAndParts}\s*,\s*)*)${wordAndParts}(?=\s*,|\s+join\b|\s*$)`, 'gi')
  this.execute = function(query){
    const selectArgs = query.match(selectFromRegex)
    console.log('select', selectArgs)
    const fronArgs = query.match(FromJoinRegex)
    console.log('fronArgs', fronArgs)
  }
  
}
const movieDatabase = {
  movie: [
    { id: 1, name: 'Avatar', directorID: 1 },
    { id: 2, name: 'Titanic', directorID: 1 },
    { id: 3, name: 'Infamous', directorID: 2 },
    { id: 4, name: 'Skyfall', directorID: 3 },
    { id: 5, name: 'Aliens', directorID: 1 }
  ],
  actor: [
    { id: 1, name: 'Leonardo DiCaprio' },
    { id: 2, name: 'Sigourney Weaver' },
    { id: 3, name: 'Daniel Craig' },
  ],
  director: [
    { id: 1, name: 'James Cameron' },
    { id: 2, name: 'Douglas McGrath' },
    { id: 3, name: 'Sam Mendes' }
  ],
  actor_to_movie: [
    { movieID: 1, actorID: 2 },
    { movieID: 2, actorID: 1 },
    { movieID: 3, actorID: 2 },
    { movieID: 3, actorID: 3 },
    { movieID: 4, actorID: 3 },
    { movieID: 5, actorID: 2 },
  ]
};
const engine = new SQLEngine(movieDatabase);
const test0 = engine.execute('SELECT avatar FROM movie');
const test1 = engine.execute('SELECT avatar, goodmorningVietnam FROM movie');
const test2 = engine.execute('SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate FROM Orders, People.id JOIN Customers ON Orders.CustomerID=Customers.CustomerID');

