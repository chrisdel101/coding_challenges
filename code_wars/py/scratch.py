# from collections import deque

# # for _ in range(50):
# #     print "Some thing"

# # def rotate(l, n):
# #     return l[-n:] + l[:-n]
# #
# # print(rotate([1,2,3,4], 2))
# #
# # a = [-1, 1, 333,66.2, 333, 1234.5]
# # def delete(arr, ind1, ind2):
# #         del arr[ind1]
# #         del arr[ind2-1]
# #         print(arr)
# # delete(a, 1,  3)
# #
# # print(a)

# # def getclosestMatch(arr,i,match):
# #     print(arr,i, match)
# #     if arr[i] == match:
# #         print(i, match)
# #         return match
# #     getclosestMatch(arr,i-1,"EAST")
# #
# # getclosestMatch(['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH', 'WEST', 'NORTH'],9, 'SOUTH')

# class Solution(object):
#     def reverse(self, x):
#         l = None
#         if type(x) is int or type(x) is float:
#             l = [(i) for i in str(x)]
#         elif type(x) is str:
#             l = x.split()
#         d = deque(l)
#         j = 0
#         k = 0
#         length = len(d)
#         if length % 2 == 0:
#             times = length
#         else:
#             times = length - 1
#         if len(l) <= 1:
#             return x
#         while k < times :
#             # store last in var
#             tempLast = d[(len(d) - 1) - j]
#             tempFirst = d[j]
#             print()
#             print('tempLast', tempLast)
#             print('tempLast', (len(d) - 1) - j)
#             # print('tempFirst', tempFirst)
#             # remove last
#             del d[(len(d) - 1) - j]
#             # j = j + 1
#             print('popped', d)
#             # append last to the front
#             d = list(d)

#             d.insert(j,tempLast)
#             # j = j + 1
#             print('shift', tempLast, list(d), j)
#             d = deque(d)
#             # print("i", list(d).index(tempFirst))
#             d.remove(tempFirst)
#             # j = j + 1
#             print('remove', tempFirst, d)
#             d = list(d)
#             d.insert((len(d)) - j, tempFirst)

#             print('append', tempFirst,d)
#             # d.remove()
#             pass
#             j = j + 1
#             k = k + 2

#         return "".join(d)


# instance = Solution()
# print(instance.reverse(10))
# # 5 2 3 4 1
# # 5 4 3 2 1
# # if odd half the list size round down
# # mylist = ["a", "b", "a", "c", "c"]
# def test(input):

#     for i in input:
#         print(i)
# test(",>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.")
# def findNextBracketIndex(code):
#     forwardIndexes = []
#     matches = {}
#     indexes = []
#     for (ind, i) in enumerate(code):
#         if i is '[':
#             forwardIndexes.append(ind)
#         elif i is ']':
#             matching = forwardIndexes.pop()
#             matches[ind] = matching
#             matches[matching] = ind
#     return matches


#     print(brackets)
# print(findNextBracketIndex("[,[,,[+]][--]]"))
