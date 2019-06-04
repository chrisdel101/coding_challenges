# -slice first two loop til end

# if no pairs in the dict
#  -- - add first two as keys with thier sum
# if pairs in the dict
# -- - copy dict
# -- - remove last pair and return
# -- - add curren to string as key
# -- - add current to value as new sum

# -- - check last pair


def maxSequence(newList):
    dict = {}

    def getAllsubArrs(arr):
        lastNumber = []

        def sliceFirstTwo(arr, i):
            print('i', i)
            if not len(arr):
                return
            # if empty dict, add first pair
            if not bool(dict):
                # pass
                print('d')
                # take first two off
                val = ''.join(map(str, arr[0:2]))
                dict[val] = sum(arr[0:2])
                lastNumber.append(val)
                del arr[0:2]

                sliceFirstTwo(arr, i + 1)
            #     # print(dict)
            # # if not first, find last and add to it
            elif bool(dict):
                # make new str key with last key and new num
                newNumber = str(arr[0]) + lastNumber[0]
                print('l', lastNumber)
                print('n', newNumber)
                # check if this key exists
                # print('dict', dict)
                if newNumber in dict:
                    print('break', newNumber)
                    return
                # add to previous calced sum
                s = dict[lastNumber[0]] + arr[0]
                dict[newNumber] = s
                print('dict', dict)
                # re-assign last number
                lastNumber[0] = newNumber

                del arr[0:1]
                sliceFirstTwo(arr, i + 1)

        sliceFirstTwo(arr, 0)
        # return dict

    def feedInNewLists(newList):
        store = []
        print('d', dict)
        while newList:
            print('tl', newList)
            newListCopy = list(newList)
            print('new', newListCopy)
            getAllsubArrs(newListCopy)
            # store.append(sequences)
            del newList[0:1]
        return store

    print(feedInNewLists(newList))
    # max = 0
    # for i in feedInNewLists(newList):
    #     sortedReverse = sorted(i.values(), reverse=True)
    #     # print('sort', sorrd)
    #     if sortedReverse[0] > max:
    #         max = sortedReverse[0]
    # return max


maxSequence([1, 2, 3, 4])
# takes list, each time it is shifted by one
