#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
#include <ctype.h>

#define NAME_LENGTH 45
#define NUM_LENGTH 10
#define HASHTABLE_SIZE 65536
#define NOT_FOUND "Not found"
int hashValue(const char *word);
bool loadHashTable(void);
bool checkHashTable(void);

typedef struct node
{
    char word[NAME_LENGTH + 1];
    char number[NUM_LENGTH];
    struct node *next;
} node;
// set hash table to const size, at null
node *hash_table[HASHTABLE_SIZE] = {NULL};

int main(void)
{
    loadHashTable();
    checkHashTable();

    return 0;
}
bool checkHashTable(void)
{
    int outputMallocedSpace = 0;
    char *tempWord = malloc(NAME_LENGTH);
    char *output = NULL;
    loadHashTable();
    int j = 0;
    // puts("Enter name to check: ");
    while (scanf("%s", tempWord) == 1)
    {
        // if (strcmp(tempWord, "quit") == 0)
        // {
        //     break;
        // }
        // if (j == 10)
        // {
        //     exit(0);
        // }
        // printf("temp word to look up");
        // printf("word: %s\n", tempWord);
        int hash_index = hashValue(tempWord);
        node *head = hash_table[hash_index];
        if (head == NULL)
            continue;
        node *cursor = head;
        bool wordFound = false;

        // printf("cursor %s\n", cursor);
        // loop through the linked list
        while (cursor != NULL)
        {
            char *tempWordStore = calloc(NAME_LENGTH, sizeof(char));
            if (strcmp(tempWord, cursor->word) == 0)
            {
                // printf("len before %lu\n", strlen(tempWordStore));
                // adjust malloced space
                outputMallocedSpace += (strlen(tempWord) + 1) + NUM_LENGTH;
                // printf("malloc var %i\n", outputMallocedSpace);
                // realloc using this
                output = realloc(output, outputMallocedSpace);
                ;
                // allocate more space
                // make new string
                // printf("word %s\n", cursor->word);
                // printf("num %s\n", cursor->number);
                sprintf(tempWordStore, "%s=%s\n", cursor->word, cursor->number);
                // printf("TEST %s\n", tempWordStore);
                // printf("len after %lu\n", strlen(tempWordStore));
                // storeName[strlen(storeName) + 1] = '\0';
                // printf("malloc var %i\n", mallocedSpace);
                // printf("len in %i\n", strlen(tempWordStore));
                // tempWordStore[strlen(tempWordStore) + 1] = '\0';
                if (strlen(output) == 0)
                {
                    strcpy(output, tempWordStore);
                    // printf("copy word %s", tempWordStore);
                    wordFound = true;
                    // puts("Matchin Word copied");
                }
                else
                {
                    strcat(output, tempWordStore);
                    // printf("cat word %s", tempWordStore);
                    wordFound = true;
                    // puts("Matching Word cated");
                }
                // printf("%i\n", strlen(output));
                free(tempWordStore);
                // return true;
            }

            // printf("FREE\n");
            // free(tempWordStore);
            // printf("FREE after\n");

            // move cursor to where head-> next points
            cursor = head->next;
            // move head ahead also to match cursor
            head = cursor;
        }
        j++;
        if (!wordFound)
        {

            if ((output == NULL || strlen(output) == 0))
            {
                // puts("HERE");
                // puts("not found block");
                outputMallocedSpace += (strlen(NOT_FOUND) + 1);
                // printf("malloc first not %i\n", outputMallocedSpace);
                // printf("Not found\n");
                output = realloc(output, outputMallocedSpace);
                // puts("INSIDE");

                strcpy(output, "Not found\n");
                // printf("cpy output %s\n", output);
                // puts("NOT Word copied");
            }
            else
            {
                // puts("not found block");
                outputMallocedSpace += (strlen(NOT_FOUND) + 1);
                // printf("Not found\n");
                // printf("malloc cat not %i\n", outputMallocedSpace);
                output = realloc(output, outputMallocedSpace);
                strcat(output, "Not found\n");
                // printf("%    s\n", output);
                // puts("NOT Word cated");
            }
        }
        // if word not found break
        // return false;
        // printf("FREE below\n");
        // free(tempWord);
        // printf("FREE belowafter\n");
        // puts("Enter name to check: ");
    }
    // puts("DONE");
    printf("%s", output);
    // for (int i = 0; i < 20; i++)
    // {
    //     // printf("%c", output[i]);
    // }
    // puts("END");
    free(output);
    return false;
}
bool loadHashTable(void)
{
    int count;
    // puts("Enter count: ");
    scanf("%i", &count);
    getchar();

    for (size_t i = 0; i < count; i++)
    {
        bool whiteSpaceHit = false;
        char storeStrTemp[NAME_LENGTH];
        memset(storeStrTemp, 0, sizeof(storeStrTemp));
        // puts("Enter first name and number: ");
        fgets(storeStrTemp, sizeof(storeStrTemp), stdin);
        int counter = 0;
        char *storeNum = malloc(NUM_LENGTH);
        char *storeName = malloc(NAME_LENGTH);
        node *tempHashTable = malloc(sizeof(node));
        if (storeName == NULL || storeNum == NULL || tempHashTable == NULL)
        {
            puts("NULL mem error");
            exit(1);
        }
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
                storeName[counter] = storeStrTemp[j];
                // printf("top %i ", counter);
                // printf(" wor d %c\n", e[i].word[counter]);
                // printf("%c ", e.word[counter]);
                // counter++;
            }
            //  this is number part - after whitespace found
            else if (whiteSpaceHit && storeStrTemp[j] != ' ')
            {
                // printf("bottom %i", counter);
                storeNum[counter] = storeStrTemp[j];
                // printf("%c", storeNum[counter]);
            }
            counter++;
        }
        // printf("len %i\n", sizeof(storeNum) / sizeof(storeNum)[0]);
        // puts("\n");
        storeName[strlen(storeName) + 1] = '\0';
        storeNum[strlen(storeNum) + 1] = '\0';
        memset(tempHashTable->word, 0, sizeof(tempHashTable->word));
        memset(tempHashTable->number, 0, sizeof(tempHashTable->number));
        strcpy(tempHashTable->word, storeName);
        // printf("storeName: %s\n", tempHashTable->word);
        strcpy(tempHashTable->number, storeNum);
        // printf("storeNum: %s\n", tempHashTable->number);

        int hash_index = hashValue(storeName);
        if (hash_table[hash_index] == NULL)
        {
            // insert node at head of linked list
            // same as head = mem
            hash_table[hash_index] = tempHashTable;

            tempHashTable->next = NULL;
            // count++;
        }
        else
        {
            tempHashTable->next = hash_table[hash_index];
            // reassign head to new node
            hash_table[hash_index] = tempHashTable;
            // count++;
        }
        // free(storeNum);
        // free(storeName);
    }
    return true;
}
// HASH FUNCTION - see cited resources
int hashValue(const char *word)
{
    unsigned int hash = 0;
    for (int i = 0, n = strlen(word); i < n; i++)
    {
        hash = (hash << 2) ^ word[i];
    }
    // returns a number
    return hash % HASHTABLE_SIZE;
}