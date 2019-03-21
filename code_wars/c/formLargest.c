#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long maxNumber(long long n);
void swap(char *x, char *y);
char *permute(char *a, int l, int r, char *store) ;



int main(void) {
    maxNumber(7389);
}




long long maxNumber(long long n)
{
    int n_copy = n;
    int count = 0;
    while(n_copy != 0)
    {
        n_copy /= 10;
        count++;
    }
    // printf("%i\n",count);
    char str[count+1];
    // make it a string
    sprintf(str, "%lli", n );
    str[count+1] = '\0';
    char Tstr[] = "ABC";

    char store[100];
    char *arr = permute(str,0, count-1, store);
    // for (size_t i = 0; i < 20; i++) {
    //     printf("%c\n", arr[i]);
    // }
    // printf("%s\n",arr[0] );
}

void swap(char *x, char *y)
{
    char temp;
    temp = *x;
    *x = *y;
    *y = temp;
}
char *permute(char *a, int l, int r, char *store)
{
    int i;
    int j = 0;
    char *perms = malloc(100);
    if (l == r){
        while(arr[j] != '\0')
        {
            store[j] = a[];
            printf("%s\n",store[j]);
            j++
        }
    }
    else
    {
        for (i = l; i <= r; i++)
        {
            swap((a+l), (a+i));
            permute(a, l+1, r, store);
            swap((a+l), (a+i)); //backtrack
        }
    }
    // return perms;
}
