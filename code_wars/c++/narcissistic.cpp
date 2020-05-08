#include <iostream>
#include <math.h> /* pow */
using namespace std;

bool narcissistic(int value)
{
    int copyValue = value;
    int exponent = 0;
    int sum = 0;
    // get num of digits
    while (copyValue)
    {
        // slice off last digit
        copyValue = copyValue / 10;
        // increment digit count
        exponent++;
    }
    // reassign copyValue to keep track of oringinal
    copyValue = value;
    while (copyValue)
    {
        // raise each digit to exp and add
        int temp = pow(copyValue % 10, exponent);
        // slice off digit
        copyValue = copyValue / 10;
        sum += temp;
    }

    if (sum == value)
        return true;
    return false;
}

int main()
{
    cout << narcissistic(122);
}