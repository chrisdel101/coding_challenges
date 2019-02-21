def unique_in_order(str):
    strList = list(str)
    newList = []
    for (index,_) in enumerate(strList):
        if index == 0:
            newList.append(strList[0])
        elif strList[index-1]:
            if strList[index]  != strList[index-1]:
                newList.append(strList[index])
    return(newList)



find_in_order("ABBCcAD")
