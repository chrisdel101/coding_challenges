#include <string>
#include <iostream>

std::string spinWords(const std::string &str)
{
    char storeArr[str.length() - 3];
    char storeArr2[str.length() - 3];
    size_t i = 0;
    for (; i < str.length(); i++)
    {
        if (i > 4)
        {

            // std::cout <  < str[i] << std::endl;
            storeArr[i] = str[i];
            // std::cout << storeArr[i] << std::endl;
        }
    }
    printf("\n");
    for (size_t j = 0; j < i; j++)
    {
        if (j < 4)
        {
        }
    }
    std::cout << storeArr[j] << std::endl;
    // std::cout << storeArr[i] << std::endl;
}
return "a";
}

int main()
{
    spinWords("Hey fellow warriors");
}