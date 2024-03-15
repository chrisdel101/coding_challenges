
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


# if above 15 then sum-constant, if below 15 then 15-sum
def getNeededValue(row_sum):
    magic_constant = 15
    if row_sum >= magic_constant:
        return magic_constant - row_sum
    else:
        return magic_constant - row_sum


def checkDiagonals(s):
    magic_constant = 15
    r1 = s[0]
    r2 = s[1]
    r3 = s[2]

    diag1_sum = r1[0] + r2[1] + r3[2]
    diag2_sum = r1[2] + r2[1] + r3[0]

    if diag1_sum != magic_constant or diag2_sum != magic_constant:
        return False
    return True
def checkCrossSections(s):
    magic_constant = 15
    r1 = s[0]
    r2 = s[1]
    r3 = s[2]
    r1_sum = r1[0] + r1[1] + r1[2]
    r2_sum = r2[0] + r2[1] + r2[2]
    r3_sum = r3[0] + r3[1] + r3[2]
    
    c1_sum = r1[0] + r2[0] + r3[0]
    c2_sum = r1[1] + r2[1] + r3[1]
    c3_sum = r1[2] + r2[2] + r3[2]
    
    
    if r1_sum != magic_constant or r2_sum != magic_constant or r3_sum != magic_constant or c1_sum != magic_constant or c2_sum != magic_constant or c3_sum != magic_constant:
        return False
    return True
def handleCrossSections(s, costs):
    # print("handleCrossSections", s)
    magic_constant = 15
    r1 = s[0]
    r2 = s[1]
    r3 = s[2]
    c1 = [r1[0], r2[0], r3[0]]
    c2 = [r1[1], r2[1], r3[1]]
    c3 = [r1[2], r2[2], r3[2]]
    
    r1_sum = r1[0] + r1[1] + r1[2]
    r2_sum = r2[0] + r2[1] + r2[2]
    r3_sum = r3[0] + r3[1] + r3[2]
    
    c1_sum = r1[0] + r2[0] + r3[0]
    c2_sum = r1[1] + r2[1] + r3[1]
    c3_sum = r1[2] + r2[2] + r3[2]
    # print("r1_sum", r1_sum)
    # print("r2_sum", r2_sum)
    # print("r3_sum", r3_sum)
    # print("c1_sum", c1_sum)
    # print("c2_sum", c2_sum)
    # print("c3_sum", c3_sum)
    # print("s start", s)
    # R1/C2
    r1_sum = r1[0] + r1[1] + r1[2]
    c2_sum = r1[1] + r2[1] + r3[1]
    r1 = s[0]
    c2 = [r1[1], r2[1], r3[1]]
    c3 = [r1[2], r2[2], r3[2]]
    print("r1", r1)
    print("r2", r2)
    print("r3", r3)
    if r1_sum != magic_constant:
        # add to joint
        if r1_sum != 15:
             # find amout it is off
            row_needed = getNeededValue(r1_sum)
            print("flip row1 joint", r1[1] + row_needed)
            costs.append(abs(r1[1] - (r1[1] + row_needed)))
            s[0][1] = r1[1] + row_needed
            print("s HERE", s)
       # add to end of col2
        elif r1_sum == 15 and c2_sum != 15:
            col_needed = getNeededValue(c2_sum)
            print("flip bottom col value", c2[2] + col_needed)
            costs.append(abs(cs2[2] - (c2[2] + col_needed)))
            s[2][1] = c2[2] + col_needed
            print("s", s)
        #   exit(0)
        
    print("costs", costs)
    c1_sum = r1[0] + r2[0] + r3[0]
    c3_sum = r1[2] + r2[2] + r3[2]
    c1 = [r1[0], r2[0], r3[0]]
    print("r1", s[0])
    print("r2", s[1])
    print("r3", s[2])
    # R2/C1 - add to col joint only
    if c1_sum != magic_constant:
        col_needed = getNeededValue(c1_sum)
        # add to joint
        print("flip col1 joint", c1[1] + col_needed)
        costs.append(abs(c1[1] - (c1[1] + col_needed)))
        s[1][0] = c1[1] + col_needed
        print("s", s)
        print("costs", costs)
    c1_sum = r1[0] + r2[0] + r3[0]
    c3_sum = r1[2] + r2[2] + r3[2]
    c1 = [r1[0], r2[0], r3[0]]
    # R2/C3 - add to joint col only
    if c3_sum != magic_constant:
        col_needed = getNeededValue(c3_sum)
        print("flip col3 joint", c3[1] + col_needed)
        costs.append(abs(c3[1] - (c3[1] + col_needed)))
        s[1][2] = c3[1] + col_needed
        print("r1", s[0])
        print("r2", s[1])
        print("r3", s[2])
        print("costs", costs)
    r3_sum = r3[0] + r3[1] + r3[2]
    r3 = s[2]
    # R3/C2 - add to row joint only
    if r3_sum != magic_constant:
        row_needed = getNeededValue(r3_sum)
        # print("row_needed", row_needed)
        print("flip row3 joint", r3[1] + row_needed)
        costs.append(abs(r3[1] - (r3[1] + row_needed)))
        print("costs", costs)
        s[2][1] = r3[1] + row_needed
        print("r1", s[0])
        print("r2", s[1])
        print("r3", s[2])
    
    # if r1_sum != magic_constant or r2_sum != magic_constant or r3_sum != magic_constant or c1_sum != magic_constant or c2_sum != magic_constant or c3_sum != magic_constant:
    return s

