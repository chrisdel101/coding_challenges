#include <stdlib.h>
#include <stdio.h>


int positive_sum(const int *values, size_t count);

int main(void) {
    int arr[] = {1,-4,7,12};
    int len = sizeof(arr)/sizeof(int);
    // printf("len: %i\n",len);
    positive_sum(arr, len);
}


int positive_sum(const int *values, size_t count)
{
    int sum = 0;
    for (size_t i = 0; i < count; i++) {
        if(values[i] > 0){
            sum = values[i] + sum;
        }
    }
    return sum;
}
