#include <vector>
#include <iostream>

std::vector<int> tribonacci(std::vector<int> signature, int n)
{
    // if n less than array size
    if (n < signature.size())
    {
        std::vector<int> v;
        for (size_t i = 0; i < n; i++)
        {
            v.push_back(signature[i]);
        }
        return v;
        //    else if greater than array size
    }
    // assign temp array to current array
    std::vector<int> v = signature;
    int j = 0;
    // j is less than n minus the first three added on the first round
    while (j < (n - signature.size()))
    {
        int tempSum = 0;
        for (size_t i = j; i < j + 3; i++)
        {
            tempSum += v[i];
        }
        v.push_back(tempSum);
        j++;
    }
    return v;
}

int main(void)
{
    std::cout << "HELLO" << std::endl;
    std::vector<int> signature = {1, 2, 3};
    tribonacci(signature, 2);
}
//  function recursive(n) {
//     if(n <= 2) {
//         return 1;
//     } else {
//         return recursive(n - 1) + recursive(n - 2);
//     }
// };