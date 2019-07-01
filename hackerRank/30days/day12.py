
name_id = input("\n")
name_id = name_id.split()
count = input("\n")
grades = []
for n in range(int(count)):
    grade = input("\n")
    grades.append(int(grade))

# print(grades)


class Person:
    def __init__(self, firstName, lastName, idNumber):
        self.firstName = firstName
        self.lastName = lastName
        self.idNumber = idNumber

    def printPerson(self):
        print("Name:", self.lastName + ",", self.firstName)
        print("ID:", self.idNumber)


class Student(Person):
    def __init__(self, firstName, lastName, idNumber, scores):
        Person.__init__(self, firstName, lastName, idNumber)
        self.firstName = firstName
        self.lastName = lastName
        self.id = idNumber
        self.scores = scores

    def letterSwitch(self, avg):
        if avg >= 90 and avg <= 100:
            return 'O'
        elif avg >= 80 and avg < 90:
            return 'E'
        elif avg >= 70 and avg < 80:
            return 'A'
        elif avg >= 55 and avg < 70:
            return 'P'
        elif avg >= 40 and avg < 55:
            return 'D'
        elif avg < 40:
            return 'T'
        else:
            return False

    def calculate(self):
        avg = sum(self.scores) / len(self.scores)
        letter = self.letterSwitch(avg)
        return letter

    def printOutput(self):
        print(f"Name: {name_id[0]} {name_id[1]}")
        print(f"ID: {name_id[2]}")
        print(f"Grade {self.calculate()}")


stu = Student(name_id[0], name_id[1], int(name_id[2]), grades)
stu.printOutput()
