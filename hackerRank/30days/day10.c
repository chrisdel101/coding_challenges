#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#include <ctype.h>

int count1s(int *binArr, int arrSize)
{
    int max = 0;
    int count = 0;
    int previous = 0;
    for (size_t i = 0; i < arrSize; i++)
    {
        if (binArr[i] == 1)
        {
            count++;
            if (count > max)
            {
                max = count;
            }
        }
        else
        {
            count = 0;
        }
        // previous = binArr[i];
    }
    return max;
}
int toBinaryArr(int n)
{
    int arr1[256];
    int j = 0;
    // convert each digit to binary
    while (n)
    {
        int rem = n % 2;
        arr1[j] = rem;
        n = n / 2;
        j++;
    }
    int *binaryArr = malloc(j);
    // reverse the array
    for (signed i = j, k = 0, m = 10; i >= 0; i--, k++, m += 10)
    {
        binaryArr[k] = arr1[i - 1];
        printf("%i", binaryArr[k]);
    }
    // int i, single = 0;
    // https://stackoverflow.com/a/19599419/5972531
    // convert arr to single int
    // for (i = 0; i < j; i++)
    // {
    //     binary = 10 * binary + binaryArr[i];
    // }
    int max = count1s(binaryArr, j);
    free(binaryArr);
    printf("max %i\n", max);

    return max;
}

int main(void)
{
    int max = toBinaryArr(1911);
    return max;
    // free(binary);
}