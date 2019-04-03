#!/usr/bin/env bash

is_sum_of_cubes () {
    strLen=${#1}
    j=0
    previousVal=""
    firstFinalStr=""
    tempStr=""
    push=0
    for (( i = 0; i < $((strLen + 1)) ; i++ )); do
        char="${1:i:1}"
        if [[ $char == [[:digit:]] ]]; then
            if [[ $char == 0 && ($previousVal == 0 || $previousVal == "") && $j == 2 ]]; then
                tempStr+="0 "
                addReset 0 "reset"
                push=1

            elif [[ $char == 0 && ($previousVal == 0 || $previousVal == "") && $j != 2 ]]; then
                push=0
                j=$((j+1))

            elif [[ $char == 0 && $previousVal =~ [1-9] ]]; then
                if [[ "${j}" == 2 ]]; then
                    addReset 0 "reset"
                elif [[ "${j}" == 1 ]]; then
                    tempStr+="0 "
                    j=$((j+1))
                elif [[ $j == 0 ]]; then
                    push=0
                    j=$((j+1))
                fi
                push=1

            elif [[ "${char}" =~ [1-9] && $j == 2 ]]; then
                tempStr+="${char} "
                addReset 0 "reset"
                push=1
            elif [[ "${char}" =~ [1-9] && $j != 2 ]]; then
                tempStr=$(echo ${tempStr//[[:blank:]]/})
                tempStr+="${char} "
                previousVal=""
                j=$((j+1))
            fi

        elif [[ "${char}" != [[:digit:]] || "${char}" == [[:space:]] ]]; then
            if [[ $previousVal == 0 && $push == 0 ]]; then
                tempStr+="0 "
            fi
            if [[ "${tempStr}" != "" ]]; then
                addReset "char" "reset"
            fi
            j=0
            push=0
        fi
        # echo
        previousVal="${char}"
    done
    # add anything left hanging
    firstFinalStr+=" ${tempStr}"

    sum=0
    cubedEach=0
    tempStr=""
    lastFinalStr=""
    for (( i = 0; i < "${#firstFinalStr}"; i++ )); do
        digit=${firstFinalStr:i:1}
        if [[ "${digit}" != [[:space:]] ]]; then
            cubedEach=$(awk -v var="${digit}" 'BEGIN { print (var^3)}')
            sum=$((sum + $cubedEach))
            tempStr+=$digit

        elif [[ "${digit}" == [[:space:]] ]]; then
            if [[ "${sum}" == "${tempStr}" ]]; then
                lastFinalStr+="$tempStr "
            fi
            sum=0
            tempStr=""
        fi
    done

    finalSum=$(sumDigits "${lastFinalStr}")
    if [[ "$lastFinalStr" != "" ]]; then
        echo "${lastFinalStr}${finalSum} Lucky"
    else
        echo "Unlucky"
    fi
}
sumDigits(){
    tempStr=""
    totalSum=0
    for (( i = 0; i < ${#1} ; i++ )); do
        digit=${1:i:1}
        if [[ "${digit}" != [[:space:]] ]]; then
            tempStr+=$digit
        else
            totalSum=$((tempStr + $totalSum))
            tempStr=""
        fi
    done
    echo $totalSum

}
addReset(){
    if [[ "${1}" == 0 && "${2}" == "reset" ]]; then
        j=0
        previousVal=""
        tempStr=$(echo ${tempStr//[[:blank:]]/})
        firstFinalStr+=" ${tempStr}"
        tempStr=""
    elif [[ "${1}" == "char" && "${2}" == "reset" ]]; then
        tempStr=$(echo ${tempStr//[[:blank:]]/})
        firstFinalStr+=" ${tempStr}"
        tempStr=""
    fi
}

# is_sum_of_cubes "0 9026315 -827&()"
# is_sum_of_cubes "Once 1000upon a midnight 110dreary, while100 I pondered, 9026315weak and weary -827&()"
# is_sum_of_cubes "&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1"
# is_sum_of_cubes " 000000midnight 074z&-9026315weak thought"
# is_sum_of_cubes "&&&001z&- 074z&-9926315strong -127&() -827&()"
# is_sum_of_cubes "153000153407000407"
# is_sum_of_cubes "000000tired 316298.298I -827&() -127&()"
# is_sum_of_cubes "000407tired 1037z&-9926315strong I -827&()"
#

is_sum_of_cubes "&&&001z&- 074z&-9926315strong -127&() -827&()"
is_sum_of_cubes "153000153407000407"
is_sum_of_cubes "000000tired 316298.298I -827&() -127&()"
is_sum_of_cubes "000407tired 1037z&-9926315strong I -827&()"
#
