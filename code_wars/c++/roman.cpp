#include <iostream>
#include <string>
using namespace std;

int solution(string roman)
{
    int sum = 0;
    for (size_t i = 0; i < roman.length(); i++)
    {
        switch (roman[i])
        {
        case 'I':
            //  if next is not V or X
            if (roman[i + 1] != 'V' && roman[i + 1] != 'X')
            {
                sum += 1;
            }
            break;
        case 'V':
            // if previous one is I
            if (roman[i - 1] == 'I')
            {
                sum += 4;
            }
            else
            {
                sum += 5;
            }
            break;
        case 'X':
            //if previous one is I
            if (roman[i - 1] == 'I')
            {
                sum += 9;
            }
            // if next is L
            else if (roman[i + 1] != 'L' && roman[i + 1] != 'C')
            {
                sum += 10;
            }
            break;
        case 'L':
            // if previous is X
            if (roman[i - 1] == 'X')
            {
                sum += 40;
            }
            else
            {
                sum += 50;
            }
            break;
        case 'C':
            // if previous is X
            if (roman[i - 1] == 'X')
            {
                sum += 90;
            }
            // if next is not M or D
            else if (roman[i + 1] != 'M' && roman[i + 1] != 'D')
            {
                sum += 100;
            }
            break;
        case 'D':
            // if previous is C
            if (roman[i - 1] == 'C')
            {
                sum += 400;
            }
            else
            {
                sum += 500;
            }
            break;
        case 'M':
            // if previous one is C
            if (roman[i - 1] == 'C')
            {
                sum += 900;
            }
            else
            {
                sum += 1000;
            }
            break;
        }
    }
    return sum;
}

int main()
{
    solution("IV");
}