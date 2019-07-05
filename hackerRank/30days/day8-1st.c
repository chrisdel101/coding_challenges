#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
#include <ctype.h>

#define NAME_LENGTH 45
struct Entry
{
    char word[NAME_LENGTH];
    char number[20];
};
typedef struct Entry e;
int checkStructForWord(char *str1, struct Entry *e, int structSize);

int main(void)
{
    // struct for the node type
    int count;
    // puts("Enter count: ");
    scanf("%i", &count);
    getchar();
    struct Entry e[count];
    for (size_t i = 0; i < count; i++)
    {
        bool whiteSpaceHit = false;
        char storeStrTemp[NAME_LENGTH];
        memset(storeStrTemp, 0, sizeof(storeStrTemp));
        // puts("Enter first name and number: ");
        // get args from command line
        fgets(storeStrTemp, sizeof(storeStrTemp), stdin);
        // printf("hello len %lu\n", strlen(storeStrTemp));
        // counter for inserting into struct
        int counter = 0;
        // zero the arrays
        memset(e[i].word, 0, sizeof(e[i].word));
        memset(e[i].number, 0, sizeof(e[i].number));
        for (size_t j = 0; j < strlen(storeStrTemp) - 1; j++)
        {
            // printf("\n");
            // if whitespace mark true
            if (storeStrTemp[j] == ' ')
            {
                whiteSpaceHit = true;
                // reset to zero
                // printf("space %i\n", counter);
                counter = 0;
                continue;
            }
            // this is name part - before whitespace found
            if (!whiteSpaceHit && storeStrTemp[j] != ' ')
            {
                e[i].word[counter] = storeStrTemp[j];
                // printf("top %i ", counter);
                // printf(" wor d %c\n", e[i].word[counter]);
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
            counter++;
        }
        // printf("counter %d\n", counter);
        // printf("word len %lu\n", strlen(e[i].word));
        // printf("num len %lu\n", strlen(e[i].number));
        // exit(0);
        // remove null terminator
        // strcpy(e[i].word, s);
        // printf("len %i\n ", strlen(storeStrTemp));
        // printf("len %i\n ", strlen(e[i].word));
        // puts("Remove null term");
        // for (size_t k = 0; k < counter; k++)
        // {
        //     printf("k %zu ", k);
        //     printf("%c\n", s[k]);
        // }
    }
    // exit(0);
    // }
    // puts("HERE");
    // printf("\n");
    int j = 0;
    char *tempWord = malloc(NAME_LENGTH);
    char *output = malloc(strlen(tempWord) * j);
    // puts("Enter str to save. Type Quit to exit.");
    fgets(tempWord, sizeof(tempWord), stdin);
    strtok(tempWord, "\n");
    // printf("output len %lu\n", strlen(output));
    // copy temp to str
    int structSize = sizeof(e) / sizeof(e[0]);
    if (checkStructForWord(tempWord, e, structSize) != -1)
    {

        // printf("tempWord %s\n", tempWord);
        int indexMatch = checkStructForWord(tempWord, e, structSize);
        char *strHolder = malloc(NAME_LENGTH);

        sprintf(strHolder, "%s=%s\n", e[indexMatch].word, e[indexMatch].number);

        strcpy(output, strHolder);
        free(strHolder);
        for (size_t i = 0; i < strlen(output); i++)
        {
            // printf("%c", output[i]);
        }
    }
    else
    {
        strcpy(output, "Not found\n");
    }
    // printf("\n");
    free(tempWord);
    //  puts("HERE");
    while (scanf("%s", tempWord) == 1)
    // while (strcmp(tempWord, "quit") != 0)
    // while (scanf("%15s", tempWord) == 1)
    {
        // printf("len %lu\n", sizeof(output));

        strtok(tempWord, "\n");

        // check if tempWord is inside struct
        structSize = sizeof(e) / sizeof(e[0]);
        // if true, put name and number to output
        if (checkStructForWord(tempWord, e, structSize) != -1)
        {
            // puts("Inner Here");
            int indexMatch = checkStructForWord(tempWord, e, structSize);
            // printf("matcher: %i\n", indexMatch);
            // printf("j: %i\n", j);
            char *strHolder = malloc(NAME_LENGTH);
            sprintf(strHolder, "%s=%s\n", e[indexMatch].word, e[indexMatch].number);
            if (strlen(output) == 0)
            {
                strcpy(output, strHolder);
            }
            else
            {
                strcat(output, strHolder);
            }
            free(strHolder);
            // for (size_t i = 0; i < strlen(output); i++)
            // {
            //     printf("%c", output[i]);
            // }
        }
        else if (strcmp(tempWord, "\n") != 0 && checkStructForWord(tempWord, e, structSize) == -1)
        {
            if (strlen(output) == 0)
            {
                strcpy(output, "Not found\n");
            }
            else
            {
                strcat(output, "Not found\n");
            }
        }

        // printf("size %i\n", sizeof(e) / sizeof(e[0]));
        //print to test
        // printf("tempWord %s\n", tempWord);
        // printf("cmp %d\n", strcmp(tempWord, "quit"));
        // printf("str %s", str);
        j++;
        // free(tempWord);
        if (j == 9)
        {
            for (size_t i = 0; i < strlen(output); i++)
            {
                printf("%c", output[i]);
            }
            printf("\n");
        }
    }
    // printf("\n");
    // printf("here\n");
    for (size_t i = 0; i < strlen(output); i++)
    {
        printf("%c", output[i]);
    }
    printf("\n");

    free(output);
    // for (size_t i = 0; i < 1; i++)
    // {
    // printf("N %s\n", e[0].number);
    // printf("W %s\n", e[0].word);
    // }
}
// compare string to all struct strings - return index
int checkStructForWord(char *str1, struct Entry *e, int structSize)
{
    for (signed i = 0; i < structSize; i++)
    {
        // str1 = tr    imwhitespace(str1);
        // str1[strlen(str1)] = '\0';
        // e[i].word[strlen(e[i].word)] = '\0';
        // printf("str1: %s\n", str1);
        // printf("str1len: %lu\n", strlen(str1));
        // printf("struct word: %s\n", e[i].word);
        // printf("struct wordLen: %lu\n", strlen(e[i].word));
        // printf("CMP %i\n", strcmp(e[i].word, str1));
        if (strcmp(e[i].word, str1) == 0)
        {
            // printf("tempstr %s\n", str1);
            // printf("stored %s\n", e[i].word);
            // puts("TRUE");
            return i;
        }
    }
    // printf("\n");
    return -1;
}
