def parse(data):
    if not len(data):
        return
    val = 0
    list = []
    # true if passes through to the else
    noVal = False
    for index, i in enumerate(data):
        if(i == "i"):
            print('i',val)
            val = val + 1
        elif(i == "d"):
            # if (val - 1) >= 0:
                val = val - 1
                print('d', val)
        elif(i == "s"):
            print('s', val)
            val = val*val
        elif(i == "o"):
            print('o', val)
            list.append(val)

        # if (len(data) - 1) == index:
        #     if not len(list):
        #         # print('here')
        #         list.append(val)
    return(list)


print(parse("idoiido"))

# Write a simple parser that will parse and run Deadfish.
#
# Deadfish has 4 commands, each 1 character long:
#
# i increments the value (initially 0)
# d decrements the value
# s squares the value
# o outputs the value into the return array
# Invalid characters should be ignored.
#
# parse("iiisdoso")  ==>  [8, 64]
