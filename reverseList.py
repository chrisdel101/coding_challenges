from collections import deque

class Solution(object):
    def reverse(self, x):
        if x is 0:
            return 0
        l = None
        negative = False
        if type(x) is int or type(x) is float:
            l = [(i) for i in str(x)]
        elif type(x) is str:
            l = x.split()
        d = deque(l)
        j = 0
        k = 0
        length = len(d)
        if length % 2 == 0:
            times = length
        else:
            times = length - 1
        # if it has negative sign
        if d[0] is chr(45):
            print('TRUE')
            negative = True
            del d[0]
        print(times)
        while k < times / 2:
            # store last in var
            print('d', d)
            tempLast = d[(len(d) - 1) - j]
            tempFirst = d[j]
            print()
            print('tempLast', tempLast)
            print('tempLast', (len(d) - 1) - j)
            # print('tempFirst', tempFirst)
            # remove last
            del d[(len(d) - 1) - j]
            # j = j + 1
            print('popped', d)
            # append last to the front
            d = list(d)

            d.insert(j,tempLast)
            # j = j + 1
            print('shift', tempLast, list(d), j)
            d = deque(d)
            # print("i", list(d).index(tempFirst))
            d.remove(tempFirst)
            # j = j + 1
            print('remove', tempFirst, d)
            d = list(d)
            d.insert((len(d)) - j, tempFirst)

            print('append', tempFirst,d)
            # d.remove()

            j = j + 1
            k = k + 2
            # remove zero padding
            # print('d',d)
            # print('s',s)
            if negative:
                d = "".join(d).lstrip("0")
                s = '-' + d
                return s

        d = "".join(d).lstrip("0")
        return d



instance = Solution()
print(instance.reverse(1234567891234))
