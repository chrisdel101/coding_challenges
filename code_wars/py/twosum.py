def two_sum(numbers, target):
    for outerIndex, outerVal in enumerate(numbers):
        for innerIndex, innerVal in enumerate(numbers):
            sum = outerVal + innerVal
        #     # print(first, second)
        #     # print sum
            if(sum == target):
                return [outerIndex, innerIndex]
        # i = i + 1
        pass
print(two_sum([1,4,3,0], 4))
