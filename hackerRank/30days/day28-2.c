#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <stdbool.h>
#define NAME_LENGTH 45
#define HASHTABLE_SIZE 65536
typedef struct Node
{
    char name[NAME_LENGTH];
    struct Node *next;

} Node;

Node *insertBefore(Node *list, char *inputName, Node *newNode)
{
    Node *tempList = list;
    // if 2 or more nodes go here
    // printf("Input name %s\n", inputName);
    // printf("check name %s\n", tempList->name);
    while (tempList->next != NULL)
    {
        // // check if matches current
        if (strcmp(tempList->name, inputName) > 0)
        {
            Node *tempNode = tempList;
            tempList = newNode;
            newNode->next = tempNode;
            // printf("end name %s\n", tempList->name);
            return tempList;
        }
        // {
        // }
        // else if (strcmp(tempList->next->name, insertBeforeName) == 0)
        // {
        //     Node *tempNext = tempList->next;
        //     tempList->next = newNode;
        //     newNode->next = tempNext;
        //     return tempList;
        // }
        tempList = tempList->next;
        // printf("looping %s\n", tempList->name);
        // if(temp)
    }
    // if there is only one node - check only first node
    if (strcmp(tempList->name, inputName) > 0)
    {
        Node *tempNode = tempList;
        tempList = newNode;
        newNode->next = tempNode;
        // printf("current %s\n", tempList->name);
        // printf("next %s\n", tempList->next->name);
        // printf("end name %s\n", tempList->name);
        return tempList;
    }
    // if (strcmp(tempList->name, insertBeforeName) == 0)
    // {
    //     // puts("one node");
    //     // printf("inputName %s\n", inputName);
    //     Node *tempNext = tempList; //null
    //     tempList = newNode;
    //     newNode->next = tempNext;
    //     return tempList;
    // }

    // printf("END END name %s\n", tempList->name);
    // puts("No change");
    return list;
    // }
}
Node *insertAfter(Node *head, char *name, Node *newNode)
{
    Node *tempList = head;
    while (tempList->next != NULL)
    {
        // puts("INSIDE\n");

        tempList = tempList->next;
        // printf("current %s\n", tempList->name);
    }
    tempList->next = newNode;
    return head;
}
Node *transverseAdd(Node *head, char *name)
{

    Node *tempList = head;
    Node *newNode = malloc(sizeof(Node));
    int length = 0;
    if (newNode == NULL)
    {
        exit(0);
    }
    strcpy(newNode->name, name);
    newNode->next = NULL;
    // empty list
    if (tempList == NULL)
    {
        tempList = newNode;
        return tempList;
    }
    else
    {

        tempList = insertBefore(head, name, newNode);
    }
    // printf("return name %s\n", tempList->name);
    if (tempList->name == head->name)
    {
        // puts("HERE");
        tempList = insertAfter(head, name, newNode);
    }
    return tempList;
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
void display(Node *head)
{
    Node *start = head;
    while (start)
    {
        printf("name %s\n ", start->name);
        start = start->next;
    }
}
int main(void)
{
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
            list = transverseAdd(list, name);
        }
        // display list
        // printf("head %s\n", list->name);
        // printf("head %i\n", head->next);
    }
    display(list);
}