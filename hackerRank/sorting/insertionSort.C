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

// char* readline() {
//     size_t alloc_length = 1024;
//     size_t data_length = 0;

//     char* data = malloc(alloc_length);

//     while (true) {
//         char* cursor = data + data_length;
//         char* line = fgets(cursor, alloc_length - data_length, stdin);

//         if (!line) {
//             break;
//         }

//         data_length += strlen(cursor);

//         if (data_length < alloc_length - 1 || data[data_length - 1] == '\n') {
//             break;
//         }

//         alloc_length <<= 1;

//         data = realloc(data, alloc_length);

//         if (!data) {
//             data = '\0';

//             break;
//         }
//     }

//     if (data[data_length - 1] == '\n') {
//         data[data_length - 1] = '\0';

//         data = realloc(data, data_length);

//         if (!data) {
//             data = '\0';
//         }
//     } else {
//         data = realloc(data, data_length + 1);

//         if (!data) {
//             data = '\0';
//         } else {
//             data[data_length] = '\0';
//         }
//     }

//     return data;
// }

// char* ltrim(char* str) {
//     if (!str) {
//         return '\0';
//     }

//     if (!*str) {
//         return str;
//     }

//     while (*str != '\0' && isspace(*str)) {
//         str++;
//     }

//     return str;
// }

// char* rtrim(char* str) {
//     if (!str) {
//         return '\0';
//     }

//     if (!*str) {
//         return str;
//     }

//     char* end = str + strlen(str) - 1;

//     while (end >= str && isspace(*end)) {
//         end--;
//     }

//     *(end + 1) = '\0';

//     return str;
// }

// char** split_string(char* str) {
//     char** splits = NULL;
//     char* token = strtok(str, " ");

//     int spaces = 0;

//     while (token) {
//         splits = realloc(splits, sizeof(char*) * ++spaces);

//         if (!splits) {
//             return splits;
//         }

//         splits[spaces - 1] = token;

//         token = strtok(NULL, " ");
//     }

//     return splits;
// }

// int parse_int(char* str) {
//     char* endptr;
//     int value = strtol(str, &endptr, 10);

//     if (endptr == str || *endptr != '\0') {
//         exit(EXIT_FAILURE);
//     }

//     return value;
// }
