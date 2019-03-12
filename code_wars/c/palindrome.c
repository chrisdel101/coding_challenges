#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <ctype.h>


int isPalindrom (const char *s);

int main(void){
    int res = isPalindrom("hello");
    printf("%i\n", res);
    printf("\n" );
}
int isPalindrom (const char *s)
{
    for (size_t i = 0; i < strlen(s); i++) {
    return tolower(s[i]) != tolower(s[(strlen(s)-1) - i]) ? 0 :  1;

    }
}
