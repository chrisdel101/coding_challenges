#include <vector>
#include <iostream>

bool isValidWalk(std::vector<char> walk)
{
    int x = 0;
    int y = 0;
    int size = walk.size();
    if (size != 10)
    {
        return false;
    }
    for (size_t i = 0; i < size; i++)
    {
        switch (walk[i])
        {
        case 'n':
            y++;
            break;
        case 's':
            y--;
            break;
        case 'w':
            x++;
            break;
        case 'e':
            x--;
            break;
        default:
            break;
        }
    }
    return x == 0 && y == 0 ? true : false;
}

int main(void)
{
    std::vector<char> arr;
    arr.push_back('e');
    arr.push_back('w');
    arr.push_back('e');
    arr.push_back('w');
    arr.push_back('n');
    arr.push_back('s');
    arr.push_back('n');
    arr.push_back('s');
    arr.push_back('e');
    arr.push_back('w');
    std::cout << isValidWalk(arr) << std::endl;
}