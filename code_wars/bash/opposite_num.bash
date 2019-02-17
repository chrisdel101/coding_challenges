#!/bin/bash

opposite(){
    if [[ $1 -lt 0 ]]; then
        echo $(expr $1 \* -1 )
    else
        echo $(expr $1 \* -1)
    fi
}

opposite -5
