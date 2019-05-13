def brain_luck(code, input):
    def matchingBrackets(code):
        forwardIndexes = []
        matches = {}
        indexes = []
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
        'cellInput': [],
        'tempStorage': [],
        'current': "",
        'codeCursor': 0,
        'inputCursor':0,
        'matches': matchingBrackets(code)
    }
   

    def subtract():
        val = dict['current']
        val -= 1
        if val < 0:
            val = 255
        dict['current'] = val
        return dict['current']
    def moveRight():
        length = len(dict['input'])
        original = dict['inputCursor']
        dict['inputCursor'] += 1
        if dict['inputCursor'] > length and dict['inputCursor'] < 0:
            dict['inputCursor'] = original
            return dict['inputCursor']
        return dict['inputCursor']
    def moveLeft():
        length = len(dict['input'])
        original = dict['inputCursor']
        dict['inputCursor'] -= 1
        if dict['inputCursor'] > length and dict['inputCursor'] < 0:
            dict['inputCursor'] = original

            return dict['inputCursor']
        return dict['inputCursor']
    def storeByte():
        value = chr(dict['current'])
        print('val', value)
        dict['cellInput'].append(chr(dict['current']))
        return dict['cellInput']
    
    print('matches', dict['matches'])
    def loop(bracket, i):
        val = dict['current']
        if val == 0:
            return False
        else:
            matching = dict['matches'][i]
            # print('loop', matching)
            return matching
    def route(bracket,i):
        val = dict['current']
        if val == 0:
            # get index of matching bracket
            # print('above')
            matching = dict['matches'][i]
            # print('route', matching)
            return matching
        return False

    def add():
        val = dict['current']
        val += 1
        if val > 255:
            val = 0
        dict['current'] = val
        return val
    # need to convert from hex
    def pushCurrent():
        # current = None
        # if len(dict['input']) > 1:
        current = ord(dict['input'][dict['inputCursor']])
        # else :
            # current = ord(dict['input'][0]) 
        print("current", current)
        dict['current'] = current
        # shift off first elem of str
        dict['input'] = dict['input'][1:]
        # decrement index by one
        # dict['inputCursor'] -= 1
            # print( "cursor", dict['inputCursor'] )
        return dict['current']
    
    def switch(symbol,i):
        if symbol is ',':
            return pushCurrent()
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
            return route(symbol,i)
        elif symbol is ']':
            return loop(symbol,i)
        else: 
            return 'Switch Error'

    i = 0
    while i < len(code) :
        # break
        action = switch(code[i],i)
        print('code', code[i])
        print('action', action)
        # move i to after bracket
        if code[i] is '[' and action:
            i = action
        elif code[i] is ']' and action:
            i = action
    
        i = i + 1
    # action = switch('.', 1, 0)
    print(dict)
brain_luck(',+[-.,+]', 'Codewars' + chr(255))

# brain_luck(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', "hello")

# brain_luck('[[]]', 'Codewars' + chr(255))
