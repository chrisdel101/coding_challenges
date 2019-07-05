#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#include <ctype.h>
#include <stdbool.h>

#define PRIME "Prime\n"
#define NOT_PRIME "Not prime\n"

// https://stackoverflow.com/a/40200710/5972531
bool isPrime(int n)
{
    for (size_t i = 2, s = sqrt(n); i <= s; i++)
    {
        if (n % i == 0)
            return false;
    }
    return n > 1;
}

int main(void)
{
    int count;
    // puts("Enter count: ");
    scanf("%i", &count);
    for (size_t i = 0; i < count; i++)
    {
        int input;
        scanf("%i", &input);
        if (isPrime(input))
        {
            printf("%s", PRIME);
        }
        else
        {
            printf("%s", NOT_PRIME);
        }
    }
}