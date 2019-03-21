#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>

int containAllRots(char* strng, char* arr[], int sz);
// void getAllChars(char* arr[], int arrSize);

int main(void)
{
    char *arr[] = {"ggFB2A5HZ7",
                    "A5HZ7ggFB2",
                    "Z7ggFB2A5H",
                    "gFB2A5HZ7g",
                    "7ggFB2A5HZ",
                    "FB2A5HZ7gg",
                    "B2A5HZ7ggF",
                    "B2A5HZ7ggF",
                    "2A5HZ7ggFB",
                    "HZ7ggFB2A5",
                    "5HZ7ggFB2A"

    };
    // char *arr[] = {"ObPfws", "Cofuhqrmmzq", "wFvfcqU", "sObPfw", "bPfwsO", "PfwsOb", "wsObPf", "fwsObP"};
    // printf("%i\n",sizeof(arr)/sizeof(*arr) );

    containAllRots("B2A5HZ7ggF", arr, sizeof(arr)/sizeof(*arr));
}
// check if str chars are in each string
int containAllRots(char* strng, char* arr[], int sz) {
    int totalMatches = 0;
    // store rotating section of string
    char tempArr1[strlen(strng)];
    for (size_t i = 0; i < strlen(strng); i++) {
        // store first char and up - increase each time
        char tempArr2[i+1+1];
        tempArr1[i] = strng[i];
        // store second char to the end - decrease each time
        for (size_t j = 0; j < strlen(strng)-(i+1); j++) {
            tempArr2[j] = strng[i+j+1];
        }
        tempArr1[1+i] = '\0';
        tempArr2[strlen(strng)-i-1] = '\0';
        char* buffer;
        buffer = malloc(4) ;
        // copy second part to buffer
        strcpy(buffer, tempArr2);
        // add second string to the first string
        strcat(buffer, tempArr1);
        // compare strings - if same increment
        for (size_t k = 0; k < sz; k++) {
            int match = strcmp(buffer,arr[k]);
            if(match == 0){
                totalMatches++;
            }
        }
        printf("\n");
        free(buffer);
    }
    if(totalMatches >= strlen(strng)){
        puts("TRUE");
        return true;
    }
    puts("FALSE");
    return false;
}
