#!/usr/bin/env bash

# makes string of 3 nums and all nums outside the group
is_sum_of_cubes1 () {
    # get len of string
    len=${#1}
    j=0
    digitsInRow=0
    arr=()
    cubeStr=""
    previousDiff=0
    for (( i = 0; i < len; i++ )); do
        # get each letter
        char="${1:$i:1}"
        currentDiff=$(($i - $j))
        echo $char
        # echo i $i
        # echo j $j
        echo "currentDiff ${i} - ${j}" $currentDiff
        echo previousDiff $previousDiff
        echo CUBE $cubeStr
        if [[ $char == [[:digit:]] && "$i" != $((len - 1)) ]]; then
            echo ARR: "${arr[@]}"
            # always run the first number through
            if [[ $j -eq 0 ]]; then
                echo First Run: push $char
                echo j $j
                arr[j]=$char
                j=$((j+1))
            # if increment j++ makes dif equal to last
            elif [[ $(($i- (j+1))) -eq $previousDiff && $j -eq 1 ]]; then
                echo second run: push $char
                echo j $j
                arr[j]=$char
                j=$((j+1))
            elif [[ $j -ge 2 ]]; then
                echo third run: push $char
                echo j $j
                arr[j]=$char
                echo ARR: "${arr[@]}"
                #     # https://stackoverflow.com/questions/28436415/how-to-assign-awk-result-to-an-variable
                cubed=$(awk -v var1="${arr[0]}" -v var2="${arr[1]}" -v var3="${arr[2]}" 'BEGIN { print (var1^3) + (var2^3) + (var3^3)  }')

                    combine=$(printf "%s" "${arr[@]}")
                    echo combine: $combine
                    echo cubed: $cubed
                    if [[ $combine -eq $cubed ]]; then
                        # only space at start of the string
                        if [[ "${#cubeStr}" -eq 0 ]]; then
                            cubeStr+=$(printf "%s" "${arr[@]}")
                            echo "first concat; no space"
                        else
                            cubeStr+=$(printf "%s" " ${arr[@]}")
                            echo "other concat; add space"

                        fi
                        echo LEN "${#cubeStr}"
                    fi
                    # echo CA "${cubeStr}"
                    j=0
                    arr=()
            else
                #delete prob
                echo not a digit: reset
                j=0
                arr=()
            fi
        # if hits a non-digit before getting 3 digits
        elif [[ $char != [[:digit:]] && "${j}" != 0 ]]; then
            cubeStr+=$(printf "%s" " ${arr[@]}")
            echo "Add lone digits"
            j=0
            arr=()
        # if hits end before getting three digits
    elif [[ $i -eq $((len - 1)) ]];then
            cubeStr+=$(printf "%s" " ${arr[@]}")
            echo "Add end digits"
            j=0
        fi
        previousDiff=$(($i - $j))
    done
    # echo Len: $len i: $i
    echo CUBE $cubeStr
}
is_sum_of_cubes "&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1"
