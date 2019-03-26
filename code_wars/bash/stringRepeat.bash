#!/usr/bin/env bash

repeat(){
    str=""
    times=$1
    string=$2
    for (( i = 0; i < "${1}"; i++ )); do
        str+=$2
    done
    echo $str

}
repeat 3 "Hello"


# echo $(printf $2%.0s $(seq 1 $1))
