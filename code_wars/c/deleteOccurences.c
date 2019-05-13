#include <stddef.h>
#include <stdlib.h>
#include <stdio.h>


int *delete_nth(size_t szin, int order[szin], int max_e, size_t *szout);

int main(void) {
// 12311223345
// 113372222
    // int order[] = {1,2,3,1,1,2,1,2,3,3,2,4,5,3,1};
    // int order[] = {1,1,3,3,7,2,2,2,2};
    int order[] = {3,7,3,7,3,7,3,7,3,7,3,0,3,0,3,2,3,2,3,2,3,3,3,3,3,3,3,3};
    size_t out;
    int *res = delete_nth(18, order, 8, &out);
    printf("RES:%i\n", *res );

}

int cmpfunc (const void * a, const void * b) {
   return ( *(int*)a - *(int*)b );
}
int *delete_nth(size_t szin, int order[szin], int max_e, size_t *szout) {
    // for (size_t i = 0; i < szin; i++)
    // {
    //     printf("%i", order[i]);
    //     printf("\n");
    // }
    
    int len = szin;
    int k = 0;
    int *newArr = calloc( sizeof(int), k);
    // printf("%i\n", sizeof(int) * len );
    // printf("%i\n",sizeof(newArr)/sizeof(newArr[0]) );
    // int fakeArr[] ={20, 13, 42, 2, 9};
    // buffer leng
    int p = 0;
    // add one if p is zero, else no add 1 so there is at least some bufff
    int removeLen = p = 0 ? p + 1 : p;
    int removeIndexes[removeLen];

    // get indexes of all the ones to be removed
    for (size_t i = 0; i < szin; i++) {
        // printf("VAL:%i\n", order[i] );
        // reset count on each new value
        int count = 0;
        for (size_t j = i + 1; j < szin; j++) {
            // printf("\n" );
            // printf("i %i\n", order[i]);
            // printf("j %i\n", order[j]);
            // if a match is found later on
            if(order[i] == order[j]){
                count++;
                // count each occurence
                if(count >= max_e){
                    // assign index of double to arr
                    removeIndexes[p] = j;
                    p++;
                    // printf("index %i\n",j );
                    // decrement len of store and malloc
                    len--;
                    // printf(" max reached %i\n",len );
                }
            }
        }
        // printf("%i\n",arr[i] );
        // if(arr[i] == max_e){
        //     puts("hi");
        // }
    }
    // sort to remove by index
    qsort(removeIndexes, p , sizeof(int), cmpfunc);
    // for (size_t i = 0; i < p; i++)
    // {
    //     printf("II %i", removeIndexes[i]);
    // }
    
    // printf("P %i\n", p );
    // printf("p %i\n", );
    // loop over index array and match each index to full arr
    int previousRemoved = 0;
    for (size_t i = 0; i < p; i++) {
        int toRemove = removeIndexes[i];
        printf("VAL %i\n", toRemove );
        for (size_t j = previousRemoved; j < szin; j++) {
            if(j !=  toRemove){
            // printf("j %i\n", j);
                printf("to push %i\n", order[j]);
                // printf("to push %i\n", order[j]);
                newArr[k] = order[j];
                k++;
            } else {
                printf("remove %i\n", order[j]);
                // set inner loop to start at last index
                previousRemoved = toRemove + 1;
                if(p > 1){
                    break;
                }
            }
        }
        // printf("not remove %i\n", i );
        // printf("fake %i\n", removeIndexes[i] );
        // if(removeIndexes){}
    }
    for (size_t i = 0; i < k; i++) {
        printf("new %i\n", newArr[i]);
    }
    *szout = k;
    printf("k %i\n", k );
    // printf("szout %i\n",newArr);
    // free(newArr);
    return newArr;
}

//
// int delete_nth(size_t szin, int order[szin], int max_e, size_t *szout) {
//     int arr[szin];
//     int len = szin;
//     // int *newArr =  malloc(sizeof(int) * len);
//     int * newArr = calloc( sizeof(int), len);
//     // printf("%i\n", sizeof(int) * len );
//     // printf("%i\n",sizeof(newArr)/sizeof(newArr[0]) );
//
//     for (size_t i = 0; i < szin; i++) {
//         // printf("VAL:%i\n", order[i] );
//         int count = 0;
//         for (size_t j = i + 1; j < szin; j++) {
//             // printf("\n" );
//             // printf("i %i\n", order[i]);
//             // printf("j %i\n", order[j]);
//             if(order[i] == order[j]){
//                 count++;
//                 // count num to remove from malloc
//                 if(count >= max_e){
//                     len--;
//                     // printf("%i\n",len );
//                 }
//             }
//         }
//         arr[i] = count;
//         // printf("%i\n",arr[i] );
//         // if(arr[i] == max_e){
//         //     puts("hi");
//         // }
//     }
//
//     int k = 0;
//     for (size_t i = 0; i < szin; i++) {
//         int temp = arr[i];
//         // printf("%i\n", arr[i]);
//         int newVal = temp + 1;
//         // printf("i %i\n",newVal );
//         // printf("max %i\n",max_e);
//         if(newVal == max_e){
//             // printf("%i\n", order[i]);
//             newArr[k] = order[i];
//             k++;
//             puts("greater");
//         }
//     }
//     for (size_t i = 0; i < 3; i++) {
//         printf("new %i\n", newArr[i]);
//     }
//     *szout = k;
//     printf("k %i\n",k );
//     // printf("szout %i\n",newArr);
//     //free(newArr);
//     return newArr;
// }
