#include <assert.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void isWeird(int N){
    if(N % 2 != 0){
        puts("Weird");
    } else if(N % 2 == 0 && N >= 2 && N <= 5){
        puts("Not Weird");
    } else if(N % 2 == 0 && N >= 6 && N <= 20){
        puts("Weird");
    } else if(N % 2 == 0 && N > 20){
        puts("Not Weird");
    }
}

int main(void){
        isWeird(24);
}
        