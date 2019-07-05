#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <stdbool.h>
#define NAME_LENGTH 45
#define HASHTABLE_SIZE 65536

// char *outputArr(char *names)
// {
//     int j = 0;
//     const char delimiter[] = "\n";
//     char *token = strtok(names, delimiter);
//     while (token != NULL)
//     {
//         //   printf( "%s\n", token );
//         token = strtok(NULL, delimiter);
//         strcpy(arr[j], &token);
//     }
//     for (size_t i = 0; i < 5; i++)
//     {
//         // printf("%s\n", arr);
//     }
// }
typedef struct Node
{
    char name[NAME_LENGTH];
    struct Node *next;

} Node;

Node *insert(Node *list, char *inputName)
{
    Node *newNode = malloc(sizeof(Node));
    if (newNode == NULL)
    {
        exit(0);
    }
    strcpy(newNode->name, inputName);
    newNode->next = NULL;
    if (list == NULL)
    {
        list = newNode;
        return list;
    }
    else
    {
        Node *tempList = list;
        while (tempList->next != NULL)
        {
            tempList = tempList->next;
            printf("%s\n", tempList->name);
        }
        tempList->next = newNode;
        return list;
    }
    return 0;
}
bool emailChecker(char *name, char *email)
{
    char gmail[] = "gmail";
    if (strstr(email, gmail))
    {
        return true;
    }
    return false;
}
void transverse(Node *head, char *name)
{
    Node *start = head;
    while (start)
    {
        // list word is greater than name
        if (strcmp(start->name, name) <= 1)
        {
        }
        // printf("start %s\n ", start->name);
        start = start->next;
    }
}
int main(void)
{
    char *arr[6][2] = {
        {"riya", "riya@gmail.com"},
        {"julia", "julia@julia.me"},
        {"julia", "sjulia@gmail.com"},
        {"julia", "julia@gmail.com"},
        {"samantha", "samantha@gmail.com"},
        {"tanya", "tanya@gmail.com"}};
    int T, data;
    scanf("%d", &T);
    Node *list = NULL;
    char name[20];
    char email[50];
    while (T-- > 0)
    {
        memset(name, 0, sizeof(name));
        memset(email, 0, sizeof(email));
        scanf("%s %s", name, email);
        if (emailChecker(name, email))
        {
            puts("Hello");
            transverse(list, name);
        }

        // printf("head %i\n", head->data);
        // printf("head %i\n", head->next);
    }
}