#!/usr/bin/env bash

twiceAsOld(){
    sonTwice=$(expr $2 \* 2)
    diff=$(expr $1 - $sonTwice)
    # absolute value
    echo ${diff#-}
}
twiceAsOld 55 30
