#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>
typedef struct Node
{
    int data;
    struct Node *next;
} Node;

Node *insert(Node *head, int data);
int cmpfunc(const void *a, const void *b)
{
    return (*(int *)a - *(int *)b);
}
Node *removeDuplicates(Node *head)
{
    int *arr = malloc(100);
    Node *start1 = head;
    int i = 0;
    while (start1)
    {
        arr[i] = start1->data;
        start1 = start1->next;
        i++;
    }
    qsort(arr, i, sizeof(int), cmpfunc);
    Node *list = NULL;
    for (size_t j = 0; j < i; j++)
    {
        if (arr[j] != arr[j + 1])
        {
            list = insert(list, arr[j]);
        }
    }
    return list;
}
Node *insert(Node *head, int data)
{
    Node *p = (Node *)malloc(sizeof(Node));
    p->data = data;
    p->next = NULL;

    if (head == NULL)
    {
        head = p;
    }
    else if (head->next == NULL)
    {
        head->next = p;
    }
    else
    {
        Node *start = head;
        while (start->next != NULL)
            start = start->next;

        start->next = p;
    }
    return head;
}
void display(Node *head)
{
    Node *start = head;
    while (start)
    {
        printf("%d ", start->data);
        start = start->next;
    }
}
int main()
{
    int T, data;
    scanf("%d", &T);
    Node *head = NULL;
    while (T-- > 0)
    {
        scanf("%d", &data);
        head = insert(head, data);
    }
    head = removeDuplicates(head);
    display(head);
}