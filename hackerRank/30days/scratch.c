#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define SIZE 50
int main(void)
{
        char *str = malloc(SIZE);
        puts("Enter str to save. Type Quit to exit.");
        fgets(str, sizeof str, stdin);
        str[strcspn(str, "\n")] = 0;
        printf("str %s", str);
        while (strcmp(str, "quit\n") != 0)
        {
                char tempStr[SIZE];
                puts("Enter str to append. Type Quit to exit.");
                fgets(tempStr, sizeof tempStr, stdin);
                tempStr[strcspn(tempStr, "\n")] = 0;
                sprintf(str, "%s %s", str, tempStr);
                //print to test
                printf("tempStr %s\n", tempStr);
                printf("str %s", str);
                printf("\n");
        }
        free(str);
}