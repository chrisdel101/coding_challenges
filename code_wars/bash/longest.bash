# # #!/usr/bin/env bash

testIndex2(){
    declare -A asscArr

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
    declare -A asscArr
    inputArr=("$@")
    index=0
    for last; do true; done
    finalIndex=0
    highestLen=0
    word=""
    # finalIndex="inputArr[${#inputArr[@]}-1]"
    # remove last elem
    unset 'inputArr[${#inputArr[@]}-1]'

    # while([ $index -lt  2 ]); do
        # echo $last
    innerIndex=0
    # echo $index
        # reset inner var each time
        for i in "${inputArr[@]}"; do
            # make j == outerindex
            tempArr=()
            for (( j = $index; j <  $index + $last; j++ )); do

             # asscArr[$j]=$i
             tempStr="${inputArr[j]}"
             # echo "${j} ${inputArr[j]}"
             # echo "temp ${tempStr}"
             tempArr+=($tempStr)
                # echo "${inputArr[innerIndex]} ${inputArr[innerIndex+1]} ${inputArr[innerIndex+2]}"
                let "innerIndex=innerIndex + 1"
            done
            # echo "TEMP ARR: ${tempArr[@]}"
            # concat all letters together
            concatArr=$(echo ${tempArr[@]} | sed 's/ //g')
            # echo "concat ${concatArr}"
            # get the length
            len=${#concatArr}
            # echo "len: ${len}"
            # echo "Highest:${highestLen}"
            if [[ $len -gt $highestLen ]]; then

            finalIndex=$index
            word=${concatArr}
            highestLen=$len
            # echo "reassign high: ${highestLen}"
                # echo $len
            fi

            # echo ${#tempArr[@]}
            # if [ -z ${arr[$innerIndex]} ]; then
            #

                # echo "${arr[$innerIndex+1]}"
                # let "innerIndex=innerIndex + 1"
            # else
            #     str=$arr[$innerIndex]$i
                # echo $str
                # echo ${arr[$innerIndex]}
                # echo $str
                # arr[$innerIndex]=$str
                # let "innerIndex=innerIndex + 1"
            # fi
            # echo $innerIndex
            let "index=index + 1"
        done
        # echo "HighestHighest:${highestLen}"
        # echo "finalINdex: ${finalIndex}"
    # done
        echo "WORD ${word}"

    # for key in ${!asscArr[@]}; do
    #     # echo ${key} ${arr[${key}]}
    # done
}
# x=("ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh")
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
