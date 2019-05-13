def findNextBracketIndex(code):
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
            

            

    print(brackets)
print(findNextBracketIndex("[,[,,[+]][--]]"))