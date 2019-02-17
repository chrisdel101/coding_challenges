#include <stdlib.h>
#include <stdio.h>
#include <string.h>




char* count_sheep(int n);
int main(void) {

  // return 0;
    char str = *count_sheep(1);
    // printf("%i\n", str);
}


char* count_sheep(int n) {


    char buffer[50];
    char *strPointer = malloc(n * sizeof (char));
    // *strPointer = 42;
    if (strPointer == NULL) {
        exit(1);
    } else {

        sprintf(buffer,"%i sheep...", n);
        printf("buffer: %s\n",  buffer);
        strcpy(strPointer, buffer);
        // *strPointer = buffer;
        printf("strP: %s\n",   strPointer);
    }
    free(strPointer);

    //

    // for (int i = 1; i < n+1 ; i++) {
    //     strcat(str, buffer);

    // }
    // printf("%s\n", str);
    // return(0);

}

// char buffer[10];
//
// int course = 50;
//
// int num = sprintf(buffer,"%d sheep", n);
//
// printf("%s\n", buffer);
