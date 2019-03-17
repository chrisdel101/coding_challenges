# make copy of list
# track each direction - increment and decrement with each conditional
# when pair found, slice out of list
# reset index back 2 and continue until original list ends
def dirReduc(arr):
    listCopy = arr
    dictTracker = {
        "NORTH": 0,
        "SOUTH": 0,
        "EAST": 0,
        "WEST": 0,
    }
    #  slice chunk out of arr
    def slice(arr, i):
        arr = arr[:i-1] + arr[i+1:]
        return arr

    index = 0
    for (_, val) in enumerate(arr):
        # if north or south
            if listCopy[index] == 'NORTH' or listCopy[index] == 'SOUTH':
                if listCopy[index] == 'NORTH' and listCopy[index - 1] == 'SOUTH' and dictTracker['SOUTH'] > 0:
                    dictTracker['SOUTH'] -=1
                    listCopy = slice(listCopy,index)
                    index = index - 2
                elif listCopy[index] == 'SOUTH' and listCopy[index - 1] == 'NORTH' and dictTracker['NORTH'] > 0:
                    dictTracker['NORTH'] -=1
                    listCopy = slice(listCopy,index)
                    index = index - 2
                else:
                    if listCopy[index] == 'NORTH':
                        dictTracker['NORTH'] += 1
                    elif listCopy[index] == 'SOUTH':
                        dictTracker['SOUTH'] += 1
        # if east or west
            elif listCopy[index] == 'WEST' or listCopy[index] == 'EAST':
                    if listCopy[index] == 'EAST' and listCopy[index - 1] == 'WEST' and dictTracker['WEST'] > 0:
                        dictTracker['WEST'] -=1
                        listCopy = slice(listCopy,index)
                        index = index -2
                    elif listCopy[index] == 'WEST' and listCopy[index - 1] == 'EAST' and dictTracker['EAST'] > 0:
                        dictTracker['EAST'] -=1
                        listCopy = slice(listCopy,index)
                        index = index -2
                    else:
                        if listCopy[index] == 'EAST':
                            dictTracker['EAST'] += 1
                        elif listCopy[index] == 'WEST':
                            dictTracker['WEST'] += 1
                # incerment index manaully
            index += 1
    return listCopy





# ['WEST', 'SOUTH', 'EAST', 'EAST']
# ['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH']
print(dirReduc(['EAST', 'EAST', 'WEST', 'NORTH', 'WEST', 'EAST', 'EAST', 'SOUTH', 'NORTH', 'WEST']))
# ['EAST', 'NORTH', 'NORTH', 'WEST', 'WEST', 'SOUTH']
# print(dirReduc(['EAST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'WEST', 'SOUTH', 'NORTH']))
# ['EAST', 'SOUTH'] should equal ['EAST', 'EAST', 'SOUTH', 'WEST']
# ['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH']
# => ['NORTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'EAST', 'SOUTH', 'SOUTH']
# print(dirReduc(['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH']))
# 'NORTH'] should equal ['NORTH', 'EAST']
# print(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH', 'SOUTH', 'NORTH', 'WEST', 'EAST']))
# print(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH', 'SOUTH', 'NORTH', 'WEST', 'EAST']))
