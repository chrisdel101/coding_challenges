# # #!/usr/bin/env bash
# #
# #
# longestConsec(){
#     declare -A arr
#     index=0
#
#     inputArr=("$@")
#     ((last_idx=${#a[@]} - 1))
#     b=${inputArr[last_idx]}
#     unset inputArr[last_idx]
#
#     for i in "${inputArr[@]}"; do
#         echo ${i}
#         arr[$index]=$i
#         let "index=index + 1"
#     done
#     for key in ${!arr[@]}; do
#         echo ${key} ${arr[${key}]}
#     done
# }

testIndex2(){
    var=("$@")
    index=0
    for i in "${var[@]}"; do
        # echo ${i}
        echo ${var[index]}
        let "index=index + 1"
    done
}

arr=("zone" "abigail" "theta" "form" "libe" "zas")
# testIndex2 ${arr[@]}

# longestConsec(){
#     var=("$@")
#     innerIndex=0
#     for i in "${var[@]}"; do
#         echo ${var[innerIndex]}
#             let "innerIndex=innerIndex + 1"
#
#     done
#
# }
longestConsec(){
    inputArr=("$@")
    innerIndex=0
    # remove last elem
    unset 'inputArr[${#inputArr[@]}-1]'

    # while([ $outerIndex -lt  1 ]); do

        # reset inner var each time

        for i in "${inputArr[@]}"; do
            echo ${inputArr[innerIndex+1]}
            # if [ -z ${arr[$innerIndex]} ]; then
            #     arr[$innerIndex]=$i

                # echo "${arr[$innerIndex+1]}"
                # let "innerIndex=innerIndex + 1"
            # else
            #     str=$arr[$innerIndex]$i
                # echo $str
                # echo ${arr[$innerIndex]}
                # echo $str
                # arr[$innerIndex]=$str
                let "innerIndex=innerIndex + 1"
            # fi
            # echo $innerIndex
        done
        # let "outerIndex=outerIndex + 1"
    # done

    # for key in ${!arr[@]}; do
    #     echo ${key} ${arr[${key}]}
    # done
}

x=("zone" "abigail" "theta" "form" "libe" "zas")
longestConsec ${x[@]} 2

# ! /bin/bash
# function f() {
#     a=("$@")
#     ((last_idx=${#a[@]} - 1))
#
#     b=${a[last_idx]}
#     unset a[last_idx]
#
#     for i in "${a[@]}" ; do
#         echo "$i"
#     done
#     echo "b: $b"
# }
#
# x=("one two" "LAST")

# f "("one two" "LAST")"" "$b"
