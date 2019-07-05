#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
#include <ctype.h>

#define NAME_LENGTH 45
#define NUM_LENGTH 10
#define HASHTABLE_SIZE 65536
#define NOT_FOUND "Not found\n"
#define NOT_FOUND_LEN 11
int hashValue(const char *word);
void loadHashTable(void);
void checkHashTable(void);

typedef struct node
{
    char name[NAME_LENGTH + 1];
    int number;
    struct node *next;
} node;
// set hash table to const size, at null
node *hash_table[HASHTABLE_SIZE] = {NULL};

int main(void)
{
    // printf("s %i\n", strlen(NOT_FOUND));
    loadHashTable();
    checkHashTable();
    return 0;
}
node *createNode(char *name, int number)
{
    node *new_node = malloc(sizeof(node));
    strcpy(new_node->name, name);
    new_node->number = number;
    return (new_node);
}
void checkHashTable(void)
{
    int outputMallocedSpace = 0;
    char *tempWord = malloc(NAME_LENGTH);
    char *output = malloc(0);
    // puts("Enter name to check: ");
    int j = 0;
    bool pinnedToOutput = false;
    node *head = NULL;
    node *tail;
    bool firstRun = false;
    while (scanf("%s", tempWord) == 1)
    {
        if (head == NULL)
        {
            head = createNode(tempWord, 0);
            tail = head;
            // printf("top %s\n", head->name);
            // printf("next %s\n", head->next);
        }
        else
        {
            node *new_node = createNode(tempWord, 0);
            tail->next = new_node;
            tail = tail->next;
            // new_node->next = head;

            // tempHead = tempHead->next;
            // tempHead = createNode(tempWord, 0);
            // printf("bottom %s\n", tempHead->name);
        }
    }
    while (head != NULL)
    {
        bool found = false;
        // printf("size: %i\n", strlen(output));
        int hash_index = hashValue(head->name);
        // printf("hash %i\n", hash_index);
        node *cursor = hash_table[hash_index];
        // node *cursor = head;
        // printf("name %s\n", cursor->name);
        // if null not there - go onto to next word
        if (cursor == NULL)
        {
            printf("%s", NOT_FOUND);
            head = head->next;
            continue;
        }
        while (cursor != NULL)
        {
            if (strcmp(head->name, cursor->name) == 0)
            {
                char *tempOutputStore = calloc(NAME_LENGTH, sizeof(char));

                sprintf(tempOutputStore, "%s=%d\n", cursor->name, cursor->number);
                printf("%s", tempOutputStore);

                free(tempOutputStore);
                found = true;
                break;
            }
            cursor = cursor->next;
        }
        if (!found)
        {
            printf("%s", NOT_FOUND);
        }
        // move cursor to where head-> next points
        head = head->next;
        // }
        // if (wordFound)
        //     continue;

        // if (!pinnedToOutput)
        // {
        //     outputMallocedSpace += NOT_FOUND_LEN;
        //     output = realloc(output, outputMallocedSpace);

        //     strcpy(output, NOT_FOUND);
        // }
        // else if (pinnedToOutput)
        // {
        //     outputMallocedSpace += NOT_FOUND_LEN;
        //     output = realloc(output, outputMallocedSpace);
        //     strcat(output, NOT_FOUND);
        // }
    }
    // return true;
}
void loadHashTable(void)
{
    int count;
    // puts("Enter count: ");
    scanf("%i", &count);

    for (size_t i = 0; i < count; i++)
    {
        // puts("Enter name and number");
        char nameTemp[NAME_LENGTH];
        int numTemp;
        scanf("%s %d", nameTemp, &numTemp);

        node *newNode = createNode(nameTemp, numTemp);
        int hash_index = hashValue(nameTemp);

        if (hash_table[hash_index] == NULL)
        {
            // insert node at head of linked list
            // same as head = mem
            hash_table[hash_index] = newNode;
            newNode->next = NULL;
            // count++;
            // printf("%s\n", newNode->name);
            // printf("%i\n", newNode->number);
        }
        else
        {
            newNode->next = hash_table[hash_index];
            // reassign head to new node
            hash_table[hash_index] = newNode;
            // printf("%s\n", newNode->name);
            // printf("%i\n", newNode->number);
        }
    }
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