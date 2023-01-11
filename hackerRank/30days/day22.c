#include <stdio.h>
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

int getHeight(Node *root)
{
    int rightCount = 0;
    int leftCount = 0;
    if (root == NULL)
    {
        return 0;
    }
    else
    {
        Node *trackRight = root;
        Node *trackLeft = root;
        while (
            trackRight->right || trackRight->left  || trackLeft->left   || 
            trackLeft->right
        )
        {
            if (trackRight->right)
            {
                Node *nextNode = trackRight->right->right != NULL ? trackRight->right->right : trackRight->right->left;

                trackRight = trackRight->right;

                trackRight->right = nextNode;
                
                rightCount++;
            }
            else if (trackRight->left)
            {
                Node *nextNode = trackRight->right->left != NULL ? trackRight->right->left : trackRight->right->right;
                trackRight = trackRight->left;
                trackRight->right = nextNode;
                rightCount++;
            }
            if (trackLeft->left)
            {
                Node *nextNode = trackLeft->left->left != NULL ? trackLeft->left->left : trackLeft->left->right;
                trackLeft = trackLeft->left;
                trackLeft->left = nextNode;
                leftCount++;
            }
            else if (trackLeft->right)
            {
                Node *nextNode = trackLeft->right->right != NULL ? trackLeft->right->right : trackLeft->right->left;
                trackLeft = trackLeft->right;
                trackLeft->right = nextNode;
                leftCount++;
            }
        }
    }
    // printf("%s %i \n", "here", rightCount > leftCount ? rightCount : leftCount);
    return rightCount >= leftCount ? rightCount : leftCount;
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
int main(int argc, char *argv[])
{
    Node *root = NULL;
    int nodes[] = {20,
                   50,
                   35,
                   44,
                   9,
                   15,
                   62,
                   11,
                   13};
    int i = 0;
    while (i < 9)
    {
        root = insert(root, nodes[i]);
        i++;
    }
    int height = getHeight(root);
    printf("%d", height);
    return 0;
}