#!/bin/bash

time=$1
# awk -v var="$time" 'BEGIN {print int(var * 0.5)}'

# awk 'BEGIN { a = 50; b = 20; print "(a + b) = ", (a + b) }'
# declare $(awk 'BEGIN { print "dailyRate=$3/36000"}')
var=$( echo "(2+3)" | awk '{print $3}') => 5
# a=$(echo $1 | awk '{print $1;}' )

declare $(awk -v var="$1" 'BEGIN{print "dailyRate=var"}')
# variable="line one\nline two"
# awk -v var="$1" 'BEGIN {print var}'
# awk -v var="$1" 'BEGIN{print "dailyRate=var"}'
echo $a
