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

int digitToInt(char digit)
{
    if(!isdigit(digit))
    {
        puts("Non-digit char error");
        exit(0);
    }
}
void countSort(int arr_rows, int arr_columns, char* arr) {
    printf("%c \n", arr[2]);


}
int main(void)
{
    char c[20] = { 0 };
    char newcase[20] = { 0 };
    int i;
    while(fgets(c, sizeof(c), stdin) != NULL)
    {
        printf("%c ", c[i]);
    }

}