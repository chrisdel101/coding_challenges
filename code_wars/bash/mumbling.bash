#!/usr/bin/env bash


accum () {
    arr=()
    for (( i = 0; i < ${#1}; i++ )); do
        # get substring - each char or str
        letter="${1:$i:1}"
        # to upper case
        letter=${letter^^}
        arr+=($letter)
        # to lower case
        letter=${letter,,}
        for (( j = 0; j < i; j++ )); do
                # push to arr
                arr+=($letter)
        done
        if [[ $i -lt $(expr ${#1} - 1) ]]; then
            # add hypen
            arr+=("-")
        fi
    done
    concatArr=$(echo ${arr[@]} | sed 's/ //g')
    echo ${concatArr[@]}
}
accum "ZpglnRxqenU"
# accum "abc"
