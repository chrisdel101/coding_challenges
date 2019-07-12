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

Node *transverseAdd(Node *head, char *name)
{
    Node *tempList = head;
    Node *newNode = malloc(sizeof(Node));
    Node *prevNode = NULL;
    int length = 0;
    if (newNode == NULL)
    {
        exit(0);
    }
    strcpy(newNode->name, name);
    newNode->next = NULL;
    // if empty list make first node
    if (tempList == NULL)
    {
        tempList = newNode;
        return tempList;
    }
    else
    {
        for (Node *node = head; node; node = node->next)
        {
            // check if current is greater than or equal to input
            // insert before
            if (strcmp(node->name, name) >= 0)
            {
                if (prevNode)
                {
                    prevNode->next = newNode;
                }
                newNode->next = node;
                // return head if first node
                if (node == head)
                {
                    return newNode;
                }
                // else return whereever it is
                else
                {
                    return head;
                }
            }
            prevNode = node;
        }
    }
    // track place in list
    tempList = head;
    // loop all the way to the end
    for (Node *node = head; node; node = node->next)
    {
        tempList = node;
    }
    // add at end
    tempList->next = newNode;
    return head;
}
bool emailChecker(char *name, char *email)
{
    char gmail[] = "@gmail";
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
        printf("output %s\n", start->name);
        start = start->next;
    }
    printf("\n");
}
int main(void)
{
    int T;
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
    }
    display(list);
}