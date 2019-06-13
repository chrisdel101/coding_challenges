#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <ctype.h>

// - split string into words
void seperateChars(void)
{
    int count;
    scanf("%i", &count);
    getchar();
    char arr[count][500000];
    for (size_t i = 0; i < count; i++)
    {
        char storeStrTemp[500000];
        memset(storeStrTemp, 0, sizeof(storeStrTemp));
        fgets(storeStrTemp, sizeof(storeStrTemp), stdin);
        for (size_t j = 0; j < strlen(storeStrTemp); j++)
        {
            arr[i][j] = storeStrTemp[j];
        }
    }
    for (size_t i = 0; i < count; i++)
    {
        int len = strlen(arr[i]);
        char evens[500000];
        char odds[500000];
        memset(evens, 0, sizeof(evens));
        memset(odds, 0, sizeof(odds));
        int evenCount = 0;
        int oddCount = 0;
        for (size_t j = 0, k = 1; j < len; j += 2, k += 2)
        {
            if (isalnum(arr[i][j]))
            {
                evens[evenCount] = arr[i][j];
                evenCount++;
            }
            if (isalnum(arr[i][k]))
            {
                odds[oddCount] = arr[i][k];
                oddCount++;
            }
        }
        evenCount = 0;
        oddCount = 0;
        printf("%s %s\n", evens, odds);
    }
}

// Hce akr
// Rn ak
int main(void)
{
    seperateChars();
}

// akr ak
// 123456
