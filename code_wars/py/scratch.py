# for _ in range(50):
#     print "Some thing"

# def rotate(l, n):
#     return l[-n:] + l[:-n]
#
# print(rotate([1,2,3,4], 2))
#
a = [-1, 1, 333,66.2, 333, 1234.5]
def delete(arr, ind1, ind2):
        del arr[ind1]
        del arr[ind2-1]
        print(arr)
delete(a, 1, 3)

print(a)

# def getclosestMatch(arr,i,match):
#     print(arr,i, match)
#     if arr[i] == match:
#         print(i, match)
#         return match
#     getclosestMatch(arr,i-1,"EAST")
#
# getclosestMatch(['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH', 'WEST', 'NORTH'],9, 'SOUTH')
