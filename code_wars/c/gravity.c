#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include  <math.h>

double solution(double* values, char** units);
double convertToKG(double value, char *unit);
double convertToM(double value, char *unit);

int main(void) {
    double test1a[3] = {3106478.000000, 2013820.000000, 9655832.000000};
    char*  test1b[3] = {  "m",  "g",  "μg"};
    solution(test1a, test1b);
}


double solution(double* values, char** units) {
    char buffer[100];
    // for (size_t i = 0; i < count; i++) {
    //     printf("%f\n", values[i]);
    // }
    // for (size_t i = 0; i < count; i++) {
    //     printf("%f\n", units[i]);
    // }
    double obj1W = convertToKG(values[0], units[0]);
    printf("%f\n",obj1W );
    double obj2W = convertToKG(values[1], units[1]);
    printf("%f\n",obj2W );
    double distance = convertToM(values[2], units[2]);
    // printf("%f\n",distance );
    // value of G = 6.67 x 10-11 1ft = 0.3048m 1lb = 0.453592kg
    // double F = 0.0000000000667 * ((obj1W * obj2W) / pow(distance, 2));
    double F = 0.0000000000667 * (obj1W * obj2W) / pow(distance, 2);
    // printf("%e\n", F);
    sprintf(buffer,"%e", F);
    double res = atof(buffer);
    printf("%e\n",res );
    return res;

}
    double convertToKG(double value, char *unit){
            printf("%s\n", unit);
         if(strcmp("g", unit) == 0){
            return value / 1000;
        } else if(strcmp("mg", unit) == 0){
            return value / 1000000;
        } else if(strcmp("μg", unit) == 0){
            puts("micro");
            return value / 1000000000;
        } else if(strcmp( "lb", unit) == 0){
            return value / 2.205;
        } else if(strcmp("kg", unit) == 0){
            return value;
        } else {
            return 1;
        }
}
double convertToM(double value, char *unit){

    if(strcmp("cm", unit) == 0){
       return value / 100;
   } else if(strcmp("mm", unit) == 0){
       return value / 1000;
   } else if(strcmp("μm", unit) == 0){
       return value / 10000;
   } else if(strcmp( "ft", unit) == 0){
       return value / 3.281;
   } else if(strcmp("m", unit) == 0){
       return value;
    } else {
       return 1;
    }
}
