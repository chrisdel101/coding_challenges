#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <math.h>

typedef struct
{
    int n1;
    int n2;
} numbers;
long *gap(int gapSize, long long start, long long end);
int isPrime(int n);
int countDigits( int value );


int main(void) {
    int n1;
    int n2;
    // printf("RES:  %i %i\n", &n1, &n2);
    long *arr =  gap(2,100,110);
    for (size_t i = 0; i < 2; i++) {
        printf("RES %i\n",arr[i] );
    }
    free(arr);
    // printf("%i\n", isPrime(3));
}
// start loop at start unitl finds prime
// look ahead until if finds prime
// check if diff is gapsize
// continue look ahead of second number until end is reached
// increment bottom number to the next prime
long *gap(int gapSize, long long start, long long end){
    int size1 = countDigits(start);
    int size2 = countDigits(end);
    // int arrSize = size1 + size2;
    // printf("%i\n",arrSize);
    // int arr[size1 + size2];
    long arr[size1 + size2];
    for (size_t i = start; i < end; i++) {
        printf("%i\n",i );
        // if not prime skip
        if(isPrime(i) == 0) continue;
        printf("PRIME: %i\n",i );
        // start increment from current bottom number
        int j = i;
        int k = 0;
        bool notPrime = true;
        // look ahead until prime number found
        while(j++ < end){
            printf("Current: %i",i);
            printf(" Next:%i",j);
            printf("\n");
            if(isPrime(j) == 1){
                printf("Next Prime: %i\n",j );
                // if the gap matches the input
                int diff = j - i;
                // if(diff != gapSize) continue;
                printf("Diff: %i\n", diff );
                if(diff != gapSize) continue;
                puts("Diff Found");
                arr[k] = i;
                arr[k+1] = j;
                for (size_t i = 0; i < 2; i++) {
                    printf("%i\n", arr[i]);
                }

                printf("%i\n", size1 + size2);
                printf("%i\n", sizeof(arr)/sizeof(arr[0]));
                long *arrP = calloc(size1 + size2, sizeof(arr)/sizeof(arr[0]));
                return arrP;
                // malloc and loop the numbers an array
                // char *mem = malloc(25);
                // // loop once for each array
                // for (size_t k = 0; k < sizeof(arr)/sizeof(arr[0]); k++) {
                //     printf("ARR k %i", k);
                //     printf(" ARR %c", arr[k]);
                //      // while (m < ) {
                //      //    /* code */
                //      // }
                // }
            }
        }
        // if(next){
        //     printf("%i: ",i );
        //     if(isPrime(current) == 1 && isPrime(next) == 1){
        //         printf("%i\n",i );
        //     }
        // }
        exit(0);
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
// https://stackoverflow.com/a/40200710/5972531
int isPrime(int n){
    double s = sqrt(n);
    // printf("%f\n",s );
    if(n == 3) return 1;
    for (size_t i = 2; i <= s; i++) {
        // printf("%i\n", i);
        if(n % i == 0) return 0;
        return n > 1;
    }
}
