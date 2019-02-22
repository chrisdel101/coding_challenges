# # #!/usr/bin/env bash

longestConsec(){
    # declare -A asscArr
    inputArr=("$@")
    counter=0
    array=( "$1" )

    # for i in $inputArr; do
    #     echo $i
    # done
   ## Do something with it.
    # echo $array
    # for (( i = 0; i < 3; i++ )); do
    #     echo "${1[i]}"
    # done
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
        mainArr=()
        # put string into ARR
        for i in $inputArr; do
            # make j == outerindex
            # tempStri="i ${i}"
            # echo "tempStri ${tempStri}"
            i="${i}" | tr -d '('
            # echo $i
            mainArr+=($i)
            let "counter=counter + 1"
        done
        # echo "c $counter"
        # mainArr=tr -d '()' <<< "${mainArr[@]}"
        # remove first char
        mainArr=`echo $mainArr | tr -d '('`
        # mainArr[-1]=${mainArr[-1]%?}
        # sed 's/(\([[:alpha:]][[:alpha:]]\))/\1/g'
        # echo "main ${mainArr[@]}"
        for k in "${mainArr[@]}"; do
            tempArr=()
            for (( j = $index; j <  $index + $last; j++ )); do

             # tempStri="k ${k}"
             # echo " ${mainArr[j]}"
             tempStr=${mainArr[j]}
             # echo "tempStr ${tempStr}"
             # echo "temp ${inputArr[j]}"
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
        # echo "n ${n}"
        # inputLen=${#inputArr[*]}
        echo ${counter}
        echo ${last}
        if [ ${last} -gt ${counter} ]
        then
            echo "y"
        elif [ ${last} -eq 0 ]
        then
            echo ""
        elif [ ${counter} -le 0 ]
        then
            echo ""
        else
            echo  "${word}"
        fi

    # for key in ${!asscArr[@]}; do
    #     # echo ${key} ${arr[${key}]}
    # done
}
x=("ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh")
x=("zone" "abigail" "theta" "form" "libe" "zas")
longestConsec "("qqqbooorrrkkkbb" "iiyylllfff" "nnnzzzeeooss" "mwxxx" "mrrrlll" "dzzoox" "kkyyyevvvtt" "tttrrnnnnnyy" "uutxxxggg" "yynnddl" "qrrrrruuqqk")" 11
