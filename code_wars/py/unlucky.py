import datetime

def dayAdder(day):
    day = day[0:len(day)]
    print('day', day)
    if day == "Monday":
        return 4
    elif day == "Tuesday":
        return 3
    elif day == "Wednesday":
        return 2
    elif day == "Thursday":
        return 1
    elif day == "Friday":
        return 0
    elif day == "Saturday":
        return 6
    elif day == "Sunday":
        return 5

def addDate(updateDate, year, count=0, k=0):
    # base case
    if updateDate.year == year + 1:
        return count
    addWeek = updateDate + datetime.timedelta(days=7)
    date = addWeek.strftime("%d")
    if date == "13":
        count = count + 1
    return addDate(addWeek,year, count)

def unlucky_days(year):
    day1 = datetime.datetime(year, 1, 1)
    toAdd = dayAdder(day1.strftime("%A"))
    firstFriday = day1 + datetime.timedelta(days=toAdd)
    return addDate(firstFriday, year)

print(unlucky_days(2015))


# import datetime
#
# def dayAdder(day):
#     day = day[0:len(day)]
#     print('day', day)
#     if day == "Monday":
#         return 4
#     elif day == "Tuesday":
#         return 3
#     elif day == "Wednesday":
#         return 2
#     elif day == "Thursday":
#         return 1
#     elif day == "Friday":
#         return 0
#     elif day == "Saturday":
#         return 6
#     elif day == "Sunday":
#         return 5
#
# def unlucky_days(year):
#     day1 = datetime.datetime(year, 1, 1)
#     print(day1)
#     print(day1.strftime("%A"))
#     toAdd = dayAdder(day1.strftime("%A"))
#     print(toAdd)
#     firstFriday = day1 + datetime.timedelta(days=toAdd)
#     print(firstFriday)
#     print(firstFriday.strftime("%A"))
#
#     def addDate(updateDate, year, count=0):
#         # if count >= 3:
#         #     return
#         # base case
#         print('U',updateDate.year)
#         print('U',year +1)
#         if year == 2015:
#             print('update', updateDate)
#             x = addDate(updateDate,year,count)
#             return x
#         else:
#             # print(updateDate.year)
#             addWeek = updateDate + datetime.timedelta(days=7)
#             print(addWeek.strftime("%A"))
#             date = addWeek.strftime("%d")
#             print(addWeek)
#             if date == "13":
#                 count = count + 1
#             addDate(addWeek,year, count)
#
#     res = addDate(firstFriday, year)
#     print('R', res)
#     return
#

print(unlucky_days(2015))
