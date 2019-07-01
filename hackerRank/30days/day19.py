import unittest


class Calculator():
    def __init__(self, n):
        self.n = n

    def divisorSum(self, n):
        l = []
        for i in range(n):
            if n % (i + 1) == 0:
                l.append(i+1)
        return sum(l)


c = Calculator(1)


class TestCalulator(unittest.TestCase):

    def test_divisor_sum(self):
        self.assertEqual(12, c.divisorSum(6))


if __name__ == '__main__':
    unittest.main()
