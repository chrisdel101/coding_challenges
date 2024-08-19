
def maxSubsetSum(arr):
    store = {}
    group_by = 2
    # while group_by <= len(arr)-1:
    while group_by <= len(arr)-1:
        current_index = 11 #start index i.e 3 or 5, or -7
        # move index up the array, i.e 3, then 5, then -7...
        # current_index+group_by => index of next non-adj item
        while current_index <= len(arr):
            # each inner loop gets a sub set w/ same start num
            inner_loop_j = current_index-group_by
            while inner_loop_j <= len(arr):
                # loop from inner_loop_j to > curent index by group num (0, 2)
                vals = [] #[3, -7]
                for val in range(current_index, inner_loop_j, group_by):
                    vals.append(arr[val])
                prev_key = tuple(vals)
                # index into store
                prev_sum =  store.get(prev_key) or 0
                # make next val key 
                vals.append(arr[inner_loop_j])
                next_key = tuple(vals)
                store[next_key] = prev_sum + arr[inner_loop_j]
                inner_loop_j += group_by
            # print(current_index)
            # increment to next start val for subsets i.e [3, -7, 10] -> [7, 10, ...]  
            current_index += 1
        group_by += 1
    print(store)
    return store

def maxSubsetSumOnlyIndex0(arr):
    store = {}
    group_by = 2
    # while group_by <= len(arr)-1:
    while group_by <= len(arr)-1:
        current_index = 0 #start index
        # move index up the array, i.e 3, then 5, then -7...
        # current_index+group_by => index of next non-adj item
        # while (current_index+group_by) < len(arr):
            # each inner loop gets a sub set w/ same start num
        inner_loop_j = current_index
        while inner_loop_j < len(arr):
            # loop from inner_loop_j to > curent index by group num (0, 2)
            vals = [] #[3, -7]
            for val in range(current_index, inner_loop_j, group_by):
                vals.append(arr[val])
            prev_key = tuple(vals)
            # index into store
            prev_sum =  store.get(prev_key) or 0
            # make next val key 
            vals.append(arr[inner_loop_j])
            next_key = tuple(vals)
            store[next_key] = prev_sum + arr[inner_loop_j]
            inner_loop_j += group_by
        # print(current_index)
        # increment to next start val for subsets i.e [3, -7, 10] -> [7, 10, ...]  
            # current_index += 1
        group_by += 1
    print(store)
    return store
sample1 = [3, 5, -7, 8, 10]
sample2 = [3, 5, -7, 8, 10, -25, 33, 90, 6, 15, 22]
# maxSubsetSumOnlyIndex0(sample2)
maxSubsetSum(sample2)


def maxSubsetSumVar(arr):
    store = {}
    group_by = 2
    while group_by <= len(arr)-1:
        current_index = 0  # start index
        while (current_index + group_by) < len(arr):
            vals = []  # Initialize the subset
            for i in range(group_by):  # Generate the current subset
                vals.append(arr[current_index + i])
            # Convert the subset to a tuple
            prev_key = tuple(vals)
            # Fetch the previous sum from the store
            prev_sum = store.get(prev_key) or 0
            inner_loop_j = current_index + group_by
            while inner_loop_j < len(arr):
                # Append the next element to the current subset
                vals.append(arr[inner_loop_j])
                # Convert the updated subset to a tuple
                next_key = tuple(vals)
                # Memoize - add the current element to the previous sum
                store[next_key] = prev_sum + arr[inner_loop_j]
                inner_loop_j += group_by
            current_index += 1
        group_by += 1
    print(store)
    return store

# maxSubsetSumVar(sample1)

# Getting main subsets

# index 0
# by 1s [3, -7, 10, 33, 6, 22]
# by 2s [3, 8, -25, 90, 22]
# by 3s [3, 10, -25, 90, 22]
# by 4s [3, -25, 22]
# by 5s [3, 33] 
# by 6 [3, 90]
# by 7 [3, 6]
# by 8 [3, 15]
# by 9 [3, 22]

# variations on index 0
# SKIP A NUM 
# [3, 5, -7, 8, 10, -25, 33, 90, 6, 15, 22]
# by 1s - skip "first" (-7) => 3 + [10, 33, 6, 22] = 3 + index4 
#       - skip "second" 10 => [3, -7] + [33, 22]  = ? + index6
#       - skip "third" 33 => [3, 7, 10] + [6, 22]  = ? + index8
#       - skip "fourth" 6 => [3, 7, 10, 33] + [22] = ? + ?

# by 2s skip "first" 8 => 3 + [-25, 90, 22]
# by 2s skip "second" (-25) => [3, 8] + [90, 22]

# index 1
# by 1s [5, 8, -25, 90, 15]
# by 2s [5, 10, -33, 6, 22]
# by 3s [5, -25, 15, 6]
# by 4s [5, 33]
# by 5s [5, 90]
# by 6s [5, 6]
# by 7s [5, 15]
# by 8s [5, 22]

# index 2
# by 1s [-7, 10, 33, 90, 15, 22] (same as index 0 shift first elem off)
# by 2s [-7, -25, 6]
# by 3s [-7, 33, 22]
# by 4s [-7, 90]
# by 5s [-7, 6]
# by 6s [-7, 15]
# by 7s [-7, 22]

# index3 
# by 1s 8, -25, 90, 15 (same as prev odd index shift 0)
# by 2s 8, 33, 15
# by 3s 8, 90
# by 4s 8, 6
# by 5s 8, 15
# by 6s 8, 22

# index4
# by 1s [10, 33, 6, 22] 
# by 2s [10, 90, 22]
# by 3s [10, 6] 
# by 4s [10, 15] 
# by 5s [10, 22] 



# NOTES ideas
 #1 btw- even nums/odd nums - store first two sum, add next and store, etc
#2 btw - store first two, add next and store,etc 
#3 btw, #4 btw, ...
# Start from each numer and try 

# store = {}
# i = 0 current start
# num_btw = 1
# first_two_sum = (i + (i+1)+num_btw)
#   - store key as string i.e. ("3+(-7)+10")
#   - store val as sum
# {"3+(-7):-4"}
# - loop over arr<lenth, start at 
# -adding rest to the stored (i+1)+num_btw+num_btw
# - get prev key

