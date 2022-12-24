#include <iostream>
#include <string>
using namespace std;
class Node
{
public:
    Node *left;
    Node *right;
    int data;
    Node(int newData, Node *pointLeft, Node *pointRight)
    {
        data = newData;
        left = pointLeft;
        right = pointRight;
    }
};
class BST
{
public:
    Node *root = NULL;
    BST();
    void print()
    {
    }
    void insert(int data)
    {
        if (root == NULL)
        {
            // make new node
            Node newNode(data, NULL, NULL);
            // asign it to the root
            *root = newNode;
        }
        else
        {
            if (data < root->data)
            {
                if (root->left)
                {
                    cout << "LEFT" << endl;
                }
                else if (!root->left)
                {
                    cout << "NOT" << endl;
                }
            }
        }
    }
};

int main()
{
    BST b;
    b.insert(2);
    return 0;
}