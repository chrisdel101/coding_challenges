#!/usr/bin/env bash


is_sum_of_cubes () {
    strLen=${#1}
    j=0
    tempArr=()
    cubed=()
    endArr=()
    # one extra loop to get last char
    for (( i = 0; i < $((strLen)); i++ )); do
        char="${1:i:1}"
        # echo $char
        # echo $strLen
        # echo j $j
        # echo i $i
        # echo TOP "${tempArr[@]}"
        # -if digit check if cubic
            # -push to string
            # -loop over string
            # -cube each number and push res to var
            # -compare to val
        # if another number, combine and check again
        # if non digit after digit, reset count
        # if 3 non digits combine cubic push to str or reset
        # if [[ $char != [[:digit:]] ]]; then
        #     echo $char
        # fi
        # digit and less than and not the last item
        if [[ $char == [[:digit:]] && ${j} -lt 3 && ${i} != $((strLen-1)) ]]; then
            # echo j $j
                echo digit
                echo char $char

            tempArr[j]=$char
            # echo tempArr "${tempArr[@]}"
            tempTotal=0
            # if some left in tempArr at end
            # if [[ ${i} == $((strLen-1)) ]]; then
            #     echo
            # fi
            # echo
            # echo TS $tempArr
            j=$((j + 1))
        # digit and 3 or greater
        # it not digit, or if a digit and last item
    elif [[ ${j} -ge 3  || ${char} == [[:space:]] || (${char} == [[:digit:]] && ${i} == $((strLen-1))) ]]; then
            echo CCs $char
            # echo $i
            # echo $((strLen-1))
            # echo $j
            # empty and reset
            # if [[ $char == [[:digit:]] ]]; then
            #
            # fi
            # check arr her
            # echo space/char
            len="${#tempArr[@]}"
            # echo
            # echo len $len
            # check if arr exists then loop over
            sum=0
            # length of temp arr
            tempLen="${#tempArr[@]}"
            # if last run, add final digit to end of array manually
            if [[ ${i} == $((strLen-1)) ]]; then
                # tempArr[j]=$char
                # echo last run
                # echo $char
                tempArr[tempLen]+=$char
                # echo "${tempArr[@]}"

            fi
            # echo hereLen $len
            if [[ $len -gt 0 ]]; then
                # echo whats in temp arr "${tempArr[@]}"
                # cube each digit and add to sum
                for (( k = 0; k < $((tempLen + 1)); k++ )); do
                    # echo K "${tempArr[k]}"
                    cubedEach=$(awk -v var="${tempArr[k]}" 'BEGIN { print (var^3)}')

                    # echo cubed $cubedEach
                    # add each digit to each other
                    sum=$((cubedEach + $sum))
                done
                # echo SUM $sum
                # join array
                # echo all "${tempArr[@]}"
                # convert arr/num to string
                num=$(printf "%s" "${tempArr[@]}")
                # echo NUM $num
                # if each nums sum equal it's cubic, add to str
                if [[ $sum -eq $num ]]; then
                    # echo EQUAL $endArr
                    endArrLen="${#endArr[@]}"
                    # no comma at start of string
                    # if [[ $endArrLen -eq 0 ]]; then
                    #     endArr+=$num
                    # else
                        # comma between every num
                        endArr+=,$num
                    # fi
                    # echo push to endArr $eachChar "${endArr[@]}"
                fi
                # reset j emty arr
                # echo reset
                j=0
                tempArr=()
                # if current is a digit then start new array here and swing around to top
                if [[ $char == [[:digit:]] ]]; then
                    tempArr[j]=$char
                    j=$((j + 1))
                    # echo 3r digit "${tempArr[@]}"
                fi
            fi
            # if last item in array is digit
            if [[ $len -eq 0 && ${i} == $((strLen-1)) ]]; then
                # echo LAST
                # echo $char
                # for (( k = 0; k < $((tempLen + 1)); k++ )); do
                    # echo K "${char}"
                    cubedEach=$(awk -v var="${char}" 'BEGIN { print (var^3)}')

                    # echo cubed $cubedEach
                    # add each digit to each other
                    sum=$((cubedEach + $sum))
                    # echo S $sum
                # done
                # echo SUM $sum
                # join array
                # echo "${tempArr[@]}"
                # convert arr/num to string
                num=$(printf "%s" "${tempArr[@]}")
                # echo NUM $num
                # if each nums sum equal, add to str
                if [[ $sum -eq ${char} ]]; then
                    # echo $num equal
                    endArrLen="${#endArr[@]}"
                    # no comma at start of string

                        # comma between every num
                        endArr+=,$char

                fi
            fi
        fi
    done
    finalSum=0
    tempStr=""
    finalLen="${#endArr}"
    finalStr=""
    # echo FINAL LEN "${finalLen}"
    # should be comma'd string
    echo Second Part Arr "${endArr[@]}"
    if [[ $finalLen -gt 0 ]]; then
        for (( m = 0; m < $((finalLen + 1)); m++ )); do
            eachDigit="${endArr:$m:1}"
            echo ED $eachDigit
            # strip leading comma only if len more than 1 digit
            zeroesOnlyRegex=',0+'
            # zeroes followed by digit
            zeroesDigitRegex=',0+[1-9]'
            # if starts with comma zero
                if  [[ "$endArr{m}" =~ $zeroesDigitRegex ]]; then
                    echo ZEROS echo ${endArr[m]}
                    endArr=$(echo "${endArr[m]}" | sed 's/,0*//')
                    echo ZEROS echo ${endArr[m]}
                    finalStr[m]="${eachDigit} "
                elif [[ ! "$endArr{m}" =~ $zeroesDigitRegex && "$endArr{m}" =~ $zeroesOnlyRegex ]]; then
                finalStr[m]="0 "
                    # nonZero=0
                    while [[ $zeros -eq 0 ]]; do
                           zeroTest="${endArr:$p:1}"
                           echo zeroTest $zeroTest
                           # subtract removed digits from loop len
                           echo above
                           if [[ $zeroTest =~ '[1-9]+' ]]; then
                               nonZero=1
                           fi
                           # stop loop on comma - no nums
                           if [[ $zeroTest == "," ]]; then
                               echo nonZero $nonZero
                               # if all zeroes, leave one zero
                               # echo 'all zeroes'
                               endArr=$(echo "${endArr}" | sed 's/^,0*//')
                               # add back one removed zero
                               # endArr="0${endArr}"
                               # finalLen=$((finalLen - $(p -1)))
                               echo arr ${endArr}
                             if [[ ! "$endArr{m}" =~ $zeroesOnlyRegex ]]; then

                                 echo Match
                                 zeros=1
                             fi
                               # endArr="0${endArr}"
                               echo ENDEND $endArr
                           # if hits non-zero digit - remove all zeroes
                           elif [[ $zeroTest != "," && $zeroTest != 0 ]]; then
                               echo B "${zeroTest}"
                               # strip all leadng zeros
                               # finalLen=$((finalLen - $p))
                               endArr=$(echo "${endArr}" | sed 's/^0*//')
                               echo A "${endArr[@]}"
                               zeros=1
                           fi
                           p=$((p + 1))
                       done
                    echo ZEROS echo ${endArr[@]}
                    endArr=$(echo "${endArr[m]}" | sed 's/,0*//')
                    endArr="0${endArr}"
                    echo M $m

                    echo ZEROS echo ${endArr[@]}
                fi
        eachChar="${endArr:$m:1}"
            # echo EACH char $eachChar
            # echo ARR "${endArr}"
            # echo m "$m"
            # digits get added to a str
            # if a digit and not the final char
            if [[ $eachChar == [[:digit:]] && $m != $finalLen ]]; then
                tempStr+=$eachChar
                # echo E $tempStr
                # echo E $eachChar
            elif [[ $eachChar != [[:digit:]] ]]; then
                # when string done add to total
                # echo ELSE $tempStr
                finalSum=$(($finalSum + tempStr))
                tempStr=""
            elif [[ $eachChar == [[:digit:]] && $m == $finalLen ]]; then
                # echo final
                # add to tempstr
                tempStr+=$eachChar
                # add to final
                finalSum=$(($finalSum + tempStr))
                # echo sum $finalSum
                tempStr=""
            fi
        done
        echo $finalStr
        echo "${endArr//,/ } ${finalSum} Lucky"
    else
        echo "Unlucky"
    fi

}


# is_sum_of_cubes "000aloquit 704wxcv&z371 upon weary"
# is_sum_of_cubes "&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1"
# is_sum_of_cubes "000000midnight 074z&-9026315weak thought"
is_sum_of_cubes "&&&001z&- 074z&-9926315strong -127&() -827&()"
# is_sum_of_cubes "000371298.298 1037&az&and upon dreary,"
# is_sum_of_cubes "000000tired 316298.298I -827&() -127&()"
# is_sum_of_cubes "000407tired 1037z&-9926315strong I -827&()"
#
