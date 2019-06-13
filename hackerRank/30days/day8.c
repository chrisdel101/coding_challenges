#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
#include <ctype.h>

#define NAME_LENGTH 45
struct Entry
{
    char word[NAME_LENGTH];
    char number[9];
};
char *trimwhitespace(char *str);
typedef struct Entry e;
int checkStruct(char *str1, struct Entry *e, int structSize);

int main(void)
{
    // struct for the node type

    int count;
    puts("Enter count: ");
    scanf("%i", &count);
    if (!isdigit(count))
    {
        printf("Error on input");
        exit(1);
    }
    getchar();
    struct Entry e[count];
    for (size_t i = 0; i < count; i++)
    {
        bool whiteSpaceHit = false;
        char storeStrTemp[100];
        // empty prev array
        memset(storeStrTemp, 0, sizeof(storeStrTemp));
        puts("Enter first name and number: ");
        // get args from command line
        fgets(storeStrTemp, sizeof(storeStrTemp), stdin);
        // counter for inserting into struct
        int counter = 0;
        // initalize struct
        for (size_t j = 0; j < strlen(storeStrTemp); j++)
        {
            // if whitespace mark true
            if (storeStrTemp[j] == ' ')
            {
                whiteSpaceHit = true;
                // reset to zero
                printf("space %i\n", counter);
                counter = 0;
                continue;
            }
            // this is name part - before whitespace found
            if (!whiteSpaceHit && storeStrTemp[j] != ' ')
            {
                e[i].word[counter] = storeStrTemp[j];
                // printf("top%i ", counter);
                // printf("%c\n", e[i].word[counter]);
                // printf("%c ", e.word[counter]);
                // counter++;
            }
            //  this is number part - after whitespace found
            else if (whiteSpaceHit && storeStrTemp[j] != ' ')
            {
                // printf("bottom %i", counter);
                e[i].number[counter] = storeStrTemp[j];
                // printf("%c ", e.number[counter]);
            }
            printf("counter %i\n", counter);
            counter++;
        }
        exit(0);
        // remove null terminator
        char *s = trimwhitespace(e[i].word);
        // strcpy(e[i].word, s);
        // printf("len %i\n ", strlen(storeStrTemp));
        // printf("len %i\n ", strlen(e[i].word));
        puts("Remove null term");
        for (size_t k = 0; k < counter; k++)
        {
            printf("k %zu ", k);
            printf("%c\n", s[k]);
        }
    }
    char *str = malloc(NAME_LENGTH);
    char *output = malloc(strlen(str) + 8 + 1);
    char tempStr[NAME_LENGTH];
    puts("Enter str to save. Type Quit to exit.");
    fgets(tempStr, sizeof tempStr, stdin);
    // copy temp to str
    strcpy(str, tempStr);
    // https://stackoverflow.com/a/28462221/5972531
    // remove \n from end of quit
    tempStr[strcspn(tempStr, "\n")] = 0;
    str[strcspn(str, "\n")] = 0;

    int structSize = sizeof(e) / sizeof(e[0]);
    if (checkStruct(tempStr, e, structSize) != -1)
    {
        printf("tempStr %s\n", tempStr);
        puts("Upper Here");
        int indexMatch = checkStruct(tempStr, e, structSize);
        sprintf(output, "%s=%s", e[indexMatch].word, e[indexMatch].number);
        for (size_t i = 0; i < strlen(output); i++)
        {
            printf("%c", output[i]);
        }
    }
    printf("\n");
    int j = 0;
    while (strcmp(tempStr, "quit") != 0)
    {
        printf("strlen %lu\n", strlen(str));
        // empty tempStr
        memset(tempStr, 0, sizeof(tempStr));
        puts("Enter str to append. Type Quit to exit.");
        fgets(tempStr, sizeof tempStr, stdin);
        tempStr[strcspn(tempStr, "\n")] = 0;
        // don't add quit to array
        if (strcmp(tempStr, "quit") != 0)
        {
            // copy tempStr into main str
            sprintf(str, "%s,%s", str, tempStr);
        }
        // check if tempStr is inside struct
        int structSize = sizeof(e) / sizeof(e[0]);
        // if true, put name and number to output
        if (checkStruct(tempStr, e, structSize) != -1)
        {
            puts("Inner Here");
            int indexMatch = checkStruct(tempStr, e, structSize);
            printf("matcher: %i\n", indexMatch);
            printf("j: %i\n", j);
            sprintf(output, "%s=%s", e[indexMatch].word, e[indexMatch].number);
            for (size_t i = 0; i < strlen(output); i++)
            {
                printf("%c", output[i]);
            }
        }

        // printf("size %i\n", sizeof(e) / sizeof(e[0]));
        //print to test
        // printf("tempStr %s\n", tempStr);
        // printf("cmp %d\n", strcmp(tempStr, "quit"));
        // printf("str %s", str);
        j++;
    }
    printf("\n");
    printf("here\n");
    // for (size_t i = 0; i < strlen(str); i++)
    // {
    //     printf("STR %c\n", str[i]);
    // }

    free(str);
    free(output);
    // for (size_t i = 0; i < 1; i++)
    // {
    // printf("N %s\n", e[0].number);
    // printf("W %s\n", e[0].word);
    // }
}
// compare string to all struct strings - return index
int checkStruct(char *str1, struct Entry *e, int structSize)
{
    for (signed i = 0; i < structSize; i++)
    {
        // puts("bool");
        str1 = trimwhitespace(str1);
        char *newStr = trimwhitespace(e[i].word);
        // e[i].word[strcspn(e[i].word, "\n")] = 0;
        printf("str1: %s\n", str1);
        printf("str1len: %lu\n", strlen(str1));
        printf("struct word: %s\n", newStr);
        printf("struct wordLen: %lu\n", strlen(newStr));
        if (strcmp(e[i].word, str1) == 0)
        {
            // printf("tempstr %s\n", str1);
            // printf("stored %s\n", e[i].word);
            puts("TRUE");
            return i;
        }
    }
    return -1;
}
char *trimwhitespace(char *str)
{
    char *end;

    // Trim leading space
    while (isspace((unsigned char)*str))
        str++;

    if (*str == 0) // All spaces?
        return str;

    // Trim trailing space
    end = str + strlen(str) - 1;
    while (end > str && isspace((unsigned char)*end))
        end--;

    // Write new null terminator character
    end[1] = '\0';

    return str;
}