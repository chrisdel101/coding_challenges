def find_uniq(arr):
    arr.sort()
    dict = {}
    for (index,item) in enumerate(arr):
        if item not in dict:
            dict[item] = 1
        else:
            dict[item] += 1

    for (i,j) in enumerate(dict.values()):
        if j == 1:
            # print(dict.keys()[i])
            return list(dict.keys())[i]
            # return arr.keys()
    # print(dict)




find_uniq(([3, 10, 3, 3, 3 ]))
