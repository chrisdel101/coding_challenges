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
    node->left = node->right = NULL;
    node->data = data;
    return node;
}

void levelOrder(Node *root)
{
    int rightCount = 0;
    int leftCount = 0;
    Node *tempRoot = root;
    int queueIndex = 0;

    // get count last
    int *arr = malloc(100);
    // push root
    arr[queueIndex] = root->data;
    queueIndex++;
    Node *rootStartCopy = root;
    Node *rootRight = root;
    Node *rootLeft = root;
    Node *tempLeft = root;
    Node *tempRight = root;

    while (
        rootLeft->left != NULL || rootLeft->right != NULL || rootRight->left != NULL || rootRight->right != NULL)
    {
        // add root data on first pass
        if (rootLeft == rootStartCopy && rootRight == rootStartCopy)
        {
            printf("root %i\n", root->data);
            arr[queueIndex] = root->data;
            queueIndex++;
        }
        //    roots moving to keep the while loop going
        if (rootLeft->left)
        {
            rootLeft = rootLeft->left;
            printf("rootLeft %i\n", rootLeft->data);
        }
        else if (rootLeft->right)
        {
            rootLeft = rootLeft->right;
            printf("rootLeft %i\n", rootLeft->data);
        }

        if (rootRight->right)
        {
            rootRight = rootRight->right;
            printf("rootRight %i\n", rootRight->data);
        }
        else if (rootLeft->left)
        {
            root = root->left;
            printf("rootRight %i\n", root->data);
        }
        // move temp within root

        // if (tempLeft != rootStartCopy &&
        //     tempLeft->left && tempLeft->right)
        // {
        //     printf("left top1 %i\n", tempLeft->left->data);
        //     printf("left top2 %i\n", tempLeft->right->data);

        //     arr[queueIndex] = tempLeft->left->data;
        //     arr[queueIndex] = tempLeft->right->data;
        //     queueIndex++;

        //     tempLeft = tempLeft->left;
        // }
        // else if (tempLeft->left)
        // {
        //     arr[queueIndex] = tempLeft->data;
        //     queueIndex++;
        //     tempLeft = tempLeft->left;
        //     printf("left mid %i\n", tempLeft->data);
        // }
        // else if (tempLeft->left == NULL && tempLeft->right)
        // {
        //     tempLeft = tempLeft->right;
        //     arr[queueIndex] = tempLeft->data;
        //     queueIndex++;
        //     printf("left bottom %i\n", tempLeft->data);
        // }

        // if (tempRight != rootStartCopy &&
        //     tempRight->left && tempRight->right)
        // {
        //     printf("right top1 %i\n", tempRight->left->data);
        //     printf("right top2 %i\n", tempRight->right->data);

        //     arr[queueIndex] = tempRight->left->data;
        //     arr[queueIndex] = tempRight->right->data;
        //     queueIndex++;

        //     tempRight = tempRight->left;
        // }
        // else if (tempRight->right)
        // {
        //     tempRight = tempRight->right;
        //     printf("right mid %i\n", tempRight->data);
        //     arr[queueIndex] = tempRight->data;
        //     queueIndex++;
        // }
        // else if (tempRight->left)
        // {
        //     tempRight = tempRight->left;
        //     printf("right bottom %i\n", tempRight->data);
        //     arr[queueIndex] = tempRight->data;
        //     queueIndex++;
        // }
        puts("HERE BOTTOM");
        // printf("left top %i\n", tempLeft->right->data);

        // if right exists, assign to right

        // if (tempRight->right)
        // {
        //     tempRight = tempRight->right;
        //     printf("right top %i\n", tempRight->data);
        // }
        // else
        // {
        //     tempRight = tempRight->left;
        //     printf("right botom %i\n", tempRight->data);
        // }

        // tempRight = tempRight->right;
        // printf("right %i\n", tempRight->data);
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
int main()
{
    Node *root = NULL;
    int T, data;
    scanf("%d", &T);
    while (T-- > 0)
    {
        scanf("%d", &data);
        root = insert(root, data);
    }
    levelOrder(root);
    return 0;
}