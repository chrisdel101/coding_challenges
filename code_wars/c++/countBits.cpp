#include <iostream>
using namespace std;

// count bits but do not track new binary
unsigned int countBits(unsigned long long n)
{
    int count = 0;
    while (n != 0)
    {
        int bit = n % 2;
        if (bit == 1)
            count++;
        n = n / 2;
    }
    return count;
}
// convert to binary and count bits - keep new binary
unsigned int convertAndCountBit(unsigned long long n)
{
    int binArray[100];
    int i = 0;
    int count = 0;
    while (n != 0)
    {
        int bit = n % 2;
        if (bit == 1)
        {
            count++;
        }
        cout << "bit: " << bit << endl;
        binArray[i] = bit;
        n = n / 2;
        cout << "n " << n << endl;
        i++;
    }
    return count;
}

int main()
{
    countBits(2);
}