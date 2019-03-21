def pig_it(text):
    def removePunc(sym, str):
        puncIndex = str.find(sym)
        punc = str[puncIndex]
        newStr = ""
        # loop over string check for punc
        for char in str:
            if char != sym:
                # add to new str
                newStr = newStr + char
        # return punc and new str without punc
        return [punc, newStr]
    punc = None
    store = []
    strs = text.split()
    for str in strs:
        if "?" in str:
            (punc, newStr) = removePunc("?", str)
        elif "!" in str:
            (punc, newStr) = removePunc("!", str)
            # check for empty white space
            if newStr:
                store.append(newStr)
        else:
            first_letter = str[0]
            other_letters = str[1:len(str)]
            newStr = other_letters + first_letter + "ay"
            if newStr:
                store.append(newStr)
        if punc:
            store.append(punc)
    return " ".join(store)


pig_it('O tempora o mores !')

# 'Oay emporatay oay oresmay !
