#include <stdlib.h>
#include <stdio.h>
#include <math.h>

int Litres(double time);

int main(void)
{
    int res = Litres(1670428210.000000);
    printf("%i\n", res );
    printf("%f", floor(1670428210.000000 * 0.5));
}

int Litres(double time)
{
    // if(time <= 0){
    //     return 0;
    // }
    // double litres = floor(time * 0.5);
    // printf("%f\n", time);
    return time /2 ;

}
