#include <stdlib.h>
#include <stdio.h>
#include <string.h>
char* are_you_playing_banjo(const char* name);

int main(void) {
    char* str = are_you_playing_banjo("Martin");
    printf("%s\n", str );

}

char* are_you_playing_banjo(const char* name) {
    char firstLet = name[0];
    char buffer[50];
    char* addStr1 = " plays banjo";
    char* addStr2 = " does not play banjo";
    char* pointer = malloc(strlen(name) + strlen(addStr2) + 1);

    if((firstLet == 'R') == 1 || (firstLet == 'r') == 1){
        sprintf(pointer, "%s%s", name, addStr1);
    } else {
        sprintf(pointer, "%s%s", name, addStr2);
    }
    return(pointer);
}
