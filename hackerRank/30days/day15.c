#include <stdlib.h>
#include <stdio.h>
typedef struct Node
{
    int data;
    struct Node *next;
} Node;

Node *insert(Node *list, int data)
{
    Node *new_node = malloc(sizeof(Node));
    if (new_node == NULL)
    {
        exit(0); // no memory available
    }
    new_node->data = data;
    new_node->next = NULL;
    if (list == NULL)
    {
        list = new_node;
        return list;
    }

    Node *tempList = list;
    while (tempList->next != NULL)
        tempList = tempList->next;
    tempList->next = new_node;
    return list;
}
// insert node at front of list
// Node *insertRev(Node *head, int data)
// {
//     Node *new_node = malloc(sizeof(Node));
//     if (new_node == NULL)
//     {
//         exit(0); // no memory available
//     }
//     new_node->data = data;
//     new_node->next = head;
//     head = new_node;
//     return new_node;

void display(Node *head)
{
    Node *start = head;
    while (start)
    {
        printf("start %s\n ", start->data);
        start = start->next;
    }
}
int main()
{
    int T, data;
    scanf("%d", &T);
    Node *list = NULL;
    while (T-- > 0)
    {
        scanf("%d", &data);
        list = insert(list, data);
        // printf("head %i\n", head->data);
        // printf("head %i\n", head->next);
    }
    // display(list);
}
