#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void reverseArr(int n, int *arr)
{
    char buffer[n];
    for (unsigned i = 4; i > 0; i--)
    {
        // printf("%i\n", i);
        printf("%c\n", arr[i]);
    }
}

int main(void)
{

    int arr[] = {305, 97, 1290, 5591, 5930, 9317, 440, 6533, 7470};
    for (signed i = 9 - 1; i >= 0; i--)
    {
        printf("%i ", arr[i]);
    }
    printf("\n");
}