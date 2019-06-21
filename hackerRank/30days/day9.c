#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#include <ctype.h>

int factorial(int n)
{
    if (n >= 1)
    {
        return n * factorial(n - 1);
    }
    else
    {
        return 1;
    }
}

int main(void)
{
    printf("%i\n", factorial(3));
}