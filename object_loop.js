var objs = [
  {itemCd: "DB_FILL", name: {en: "Baked Fill", fr: "Fourrés"}, categoryCd: "DONUT", auditProps: {updatedDateTime: 1407762856352, updatedUserId: ""}, seq: 100},
  {itemCd: "DF_BOSTON", name: {en: "Boston Cream", fr: "Crème Boston"}, categoryCd: "DONUT", auditProps: {updatedDateTime: 1407762856352, updatedUserId: ""}, seq: 101},
  {itemCd: "DF_VANILLA", name: {en: "Vanilla Cream", fr: "Vanilla Cream"}, categoryCd: "DONUT", auditProps: {updatedDateTime: 1407762856352, updatedUserId: ""}, seq: 102}
];
for(var i= 0;i < objs.length;i++){
  var item =  (objs[i].itemCd)
  var name = (objs[i].name)
  var category = (objs[i].categoryCd)
  var props = (objs[i].auditProps)
  var seq = (objs[i].seq)
}
console.log(seq)

create page properties
-li , span, etc
- loop put each prop into var
- then push the var onto the page