def handleMiddleValue(s, costs):
    if s[1][1] != 5:
        needed = abs(s[1][1] - 5)
        current = s[1][1] 
        costs.append(abs(s[1][1] - (s[1][1] + needed)))
        s[1][1] = 5
        print("flip middle from {", current, "} to {", s[1][1], "}")
        print("costs", costs)

def handleDiagonals(s, costs):
    magic_constant = 15
    r1 = s[0]
    r2 = s[1]
    r3 = s[2]
    # print("r1", r1)
    # print("r2", r2)
    # print("r3", r3)
    diag1 = [r1[0], r2[1], r3[2]]
   
    diag1_sum = r1[0] + r2[1] + r3[2]
    possiblities = [[2,5,8],[8,5,2],[4,5,6], [6,5,4]]
    # start with diagonals
    # print("diag_1_sum", r[0], r2[1], r3[2])
    # print("diag1_sum sum", diag1_sum)
    diffs1 = []
    # get all diffs1
    # print(diag1_sum)
    if diag1 not in possiblities:
        for i in range(0, 4):
            first_diff = abs(r1[0] - possiblities[i][0])
            # print("val1", r1[0], possiblities[i][0], first_diff)
            second_diff = abs(r3[2] - possiblities[i][2])
            # print("val2", r3[2], possiblities[i][2],    
            # second_diff)
            diffs1.append((first_diff, second_diff))
        # find cloest match by smallest difference
        smallest_index = diffs1.index(min(diffs1))
        # print("smallest_index", diffs1)
        # print("smallest_index", possiblities[smallest_index])
        # exit(0)
        # print("vals", possiblities)
        # adjust best match to closest possibilty as diagonal 1

        # print("D1 {", r1[0], r2[1], r3[2], "} to {", possiblities[smallest_index][0], r2[1], possiblities[smallest_index][2], "}")
        # print("cost1", abs(r1[0] - possiblities[smallest_index][0]))
        # print("cost2", abs(r3[2] - possiblities[smallest_index][2]))
        costs.append(abs(r1[0] - possiblities[smallest_index][0]))
        costs.append(abs(r3[2] - possiblities[smallest_index][2]))
        s[0][0] = possiblities[smallest_index][0]
        s[2][2] = possiblities[smallest_index][2]
        # options are 0-3
        if smallest_index == 0 or smallest_index == 2:
            # remove original and its reverse
            del possiblities[smallest_index]
            # since index is removed, no plus 1 to remove next 
            del possiblities[smallest_index]
        else:
            # remove original and its reverse
            del possiblities[smallest_index]
            del possiblities[smallest_index - 1]
        # print("possiblities", possiblities)
        # print("costs", costs)
        # print("s", s)
    diffs2 = []
    # since possiblities list might be cut, indexes are no longer consistent
    r2 = s[1]
    r3 = s[2]
    diag2_sum = r1[2] + r2[1] + r3[0]
    diag2 = [r1[2], r2[1], r3[0]]
    if diag2 not in possiblities:
        # loop over all left possiblities
        for i, _ in enumerate(possiblities):
            first_diff = abs(r1[2] - possiblities[i][0])
            # print("val1", r1[2], possiblities[i][0], first_diff)
            second_diff = abs(r3[0] - possiblities[i][2])
            # print("val2", r3[0], possiblities[i][2],    
            # second_diff)
            diffs2.append((first_diff, second_diff))
        # print("diffs2", diffs2)
        smallest_index2 = diffs2.index(min(diffs2))
        # print("smallest_index", smallest_index2)
        # print("vals", possiblities)
        # put in as diagonal 1
        # print("D2 {", r1[2], r2[1], r3[0], "} to {", possiblities[smallest_index2][0], r2[1], possiblities[smallest_index2][2],"}")
        costs.append(abs(r1[2] - possiblities[smallest_index2][0]))
        costs.append(abs(r3[0] - possiblities[smallest_index2][2]))
        s[0][2] = possiblities[smallest_index2][0]
        s[2][0] = possiblities[smallest_index2][2]
        # print(s)
        # print("costs", costs)
    
    # print("r1", r1)
    # print("r2", r2)
    # print("r3", r3)
    # exit(0)

