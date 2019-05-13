def high(x):
    currentWord = ""
    highestWord = ""
    currentScore = 0
    highestScore = 0
    k = 0
    for (ind, i) in enumerate(x):
        if i != " ":
            currentScore += int(ord(i) - 97 + 1)
            currentWord += i
        if i == " " or (ind == len(x) - 1):
            if currentScore > highestScore:
                # clear highest word
                highestWord = ""
                # make high current
                highestWord = currentWord
                # make high score current
                highestScore = currentScore
            # reset current vals
            currentScore  = 0
            currentWord = ""
    return highestWord

high("what time are we climbing up the volcano")
