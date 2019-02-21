#!/bin/bash

time=$1
awk -v var="$time" 'BEGIN {print int(var * 0.5)}'
