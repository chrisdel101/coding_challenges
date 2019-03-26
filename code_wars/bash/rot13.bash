#!/usr/bin/env bash

rot13(){

    arr=()
    for (( i = 0; i < ${#1}; i++ )); do
        # get each letter
        item="${1:$i:1}"
        if [[ $item =~ [[:alpha:]] ]]; then
            # convert to ascii
    # https://unix.stackexchange.com/a/92462/337580
            ascii=$(echo -n ${item} | od -An -tuC)
            # check if upper
            if [[ $item =~ [[:upper:]] ]]; then
                # convert to zero based start
                intVal=$(( $ascii - 65))
                # add 13 and calc to new ascii
    # https://stackoverflow.com/a/8304195/5972531
                calc=$(( ((${intVal} + 13) % 26) + 65 ))
                # back to int
    # https://stackoverflow.com/a/1754931/5972531
                char=$(printf "\x$(printf %x $calc)")
                arr+=$char
            elif [[ $item =~ [[:lower:]] ]]; then
                # convert to zero based start
                intVal=$(( $ascii - 97))
                # add 13 and calc to new ascii
    # https://stackoverflow.com/a/8304195/5972531
                calc=$(( ((${intVal} + 13) % 26) + 97 ))
                # back to int
    # https://stackoverflow.com/a/1754931/5972531
                char=$(printf "\x$(printf %x $calc)")
                arr+=$char
            fi
        else
            arr+=$item
        fi
    done
    echo ${arr[@]}

}
rot13 "i love u!"

# arg1) % 26) + 65;

# int convert = input[i] - 65;
#                         // perform cipher shift
#       int result = ((convert +  arg1) % 26) + 65;
