#include <stdio.h>

// int add(int a, int b);
const char* elevator(int left, int right, int call);

int main(void){
    const char* str = elevator(1, 2, 0);
    printf("%s", str);
}

// int add(int a, int b){
//     int sum = a + b;
//     return sum;
// }
const char* elevator(int left, int right, int call) {
    //equal to return right
    if(left  == right){
        return "right";
        // if only left equal to call
    } else if(left == call && right != call){
        return "left";
        // call higher and left greater
    } else if(call > left > right){
        return "left";
        // call lower and left lower
    } else if((left < right) > call){
        return "left";
    } else {
        return "right";
    }
}
