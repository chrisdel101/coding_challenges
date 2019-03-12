import re
def count_smileys(arr):
    count = 0
    list = [':', ';', ')', 'D', '-', '~']
    for word in arr:
        letterCount = 0
        eyes = False
        nose = False
        mouth = False
        # loop letters of each
        for letter in word:
            # if one letter not there break loop
            if letter not in list:
                letterCount += 1
                break
            else:
                # check if valid and not already there - avoid duplicate eyes/noses
                if (letter == list[0] or letter == list[1] and not eyes ):
                    eyes = True
                    letterCount += 1
                if (letter == list[2] or letter == list[3] and not mouth ):
                    mouth = True
                    letterCount += 1
                if (letter == list[4] or letter == list[5] and not nose ):
                    nose = True
                    letterCount += 1
                # detectend of the word by len then add one
                if letterCount == len(word):
                    count += 1
    return count
count_smileys([':D', ':~)', ';~D', ':)'])
