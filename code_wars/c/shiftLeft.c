#include <stdio.h>
#include <stdlib.h>


size_t shift_left(const char *a, const char *b) {
    if(strcmp(a, b) == 0) return 0;
    char *str1[strlen(a)+1];
    char *str2[strlen(b)+1];
    for (size_t i = 1; i < strlen(a); i++) {
        str1[i] = a[i];
    }
    for (size_t i = 1; i < strlen(b); i++) {
        str2[i] = b[i];
    }
    str1[4] = '\0';
    str2[4] = '\0';
    for (size_t i = 1; i < strlen(a); i++) {
        printf("%i\n", 'e' == 'e');
    }
    // printf("%i\n",strcmp(str1, str2 ));
    // if(strcmp(str1, str2) == 0){
    // }
}

int main(void) {
    shift_left("test", "west");
}
