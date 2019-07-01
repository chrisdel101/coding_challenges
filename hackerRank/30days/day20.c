#include <stdio.h>
#include <string.h>
#include <stdlib.h>
void swap(int *px, int *py)
{
    int temp;
    temp = *px;
    *px = *py;
    *py = temp;
}
int totalSwaps = 0;

int *bubbleSortSwaps(int *arr, int arr_size)
{

    for (int i = 0; i < arr_size; i++)
    {
        puts("RUN");
        // Track number of elements swapped during a single array traversal

        int currentSwaps = 0;
        for (int j = 0; j < arr_size - 1; j++)
        {
            // Swap adjacent elements if they are in decreasing order
            // printf("before i %i\n", arr[j]);
            // printf("before j %i\n", arr[j + 1]);
            if (arr[j] > arr[j + 1])
            {
                swap(&arr[j], &arr[j + 1]);
                // printf("after i %i\n", arr[j]);
                // printf("after j %i\n", arr[j + 1]);
                currentSwaps++;
            }
        }

        // If no elements were swapped during a traversal, array is sorted
        if (currentSwaps == 0)
        {
            break;
        }
        totalSwaps += currentSwaps;
    }
    for (size_t i = 0; i < arr_size; i++)
    {
        // printf("%i\n", arr[i]);
    }

    return arr;
}

int main(void)
{
    int arr[] = {2, 3, 1, 5, 0};
    int n = 5;
    int *arr = bubbleSortSwaps(arr, 5);
    // for (size_t i = 0; i < 5; i++)

    printf("Array is sorted in %i swaps.", totalSwaps);
    printf("First Element: %i", arr[0]);
    printf("Second Element: %i", arr[n - 1]);
    // }
}