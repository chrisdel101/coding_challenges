#!/usr/bin/env bash
#
# testIndex1(){
#     var=$1
#     for (( i = 0; i < 10; i++ )); do
#         echo "${var[i]}"
#     done
# }

# testIndex1 "("zone" "abigail" "theta" "form" "libe" "zas")"

# testIndex2(){
#     var=("$@")
#     index=0
#     for i in "${var[@]}"; do
#         # echo ${i}
#         echo ${var[index]}
#         let "index=index + 1"
#     done
# }
#
# arr=("zone" "abigail" "theta" "form" "libe" "zas")
# testIndex2 ${arr[@]}


function getParam() {
   arr=("$@")
   for i in "${arr[@]}";
   do
      echo $i #works - print array item
   done

   var=$2
   echo $var #not working - returns two; I want 3
}

array=('one' 'two' 'three')

getParam "${array[@]}" 3
