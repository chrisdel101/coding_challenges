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
        rootLeft->left != NULL ||
        rootLeft->right != NULL ||
        rootRight->right != NULL ||
        rootRight->left != NULL)
    {

        // add root data on first pass
        if (
            rootLeft == rootStartCopy &&
            rootRight == rootStartCopy)
        {
            printf("root %i\n", root->data);
        }
        if (rootLeft->left)
        {
            if (rootLeft->left->left)
            {
                rootLeft = rootLeft->left;
                printf("left 1 %i\n", rootLeft->data);
            }
            else if (!rootLeft->left->left &&
                     rootLeft->left->right)
            {
                rootLeft = rootLeft->left;
                printf("left 2 %i\n", rootLeft->data);
            }
            else if (rootLeft->right &&
                     rootLeft->right->right)
            {
                // get data from left before shiting
                printf("left  3 %i\n", rootLeft->left->data);
                rootLeft = rootLeft->right;
                printf("left 4 %i\n", rootLeft->data);
            }
            else
            {
                if (rootLeft->right &&
                    !rootLeft->right->right)
                {
                    printf("left 5 %i\n", rootLeft->right->data);
                }
                rootLeft = rootLeft->left;
                printf("left 6 %i\n", rootLeft->data);
            }
        }
        else if (rootLeft->right &&
                 rootLeft != rootStartCopy)
        {
            rootLeft = rootLeft->right;
            printf("left  7 %i\n", rootLeft->data);
        }

        if (rootRight->right)
        {
            if (rootRight->right->right)
            {
                if (rootRight->left &&
                    rootRight != rootStartCopy)
                {
                }
                rootRight = rootRight->right;
                printf("right 1 %i\n", rootRight->data);
            }
            else if (!rootRight->right->right &&
                     rootRight->right->left)
            {
                rootRight = rootRight->right;
                printf("right 3 %i\n", rootRight->data);
            }
            else if (rootRight->left &&
                     rootRight->left->left)
            {
                // get data from left before shiting
                printf("right  4 %i\n", rootRight->right->data);
                rootRight = rootRight->left;
                printf("right 5 %i\n", rootRight->data);
            }
            else
            {
                if (rootRight->left &&
                    !rootRight->left->left)
                {
                    printf("right 6 %i\n", rootRight->left->data);
                }
                rootRight = rootRight->right;
                printf("right 7 %i\n", rootRight->data);
            }
        }
        else if (rootRight->left &&
                 rootRight != rootStartCopy)
        {
            rootRight = rootRight->right;
            printf("right 8 %i\n", rootRight->data);
        }
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