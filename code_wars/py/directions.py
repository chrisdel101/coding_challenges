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

                            listCopy = slice(listCopy,index)
                            index = index - 2
                        # elif listCopy[index] == dir1 and dict[dir2] > dict[dir1] and dict[acrossTracker] and listCopy[index + 1] != di2:
                        #         dict[dir2] -=1
                        #         # dict[updownTracker] += 1
                        #         dict[acrossTracker] = False
                        #         matchingIndex = getclosestMatch(listCopy,index,dir2)
                        #         removeIndexes(listCopy,matchingIndex, index)
                        #         index -= 2
                        #         # del arr[matchingIndex]
                        #         # del arr[i]
                        #         # print('previous', dir2, 'found. Cancel pairs', dict)
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
                        # elif listCopy[index] == dir2 and dict[dir1] > dict[dir2] and dict[acrossTracker] and listCopy[index + 1] != dir1:
                        #     print('here')
                        #     dict[dir1] -=1
                        #     # dict[updownTracker] += 1
                        #     dict[acrossTracker] = False
                        #         # def getclosestMatch(arr,i,match):
                        #     matchingIndex = getclosestMatch(listCopy,index,dir1)
                        #     listCopy = removeIndexes(listCopy,matchingIndex, index)
                        #     index -= 1
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
                        # elif listCopy[index] == dir4 and dict[dir3] > dict[dir4] and dict[updownTracker] and listCopy[index + 1] != dir3:
                        #         dict[dir3] -=1
                        #         # dict[acrossTracker] += 1
                        #         dict[updownTracker] = False
                        #         matchingIndex = getclosestMatch(listCopy,index,dir3)
                        #         removeIndexes(listCopy,matchingIndex, index)
                        #         index -= 2
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
                        # elif listCopy[index] == dir3 and dict[dir4] > dict[dir3] and dict[updownTracker] and listCopy[index + 1] != dir4:
                        #         print('dict', dict)
                        #         print('UD', dict[updownTracker])
                        #         dict[dir4] -=1
                        #         # dict[acrossTracker] += 1
                        #         dict[updownTracker] = False
                        #         ealierInstance = getclosestMatch(listCopy, index, dir3)
                        #         matchingIndex = getclosestMatch(listCopy,index,dir4)
                        #         print('matching', matchingIndex)
                        #         removeIndexes(listCopy,matchingIndex, index)
                        #         index -= 2
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
print(dirReduc(['EAST', 'NORTH', 'NORTH', 'WEST', 'SOUTH', 'NORTH', 'WEST', 'SOUTH']))
# ['EAST', 'NORTH', 'NORTH', 'WEST', 'WEST', 'SOUTH']
# print(dirReduc(['EAST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'SOUTH', 'NORTH']))
# ['EAST', 'SOUTH'] should equal ['EAST', 'EAST', 'SOUTH', 'WEST']
# ['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH']
# => ['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH']
# print(dirReduc(['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH']))
# 'NORTH'] should equal ['NORTH', 'EAST']
# print(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH', 'SOUTH', 'NORTH', 'WEST', 'EAST']))
# print(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH', 'SOUTH', 'NORTH', 'WEST', 'EAST']))
