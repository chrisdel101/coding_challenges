#include <stdio.h>
#include <stdlib.h>
#include <string.h>


size_t shift_left(char *a, char *b) {
    if(strcmp(a, b) == 0) return 0;
    char *str1 = malloc(strlen(a)+1);
    char *str2 = malloc(strlen(b)+1);
    int k = 1;
    int count = 0;
    while(k < strlen(a)){
    // while(k < 2){
        for (size_t i = k, j = 0; i < strlen(a); i++, j++) {
            str1[j] = a[i];
            printf("c %c\n", str1[j]);
        }
        count++;
        // printf("k %i\n", k);
        // printf("len %i\n", strlen(a));
        str1[strlen(a) - k] = '\0';
        // printf("%i\n",strcmp(str1, b));
        // printf("%s\n", b);
        // compare to second full str
        if(strcmp(str1, b) == 0){
            printf("%s\n","equal");
            return 0;
        }
        for (size_t i = k, j = 0; i < strlen(b); i++, j++) {
            str2[j] = b[i];
            printf("c %c\n", str2[j]);
            // printf("c %c\n", str1[j]);
        }
        count++;
        str2[strlen(b) - k] = '\0';
        if(strcmp(str1, str2) == 0){
            printf("%s\n","equal");
            printf("%i\n", count);
            return 0;
        }
        k++;
    }
    // for (size_t i = 1; i < strlen(b); i++) {
    //     str2[i] = b[i];
    // }
    // str1[4] = '\0';
    // str2[4] = '\0';
    // for (size_t i = 1; i < strlen(a); i++) {
    //     printf("%i\n", 'e' == 'e');
    // }
    // printf("%i\n",strcmp(str1, str2 ));
    // if(strcmp(str1, str2) == 0){
    // }
    printf("%i\n", count);
    free(str1);
    free(str2);
}

int main(void) {
    shift_left("test","");
}
