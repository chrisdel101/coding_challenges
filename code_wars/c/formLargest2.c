#include <stdlib.h>
#include <stdio.h>

int cmpfunc (const void * a, const void * b) 
{
   int x = *(const int *)a;
   int y = *(const int *)b;
      if (x < y){
         // 1 here for descending
         // -1 or acsending
        return 1;  
      } else if (x > y){
        return -1; 
      }
      return 0;
}

long long maxNumber(long long n)
{   
    int i = 0;
    int arr[30];
    long long n_copy = n;
    while(n_copy != 0)
    {
        long long x = n_copy % 10;
        arr[i] = x;
        n_copy /= 10;
        i++;
    }
      qsort(arr,i, sizeof(int), cmpfunc);
      long long number = 0;
      for (size_t j = 0; j < i; j++)
      {
         number *= 10;
         number += arr[j];
      }
    return number;
}

int main(void)
{
   int res = maxNumber(99997777);
   printf("%i\n", res);
}