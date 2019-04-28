from collections import deque

class Solution(object):
    def reverse(self, x):
        store = []
        negative = False
        l = None
        if type(x) is int or type(x) is float:
            l = [(i) for i in str(x)]
        elif type(x) is str:
            l = x.split()   
        # if negative remove -
        if l[0] is chr(45):
            print('TRUE')
            negative = True
            del l[0]
        for i in reversed(l):
            store.append(i)
        # if negative:
        if negative:
            print('above')
            store = "".join(store).lstrip("0")
            if(int(store) > (2 ** 31 - 1)):
                print(0)
                return 0
            else:
                store = "-" + store
                return store
        else:
            store = "".join(store)
            if(int(store) > (2 ** 31 - 1)):
                return 0
            if store is not '0':
                print(store)
                return store.lstrip("0")
            else:
                return store



instance = Solution()
print(instance.reverse(-2147483648))
