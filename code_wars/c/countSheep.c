#include <stdlib.h>
#include <stdio.h>
#include <string.h>




char* count_sheep(int n);
int main(void) {

  // return 0;
    char* str = count_sheep(1);
    printf("%s\n", str);

}
char* count_sheep(int n)
  {
    char buffer[50];
     sprintf(buffer,"%i sheep...", n);
     int len = strlen(buffer);
     char *pointer = malloc(n * len);

     for (int i = 1; i < n+1 ; i++) {
        sprintf(buffer,"%i sheep...", i);
        strcat(pointer, buffer);
      }
     return(pointer);
}

// char buffer[10];
//
// int course = 50;
//
// int num = sprintf(buffer,"%d sheep", n);
//
// printf("%s\n", buffer);
