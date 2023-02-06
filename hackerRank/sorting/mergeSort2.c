#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#define BUFFERSIZE 10


void printArr(int *intArr, int arrLen, char *name, int kill)
{
    printf("%s %s \n", "Print Array: ", name);
    arrLen = arrLen ? arrLen : 1; 
    for (size_t i= 0; i <arrLen-1; i++) 
    {
        printf("%i ", intArr[i]);

     }
    if(kill)
        exit(0);
    puts("");
}
void merge(int *intArr, int arrLen, int leftStart, int rightStart, int middle)
{
     
    int n1 = middle - leftStart + 1;
    int n2 = rightStart - middle;
    int leftCopy[n1+1];
    int rightCopy[n2+1];
    // printf("%s %i \n", "n1", n1);
    // printf("%s %i \n", "n2", n2);
    for (size_t j = 0; j < n1 ; j++) 
    {
        leftCopy[j] = intArr[leftStart+j];

    }
    for (size_t j = 0; j < n2; j++) 
    {
        rightCopy[j] = intArr[middle + 1 + j];
    }
    int i = 0; 
    int j = 0; 
    int k = leftStart; 
    while (i < n1 && j < n2) {
        
        if (leftCopy[i] <= rightCopy[j]) {
        

            intArr[k] = leftCopy[i];
            i++;
        }
        else {
            
            intArr[k] = rightCopy[j];
            j++;
        }
        k++;
    }
    /* Copy the remaining elements*/
        //    puts("HERE");
    while (i < n1) {
        intArr[k] = leftCopy[i];
        
        i++;
        k++;
    }
 
    /* Copy the remaining elements of R[], if there
    are any */
    while (j < n2) {
        intArr[k] = rightCopy[j];
        
        j++;
        k++;
    }
    printArr(intArr, arrLen, "intArr bottom", 0);
    
}
void mergeSort(int *intArr, int arrLen, int leftStart, int rightStart)
{
    if (leftStart < rightStart) {
            // Same as (l+r)/2, but avoids overflow for
            // large l and h
        int m = leftStart + (rightStart-leftStart) / 2;
           
            // printf("%s %i \n", "left", leftStart);
            // printf("%s %i \n", "right", rightStart);
            // printf("%s %i \n", "m", m);
            // // Sort first and second halves
        mergeSort(intArr,arrLen,leftStart, m);
        mergeSort(intArr,arrLen, m + 1, rightStart);
          
        merge(intArr, arrLen, leftStart, rightStart, m);
        
    }
}

void convertToInt(char **charArr, int charArrLen, int *intArr)
{
    // skip first element in array - due to STDIN on runner
    for (size_t k= 1; k <= charArrLen; k++) 
    {
        intArr[k-1] = atoi(charArr[k]);
     }
}
int main() {
//     char *text = calloc(1,1), buffer[BUFFERSIZE];
//     while( fgets(buffer, BUFFERSIZE , stdin) ) 
//     {
//     text = realloc( text, strlen(text)+1+strlen(buffer) );
//     strcat( text, buffer ); 
//     }
//     int fullLen = strlen(text);
//     char *p = strtok (text, "\n\t");
//     char *array[fullLen];
//     int i = 0;
//     while (p != NULL)
//     {
//         array[i++] = p;
//         p = strtok (NULL, " ");
//         // printf("%s \n", array[i-1]);
//     }
//     // printf("%s: %i\n", "i", str[i]);
// //     for (size_t j = 0; j < i; j++) 
// //     {
// //         printf("%s\n",array[j]);

// //     }
//     int half =  i/2;
//     int leftStart = 0;
//     int rightStart =  half;
    // char *array[] = {"38","27", "43"," 3", "9", "82", "10", "4", "7", "5", "6"};
    char *array[] = {"10","10", "1", "9",  "2", "8",  "3", "4", "7", "5", "6"};
    int arr_size = sizeof(array) / sizeof(array[0]);
    int *intArr = malloc(arr_size-1 * sizeof(int));
    convertToInt(array, arr_size-1, intArr);
   
    mergeSort(intArr, arr_size, 0, (arr_size-2));
  
    // printArr(intArr, arr_size, "intArr End", 0);
    return 0;
}