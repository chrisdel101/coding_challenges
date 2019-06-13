#include <assert.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int solve(double meal_cost, int tip_percent, int tax_percent) {
        double tip_amount = meal_cost * (tip_percent/100.0);
        double tax_amount = meal_cost * (tax_percent /100.0);
//        new API nearbyint
        double sum = nearbyint(tip_amount + meal_cost + tax_amount);
        printf("%.0f\n", sum);

}

int main(void){
        int total = solve(10.25, 17, 5);
}
        