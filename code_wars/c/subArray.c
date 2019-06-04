#include <stdio.h>
#include <stdlib.h>

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

int maxSequence(const int* array, size_t n) {
    qsort(array,n, sizeof(int),cmpfunc);
    for (size_t i = 0; i < n; i++)
    {
        printf("%i\n", array[i]);
    }
}
 int main(void) {
    int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    maxSequence(arr,9);
}