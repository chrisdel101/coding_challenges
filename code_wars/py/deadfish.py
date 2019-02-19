def parse(data):
    if not len(data):
        return
    val = 0
    list = []
    for index, i in enumerate(data):
        if(i == "i"):
            print('i',val)
            val = val + 1
        elif(i == "d"):
             val = val - 1
             print('d', val)
        elif(i == "s"):
            print('s', val)
            val = val*val
        elif(i == "o"):
            print('o', val)
            list.append(val)
    return(list)
