
magic_constant = 15

# if above 15 then sum-constant, if below 15 then 15-sum
def getNeededValue(row_sum):
    magic_constant = 15
    if row_sum >= magic_constant:
        return magic_constant - row_sum
    else:
        return magic_constant - row_sum

def prettyPrint(s):
    r1 = s[0]
    r2 = s[1]
    r3 = s[2]
    print(r1)
    print(r2)
    print(r3)
    

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


def handleMiddleValue(s, costs):
    if s[1][1] != 5:
        needed = abs(s[1][1] - 5)
        current = s[1][1] 
        costs.append(abs(s[1][1] - (s[1][1] + needed)))
        s[1][1] = 5
        print("flip middle from {", current, "} to {", s[1][1], "}")
        print("costs", costs)

def handleCol1Row2(s):
    c1_sum = s[0][0] + s[1][0] + s[2][0]
    if c1_sum != magic_constant:
        col_needed = getNeededValue(c1_sum)
        # add to joint
        print("flip col1 joint", s[1][0] + col_needed)
        costs.append(abs(s[1][0] - (s[1][0] + col_needed)))
        s[1][0] = s[1][0] + col_needed
        print("s", s)
        print("costs", costs) 

def handleCol3Row2(s):
    c3_sum = s[0][2] + s[0][2] + s[0][2]
    if c3_sum != magic_constant:
        col_needed = getNeededValue(c3_sum)
        # add to joint
        print("flip col3 joint", s[0][2] + col_needed)
        costs.append(abs(s[0][2] - (s[0][2] + col_needed)))
        s[1][0] = s[0][2] + col_needed
        print("s", s)
        print("costs", costs) 

def handleRow1Iterations(s, costs):
    # 0 - R1/C2 
    # 1 - R2/C1
    # 2 - R2/C3
    # 3 - R3/C2
    # 
    magic_constant = 15
    for i in range(0, 1):
        row = s[i]
        if row[0] + row[1] + row[2] != magic_constant:
            # R1/C2 stays the same
            row1_needed = getNeededValue(row[0] + row[1] + row[2])
            costs.append(abs(row[1] - (r1[1] + row1_needed)))
            # row1 joint
            s[0][1] = r1[1] + row_needed
            loop over each combination of row and col
            for j in range(0, 2):
                if j == 0:
                    handleCol1Row2(s, costs)
                    handleCol3Row2(s, costs)

            
                    # if i == 0:
                    #     # find amout it is off
                    #     row_needed = getNeededValue(s[i][0] + s[i][1] + s[i][2])
                    #     print("flip row1 joint", s[0][1] + row_needed)
                    #     costs.append(abs(s[0][1] - (s[0][1] + row_needed)))
                    #     s[0][1] = s[0][1] + row_needed
                    #     print("s", s)
            # elif i == 1:

# def handleRow1Iterations(s, costs):
#     print("handleRow1Iterations")
#     magic_constant = 15
#     r1 = s[0]
#     r2 = s[1]
#     r3 = s[2]
#     c1 = [r1[0], r2[0], r3[0]]
#     c2 = [r1[1], r2[1], r3[1]]
#     c3 = [r1[2], r2[2], r3[2]]
    
#     r1_sum = r1[0] + r1[1] + r1[2]
#     r2_sum = r2[0] + r2[1] + r2[2]
#     r3_sum = r3[0] + r3[1] + r3[2]
    
#     c1_sum = r1[0] + r2[0] + r3[0]
#     c2_sum = r1[1] + r2[1] + r3[1]
#     c3_sum = r1[2] + r2[2] + r3[2]
#     # R1/C2
#     r1_sum = r1[0] + r1[1] + r1[2]
#     c2_sum = r1[1] + r2[1] + r3[1]
#     r1 = s[0]
#     c2 = [r1[1], r2[1], r3[1]]
#     c3 = [r1[2], r2[2], r3[2]]
#     prettyPrint(s)

#     if r1_sum != magic_constant:
#         # add to joint
#         if r1_sum != 15:
#              # find amout it is off
#             row_needed = getNeededValue(r1_sum)
#             print("flip row1 joint", r1[1] + row_needed)
#             costs.append(abs(r1[1] - (r1[1] + row_needed)))
#             s[0][1] = r1[1] + row_needed
#        # add to end of col2
#         elif r1_sum == 15 and c2_sum != 15:
#             col_needed = getNeededValue(c2_sum)
#             print("flip bottom col value", c2[2] + col_needed)
#             costs.append(abs(cs2[2] - (c2[2] + col_needed)))
#             s[2][1] = c2[2] + col_needed
#             print("s", s)
#         #   exit(0)
        
