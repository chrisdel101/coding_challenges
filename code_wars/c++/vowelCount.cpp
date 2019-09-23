#include <string>
#include <iostream>

using namespace std;

int getCount(const string &inputStr)
{
    int num_vowels = 0;
    int len = inputStr.length();
    for (size_t i = 0; i < len; i++)
    {
        // std::cout << inputStr[i] << std::endl;
        char inputChar = tolower(inputStr[i]);
        if (inputChar == 'a' ||
            inputChar == 'e' ||
            inputChar == 'i' ||
            inputChar == 'o' ||
            inputChar == 'u')
        {
            num_vowels++;
        }
    }

    return num_vowels;
}

int main(void)
{
    std::cout << getCount("abracadabra") << std::endl;
}