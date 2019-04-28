#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <math.h>
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
// int isPrime(int n){
//     double s = sqrt(n);
//     printf("S %f\n",s );
//     if(n == 3) return 1;
//     for (size_t i = 2; i <= s; i++) {
//         // printf("p %f\n", n % i);
//         printf("i %i\n", i);
//
//         if(n % i == 0) return 1;
//     }
//     printf("i %i\n", n > 1);
//     return n > 1;
//     // return 1;
// }

int main(void)
{
    printf("%i\n", isPrime(3));
    // printf("%i\n", 1 < 2);
}

// int n = 544;
// int i = 2;
// char a[256];
//
// while (n) {
//     a[] = n % 10;
//     n /= 10;
//     printf("%i\n", n);
// }
