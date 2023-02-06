int* quickSort(int arr_count, int* arr, int* result_count) {
    *result_count = arr_count;
    int *pivot = malloc(1 * sizeof(int));
    pivot[0] = arr[0];
    int *left = malloc(arr_count * sizeof(int));
    int *right = malloc(arr_count * sizeof(int));
    int leftIndex = 0;
    int rightIndex = 0;
    int *newArr = malloc(arr_count* sizeof(int));
    for(size_t i = 1;i<arr_count;i++)
    {
        if(arr[i]<pivot[0])
        {  
          left[leftIndex] = arr[i];
            leftIndex++;
        } 
        else 
        {
            right[rightIndex] = arr[i];
            rightIndex++;
        }
    }
    memcpy(newArr, left, leftIndex* sizeof(int));
    memcpy(newArr+leftIndex, pivot, sizeof(int));
     memcpy(newArr+leftIndex+1, right, rightIndex* sizeof(int));
    
    return newArr;
}