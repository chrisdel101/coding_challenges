def brain_luck(code, input):
    # on run, return dict matching all bracket pairs
    def matchingBrackets(code):
        forwardIndexes = []
        matches = {}
        for (ind, i) in enumerate(code):
            if i is '[':
                forwardIndexes.append(ind)  
            elif i is ']':
                matching = forwardIndexes.pop()
                matches[ind] = matching
                matches[matching] = ind
        return matches
    dict = {
        'input': input,
        'output': [],
        'tape': {},
        'tapeCursor':0,
        'matches': matchingBrackets(code)
    }
    def moveRight():
        dict['tapeCursor'] += 1
        return dict['tapeCursor']
    def moveLeft():
        dict['tapeCursor'] -= 1
        return dict['tapeCursor']
    def storeByte():
        value = chr(dict['tape'][dict['tapeCursor']])
        dict['output'].append(value)
        return dict['output']
    # if byte is not there, or zero, return false
    def routeBackward(i):
        if dict['tapeCursor'] not in dict['tape']:
            return False
        elif dict['tape'][dict['tapeCursor']] == 0:
            return False
        matching = dict['matches'][i]
        return matching
    def routeForward(i):
        # if byte is zero or not there, skip to matching, else false
        matching = dict['matches'][i]
        if dict['tapeCursor'] not in dict['tape']:
            # return index of matching bracket
            return matching
        elif dict['tape'][dict['tapeCursor']] == 0:
            return matching
        return False
    def subtract():
        # if not in tape, assign zero to space
        if dict['tapeCursor'] not in dict['tape']: 
            dict['tape'][dict['tapeCursor']] = 0
        # if there, subract one
        dict['tape'][dict['tapeCursor']] -= 1
        if dict['tape'][dict['tapeCursor']] < 0:
                dict['tape'][dict['tapeCursor']] = 255
        return dict['tape'][dict['tapeCursor']]
    def add():
         # if not in tape, assign zero to space
        if dict['tapeCursor'] not in dict['tape']: 
            dict['tape'][dict['tapeCursor']] = 0
        dict['tape'][dict['tapeCursor']] += 1
        if dict['tape'][dict['tapeCursor']] > 255:
                dict['tape'][dict['tapeCursor']] = 0
        return dict['tape'][dict['tapeCursor']]
    def addToTape():
        # if called and input is zero break
        if len(dict['input']) <= 0:
            return "input-zero"
        # get first char of input
        current = ord(dict['input'][0])
        # assign this to current place in tape
        dict['tape'][dict['tapeCursor']] = current
        # shift off first elem of input each time
        dict['input'] = dict['input'][1:]
        return dict['tape']
    # case swtich
    def switch(symbol,i):
        if symbol is ',':
            return addToTape()
        elif symbol is '>':
            return moveRight()
        elif symbol is '<':
            return moveLeft()
        elif symbol is '+':
            return add()
        elif symbol is '-':
            return subtract()
        elif symbol is '.':
            return storeByte()
        elif symbol is '[':
            return routeForward(i)
        elif symbol is ']':
            return routeBackward(i)
        else: 
            return 'Switch Error'
    i = 0
    while i < len(code) :
        action = switch(code[i],i)
        # if input hits a zero break
        if action == "input-zero":
            return "".join(map(str, dict['output']))   
        if code[i] is '[' and action:
         # reassign i to action
            i = action
        elif code[i] is ']' and action != 0:
         # reassign i to action
            i = action
        i = i + 1     
    return "".join(map(str, dict['output']))
# print( brain_luck(',[.[-],]', 'Codewars' + chr(0)))
# print( brain_luck(',+[-.,+]', 'Codewars' + chr(255)))
# 
# print(brain_luck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', chr(8) + chr(9)))

print(brain_luck(',>+>>>>++++++++++++++++++++++++++++++++++++++++++++>++++++++++++++++++++++++++++++++<<<<<<[>[>>>>>>+>+<<<<<<<-]>>>>>>>[<<<<<<<+>>>>>>>-]<[>++++++++++[-<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<-]>>[-]]<<]>>>[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<+>>[-]]<<<<<<<]>>>>>[++++++++++++++++++++++++++++++++++++++++++++++++.[-]]++++++++++<[->-<]>++++++++++++++++++++++++++++++++++++++++++++++++.[-]<<<<<<<<<<<<[>>>+>+<<<<-]>>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+>-]>[<+>-]<<<-]', chr(10)))