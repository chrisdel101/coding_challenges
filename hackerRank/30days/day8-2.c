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
    // loadHashTable();
    // puts("Enter name to check: ");
    while (scanf("%s", tempWord) == 1)
    {
        int hash_index = hashValue(tempWord);
        node *head = hash_table[hash_index];
        // if null go onto to next word
        if (head == NULL)
            continue;
        node *cursor = head;
        bool wordFound = false;
        // loop through the linked list
        while (cursor != NULL)
        {
            if (strcmp(tempWord, cursor->word) == 0)
            {
                char *tempWordStore = calloc(NAME_LENGTH, sizeof(char));
                ;
                // adjust malloced space
                outputMallocedSpace += (strlen(tempWord) + 1) + NUM_LENGTH;
                // pr   intf("len %i", outputMallocedSpace);
                // realloc using this
                output = realloc(output, outputMallocedSpace);

                // make new string
                sprintf(tempWordStore, "%s=%s\n", cursor->word, cursor->number);
                // printf("output %i\n", strlen(output));
                // printf("output %s\n", output);
                if (strlen(output) == 0)
                {
                    strcpy(output, tempWordStore);
                    wordFound = true;
                    free(tempWordStore);
                    break;
                }
                else
                {
                    strcat(output, tempWordStore);
                    wordFound = true;
                    free(tempWordStore);
                    break;
                }
                free(tempWordStore);
            }
            // move cursor to where head-> next points
            cursor = head->next;
            // move head ahead also to match cursor
            head = cursor;
        }
        // if found above go on to next word
        if (wordFound)
            continue;

        if ((output == NULL || strlen(output) == 0))
        {
            outputMallocedSpace += (strlen(NOT_FOUND) + 1);
            output = realloc(output, outputMallocedSpace);

            strcpy(output, "Not found\n");
        }
        else
        {
            outputMallocedSpace += (strlen(NOT_FOUND) + 1);
            output = realloc(output, outputMallocedSpace);
            strcat(output, "Not found\n");
        }
    }
    printf("%s", output);
    free(output);
    return true;
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
            // if whitespace mark true
            if (storeStrTemp[j] == ' ')
            {
                whiteSpaceHit = true;
                // reset to zero
                counter = 0;
                continue;
            }
            // this is name part - before whitespace found
            if (!whiteSpaceHit && storeStrTemp[j] != ' ')
            {
                storeName[counter] = storeStrTemp[j];
            }
            //  this is number part - after whitespace found
            else if (whiteSpaceHit && storeStrTemp[j] != ' ')
            {
                storeNum[counter] = storeStrTemp[j];
            }
            counter++;
        }
        // null terms
        storeName[strlen(storeName) + 1] = '\0';
        storeNum[strlen(storeNum) + 1] = '\0';
        // zero the arrays
        memset(tempHashTable->word, 0, sizeof(tempHashTable->word));
        memset(tempHashTable->number, 0, sizeof(tempHashTable->number));
        strcpy(tempHashTable->word, storeName);
        strcpy(tempHashTable->number, storeNum);

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
        }
    }
    return true;
}
// HASH FUNCTION - https://www.reddit.com/r/cs50/comments/1x6vc8/pset6_trie_vs_hashtable/
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