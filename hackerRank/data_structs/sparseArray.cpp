#include <assert.h>
#include <ctype.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* readline();
char* ltrim(char*);
char* rtrim(char*);

int parse_int(char*);
typedef struct Node
{
    char* str;
    int count;
    struct Node *next;
} Node;

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

/*
 * To return the integer array from the function, you should:
 *     - Store the size of the array to be returned in the result_count variable
 *     - Allocate the array statically or dynamically
 *
 * For example,
 * int* return_integer_array_using_static_allocation(int* result_count) {
 *     *result_count = 5;
 *
 *     static int a[5] = {1, 2, 3, 4, 5};
 *
 *     return a;
 * }
 *
 * int* return_integer_array_using_dynamic_allocation(int* result_count) {
 *     *result_count = 5;
 *
 *     int *a = malloc(5 * sizeof(int));
 *
 *     for (int i = 0; i < 5; i++) {
 *         *(a + i) = i + 1;
 *     }
 *
 *     return a;
 * }
 *
 */
void display(Node *head)
{
    Node *start = head;
    while (start)
    {
        printf("%s %s  \n", "Display ", start->str);
        printf("%s %i  \n", "count ", start->count);
        start = start->next;
    }
}
int getCount(Node *head, char *str)
{
    if(head == NULL) return 0;
    Node *start = head;
    // printf("%s %s  \n", "HEAD1 ", start->str);
    // printf("%s %s  \n", "str ", str);
    // search for node in list
    while (start)
    {
        // when node found return count
        if(strcmp(start->str, str) == 0){
            // printf("%s %s \n", "found str", str);
            // printf("%s %i \n", "found count", start->count);
            return start->count;
        } 
        start = start->next;
    }
    return 0;
}

void *insert(Node *head, char *str)
{
    Node *p = (Node *)malloc(sizeof(Node));
    p->str = str;
    p->count = 1;
    p->next = NULL;

    if (head == NULL)
    {
        printf("%s %s ", "Head- insert ", str);
        head = p;
    }
    else
    {
        Node *start = head;
        while (start->next)
        {
            
            printf("%s %s \n", "**CHECKING** str ", str);
            printf("%s %s \n", "current Node ", start->str);
            printf("%s %i \n", "strcmp ", strcmp(start->str, str));
            if(strcmp(start->str, str) == 0){
                start->count++;
                printf("%s %s \n", "Dupe:  incremtent count of ", str);
                printf("%s %i \n", " to ", start->count);
                puts("\n");
                return head;

            } 
            else
            {
                start = start->next;
            }
        }
        if(start->str && !start->next){
            if(strcmp(start->str, str) == 0){
                start->count++;
                printf("%s %s \n", "END Dupe:  incremtent count of ", str);
                printf("%s %i \n", " to ", start->count);
                puts("\n");
                return head;

            } 
        //    printf("%s %s \n", "Final Node", start->str);
        }
        printf("%s %s \n", "Non-dupe. Insert into list", p->str);
        puts("\n");
        start->next = p;
    }
    return head;
}
int *matchingStrings(int stringList_count, char** stringList, int queries_count, char** queries, int* result_count) {
    // exit(0);
    Node *head = NULL;
    int *store = malloc(queries_count* sizeof(int));
    printf("%s %i \n", "stringList_count",stringList_count);
    // store stringList as Nodes in LL
    while (stringList_count)
    {
        // printf   ("%s %s \n", "adding stringList_count", stringList[stringList_count-1]);
        head = insert(head,stringList[stringList_count-1]);
        stringList_count--;
    }
    display(head);
    exit(0);
    while (queries_count)
    {
        printf("%s %s \n", "searching queries_count", queries[queries_count-1]);
        int count = getCount(head, queries[queries_count-1]);
        printf("%s %i \n", "found count", count);
        store[queries_count-1] = count;
        printf("%s %i \n", "index", queries_count-1);
        printf("%s %d \n", "STORE", store[queries_count-1]);
        queries_count--;
    }
    return store;
    // printf("%s %i \n", "stringList", stringList);
    // printf("%s %i \n", "queries_count", queries_count);
    // printf("%s %i \n", "queries", queries);
    // printf("%s %d \n", "result_count", result_count);

}

int main()
{
    FILE* fptr = fopen(getenv("OUTPUT_PATH"), "w");

    int stringList_count = 13;
    int queries_count = 5;
    int countArr[queries_count];

    char** stringList = malloc(stringList_count * sizeof(char*));
    char *stringsArr[] = {"abcde",

"sdaklfj",

"asdjf",

"na",

"basdn",

"sdaklfj",

"asdjf",

"na",

"asdjf",

"na",

"basdn",

"sdaklfj",

"asdjf"
};

    for (int i = 0; i < stringList_count; i++) {
        // char* stringList_item = readline();
        // printf("%s %s\n", "HERE", stringsArr[i]);
        stringList[i] = stringsArr[i];
    }

    char *queriesArr[] = {"abcde",

"sdaklfj",

"asdjf",

"na",

"basdn"};
    // for (size_t i = 0; i < 3; i++)
    // {
    //     printf("%s %s\n", "HERE", queriesArr[i]);
    // }
    
    // exit(0);

    char** queries = malloc(queries_count * sizeof(char*));

    for (int i = 0; i < queries_count; i++) {
        // char* queries_item = readline();
        queries[i] = queriesArr[i];
    }

    int res_count;
    int *countArr2 = matchingStrings(stringList_count, stringList, queries_count, queries, &res_count);

     printf("%s %i\n", "HERE", countArr2[0]);
     printf("%s %i\n", "HERE", countArr2[1]);
     printf("%s %i\n", "HERE", countArr2[2]);

    fclose(fptr);

    return 0;
}

char* readline() {
    size_t alloc_length = 1024;
    size_t data_length = 0;

    char* data = malloc(alloc_length);

    while (true) {
        char* cursor = data + data_length;
        char* line = fgets(cursor, alloc_length - data_length, stdin);

        if (!line) {
            break;
        }

        data_length += strlen(cursor);

        if (data_length < alloc_length - 1 || data[data_length - 1] == '\n') {
            break;
        }

        alloc_length <<= 1;

        data = realloc(data, alloc_length);

        if (!data) {
            data = '\0';

            break;
        }
    }

    if (data[data_length - 1] == '\n') {
        data[data_length - 1] = '\0';

        data = realloc(data, data_length);

        if (!data) {
            data = '\0';
        }
    } else {
        data = realloc(data, data_length + 1);

        if (!data) {
            data = '\0';
        } else {
            data[data_length] = '\0';
        }
    }

    return data;
}

char* ltrim(char* str) {
    if (!str) {
        return '\0';
    }

    if (!*str) {
        return str;
    }

    while (*str != '\0' && isspace(*str)) {
        str++;
    }

    return str;
}

char* rtrim(char* str) {
    if (!str) {
        return '\0';
    }

    if (!*str) {
        return str;
    }

    char* end = str + strlen(str) - 1;

    while (end >= str && isspace(*end)) {
        end--;
    }

    *(end + 1) = '\0';

    return str;
}

int parse_int(char* str) {
    char* endptr;
    int value = strtol(str, &endptr, 10);

    if (endptr == str || *endptr != '\0') {
        exit(EXIT_FAILURE);
    }

    return value;
}
