#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>


bool feast(const char* beast, const char* dish);
int main(void) {

  // return 0;
    bool res = feast("GREAT BLUE HERON", "garlic naan");
    printf("%d\n", res);

}

bool feast(const char* beast, const char* dish) {
    char* beastLower[strlen(beast)];
    char* dishLower[strlen(dish)];

    for (size_t i = 0; i < strlen(beast); i++) {
        char lower = tolower(beast[i]);
        beastLower[i] = lower;
    }
    for (size_t i = 0; i < strlen(dish); i++) {
        char lower = tolower(dish[i]);
        dishLower[i] = lower;
    }
    if(dishLower[0] == beastLower[0] && beastLower[strlen(beast)-1] ==  dishLower[strlen(dish)-1]){
        return true;
    }
    return false;
}
