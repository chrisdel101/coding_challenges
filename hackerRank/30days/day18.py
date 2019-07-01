
import sys


class Solution:
    def __init__(self):
        self.stack = []
        self.queue = []

    def pushCharacter(self, char):
        stack_len = len(self.stack)
        self.stack.insert(0, char)
        # print(self.stack)

    def enqueueCharacter(self, char):
        self.queue.append(char)
        # print(self.queue)

    def popCharacter(self):
        return self.stack.pop(0)

    def dequeueCharacter(self):
        return self.queue.pop(0)

    def print1(self):
        print(self.stack)
        print(self.queue)


s = Solution()
s.enqueueCharacter('a')
s.enqueueCharacter('b')
s.enqueueCharacter('c')
s.pushCharacter('a')
s.pushCharacter('b')
s.pushCharacter('c')

s.popCharacter()
s.dequeueCharacter()
# s.pushCharacter('c')

s.print1()
