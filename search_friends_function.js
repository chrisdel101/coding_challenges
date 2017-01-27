var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(friends) {
    for (var key in friends){
        return friends;
    }

}
var search = function(name){
    for (var key in friends){
        if (friends[key].firstName === name){
        console.log(friends[key]);
        return friends[key];
    }
    }
};
list(friends);
