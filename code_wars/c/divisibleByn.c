#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <stdbool.h>





bool isDivisible(int n, int x, int y);
int main(void) {

  // return 0;
    bool res = isDivisible(12, 4, 3);
    printf("%d\n", res);

}

bool isDivisible(int n, int x, int y) {
    return n % x == 0 && n % y ==0 ? true : false;
}
