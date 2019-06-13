# -slice first two loop til end

# if no pairs in the dict
#  -- - add first two as keys with thier sum
# if pairs in the dict
# -- - copy dict
# -- - remove last pair and return
# -- - add curren to string as key
# -- - add current to value as new sum

# -- - check last pair
import re


def maxSequence(newList):
    def getSumfromLastNum(lastNum):
        # print('test')
        some_pattern = re.compile(r'-?\d')
        toList = re.findall(some_pattern, lastNum)
        x = [int(i) for i in toList]
        return sum(tuple(x))

    dict = {}

    def getAllsubArrs(arr):
        lastNumber = []

        def sliceFirstTwo(arr, recursionLevel):
            # print('level', recursionLevel)
            if not len(arr):
                return
            # if empty dict, add first pair
            if recursionLevel == 0:
                # take first two off
                firstTwoChunk = ''.join(map(str, arr[0:2]))
                print("current", firstTwoChunk)
                # print("sum", sum(arr[0:2]))
                # check if there already
                if sum(arr[0:2]) in dict.values():
                    # print('sum on first', sum(arr[0:2]))
                    lastNumber.append(firstTwoChunk)
                    del arr[0:2]
                    sliceFirstTwo(arr, recursionLevel + 1)
                    return
                if firstTwoChunk in dict:
                    # print('THERE on first', firstTwoChunk)
                    lastNumber.append(firstTwoChunk)
                    return

                dict[firstTwoChunk] = sum(arr[0:2])
                lastNumber.append(firstTwoChunk)
                del arr[0:2]

                sliceFirstTwo(arr, recursionLevel + 1)
            #     # print(dict)
            # # if not first, find last and add to it
            elif recursionLevel > 0:
                # make new str key with last key and new num
                newNumber = str(arr[0]) + lastNumber[0]
                # print('l', lastNumber)
                # print('current', newNumber)
                newSum = getSumfromLastNum(lastNumber[0])
                # print('NS', newSum)
                # if newSum in dict.values():
                # print('current', newNumber)
                # print('sum THERE', newSum)
                # print(dict)
                # lastNumber[0] = newNumber
                # del arr[0:1]
                # sliceFirstTwo(arr, recursionLevel + 1)
                # return

                # print('sum', s)
                # if s in dict.values():
                #     break
                dict[newNumber] = newSum
                # print('sum THERE', s)
                # print('dict', dict)
                # re-assign last number
                lastNumber[0] = newNumber

                del arr[0:1]
                sliceFirstTwo(arr, recursionLevel + 1)

        sliceFirstTwo(arr, 0)
        # return dict

    def feedInNewLists(newList):
        store = []
        # print('d', dict)
        while newList:
            # print('tl', newList)
            newListCopy = list(newList)
            # print('new', newListCopy)
            getAllsubArrs(newListCopy)
            # store.append(sequences)
            del newList[0:1]
        return store

    feedInNewLists(newList)
    # d = dict.values())
    max = 0
    for i in dict.values():
        sortedReverse = sorted(dict.values(), reverse=True)
        # print('sort', sorrd)
        if sortedReverse[0] > max:
            max = sortedReverse[0]
    print('MAX', max)
    return max


# maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSequence([-23, 30, 1, 17, -10, -28, 1, 26, 17, 11, -7, -28, -28, -13, 24, -22, 21, 4, -15, -18, -15, -12, 23, -
             20, -24, -5, 30, 14, -22, -28, 1, -1, 2, 30, 15, -21, 14, 23, 26, -1, 7, 10, -12, -26, -17, 25, 21, -26, -6, -5])
# takes list, each time it is shifted by one
