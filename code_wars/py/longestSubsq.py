# def lcs(x,y):
#     n = len(x)
#     m= len(y)
#     for i in y:


# lcs("abcdef", "abc")

def lcs(str1,str2,i, j):
    # print(i,j)
    # shortest = str1 if len(str2) > len(str1) else str2
    # print('short', len(shortest))
# while i < len(shortest):
    if i == 0 or j == 0:
        print('first')
        return 0
    elif str1[i - 1] == str2[j - 1]:
        x = 1 + lcs(str1, str2, i - 1, j - 1)
        print("second", x)
        # print("second", str1[x], str2[x])
        return x
    else:
        x = max(lcs(str1,str2,i - 1, j), lcs(str1,str2,i, j - 1))
        print('last', x)
        return x


print(lcs("abc", "abcd0",3,5))