#     # print("costs", costs)
#     c1_sum = r1[0] + r2[0] + r3[0]
#     c3_sum = r1[2] + r2[2] + r3[2]
#     c1 = [r1[0], r2[0], r3[0]]
#     print("r1", s[0])
#     print("r2", s[1])
#     print("r3", s[2])
#     # R2/C1 - add to col joint only
#     if c1_sum != magic_constant:
#         col_needed = getNeededValue(c1_sum)
#         print("col1", col_needed)
#         # add to joint
#         print("flip col1 joint", c1[1] + col_needed)
#         costs.append(abs(c1[1] - (c1[1] + col_needed)))
#         s[1][0] = c1[1] + col_needed
#         print("s", s)
#         print("costs", costs)
#     c1_sum = r1[0] + r2[0] + r3[0]
#     c3_sum = r1[2] + r2[2] + r3[2]
#     c1 = [r1[0], r2[0], r3[0]]
#     # R2/C3 - add to joint col only
#     if c3_sum != magic_constant:
#         col_needed = getNeededValue(c3_sum)
#         print("flip col3 joint", c3[1] + col_needed)
#         costs.append(abs(c3[1] - (c3[1] + col_needed)))
#         s[1][2] = c3[1] + col_needed
#         print("r1", s[0])
#         print("r2", s[1])
#         print("r3", s[2])
#         print("costs", costs)
#     r3_sum = r3[0] + r3[1] + r3[2]
#     r3 = s[2]
#     # R3/C2 - add to row joint only
#     if r3_sum != magic_constant:
#         row_needed = getNeededValue(r3_sum)
#         # print("row_needed", row_needed)
#         print("flip row3 joint", r3[1] + row_needed)
#         costs.append(abs(r3[1] - (r3[1] + row_needed)))
#         print("costs", costs)
#         s[2][1] = r3[1] + row_needed
#         print("r1", s[0])
#         print("r2", s[1])
#         print("r3", s[2])
    
#     # if r1_sum != magic_constant or r2_sum != magic_constant or r3_sum != magic_constant or c1_sum != magic_constant or c2_sum != magic_constant or c3_sum != magic_constant:
#     return s

def handleMiddleValue(s, costs):
    if s[1][1] != 5:
        needed = abs(s[1][1] - 5)
        current = s[1][1] 
        costs.append(abs(s[1][1] - (s[1][1] + needed)))
        s[1][1] = 5
        print("flip middle from {", current, "} to {", s[1][1], "}")
        print("costs", costs)

def handleRightDiagonal(s, costs, iteration):
    print("handleRightDiagonal")

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
    # print("diag_1_sum", r[0], r2[1], r3[2])
    # print("diag1_sum sum", diag1_sum)
    # if diag1 not in possiblities:
    print("r1", r1)
    print("r1", r3)
    print("poss", possiblities[iteration])
    first_diff = abs(r1[0] - possiblities[iteration][0])
    # print("val1", r1[0], possiblities[i][0], first_diff)
    second_diff = abs(r3[2] - possiblities[iteration][2])
    print("first_diff", first_diff)
    print("second_diff", second_diff)
    costs.append(first_diff)
    costs.append(second_diff)
    s[0][0] =   possiblities[iteration][0]
    s[2][2] =   possiblities[iteration][2]
    # prettyPrint(s)
    # print('costs', costs)

def handleLeftDiagonal(s, costs, outer_iteration, inner_interation):
    print("handleLeftDiagonal")
    magic_constant = 15
    r1 = s[0]
    r2 = s[1]
    r3 = s[2]
    # print("r1", r1)
    # print("r2", r2)
    # print("r3", r3)
    diag2 = [r1[2], r2[1], r3[0]]
    diag2_sum = r1[2] + r2[1] + r3[0]
    possiblities = [[2,5,8],[8,5,2],[4,5,6], [6,5,4]]
    print("PPP", possiblities[outer_iteration])
    # remove the option used in diag1
    del possiblities[outer_iteration]
    
    # remove the reversed version too - index shift after first del
    print(outer_iteration % 2 == 0)
    if outer_iteration % 2 == 0:
        del possiblities[outer_iteration]
    else:
        del possiblities[outer_iteration-1]


    print("possiblities", possiblities)
    # print("diag1_sum sum", diag1_sum)
    # if diag1 not in possiblities:
   
    first_diff = abs(r1[2] - possiblities[inner_interation][0])
    # print("val1", r1[0], possiblities[i][0], first_diff)
    second_diff = abs(r3[0] - possiblities[inner_interation][2])
    print("first_diff", first_diff)
    print("second_diff", second_diff)
    costs.append(first_diff)
    costs.append(second_diff)
    s[0][2] =   possiblities[inner_interation][0]
    s[2][0] =   possiblities[inner_interation][2]
    prettyPrint(s)
    # print('costs', costs)

def formingMagicSquare(s):
    all_costs = []
    copy_s = s.copy()
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
    iteration = 0
    
    costs = []
    handleMiddleValue(s, costs)
    for i in range(0, 1):
        handleRightDiagonal(copy_s, costs, i)
        for j in range(0, 1):
            handleLeftDiagonal(copy_s, costs, i, j)
            # prettyPrint(s)
            handleRow1Iterations(copy_s, costs)
            # print("costs", costs)
            # print("costs", sum(costs))
            all_costs.append(costs)
            costs = []
        # reset to original value, move to next value
        copy_s = s
        cost = []
        print("all_costs", all_costs)
    # handleRow1Iterations(s, costs)
    # print("r2", s[1])
    # print("r3", s[2])    
    # print(sum(costs))
    # return sum(costs)
    

   
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