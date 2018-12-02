def count_sheeps(arrayOfSheeps):
    increment = 0
    for i in arrayOfSheeps:
        if(i == True):
            increment += 1
    print(increment)
    return increment

count_sheeps([True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True])
