
#include <stdlib.h>
#include <stdio.h>
#include <string.h>




char* string_maker(int n, char* str);
int main(void) {

  // return 0;
    char* str = string_maker(2, "sheep");
    printf("%s\n", str);

}
char* string_maker(int n, char* str)
  {
     char buffer[50];
     sprintf(buffer,"%i %s...", n, str);
     int len = strlen(buffer);
     char *pointer = malloc(n * (len+1));
     printf("%s", pointer);

     for (int i = 1; i < n+1 ; i++) {
        sprintf(buffer,"%i %s...", i, str);
        strcat(pointer, buffer);
      }
     return(pointer);
}
    // char buffer[50];
    // int len = strlen(str);
    // char *pointer = malloc(n * (len + 1));
    // char *strPointer;
    // char * const forFree = pointer;
    //
    //
    //     strPointer = pointer;
    //     for (int i = 1; i < n+1 ; i++) {
    //         sprintf(buffer,"%i %s...", i, str);
    //         strcat(pointer, buffer);
    //         }
    // free(forFree);
    // return(pointer);
