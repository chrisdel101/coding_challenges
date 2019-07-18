def sumCheck(currentArr, storedSum):
    currentSum = sum(currentArr)
    if currentSum > storedSum:
        return currentSum
    else:
        return storedSum


def maxSequence(arr):
    sum = 0
    for k in arr:
        # copy original
        copy = arr.copy()
        l = len(arr)
        for j in copy:
            while l:
                slices = []
                for i in (copy):
                    # print('push', i)
                    slices.append(i)
                sum = sumCheck(slices, sum)
                # print('sum', sum)
                copy = copy[:len(copy)-1]
                # print("\n")
                l = l - 1
        arr = arr[1:]
    return sum


print('val', maxSequence(arr))
