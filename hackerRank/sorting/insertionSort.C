#include <assert.h>
#include <ctype.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *readline();
char *ltrim(char *);
char *rtrim(char *);
char **split_string(char *);

int parse_int(char *);

/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */
void printArr(int n, int *arr)
{
    for (size_t i = 0; i < n; i++)
    {
        printf("%i ", arr[i]);
    }
    printf("\n");
}
//  40
// 40 	63 	21 	35 	6 	57
void insertionSort2(int n, int arr_count, int *arr)
{
    for (size_t i = 1; i < arr_count; i++)
    {
        int current = arr[i];
        int notSwapped = 1;
        int j = 0;
        // loop over sorted part
        while (notSwapped && j < i)
        {
            // swap all less than after found index
            if (current < arr[j])
            {
                // flip loop flag
                notSwapped = 0;
            //    track current j
                int prev = arr[j];
                for (size_t k = j + 1; k <= i; k++)
                {
                    // re-store prev
                    int temp = prev;
                    // reassign prev for next run
                    prev = arr[k];
                    // swap prev into current pos
                    arr[k] = temp;
                }
                // swap current back to starting index
                arr[j] = current;
            }
            j++;
        }
    }
}
int main()
{
    // int n = parse_int(ltrim(rtrim(readline())));

    // char** arr_temp = split_string(rtrim(readline()));

    // int* arr = malloc(n * sizeof(int));
    int arr[] = {
        3,
        4,
        7,
        5,
        6,
        2,
        1,
    };
    // for (int i = 0; i < n; i++) {
    //     int arr_item = parse_int(*(arr_temp + i));

    //     *(arr + i) = arr_item;
    // }

    insertionSort2(7, 7, arr);
    printArr(7, arr);
    return 0;
}
