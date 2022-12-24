#include <string>
#include <iostream>
#include <ctype.h>

// "123 56 7"
std::string reverseWordsInPlace(const std::string &str)
{
    int index = 0;

    char arr[str.length() + 1];
    // each word count
    int k = 0;
    for (size_t i = 0; i < str.length(); i++)
    {
        // if next is space or end of line
        if (std::isspace(str[i + 1]) || i + 1 == str.length())
        {
            if (i + 1 == str.length())
            {
                // std::cout << "LAST" << std::endl;
            }
            // i marks end of each word
            // k marks start of each word
            // loop backwards from k to i
            int j = i;
            while (j > k || j == 0)
            {

                // std::cout << "i" << i << std::endl;
                // std::cout << "k" << k << std::endl;
                // std::cout << "j: " << j << " " << str[j] << std::endl;
                // std::cout << "letter: " << str[j] << std::endl;
                // if (j > 10)
                // {
                //     return "A";
                // }
                // std::cout << index << std::endl;
                // std::cout << j << std::endl;
                // std::cout << str[j] << std::endl;
                arr[index] = str[j];
                // std::cout << "letter: " << arr[index] << std::endl;
                // std::cout << "letter: " << arr[index] << std::endl;
                // k++;
                // if (k == 20)
                // {
                //     return "A";
                // }
                // std::cout << (j >= k) << std::endl;
                // std::cout << "k" << k << std::endl;
                // std::cout << "j" << j << std::endl;
                j--;
                index++;
            }
            // std::cout << "index: " << index << std::endl;
            // add blank space
            if ((i + 1 != str.length()))
            {
                arr[index] = ' ';
                index++;
            }
            // reassign k to new word start, after whitespace
            k = i + 1;
            // std::cout << std::endl;
        }
        // else if (i == str.length() - 1)
        // {
        //     std::cout << "END" << std::endl;
        // }
    }
    // std::cout << arr[2] << std::endl;
    for (size_t i = 0; i < str.length(); i++)
    {
        // std::cout << arr[i] << std::endl;
    }

    return arr;
}
std::string spinWords(const std::string &str)
{
    // std::cout << "len: " << str.length() << std::endl;

    std::string s = reverseWordsInPlace(str);
    char arr[str.length()];
    int k = 0;
    int wordLen = 0;
    // arrIndex
    int j = 0;
    for (size_t i = 0; i < str.length(); i++)
    {
        // std::cout << wordLen << std::endl;
        // std::cout << str[i] << std::endl;
        if (std::isspace(str[i + 1]) || i + 1 == str.length())
        {
            std::cout << "space" << std::endl;
            std::cout << "wordLen" << wordLen << std::endl;

            if (wordLen < 5)
            {
                // std::cout << "i" << i << std::endl;
                // std::cout << "k" << k << std::endl;
                while (k <= i)
                {
                    arr[j] = str[k];
                    // std::cout << str[k] << std::endl;

                    k++;
                    j++;
                };
            }
            else
            {
                std::cout << "i" << i << std::endl;
                std::cout << "k" << k << std::endl;
                std::cout << "j" << j << std::endl;
                while (k <= i)
                {
                    arr[j] = s[k];
                    // std::cout << arr[j] << std::endl;
                    k++;
                    j++;
                };
            }
            wordLen = 0;
        }
        wordLen++;
    }
    wordLen++;
    for (size_t i = 0; i < str.length(); i++)
    {
        // std::cout << arr[i] << std::endl;
    }
    return arr;
}

int main()
{
    // wollef
    std::string s = spinWords("to");
    // std::cout << "len: " << s.length() << std::endl;

    for (size_t i = 0; i < s.length(); i++)
    {
        std::cout << "i: " << i << std::endl;
        std::cout << s[i] << std::endl;
    }
}