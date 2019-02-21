#!/bin/bash
#
arr=(121 144 19 161 19 144 19 11)
str="121, 144, 19, 161, 19, 144, 19, 11"
# b=(121, 14641, 20736, 361, 25921, 361, 20736, 361)
#
# comp(){
#     # echo $1
# }
# comp "121, 144, 19, 161, 19, 144, 19, 11" "121, 14641, 20736, 361, 25921, 361, 20736, 361"
# comp "${arr[@]}"
# acces string syntax
# comp "$str"
# access array syntax
# comp ${arr[2]}
# print full array
# comp "${arr[*]}"
# arr.length
echo "${#arr[*]}"
echo $arr
# to add to array
# arr[8]= 100
# echo "${arr[*]}"
# do to math
# echo $(expr 2 \* 2)
