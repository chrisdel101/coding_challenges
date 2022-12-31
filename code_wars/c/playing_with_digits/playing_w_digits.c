#include <stdio.h>
#include <math.h>

int digPow(int n, int p)
{
    // copyN - don't mutate original n
    int *copyN = &n;
    // random num of digits store
    int digits[10] = {};
    // track num of digits in n
    int numOfDigits = 0;
    int sum = 0;
    // while n still has digits - slice off each
    while (*copyN)
    {
        int sliceLastDgt = *copyN % 10;
        int remainingDgts = (*copyN - sliceLastDgt) / 10;
        copyN = &remainingDgts;
        digits[numOfDigits] = sliceLastDgt;
        numOfDigits++;
    }
    for (size_t j = numOfDigits-1; j >= 0; j--)
    {
      int new = pow(digits[j], p++);
      sum += new;
      if(j == 0) break;
    }
    return (sum % n == 0) ? sum / n : -1;
}

int main(void)
{
   int act = digPow(46288, 3);
   printf("%i", act);
   return act;
}


// Keep for instructions on how to do this 
// copyied pointer version 


// int digPow(int n, int p)
// {
//     //copyP - no mutate p
//     int *copyP = &p;
//     int *copyN = &n;
//     int digits[10] = {};
//     //count num
//     int numOfDigits=0;
//     while (*copyN)
//     {
//         int sliceLastDgt = *copyN % 10;
//         int remainingDgts = (*copyN - sliceLastDgt) / 10;
//         copyN = &remainingDgts;
//         digits[numOfDigits] = sliceLastDgt;
//         numOfDigits++;
//     }
//     int sum = 0;
//     for (size_t j = numOfDigits-1; j >= 0; --j)
//     {
//     int current = digits[j];
//     // printf("%s %i \n","current: ", current);
//     // printf("%s %i \n","p before: ", p);
//     int new = pow(current, *copyP);
//     // int *temp = copyP;
//     int newP = *copyP + 1;
//     copyP = &newP;
//     // printf("%i\n", *copyP);
//     // printf("%i\n", *copyP);
//     sum += new;
//     // printf("%s %i \n","new: ", new);
//     // printf("%s %i \n","p after: ", p);
//       if(j == 0) break;
//     }
//     // printf("%s %i \n", "sum ", sum);
//     // printf("%d \n", p);
//     if(sum % n == 0){
//         return sum / n;
//     } 
//     return -1;
    
// }