def formingMagicSquare(s):
    costs = []
    copy_s = s
    magic_constant = 15
    r1 = s[0]
    r2 = s[1]
    r3 = s[2]
    
    r1_sum = r1[0] + r1[1] + r1[2]
    r2_sum = r2[0] + r2[1] + r2[2]
    r3_sum = r3[0] + r3[1] + r3[2]
    
    c1_sum = r1[0] + r2[0] + r3[0]
    c2_sum = r1[1] + r2[1] + r3[1]
    c3_sum = r1[2] + r2[2] + r3[2]
    
    diag1_sum = r1[0] + r2[1] + r3[2]
    diag2_sum = r1[2] + r2[1] + r3[0]
    
    handleMiddleValue(s, costs)
    handleDiagonals(s, costs)
    handleCrossSections(s, costs)
    print("r1", s[0])
    print("r2", s[1])
    print("r3", s[2])    
    print(sum(costs))
    return sum(costs)
    

   
# [6, 4, 5]
# [4, 5, 6]
# [5, 6, 4]
if __name__ == '__main__':
    
    result = formingMagicSquare(
        [[2, 9, 8], [4, 2, 7], [5, 6, 7]]
    )
# correct 
# [2, 9, 4]
# [7, 5, 3]
# [6, 1, 8]
# current
# [2, 7, 6]
# [9, 5, 1]
# [4, 3, 8]
    # result = formingMagicSquare(
    #     [[4, 9, 2], [3, 5, 7], [8, 1, 5]]
    # )
   
    # result = formingMagicSquare(
    #     [[7, 6, 5], [7, 2, 8], [5, 3, 4]]
    # )
    # result = formingMagicSquare(
    #     [[4, 9, 2], [3, 5, 7], [8, 1, 5]]
    # )
    # result = formingMagicSquare(
    #     [[4, 4, 7], [3, 1, 5], [1, 7, 9]]
    # )
    # result = formingMagicSquare(
    #     [[2, 2, 7], [8, 6, 4], [1, 2, 9]]
    # )
    
    # result = formingMagicSquare(
    #     [[4, 8, 2], [4, 5, 7], [6, 1, 6]]
    # )
    

   


# Notes:
# - check diagonals first
# - adjust cornmer values then rerun cross sections
# - not working b/c no row cols are equal so this cannot be a check