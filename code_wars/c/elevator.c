#include <stdio.h>

// int add(int a, int b);
const char* elevator(int left, int right, int call);

int main(void){
    elevator(rnd_L, rnd_R, rnd_C);
    printf("%s", elevator(rnd_L, rnd_R, rnd_C));
}

// int add(int a, int b){
//     int sum = a + b;
//     return sum;
// }
const char* elevator(int left, int right, int call) {
    // if both equal to return right
    if(left  == right){
        return "right";
        // if only left equal to call take left
    } else if(left == call && right != call){
        return "left";
    } else {
        return "right";
    }
}
