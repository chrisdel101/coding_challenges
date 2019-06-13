class Person:
    def __init__(self, initialAge):
        # Add some more code to run some checks on initialAge
        self.age = initialAge
        if self.age < 0:
            self.age = 0
            print("age is not valid, setting age to 0")

    def amIOld(self):
        if self.age < 13:
            print("You are young.")
        elif self.age >= 13 and self.age < 18:
            print("You are a teenager.")
        else:
            print("You are old.")
        # Do some computations in here and print out the correct statement to the console

    def yearPasses(self):
        self.age += 1
        print(self.age)
        # Increment the age of the person in here


p = Person(23)
p.yearPasses
p.amIOld()
