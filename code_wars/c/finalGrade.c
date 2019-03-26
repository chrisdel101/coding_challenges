#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int finalGrade(int a, int b);

int main(void) {
    printf("%i\n", finalGrade(100, 12));
}

int finalGrade(int a, int b){
    if(a > 90 || b > 10){
        return 100;
    } else if(a > 75 && b >= 5){
        return 90;
    } else if(a > 50 && b >= 2 ){
        return 75;
    } else {
        return 0;
    }
}
