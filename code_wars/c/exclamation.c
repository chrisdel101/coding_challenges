#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>



char* removeEx(char *strin, int n);

int main(void) {

  // return 0;
    char* res = removeEx("hi!",1);
    // printf("%d\n", res);

}
// working
char *removeEx(char *strin, int n) {
    char *arr = malloc(strlen(strin) + 1);
    int counter = 0;
    int j = 0;
    for (size_t i = 0; i < strlen(strin) + 1; i++){
        if(strin[i] == '!'){
            if(counter >= n){
                strncpy(&arr[j], &strin[i], 1);
                j++;
            }
            counter++;
        } else {
            strncpy(&arr[j], &strin[i],1);
            j++;
        }
    }
    return arr;
}
// version for returning str with passed in var name
// char *removeEx(char *strin, int n) {
//     // make str an array
//     // char strinArr[strlen(strin) + 1];
//     for (size_t i = 0; i < strlen(strin) + 1; i++) {
//         strinArr[i] = strin[i];
//         // printf("%c\n"    , strinArr[i]);
//     }
//     // strinArr[strlen(strin)] = 'X';
//     char arr[strlen(strin) + 1];
//     int counter = 0;
//     // bool slicing = true;
//     int j = 0;
//     for (size_t i = 0; i < strlen(strin) + 1; i++){
//         // printf("Here: %c\n",strin[i] );
//         if(strin[i] == '!'){
//             if(counter >= n){
//                 strncpy(&arr[j], &strin[i], 1);
//                 puts("pushed");
//                 j++;
//             } else {
//                 puts("sliced");
//             }
//             counter++;
//         } else {
//             // printf("%c\n", strin[i] );
//             strncpy(&arr[j], &strin[i],1);
//             j++;
//         }
//     }
//     // strin = strinArr;
//     int size = sizeof(arr)/sizeof(arr[0]);
//     // arr[size] = '\0';
//     int sizeStr = strlen(strin) + 2;
//     printf("%i\n", size);
//     printf("%i\n", sizeStr);
//     strcpy(strin, &arr);
//     for (size_t i = 0; i < size ; i++) {
//         printf("here: %c\n", strin[i]);
//     }
//     return strin;
// }
