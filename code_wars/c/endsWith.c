#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <stdio.h>

bool solution(const char *string, const char *ending);

int main(void) {

  // return 0;
    bool res = solution("aba", "");
    printf("res: %d\n", res);

}
bool solution(const char *str, const char *ending)
{

    // if both strs the same
    if(strcmp(str, ending) == 0){
        return true;
    } else if( ending == " "){
        puts("here");
        return true;
    }

    int endingLen = strlen(ending);
    int len = strlen(str);
    // start and loop until end to grab substring
    int indexToStart = len - strlen(ending);

    char* subStr = malloc(strlen(ending) + 1);
    if(indexToStart < 0){
        puts("error");
        return false;
    }
    for (int i = indexToStart, j = 0; i < len; i++, j++) {
        subStr[j] = str[i];
        // printf("%c\n", str[i]);
        // printf("len: %i\n");
        // printf("len: %i\n",strlen(ending)+1);
    }
    // subStr[strlen(subStr)+1] = '\0';

    // int size = sizeof(subStr)/sizeof(subStr[0]);
    // printf("%c\n", subStr[0]);
    // for (int i = 0; i < strlen(subStr); i++) {
        // printf("first: %c\n", subStr[i]);

    // }
    // while (*(subStr++)) {
    //             puts("hello");
    // }

    return strcmp(subStr,ending) == 0 ? true : false;

}
bool solution(const char *str, const char *ending)
{

    // start and loop until end to grab substring
    int indexToStart = strlen(str) - strlen(ending);
    // if both strs the same
    if(strcmp(str, ending) == 0){
        return true;
    } else if( ending == " "){
        puts("here");
        return true;
    } else if(indexToStart < 0){
        return false;
    }

    char* subStr = malloc(strlen(ending) + 1);
    for (int i = indexToStart, j = 0; i < strlen(str); i++, j++) {
        subStr[j] = str[i];

    }
    return strcmp(subStr,ending) == 0 ? true : false;
}
