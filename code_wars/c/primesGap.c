#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <math.h>


long long *gap(int gapSize, long long start, long long end);
int isPrime(int n);
int countDigits( int value );


int main(void) {
    long long *arr =  gap(6,100,110);
    // printf("TRETRTE: %d %d\n", sizeof(long), sizeof(long long));
    for (size_t i = 0; i < 2; i++) {
        printf("RES %li\n",arr[i] );
    }
    free(arr);
    // printf("%i\n", isPrime(3));
}
// start loop at start unitl finds prime
// look ahead until if finds prime
// check if diff is gapsize
// continue look ahead of second number until end is reached
// increment bottom number to the next prime
long long *gap(int gapSize, long long start, long long end){
    int size1 = countDigits(start);
    int size2 = countDigits(end);
    long long *mem = malloc(20);
    long arr[size1 + size2];
    for (size_t i = start; i < end; i++) {
        // if not prime skip loop to start
        if(isPrime(i) == 0) continue;
        // else start increment from current bottom number
        int j = i;
        int k = 0;
        // look ahead until prime number found
        while(j++ < end){
            if(isPrime(j) == 1){
                // if the gap doesn't matches skip loop
                int diff = j - i;
                // if passes here, it's the biggest gap
                if(diff != gapSize){
                    i = j;
                    // printf("RE; current %i\n",i );
                    continue;
                } else {
                    // add to buffer
                    mem[k] = i;
                    mem[k+1] = j;
                    return mem;
                }
            }
        }
        // if none found return 0, 0
        mem[0] = 0;
        mem[1] = 0;
        return mem;
    }
}
// https://stackoverflow.com/a/1068865/5972531
int countDigits( int value )
{
    int result = 0;
    while( value != 0 ) {
       value /= 10;
       result++;
    }
    return result;
}
// https://stackoverflow.com/a/5281794/5972531
int isPrime(int num)
{
     if (num <= 1) return 0;
     if (num % 2 == 0 && num > 2) return 0;
     for(int i = 3; i <= sqrt(num); i+= 2)
     {
         if (num % i == 0)
             return 0;
     }
     return 1;
}
