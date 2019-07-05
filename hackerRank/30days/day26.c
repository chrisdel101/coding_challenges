#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int handleYear(int rYear, int dYear)
{
    if (dYear == rYear)
    {
        return 0;
    }
    else if (dYear < rYear)
    {
        return rYear - dYear;
    }   
    else
    {
        // return a year early
        return -1;
    }
}
int handleMonth(int rMonth, int dMonth)
{
    if (rMonth == dMonth)
    {
        return 0;
    }
    else if (dMonth < rMonth)
    {
        return rMonth - dMonth;
    }
    else
    {
        return 0;
    }
}
int handleDay(int rDay, int dDay)
{
    if (dDay == rDay)
    {
        return 0;
    }
    else if (dDay < rDay)
    {
        return rDay - dDay;
    }
    else
    {
        return 0;
    }
}
void helper(void)
{
    int rDay, rMonth, rYear;
    int dDay, dMonth, dYear;
    for (size_t i = 0; i < 2; i++)
    {
        if (i == 0)
        {
            scanf("%i %i %i", &rDay, &rMonth, &rYear);
        }
        else
        {
            scanf("%i %i %i", &dDay, &dMonth, &dYear);
        }
    }
    // printf("returned %i %i %i\n", rDay, rMonth, rYear);
    // printf("due %i %i %i\n", dDay, dMonth, dYear);
    // printf("vals %i %i %i\n",
    //        handleDay(rDay, dDay),
    //        handleMonth(rMonth, dMonth),
    //        handleYear(rYear, dYear));
    int hackos = 0;
    if (handleYear(rYear, dYear) > 0)
    {
        hackos +=  10000;
    } else if(handleYear(rYear, dYear) < 0){
        printf("%i\n", hackos);
        exit(1);
    }
    if (handleMonth(rMonth, dMonth) != 0 && 
        handleYear(rYear, dYear) == 0)
    {
        hackos += handleMonth(rMonth, dMonth) * 500;
    }
    if (handleDay(rDay, dDay) != 0 &&
        handleMonth(rMonth, dMonth) == 0 )
    {
        hackos += handleDay(rDay, dDay) * 15;
    }
    printf("%i\n", hackos);
}

int main(void)
{
    helper();
}