#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <math.h>


typedef struct
{
    int n1;
    int n2;
} numbers;

numbers returnVal(int a, int b)
{
    numbers instance = {a,b};
    return instance;
}

int main(void)
{
    numbers instance = returnVal(1,2);
    int n1 = instance.n1;
    int n2 = instance.n2;
    char arr[] = {n1,n2};
    return arr;
}

// int n = 544;
// int i = 2;
// char a[256];
//
// while (n) {
//     a[] = n % 10;
//     n /= 10;
//     printf("%i\n", n);
// }
