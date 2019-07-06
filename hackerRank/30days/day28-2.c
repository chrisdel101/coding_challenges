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

Node *insertBefore(Node *list, char *inputName, char *insertBeforeName)
{

    Node *newNode = malloc(sizeof(Node));
    int length = 0;
    if (newNode == NULL)
    {
        exit(0);
    }
    strcpy(newNode->name, inputName);
    newNode->next = NULL;
    if (list == NULL)
    {
        // puts("insert first node");
        list = newNode;
        return list;
    }
    else
    {
        Node *tempList = list;
        // if 2 or more nodes go here
        while (tempList->next != NULL)
        {
            // printf("check next name %s\n", tempList->next->name);
            // printf("check name %s\n", tempList->name);
            // // check if matches current
            if (strcmp(tempList->name, insertBeforeName) == 0)
            {
                Node *tempNode = tempList;
                tempList = newNode;
                newNode->next = tempNode;
                return tempList;
            }
            else if (strcmp(tempList->next->name, insertBeforeName) == 0)
            {
                Node *tempNext = tempList->next;
                tempList->next = newNode;
                newNode->next = tempNext;
                return tempList;
            }
            tempList = tempList->next;
            // if(temp)
        }
        // if there is only one node - check only first node
        if (strcmp(tempList->name, insertBeforeName) == 0)
        {
            // puts("one node");
            // printf("inputName %s\n", inputName);
            // printf("check next name %s\n", tempList->name);
            Node *tempNext = tempList; //null
            tempList = newNode;
            newNode->next = tempNext;
            return tempList;
        }
        tempList->next = newNode;
        return list;
    }
    return 0;
}
Node *transverse(Node *head, char *name)
{

    Node *start = head;
    Node *newNode = malloc(sizeof(Node));
    int length = 0;
    if (newNode == NULL)
    {
        exit(0);
    }
    strcpy(newNode->name, name);
    newNode->next = NULL;
    // empty list
    if (start == NULL)
    {
        start = insertBefore(start, name, NULL);
        return start;
    }
    while (start->next != NULL)
    {
        puts("INSIDE\n");
        // list name is less than word insert name before
        if (strcmp(start->name, name) > 0)
        {
            // printf("start before %s\n", start->name);
            start = insertBefore(head, name, start->name);
            // printf("start after %s\n", start->name);
            return start;
        }
        printf("start %s\n ", start->name);
        start = start->next;
    }
    // if there is only one node - check only first node
    if (strcmp(start->name, name) == 0)
    {
        puts("BELOw\n");
        printf("last next %s\n", start->name);
        printf("new node %s", newNode->name);
        start->next = newNode;
        printf("insert at end %s\n", start->name);
        return start;
    }

    return start;
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
            list = transverse(list, name);
        }
        // display list
        // printf("head %i\n", head->data);
        // printf("head %i\n", head->next);
    }
    display(list);
}