#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
#include <ctype.h>

typedef struct pointsSet
{
    int start;
    int startIncrement;
    int end;
    int endIncrement;
    int startingRow;
} pointsSet;

pointsSet createPointsSet(int start, int end, int startingRow)
{
    pointsSet *new_set = malloc(sizeof(pointsSet));
    new_set->start = start;
    new_set->startIncrement = start;
    new_set->end = end;
    new_set->endIncrement = end;
    new_set->startingRow = startingRow;
    return *new_set;
}
void hourGlassSum(int *arr[6])
{
    pointsSet topRow = createPointsSet(0, 3, 0);
    pointsSet midRow = createPointsSet(1, 2, 1);
    pointsSet bottomRow = createPointsSet(0, 3, 2);
    int max = -1000;
    // k controls moving down a row
    for (size_t k = 0; k < 4; k++)
    {
        // loops over each group of three until the end of the row
        while (topRow.endIncrement <= 6)
        {
            int currentSum = 0;
            for (size_t i = topRow.startIncrement; i < topRow.endIncrement; i++)
            {
                currentSum += arr[topRow.startingRow][i];
            }
            topRow.startIncrement++;
            topRow.endIncrement++;
            for (size_t i = midRow.startIncrement; i < midRow.endIncrement; i++)
            {
                currentSum += arr[midRow.startingRow][i];
            }
            midRow.startIncrement++;
            midRow.endIncrement++;
            for (size_t i = bottomRow.startIncrement; i < bottomRow.endIncrement; i++)
            {
                currentSum += arr[bottomRow.startingRow][i];
            }
            bottomRow.startIncrement++;
            bottomRow.endIncrement++;
            // printf("SUM: %i\n", currentSum);

            if (currentSum > max)
                max = currentSum;
            // printf("\n");
            // printf("\n");
        }
        // printf("\n");
        topRow.startingRow++;
        midRow.startingRow++;
        bottomRow.startingRow++;

        topRow.startIncrement = topRow.start;
        topRow.endIncrement = topRow.end;
        midRow.startIncrement = midRow.start;
        midRow.endIncrement = midRow.end;
        bottomRow.startIncrement = bottomRow.start;
        bottomRow.endIncrement = bottomRow.end;
    }
    printf("%i\n", max);
}
int main(void)
{
    // https://www.cs.swarthmore.edu/~newhall/unixhelp/C_arrays.html
    int rNum = 6;
    int cNum = 6;
    // int physArr[6][6] = {
    //     {1, 1, 1, 0, 0, 0},
    //     {0, 1, 0, 0, 0, 0},
    //     {1, 1, 1, 0, 0, 0},
    //     {0, 0, 2, 4, 4, 0},
    //     {0, 0, 0, 2, 0, 0},
    //     {0, 0, 1, 2, 4, 0},
    // };
    int physArr[6][6] = {
        {-1, -1, 0, -9, -2, -2},
        {-2, -1, -6, -8, -2, -5},
        {-1, -1, -1, -2, -3 - 4},
        {-1, -9, -2, -4, -4, -5},
        {-7, -3, -3, -2, -9, -9},
        {-1, -3, -1, -2, -4, -5},
    };

    int *arrPtrs[rNum];
    for (size_t i = 0; i < rNum; i++)
    {
        arrPtrs[i] = (int *)malloc(cNum * sizeof(int));
        // printf("%i\n", *arrPtrs[i]);
    }
    int count = 0;
    for (size_t i = 0; i < rNum; i++)
        for (size_t j = 0; j < cNum; j++)
            arrPtrs[i][j] = physArr[i][j]; // Or *(*(arrPtrs+i)+j) = ++count

    // for (size_t i = 0; i < rNum; i++)
    //     for (size_t j = 0; j < cNum; j++)
    // printf("%d ", arrPtrs[i][j]);
    hourGlassSum(arrPtrs);
    return 0;
}
