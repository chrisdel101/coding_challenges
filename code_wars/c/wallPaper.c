#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <math.h>

const char* wallPaper(double l, double w, double h);


int main(void) {
    wallPaper(0,0.2,3.1000);
}

const char* wallPaper(double l, double w, double h)
{
    static const char *const numbers[21] = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"};
    if(l <= 0 || w <= 0 || h <= 0){
        return numbers[0];
    }
    float lenAround = (l * 2) + (w * 2);
    float rollsInHeight = h / 0.52;
    float rollsNeeded = lenAround * rollsInHeight;
    float totalAdd15 = (rollsNeeded * 0.15) + rollsNeeded;
    // (n + (10 - n % 10)) - find next highest multuple of 10
    float nextMulOf10 = totalAdd15 + (10 - fmod(totalAdd15, 10));

    for (size_t i = 0, j = 0; i <= nextMulOf10; i += 10, j++) {
        if(totalAdd15 <= i){
            return numbers[j];
        }
    }
    return(0);
}
