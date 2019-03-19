#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>

int containAllRots(char* strng, char* arr[], int sz);
// void getAllChars(char* arr[], int arrSize);

int main(void)
{
    char *arr[] = {"bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"};
    // printf("%i\n",sizeof(arr)/sizeof(*arr) );

    containAllRots("bsjq", arr, sizeof(arr)/sizeof(*arr));
}
// check if str chars are in each string
int containAllRots(char* strng, char* arr[], int sz) {


    // char multi[strlen(strng)][strlen(strng)];
    char tempArr1[strlen(strng)];
    for (size_t i = 0; i < 1; i++) {
        char tempArr2[i+1+1];
        tempArr1[i] = strng[i];
        // printf("TEMPCHAR: %c\n",tempArr1[i]);
        for (size_t j = 0; j < strlen(strng)-(i+1); j++) {
            tempArr2[j] = strng[i+j+1];
            // printf("%i %c\n",j, tempArr2[j]);


        }
        tempArr1[1+i] = '\0';
        tempArr2[strlen(strng)-i-1] = '\0';
        char* combined;
        combined = malloc(4) ;
        strcpy(combined, tempArr2);
        strcat(combined, tempArr1);
        // tempArr2[strlen(strng)-(i+1)] = tempChar[]

        for (size_t k = 0; k < 4; k++) {
            printf("%i\n", strcmp(combined,arr[k]));
            // printf("COMB: %c\n",combined[k] );
            // printf("K %c\n",tempArr2[k]);
            // printf("K %c\n",tempArr1[k] );
            printf("%s\n",arr[k] );
        }
        free(combined);
    }
    // printf("%i\n", strlen(strng));

    // // printf("%c\n",tempArr[3] );
    // for (size_t i = 0; i < 4; i++) {
    //     multi[0][i] = tempArr[i];
    //     printf("%c\n",multi[0][i] );
    // }
    // printf("%c\n",multi[0][3] );
    // // for (size_t i = 0; i < 4; i++) {
    // //
    // }
}
