#!/usr/bin/env bash

japanTime(){
    date=`$1 -v+13H +%Y-%m-%dT%H:%M%0000`
    # now=$(date -d "06:45 today + 105 minutes" +'%H:%M')
    echo $date
    # date=`date '+%FT%T%z'`
    # echo $date
}

japanTime date

# 2017-09-23T00:33+0900
