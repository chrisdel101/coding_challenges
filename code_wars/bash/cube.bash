#!/bin/bash

length=$1
width=$2
height=$3
awk -v var1="$length" -v var2="$width" -v var3="$height" 'BEGIN { print var1 * var2 * var3 }'
