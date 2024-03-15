
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

def between_0_and_9(num):
    print("num", num)
    return num > 0 and num < 9

def addOrSubractFromCell(row_sum, cell, needed):
    magic_constant = 15
    if row_sum >= magic_constant:
        return cell - needed
    else:
        return cell + needed

def addOrSubtractFromRow(x, needed):
    magic_constant = 15
    return (x + needed) if (x + needed == magic_constant) else (x - needed)

# if above 15 then sum-constant, if below 15 then 15-sum
def getNeededValue(row_sum):
    magic_constant = 15
    if row_sum >= magic_constant:
        return row_sum - magic_constant
    else:
        return magic_constant - row_sum


def checkDiagonals(s):
    magic_constant = 15
    r1 = s[0]
    r2 = s[1]
    r3 = s[2]

    diag_1 = r1[0] + r2[1] + r3[2]
    diag_2 = r1[2] + r2[1] + r3[0]

    if diag_1 != magic_constant or diag_2 != magic_constant:
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
    print("handleCrossSections", s)
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
    print("r1_sum", r1_sum)
    print("r2_sum", r2_sum)
    print("r3_sum", r3_sum)
    print("c1_sum", c1_sum)
    print("c2_sum", c2_sum)
    print("c3_sum", c3_sum)

    
    diag_1 = r1[0] + r2[1] + r3[2]
    diag_2 = r1[2] + r2[1] + r3[0]

    print("diag_1", diag_1)
    print("diag_2", diag_2)
# 4 8 2
# 4 5 7
# 6 1 6

    #  check T btw r1 & c2
    if r1_sum != magic_constant and r1_sum == c2_sum:
        # this assumes less than
        needed = magic_constant - r1_sum
        # print("r1_sum", r1_sum)
        # print("c2_sum", c2_sum)
        # print("r1[1]", r1[1])
        # print("needed", needed)
        # print("needed1", r1_sum+ needed)
        # if needed adds to constant add to top corner
        if r1_sum + needed == magic_constant:
            # print("r1_sum + needed", r1_sum + needed)
            # add to middle of r1
            print("flip top middle val to", r1[1] + needed)
            s[0][1] = r1[1] + needed
            costs.append(abs(r1[1] - (r1[1] + needed)))
            print("s", s)
    #  check T btw r2 & c3
    if r2_sum != magic_constant and r2_sum == c3_sum:
        # this assumes less than
        needed = magic_constant - r2_sum
        # print("r1_sum", r1_sum)
        # print("c3_sum", c3_sum)
        # print("r1[1]", r1[1])
        print("needed2", needed)
        # print("needed1", r1_sum+ needed)
        # if needed adds to constant add to top corner
        if r2_sum + needed == magic_constant:
            # print("r2_sum + needed", r2_sum + needed)
            # add to end of r2
            print("flip mid end to", r2[2] + needed)
            s[1][2] = r2[2] + needed
            costs.append(abs(r2[2] - (r2[2] + needed)))
            print("s", s)
    #  check T btw r2 & c1
    if r2_sum != magic_constant and r2_sum == c1_sum:
        print("HERE")
        # this assumes less than
        needed = magic_constant - r2_sum
        # print("r1_sum", r1_sum)
        # print("c3_sum", c3_sum)
        # print("r1[1]", r1[1])
        # print("needed2", needed)
        # print("needed1", r1_sum+ needed)
        # if needed adds to constant add to top corner
        if r2_sum + needed == magic_constant:
            # print("r2_sum + needed", r2_sum + needed)
            # print("s", s)
            print("flip mid start to", r2[0] + needed)
            # add to end of r2
            s[1][0] = r2[0] + needed
            costs.append(abs(r2[0] - (r2[0] + needed)))
            print("s", s)
    #  check T btw r3 & c2
    if r3_sum != magic_constant and r3_sum == c2_sum:
        # this assumes less than
        needed = magic_constant - r3_sum
        # print("r3_s3m", r1_sum)
        # print("c2_sum", c2_sum)
        # print("r1[1]", r1[1])
        print("needed3", needed)
        # print("needed1", r1_sum+ needed)
        # if needed adds to constant add to top corner
        if r3_sum + needed == magic_constant:
            # print("r3_sum + needed", r3_sum + needed)
            # add to end of r2
            print("flip last row mid val to", r3[1] + needed)
            s[2][1] = r3[1] + needed
            costs.append(abs(r3[1] - (r3[1] + needed)))
            print("s", s) 
    else:
        print("no equal matches")
        # flip row 1 middle
        if r1_sum != magic_constant:
            needed = getNeededValue(r1_sum)
            print('needed', needed)
            x = addOrSubtractFromRow(r1[1], needed)
            print('x', x)
            s[0][1] = r1[1] + needed
            print("s", s)
            
    return s

