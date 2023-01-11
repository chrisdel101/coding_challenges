#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct Node
{
    struct Node *left;
    struct Node *right;
    int data;
} Node;

Node *newNode(int data)
{
    Node *node = (Node *)malloc(sizeof(Node));
    node->left = NULL;
    node->right = NULL;
    node->data = data;
    return node;
}
void depthFirst(Node *root)
{
    if (root == NULL)
    {
        exit(0);
    }
    int i = 0;
    Node *current = root;
    Node *arr = (Node *)malloc(10 * sizeof(Node));
    do
    {
        if (current->left)
        {
            arr[i] = *current;
            printf("%s %i \n", "Add current to stack", arr[i].data);
            Node *temp = current;
            // get next left pointer
            Node *nextLeft = current->left->left;
            // get next right pointer
            Node *nextRight = current->left->right;
            // assign next as current
            current = temp->left;
            // assign current new right
            current->right = nextRight;
            // assign current new left
            current->left = nextLeft;
            printf("%s %i \n", "Move current to left", current->data);
            if (current->left)
                printf("%s %i \n", "check current left", current->left->data);

            if (current->right)
                printf("%s %i \n", "check current right", current->right->data);
            i++;
        }
        else if (current->right)
        {
            if (current->data != root->data)
            {
                arr[i] = *current;
                printf("%s %i \n", "Add current to stack", arr[i].data);
            }
            Node *temp = current;
            // get next left pointer
            Node *nextLeft = current->right->left;
            // get next right pointer
            Node *nextRight = current->right->right;
            // assign next as current
            current = temp->right;
            // assign current new right
            current->right = nextRight;
            // assign current new left
            current->left = nextLeft;
            if (current->left)
                printf("%s %i \n", "check current left", current->left->data);

            if (current->right)
                printf("%s %i \n", "check current right", current->right->data);
            i++;
        }
        else
        {
            Node *temp = current;
            i--;
            // backtrack - assign to prev in stack
            current = &arr[i];
            printf("%s %i %s %i \n", "Backtrack", temp->data, " to ", current->data);
            // after backtrack, nullify previous left
            if (current->left && current->left->data == temp->data)
            {
                printf("%s %i \n", "nullify left", current->left->data);
                if (current->data == root->data)
                {
                    printf("%s %i \n", "nullify root left", root->left->data);
                    root->left = NULL;
                }
                current->left = NULL;
            }
            // after backtrack, nullify previous left
            else if (current->right && current->right->data == temp->data)
            {
                printf("%s %i \n", "nullify right", current->right->data);
                if (current->data == root->data)
                {
                    root->right = NULL;
                }
                current->right = NULL;
            }
        }
        // printf("%s %i \n", " right ", root->right->data);
        // printf("%i \n ", root->right != NULL);
    } while (i > 0 || (root->right != NULL || root->left != NULL));
    free(arr);
}
struct Qnode
{
    struct Qnode *next;
    Node node;
} QNode;

void enqueNode(Node *toAdd, struct Qnode **head)
{
    struct Qnode *newNode = (struct Qnode *)malloc(sizeof(struct Qnode));
    newNode->node = *toAdd;
    newNode->next = NULL;
    // handle first node in list
    if (*head == NULL)
    {
        *head = newNode;
        // printf("%s %i \n", "enqueNode: HEAD ", (*head)->node.data);
    }
    else
    {
        // loop until end of list and add new node
        struct Qnode *temp = *head;
        while(temp->next != NULL){
            // printf("%s %i \n", "looping thru nodes", temp->node.data);
            temp = temp->next;
        }
        temp->next = newNode;
        // printf("%s %i \n", "enqueNode: NODE", newNode->node.data);
    }
}
void dequeNode(struct Qnode **head)
{
    if( *head){
        printf("%s %i \n", "shift off head ",(*head)->node.data);
        // printf("%s %i \n", "shift off headXXX",(*head)->next);
    }
    *head = (*head)->next;
    // if( *head){
    //     printf("%s %i \n", "new head ",(*head)->node.data);
    // }
}
void breadthFirst(Node *root)
{

    if (root == NULL)
    {
        exit(0);
    }
    struct Qnode *head = NULL;
    enqueNode(root, &head);
    struct Qnode *endPostion = head;
    while(head != NULL){
        // add left of head to queue
        // printf("%s %i \n", "WHILE: current head  ", head->node.data);
        if (head->node.left)
        {
            // printf("%s %i \n", "while: head left ", head->node.left->data);
            enqueNode(head->node.left, &head);
        }
        // add right of head to queue 
        if (head->node.right)
        {
            // printf("%s %i \n", "while: head right  ",  head->node.right->data);
            // printf("%s %i \n", "head right", head->next->node.data);
                enqueNode(head->node.right, &head);
        }
        // remove first item in queue 
        dequeNode(&head);
        if(head &&  head->next)
            printf("%s %i \n\n", "HEAD  after ", head->node.data);
    }
}

Node *insert(Node *root, int data)
{
    if (root == NULL)
        return newNode(data);
    else
    {
        Node *cur;
        if (data <= root->data)
        {
            cur = insert(root->left, data);
            root->left = cur;
        }
        else
        {
            cur = insert(root->right, data);
            root->right = cur;
        }
    }
    return root;
}
int main(void)
{
    Node *root = NULL;
    int nodes[] = {10, 6, 11, 3, 7, 8, 4, 1, 9};

    int i = 0;
    while (i < 9)
    {
        root = insert(root, nodes[i]);
        i++;
    }
    printf("%s %i \n", "IN ", root->data);
    breadthFirst(root);
    return 0;
}