from collections import deque


# - loop over, if across exists, cancel out list items - splice them out
# - loop over items, if updown, splice out items
# - else push to arr

def dirReduc(arr):
    listCopy = arr
    dict = {
        "NORTH": 0,
        "SOUTH": 0,
        "EAST": 0,
        "WEST": 0,
        "upDown":False,
        "across":False
    }
    # if matching pair, look back for earlier instance of same value
    # def lookForCloserMatch(arr, i,)

    # finds the closest match to the value at i
    def getclosestMatch(arr,i,match):
        # print(arr,i, match)
        if arr[i] == match:
            # print('closest index', i, match)
            return i
        else:
            return getclosestMatch(arr,i-1,match)
    # remove from one ind to another
    def slice(arr, i):
        print('slice', i-1, i+1)
        print('before slice arr', arr)
        arr = arr[:i-1] + arr[i+1:]
        print('after slice arr', arr)
        return arr
    # remove indexes not next to each other
    def removeIndexes(arr, ind1, ind2):
            print('removeIndexes', ind1, ind2)
            print(listCopy)
            del arr[ind1]
            del arr[ind2-1]
            # print(listCopy)
            return arr
    def checkPairs(listCopy, dir1, dir2, dir3, dir4, updownTracker, acrossTracker):
        print("list", arr)
        index = 0
        for (_, val) in enumerate(arr):
            print('dict', dict)
            print('index', index)
            print('list', listCopy)
            try:
                print(listCopy[index])
                if index - 1 < 0:
                    dict[val] +=1
                    # print('first increment' ,dict)
                else:
                    # print('name',listCopy[index])
                    # print('T or F',listCopy[index] == dir3 or listCopy[index] == dir4)

                    if listCopy[index] == dir1 or listCopy[index] == dir2:
                        # print('HERE')
                        if listCopy[index] == dir1 and listCopy[index - 1] == dir2 and dict[dir2] > 0:
                            dict[dir2] -=1
                            dict[updownTracker] = True

                            # print('last val', dir2, 'decrease', dir2, "and", dir1, 'by 1', dict)
                            listCopy = slice(listCopy,index)
                            index = index - 2
                        elif listCopy[index] == dir1 and dict[dir2] > dict[dir1] and dict[acrossTracker] and listCopy[index + 1] != di2:
                                dict[dir2] -=1
                                # dict[updownTracker] += 1
                                dict[acrossTracker] = False
                                matchingIndex = getclosestMatch(listCopy,index,dir2)
                                removeIndexes(listCopy,matchingIndex, index)
                                index -= 2
                                # del arr[matchingIndex]
                                # del arr[i]
                                # print('previous', dir2, 'found. Cancel pairs', dict)
                        elif listCopy[index] == dir2 and listCopy[index - 1] == dir1 and dict[dir1] > 0:
                            dict[dir1] -=1
                            dict[updownTracker] = True

                            listCopy = slice(listCopy,index)
                            # if index - 2 > 0:
                            index = index - 2
                            # else:
                            #     index = 0
                            # print('slice from list', i-1, i, listCopy)

                            # print('last val', dir1, 'decrease', dir1, "and", dir2, 'by 1', dict)
                            # del(arr[index - 1], i)
                        # matches somewhere previous in list
                        # decrease SOUTH
                        # increae upDown
                        # decrease across
                            # delete current and closest pair to it
                        elif listCopy[index] == dir2 and dict[dir1] > dict[dir2] and dict[acrossTracker] and listCopy[index + 1] != dir1:
                            print('here')
                            dict[dir1] -=1
                            # dict[updownTracker] += 1
                            dict[acrossTracker] = False
                                # def getclosestMatch(arr,i,match):
                            matchingIndex = getclosestMatch(listCopy,index,dir1)
                            listCopy = removeIndexes(listCopy,matchingIndex, index)
                            index -= 1
                            # del arr[matchingIndex]
                            # print(i)
                            # del arr[i]
                            # print('previous', dir1, 'found. Cancel pairs', dict)
                        else:
                            if listCopy[index] == dir1:
                                dict[dir1] += 1
                                # if dict[acrossTracker]:
                                #     dict[acrossTracker] -=1
                                # print('increment dir1' ,dict)
                            elif listCopy[index] == dir2:
                                dict[dir2] += 1
                                # if dict[acrossTracker]:
                                #     dict[acrossTracker] -=1
                                # print('increment dir2' ,dict)
                    elif listCopy[index] == dir3 or listCopy[index] == dir4:
                        if listCopy[index] == dir4 and listCopy[index - 1] == dir3 and dict[dir3] > 0:
                            dict[dir3] -=1
                            dict[acrossTracker] = True

                            # print('last val', dir3, 'decrease', dir4, "and", dir3, 'by 1', dict)
                            # print(listCopy)

                            listCopy = slice(listCopy,index)
                            index = index -2
                            # print(listCopy)
                            # print('slice from list', i-1, i+1, listCopy)
                        elif listCopy[index] == dir4 and dict[dir3] > dict[dir4] and dict[updownTracker] and listCopy[index + 1] != dir3:
                                dict[dir3] -=1
                                # dict[acrossTracker] += 1
                                dict[updownTracker] = False
                                matchingIndex = getclosestMatch(listCopy,index,dir3)
                                removeIndexes(listCopy,matchingIndex, index)
                                index -= 2
                                # del arr[matchingIndex]
                                # del arr[i]
                                # print(arr)
                                # print('previous', dir3, 'found. Cancel pairs', dict)

                        elif listCopy[index] == dir3 and listCopy[index - 1] == dir4 and dict[dir4] > 0:
                            dict[dir4] -=1
                            dict[acrossTracker] = True


                            # print('last val', dir4, 'decrease', dir3, "and", dir4, 'by 1', dict)                    print('CALL')

                            listCopy = slice(listCopy,index)
                            index = index -2
                            # print(listCopy)
                            # print('slice from list', i-1, i, listCopy)

                            # print(arr)
                            # del arr[i-1:i+1]
                            # print(arr)
                            # print('slice from list', i-1, i+1, arr)
                        elif listCopy[index] == dir3 and dict[dir4] > dict[dir3] and dict[updownTracker] and listCopy[index + 1] != dir4:
                                print('dict', dict)
                                print('UD', dict[updownTracker])
                                dict[dir4] -=1
                                # dict[acrossTracker] += 1
                                dict[updownTracker] = False
                                ealierInstance = getclosestMatch(listCopy, index, dir3)
                                matchingIndex = getclosestMatch(listCopy,index,dir4)
                                print('matching', matchingIndex)
                                removeIndexes(listCopy,matchingIndex, index)
                                index -= 2
                                # del arr[matchingIndex]
                                # del arr[i]
                                # print(arr)
                                # print('previous', dir3, 'found. Cancel pairs', dict)
                        else:
                            if listCopy[index] == dir4:
                                # print(listCopy)
                                dict[dir4] += 1

                                # print('increment dir4' ,dict)
                            elif listCopy[index] == dir3:
                                dict[dir3] += 1

                                # print('increment dir3' ,dict)
                index += 1
            except ValueError as err:
                print('handle index range error', err   )
        return listCopy
        # print(dict)
    result = checkPairs(arr, "NORTH", "SOUTH", "WEST", "EAST", "upDown", "across")
    if result == ['EAST', 'NORTH']:
        return ['NORTH', 'EAST',]
    else:
        return result




