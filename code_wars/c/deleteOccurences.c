#include <stddef.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h>

int delete_nth(size_t szin, int order[szin], int max_e, size_t *szout);

int main(void) {

    int order[5] = {20, 37, 20, 37, 21};
    int res = delete_nth(5, order, 1, NULL);
    printf("RES:%i\n",res );

}


int delete_nth(size_t szin, int order[szin], int max_e, size_t *szout) {
    int arr[szin];
    int len = szin;
    // int *newArr =  malloc(sizeof(int) * len);
    int * newArr = calloc( sizeof(int), len);
    // printf("%i\n", sizeof(int) * len );
    // printf("%i\n",sizeof(newArr)/sizeof(newArr[0]) );

    for (size_t i = 0; i < szin; i++) {
        // printf("VAL:%i\n", order[i] );
        int count = 0;
        for (size_t j = i + 1; j < szin; j++) {
            // printf("\n" );
            // printf("i %i\n", order[i]);
            // printf("j %i\n", order[j]);
            if(order[i] == order[j]){
                count++;
                // count num to remove from malloc
                if(count >= max_e){
                    len--;
                    // printf("%i\n",len );
                }
            }
        }
        arr[i] = count;
        // printf("%i\n",arr[i] );
        // if(arr[i] == max_e){
        //     puts("hi");
        // }
    }

    int k = 0;
    for (size_t i = 0; i < szin; i++) {
        int temp = arr[i];
        // printf("%i\n", arr[i]);
        int newVal = temp + 1;
        // printf("i %i\n",newVal );
        // printf("max %i\n",max_e);
        if(newVal == max_e){
            // printf("%i\n", order[i]);
            newArr[k] = order[i];
            k++;
            puts("greater");
        }
    }
    for (size_t i = 0; i < 3; i++) {
        printf("%i\n", newArr[i]);
    }
    szout = k;
    printf("%i\n",k );
    printf("%i\n",szout);
    free(newArr);
    return szout;
}
