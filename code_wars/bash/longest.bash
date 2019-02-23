# # #!/usr/bin/env bash

longestConsec(){
    inputArr=("$@")
    counter=0
    array=( "$1" )
    index=0
    # set last item to var last
    for last; do true; done
    finalIndex=0
    highestLen=0
    finalWord=""
    # remove last elem
    unset 'inputArr[${#inputArr[@]}-1]'
        # reset inner var each time
        mainArr=()
        # put input string into ARR
        for i in $inputArr; do
            # add to arr
            mainArr+=($i)
            # counter for lenghth
            let "counter=counter + 1"
        done
        # remove first char
        mainArr=`echo $mainArr | tr -d '('`
        # loop over new arr
        for k in "${mainArr[@]}"; do
            tempArr=()
            for (( j = $index; j <  $index + $last; j++ )); do
                 tempStr=${mainArr[j]}
                 # add to new arr
                 tempArr+=($tempStr)
            done
            # concat all letters together
            concatArr=$(echo ${tempArr[@]} | sed 's/ //g')
            # get the length of conacted str
            len=${#concatArr}
            # fing longest str
            if [[ $len -gt $highestLen ]]; then
                finalIndex=$index
                finalWord=${concatArr}
                highestLen=$len
            fi
            let "index=index + 1"
        done

        if [ ${last} -gt ${counter} ]
        then
            echo ""
        elif [ ${last} -eq 0 ]
        then
            echo ""
        elif [ ${counter} -le 0 ]
        then
            echo ""
        else
            echo  "${finalWord}"
        fi
}
x=("ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh")
x=("zone" "abigail" "theta" "form" "libe" "zas")
longestConsec "("qqqbooorrrkkkbb" "iiyylllfff" "nnnzzzeeooss" "mwxxx" "mrrrlll" "dzzoox" "kkyyyevvvtt" "tttrrnnnnnyy" "uutxxxggg" "yynnddl" "qrrrrruuqqk")" 11
