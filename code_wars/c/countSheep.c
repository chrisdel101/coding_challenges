#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char* count_sheep(int n);
int main(void) {

  // return 0;
    char *str = count_sheep(43);
    printf("%s\n", str);
    free(str);

}
char* count_sheep(int n)
{
   char *sheepStr = "1 sheep...";
   int bufferSize = ((strlen(sheepStr) + 1) * n);
   char *buffer = calloc(bufferSize, sizeof(char));
   for (size_t i = 0; i < n; i++)
   {
    char *tempBuffer = malloc(20);
    sprintf(tempBuffer, "%lu sheep...", i+1);
    tempBuffer[strlen(tempBuffer)+1] = '\0';
    strcat(buffer, tempBuffer);
    free(tempBuffer);
   }
    buffer[strlen(buffer)+1] = '\0';
    return buffer;
}