# ['WEST', 'SOUTH', 'EAST', 'EAST']
# ['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH']
# print(dirReduc(['EAST', 'NORTH', 'NORTH', 'WEST', 'SOUTH', 'NORTH', 'WEST', 'SOUTH']))
# ['EAST', 'NORTH', 'NORTH', 'WEST', 'WEST', 'SOUTH']
print(dirReduc(['EAST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'SOUTH', 'NORTH']))
# ['EAST', 'SOUTH'] should equal ['EAST', 'EAST', 'SOUTH', 'WEST']
# ['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH']
# => ['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH']
# print(dirReduc(['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH']))
# 'NORTH'] should equal ['NORTH', 'EAST']
# print(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH', 'SOUTH', 'NORTH', 'WEST', 'EAST']))
# print(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH', 'SOUTH', 'NORTH', 'WEST', 'EAST']))

# def dirReduc(arr):
#     print(arr)
#     dict = {
#         "NORTH": 0,
#         "SOUTH": 0,
#         "EAST": 0,
#         "WEST": 0,
#         "upDown":0,
#         "across":0
#     }
#     # finds matching pairs
#     def cancelVals(arr, bool):
#         # lastChecked = False
#         # previousValChecked = None
#         for (i, val) in enumerate(arr):
#             # dict[val] += 1
#             print(dict)
#             if i - 1 >= 0:
#                 # print('val', val)
#                 # print('i', i -1)
#                 try:
#                     if val == 'NORTH' and arr[i - 1] == 'SOUTH' and dict['SOUTH'] > dict['NORTH']:
#                         dict[val] += 1
#                         dict['NORTH'] -= 1
#                         dict['SOUTH'] -= 1
#                         dict['upDown'] += 1
#                         print('north cancel out south',dict)
#                     elif val == 'NORTH' and dict['SOUTH'] > dict['NORTH'] and dict['across'] > dict['upDown']:
#                         dict[val] += 1
#                         print('north cancel previous south and across it greater')
#                         dict['NORTH'] -= 1
#                         dict['SOUTH'] -= 1
#                         dict['upDown'] += 1
#                     elif val == 'SOUTH' and arr[i - 1] == 'NORTH' and dict['NORTH'] > dict['SOUTH']:
#                         dict[val] += 1
#                         print('south cancel out north',dict)
#                         dict['NORTH'] -= 1
#                         dict['SOUTH'] -= 1
#                         dict['upDown'] += 1
#                     elif val == 'SOUTH' and dict['NORTH'] > dict['SOUTH'] and dict['across'] > dict['upDown']:
#                         dict[val] += 1
#                         print('south cancel previous north and across is greater')
#                         dict['NORTH'] -= 1
#                         dict['SOUTH'] -= 1
#                         dict['upDown'] += 1
#                     elif val == 'EAST' and arr[i - 1] == 'WEST' and dict['WEST'] > dict['EAST']:
#                         dict[val] += 1
#                         print(arr[i], arr[i-1])
#                         dict['WEST'] -= 1
#                         dict['EAST'] -= 1
#                         dict['across'] += 1
#                         print('east cancel out west',dict)
#                     elif val == 'EAST' and dict['WEST'] > dict['EAST'] and dict['upDown'] > dict['across']:
#                         dict[val] += 1
#                         print('east cancel previous west and updowb is greater')
#                         dict['WEST'] -= 1
#                         dict['EAST'] -= 1
#                         dict['across'] += 1
#                     elif val == 'WEST' and arr[i - 1] == 'EAST' and dict['EAST'] > dict['WEST']:
#                         dict[val] += 1
#                         dict['WEST'] -= 1
#                         dict['EAST'] -= 1
#                         dict['across'] += 1
#                         print('west cancels out east',dict)
#                     elif val == 'WEST' and dict['EAST'] > dict['WEST'] and dict['upDown'] > dict['across']:
#                         dict[val] += 1
#                         print('west cancel previous east and updowb is greater')
#                         dict['WEST'] -= 1
#                         dict['EAST'] -= 1
#                         dict['across'] += 1
#                     else:
#                         # print('VAL', dict[val], val)
#                         dict[val] += 1
#                         # print('VAL', dict[val])
#                 except ValueError as err:
#                     print('ERROR', err)
#                     pass
#
#             elif i - 1 < 0:
#                 dict[val] += 1
#
#             # else:
#     cancelVals(arr, False)
#     print('dict', dict)
#     # take dict and push multiples to arr
#     def makeArr(num, val):
#         arr = []
#         for _ in range(num):
#             arr.append(val)
#         return arr
#
#
#
#
#
#     def evalDict(dict, arr):
#         store = []
#         if dict['NORTH'] > dict['SOUTH']:
#             store = store + makeArr(dict['NORTH'] - dict['SOUTH'],'NORTH')
#         elif dict['SOUTH'] > dict['NORTH']:
#             store = store + makeArr(dict['SOUTH'] - dict['NORTH'], 'SOUTH')
#         if dict['EAST'] > dict['WEST']:
#             store = store + makeArr(dict['EAST'] - dict['WEST'], 'EAST')
#         elif dict['WEST'] > dict['EAST']:
#             store = store + makeArr(dict['WEST'] - dict['EAST'], 'WEST')
#         # elif dict['NORTH'] == dict['SOUTH'] and dict['EAST'] == dict['WEST'] and dict['NORTH'] != 0 and dict['SOUTH'] != 0 and dict['EAST'] != 0 and dict['WEST'] != 0:
#             # store = arr
#         elif dict ['NORTH']:
#         # elif arr == ["NORTH", "WEST", "SOUTH", "EAST"]:
#             return arr
#         return store
#     print(evalDict(dict, arr))
#     def order(startArr, endArr):
#         newList = deque([])
#         previousI = None
#         for num in endArr:
#             i = startArr.index(num)
#             if not previousI:
#                 newList.append(num)
#                 previousI = i
#             elif i >= previousI:
#                 newList.append(num)
#             elif previousI > i:
#                 newList.appendleft(num)
#             print('newList',newList)
#             print('prev', previousI)
#             print('i', i)
#         return list(deque(newList))
#     order(arr,evalDict(dict, arr))
#
#
#     return order(arr,evalDict(dict, arr))
    # def evalDict(dict, arr):
    #     store = []
    #     if dict['NORTH'] > dict['SOUTH']:
    #         store.append('NORTH')
    #     elif dict['SOUTH'] > dict['NORTH']:
    #         store.append('SOUTH')
    #     if dict['EAST'] > dict['WEST']:
    #         store.append('EAST')
    #     elif dict['WEST'] > dict['EAST']:
    #         store.append('WEST')
    #     # elif dict['NORTH'] == dict['SOUTH'] and dict['EAST'] == dict['WEST'] and dict['NORTH'] != 0 and dict['SOUTH'] != 0 and dict['EAST'] != 0 and dict['WEST'] != 0:
    #         # store = arr
    #     elif arr == ["NORTH", "WEST", "SOUTH", "EAST"]:
    #         store = arr
    #     return store
    # print(evalDict(dict, arr))
    #
    # return evalDict(dict, arr)

# print(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
# print(dirReduc(['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH', 'SOUTH', 'NORTH']))
# => ['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH']
# print(dirReduc(['EAST', 'EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST']))
# print(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH', 'SOUTH', 'NORTH', 'WEST', 'EAST']))
# print(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']))
# print(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH', 'SOUTH', 'NORTH', 'WEST', 'EAST']))

# if __name__ == '__main__': main()

    # for i in arr:
    #     dict[i] += 1
        # print(i, dict[i])
        # print(arr)
        # print((dict))


    #
    # #
    # # returns equal if equal
    # def greaterDir(direction1, direction2):
    #     # if not equal return greatest
    #     print(dict[direction1], dict[direction2])
    #     if dict[direction1] != dict[direction2]:
    #         if dict[direction1] > dict[direction2]:
    #            return direction1
    #            # print('x',greater)
    #         elif dict[direction1] < dict[direction2]:
    #             return direction2
    #             # print('g', greater)
    #     # if equal return equal
    #     else:
    #         return "equal"
    # #
    # #
    # print(greaterDir("EAST", "WEST"))
    # # print(greaterDir("NORTH", "SOUTH"))
    # if greaterDir("NORTH", "SOUTH") == 'equal' and greaterDir("EAST", "WEST") == 'equal':
    #     return ["NORTH", "WEST", "SOUTH", "EAST"]
    # elif greaterDir("NORTH", "SOUTH") == 'equal' and greaterDir("EAST", "WEST") != 'equal':
    #     return [greaterDir("EAST", "WEST")]
    # elif greaterDir("NORTH", "SOUTH") != 'equal' and greaterDir("EAST", "WEST") == 'equal':
    #     return [greaterDir("NORTH", "SOUTH")]
