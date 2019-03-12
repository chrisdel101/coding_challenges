def bubble(arr):
    store = []
    def sort(arr):
        # first pass shift items
        for (i, val) in enumerate(arr):
            try:
                if val > arr[i + 1]:
                    temp = val
                    arr[i] = arr[i+1]
                    arr[i+1] = temp
                    store.append(arr[:])
            except IndexError:
                gotdata = 'null'
        # second pass, if not in order recurse
        for (i, val) in enumerate(arr):
            try:
                if val > arr[i + 1]:
                    sort(arr)
            except IndexError:
                gotdata = 'null'
    sort(arr)
    return store

bubble([1,4,3,6,7,9,2,5,8])
