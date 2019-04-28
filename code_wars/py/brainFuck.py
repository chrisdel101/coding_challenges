def brain_luck(code, input):
    # print(input)
    cells = []
    dataPtr = 0
    for (ind,i) in enumerate(code):
        if i is '[':
            print(cells[dataPtr])
            if cells[dataPtr] is 0:
                return
            else:
                while cells[dataPtr] is not 0:
                    if i is ',':
                        # print(input[ind])
                        cells.append(ord(input[ind]))
                    if i is '+':
                        cells[dataPtr] = cells[dataPtr] + 1
                    if i is '-':
                        cells[dataPtr] = cells[dataPtr] - 1
                    if i is '.':
                        print(cells[dataPtr])
        elif i is ',':
            # print(input[ind])
            cells.append(ord(input[ind]))
        elif i is '+':
            cells[dataPtr] = cells[dataPtr] + 1
        elif i is '-':
            cells[dataPtr] = cells[dataPtr] - 1
        elif i is '.':
            print(cells[dataPtr])




#

brain_luck(',+[-.,+]', 'Codewars' + chr(255))
