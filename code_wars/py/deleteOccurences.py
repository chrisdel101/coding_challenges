def delete_nth(order,max_e):
    dict = {}
    indexes = []
    for (ind,i) in enumerate(order):
        # check instances
        if i in dict:
            dict[i] += 1
        else:
            dict[i] = 1
        # if more than max, note the index
        if dict[i] > max_e:
            indexes.append(ind)
    # if none removed, return
    if len(indexes) is 0:
        return order
    # sort indexes in reverse
    indexes.sort() if len(indexes) > 1 else indexes
    indexes.reverse()
    # count backwards from end of list
    k = len(order) - 1
    for i in reversed(order):
        # when it hits index del it
        if k == indexes[0]:
            del order[k]
            if len(indexes) > 1:
                # delete the first one off the indexes list each time
                del indexes[0]
            else:
                indexes
        k = k - 1
    return order

# delete_nth([1,1,1,1,1], 5)
# delete_nth([20,37,20,21], 1)
delete_nth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1],3)


# best answer
def delete_nth(order,max_e):
    ans = []
    for o in order:
        if ans.count(o) < max_e: ans.append(o)
    return ans
    
