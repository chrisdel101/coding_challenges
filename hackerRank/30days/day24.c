#include <stdio.h>
#include <string.h>
#include <stdlib.h>
typedef struct Node
{
    int data;
    struct Node *next;
} Node;

Node *insert(Node *head, int data);
static int cmpfunc(const void *a, const void *b)
{
    return (*(int *)a - *(int *)b);
}
Node *removeDuplicates(Node *head)
{
    int *arr = (int *)malloc(100);
    Node *start1 = head;
    int i = 0;
    while (start1)
    {
        // add all items to arr
        arr[i] = start1->data;
        start1 = start1->next;
        i++;
    }
    // sort the arr
    qsort(arr, i, sizeof(int), cmpfunc);
    Node *list = NULL;
    for (size_t j = 0; j < i; j++)
    {
        // REMOVE: loop over sorted - current v next as dupe
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
    printf("%s %d  \n", "HEAD ", head);
    while (start)
    {
        printf("%s %d  \n", "Display ", start->data);
        start = start->next;
    }
}
int main()
{
    Node *head = NULL;
    int nodes[] = {1, 2, 2, 3, 3, 4};
    int i = 0;
    while (i < 6)
    {
        head = insert(head, nodes[i]);
        i++;
    }
    head = removeDuplicates(head);
    puts("HERE");
    display(head);

}