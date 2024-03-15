#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'formingMagicSquare' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY s as parameter.
#
# Assume magic num is 15

def formingMagicSquare(s):
    copy_s = s
    magic_constant = 15
    r1 = copy_s[0]
    r2 = copy_s[1]
    r3 = copy_s[2]
    
    r1_sum = r1[0] + r1[1] + r1[2]
    r2_sum = r2[0] + r2[1] + r2[2]
    r3_sum = r3[0] + r3[1] + r3[2]
    
    c1_sum = r1[0] + r2[0] + r3[0]
    c2_sum = r1[1] + r2[1] + r3[1]
    c3_sum = r1[2] + r2[2] + r3[2]
    
    diag_1 = r1[0] + r2[1] + r3[2]
    diag_2 = r1[2] + r2[1] + r3[0]
    
    # print('r1', r1_sum)
    # print('c1', c1_sum)
    # print('r2', r2_sum)
    # print('c2', c2_sum)
    # print('r3', r3_sum)
    # print('c3', c3_sum)
    
    # find the row/cols that match
    if r1_sum == c1_sum:
        if r1_sum != magic_constant:
            print(r1)
            left = r1[1] + r1[2]
            print("left", left)
            val_needed = magic_constant - left
            print("val_needed", val_needed)
            # subtact top corner from needed
            cost = abs(r1[0]-val_needed)
            print("cost1", cost)
            #change val in square
            r1[1] = val_needed
    elif r1_sum == c2_sum: 
        if r1_sum != magic_constant:
            left = r1[0] + r1[2]
            val_needed = magic_constant - left
            # subtact top middle from needed
            cost = abs(r1[1]-val_needed)
            print("cost2", cost)
    elif r1_sum == c3_sum: 
        if r1_sum != magic_constant:
            left = r1[0] + r1[1]
            val_needed = magic_constant - left
            # subtact top end from needed
            cost = abs(r2[1]-val_needed)
            print("cost3", cost)
    if r2_sum == c1_sum:
        if r2_sum != magic_constant:
            left = r2[1] + r2[2]
            val_needed = magic_constant - left
            # subtact top middle from needed
            cost = abs(r2[0]-val_needed)
            print("cost4", cost)
    elif r2_sum == c2_sum: 
        if r2_sum != magic_constant:
            left = r2[0] + r2[2]
            val_needed = magic_constant - left
            # subtact top middle from needed
            cost = abs(r2[1]-val_needed)
            print("cost5", cost)
    elif r2_sum == c3_sum: 
        if r2_sum != magic_constant:
            left = r2[0] + r2[1]
            val_needed = magic_constant - left
            # subtact top middle from needed
            cost = abs(r2[2]-val_needed)
            print("cost6", cost)
    if r3_sum == c1_sum:
        if r3_sum != magic_constant:
            left = r3[1] + r2[2]
            val_needed = magic_constant - left
            # subtact top middle from needed
            cost = abs(r3[0]-val_needed)
            print("cost7", cost)
    elif r3_sum == c2_sum:
        if r3_sum != magic_constant:
            left = r3[0] + r2[2]
            val_needed = magic_constant - left
            # subtact top middle from needed
            cost = abs(r3[1]-val_needed)
            print("cost8", cost)
    elif r3_sum == c3_sum:
        if r3_sum != magic_constant:
            left = r3[0] + r2[1]
            val_needed = magic_constant - left
            # subtact top middle from needed
            cost = abs(r3[1]-val_needed)
            print("cost9", cost)
    
 

    # check r1 and c1 equal
    # check r and c1 equal
    # check r1 and c1 equal
    
    # Write your code here

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = []

    for _ in range(3):
        s.append(list(map(int, input().rstrip().split())))

    result = formingMagicSquare(s)

    fptr.write(str(result) + '\n')

    fptr.close()
