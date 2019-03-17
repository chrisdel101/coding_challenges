#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <stdio.h>
#include <math.h>

int distinctDigitYear(int year);


int main(void) {

  // return 0;
    int res = distinctDigitYear(1988);
    printf("res: %i\n", res);

}

int distinctDigitYear(int year) {
    // skip entered year
    year++;
    // len of digits
    int yearDigitsLen = (int)floor(log10 (abs (year))) + 1;
    int arr[yearDigitsLen];
     while(true){
         bool broken = false;
         // set arr to contain random vals
        int i = 0;
        while (i < yearDigitsLen) {
            arr[i] = rand();
            i++;
        }
        int j = 0;
        int tempYear = year;
        while (tempYear) {
            // last digit of year
            int digit = tempYear % 10;
            // loop over and check if there
            for (size_t i = 0; i < yearDigitsLen; i++) {
                if(digit == arr[i]){
                    broken = true;
                    break;
                }
            }
            // assign digit to arr
            arr[j] = digit;
            // slice off last digit of year
            tempYear /= 10;
            j++;
        }
        // if nothing matches return
        if(!broken){
            return year;
        }
     // reset arr contents
        memset(arr, 0, sizeof(arr));
    //     // increment year
        year++;
    }
    return(0);
}
