class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = 0

    def computeDifference(self):
        elCopy = self.__elements.copy()
        for j in self.__elements:
            for ind, i in enumerate(elCopy):
                abso = abs(i - j)
                if abso > self.maximumDifference:
                    self.maximumDifference = abso

            elCopy.pop(0)