def formingMagicSquare(s):
    costs = []
    copy_s = s
    magic_constant = 15
    r1 = s[0].copy()
    r2 = s[1].copy()
    r3 = s[2].copy()
    
    r1_sum = r1[0] + r1[1] + r1[2]
    r2_sum = r2[0] + r2[1] + r2[2]
    r3_sum = r3[0] + r3[1] + r3[2]
    
    c1_sum = r1[0] + r2[0] + r3[0]
    c2_sum = r1[1] + r2[1] + r3[1]
    c3_sum = r1[2] + r2[2] + r3[2]
    
    diag_1 = r1[0] + r2[1] + r3[2]
    diag_2 = r1[2] + r2[1] + r3[0]
    
    # diag1_failed = False
    # diag2_failed = False

    # start with diagonals
    print("diag_1", diag_1)
    if diag_1 != magic_constant:
        print("diag_1", diag_1)
        needed = getNeededValue(diag_1)
        # check top left corner - see if it equalizes r1 c1
        if r1_sum != magic_constant and r1_sum == c1_sum:
            print("r1_sum", r1_sum)
            print("r1[0]", r1[0])
            print("needed", needed)
            # print("needed1", r1_sum+ needed)
            # if needed adds to constant, add to top left corner
            if r1_sum + needed == magic_constant:
                print("r1[0] + needed", r1_sum + needed)
                # reassign new val to top corner
                s[0][0] = r1[0] + needed
                costs.append(abs(r1[0] - (r1[0] + needed)))
                print("s", s)
                print("r1", r1)
        # check bottom right corner - see if it equalizes r3 c3
        elif r3_sum != magic_constant and r3_sum == c3_sum:
            print("r3_sum", r3_sum)
            print("r3[2]", r3[2])
            print("needed", needed)
             # if needed adds to constant add to top corner
            if r3_sum + needed == magic_constant:
                print("r3[0] + needed", r3_sum + needed)
                # add needed to top corner
                s[2][2] = r3[2] + needed
                costs.append(abs(r3[2] - (r3[2] + needed)))
                print("s", s)
        # row/cols cannot be equalized 
        else:
            # diag1_failed = True
            print("no match diag_1")
    # # start with diagonals
    if diag_2 != magic_constant:
        print("diag_2", diag_2)
        needed = getNeededValue(diag_2)
        print("needed", needed)
        # check top right corner 
        if r1_sum != magic_constant and r1_sum == c3_sum:
            print("r1_sum!", r1_sum)
            print("r1[2]", r1[2])
            print("needed", needed)
            # print("needed1", r1_sum+ needed)
            # if needed adds to constant add to top corner
            if r1_sum + needed == magic_constant:
                print("rr1_sum + needed", r1_sum + needed)
                # add needed to top right corner
                s[0][2] = r1[0] + needed
                costs.append(abs(r1[0] - (r1[0] + needed)))
                print("s", s)
         # check bottom left corner 
        elif r3_sum != magic_constant and r3_sum == c1_sum:
            print("r3_sum", r3_sum)
            print("r3[0]", r3[0])
            print("needed", needed)
             # if needed adds to constant add to top corner
            if r3_sum + needed == magic_constant:
                print("r3_sum + needed", r3_sum + needed)
                # add needed to top corner
                s[2][0] = r3[2] + needed
                costs.append(abs(r3[2] - (r3[2] + needed)))
                print("s", s)
         # row/cols cannot be equalized 
        else:
            # diag2_failed = True
            print("no match for diag_2")

    # assign cross sections to fix diagonals
    i = 0
    while checkDiagonals(s) == False and i < 1:   
        # print("checkDiagonals false s", s)
        if diag_1 != magic_constant:
            print("diag1_failed",)
            needed = magic_constant - diag_1
            # try assign to top left corner
            if addOrSubtractFromRow(r1_sum, needed) == magic_constant:
                    s[0][0] = abs(r1[0] + needed)
                    costs.append(abs(r1[0] - (r1[0] + needed)))
                    # rerun cross sections
                    s = handleCrossSections(s, costs)
                    # reset and run next
                    if diag_1 != magic_constant:
                        s[0][0] = r1[0]
                    print("s", s)
            # try assign to bottom right corner
            if addOrSubtractFromRow(r3_sum, needed) == magic_constant:
                s[2][2] = abs(r3[2] + needed)
                costs.append(abs(r3[2] - (r3[2] + needed)))
                # rerun cross sections
                s = handleCrossSections(s, costs)
                if diag_1 != magic_constant:
                    s[2][2] = r3[2]
                # print("s", s)
        if diag_2 != magic_constant:
            print("diag2_failed", diag_2)
             # assign to top left corner
            needed = getNeededValue(diag_2)            
            print("needed", needed)
            print("bottom right", between_0_and_9(r3[0] + needed))
            # add to bottom left corner 
            if between_0_and_9(r3[0] + needed):
                #   flip bottom left
                s[2][0] = r3[0] + needed
                costs.append(abs(r3[0] - (r3[0] + needed)))
                # rerun cross sections
                s = handleCrossSections(s, costs)
                print("s22", s)
                a = checkCrossSections(s)
                print("a", a)
                b = checkDiagonals(s)
                print("b", b)
                exit(1)
            if r1_sum + needed == magic_constant:
                # flip top right
                s[0][2] = abs(r1[2] + needed)
                costs.append(abs(r1[2] - (r1[2] + needed)))
            
            # if r3_sum + needed != magic_constant:

        i += 1
    # if checkCrossSections(s) == False:
    #     print("checkCrossSections false")
    #     s = handleCrossSections(s, costs)
    #     print("s", s)  
    # print("costs", costs)
    # return sum(costs)
    # handleCrossSections(s)
    # Write your code here

if __name__ == '__main__':
    
    result = formingMagicSquare(
        [[4, 5, 8], [2, 4, 1], [1, 9, 7]]
    )
    # result = formingMagicSquare(
    #     [[5, 3, 4], [1, 5, 8], [6, 4, 2]]
    # )
    # result = formingMagicSquare(
    #     [[4, 9, 2], [3, 5, 7], [8, 1, 5]]
    # )
    # result = formingMagicSquare(
    #     [[4, 8, 2], [4, 5, 7], [6, 1, 6]]
    # )

   


# Notes:
# - check diagonals first
# - adjust cornmer values then rerun cross sections
# - not working b/c no row cols are equal so this cannot be a check